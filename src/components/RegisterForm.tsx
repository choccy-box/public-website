import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { cn } from './ui/utils';

interface FormData {
  name: string;
  email: string;
}

interface RegisterFormProps {
  className?: string;
  onSuccess?: () => void;
}

// Cloudflare Turnstile site key - replace with your own from https://dash.cloudflare.com/
// For testing, you can use: '1x00000000000000000000AA' (always passes) or '2x00000000000000000000AB' (always blocks)
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';

export function RegisterForm({ className, onSuccess }: RegisterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm<FormData>({
    mode: 'all', // Validate on blur, change, and submit
    reValidateMode: 'onChange', // Re-validate on change after first validation
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    // Validate Turnstile token
    if (!turnstileToken) {
      setError('Please complete the security verification.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'interest',
          ...data,
          'cf-turnstile-response': turnstileToken,
        }).toString(),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Track successful submission
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'form',
          event_label: 'register_interest'
        });
      }

      setIsSuccess(true);
      reset();
      setTurnstileToken(null);
      // Reset Turnstile widget
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
      if (onSuccess) {
        // Delay closing to show success message briefly if desired, or let the parent handle it
        setTimeout(onSuccess, 2000);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Something went wrong. Please try again.');
      // Reset Turnstile on error so user can retry
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
      setTurnstileToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={cn("bg-sage/10 border-2 border-sage rounded-2xl p-8 text-center animate-slide-up", className)}>
        <div className="w-16 h-16 bg-gradient-sage rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-charcoal mb-3">You're on the list!</h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          Thanks for your interest. We'll be in touch soon with updates.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-sage font-bold hover:text-sage-dark transition-colors"
        >
          Register another email
        </button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className={cn("w-full space-y-4", className)}
      name="interest"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="interest" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Jane Doe"
          className={cn(
            errors.name && "border-coral focus-visible:ring-coral"
          )}
          {...register('name', { 
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters'
            },
            maxLength: {
              value: 100,
              message: 'Name must be less than 100 characters'
            },
            pattern: {
              value: /^[a-zA-Z\s'-]+$/,
              message: 'Name can only contain letters, spaces, hyphens, and apostrophes'
            }
          })}
        />
        {errors.name && (
          <p className="text-sm text-coral font-medium animate-in fade-in-0">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="jane@example.com"
          className={cn(
            errors.email && "border-coral focus-visible:ring-coral"
          )}
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address"
            },
            maxLength: {
              value: 254,
              message: 'Email address is too long'
            },
            validate: {
              noSpaces: (value) => 
                !/\s/.test(value) || 'Email address cannot contain spaces',
              validDomain: (value) => {
                const domain = value.split('@')[1];
                return domain && domain.includes('.') || 'Please enter a valid email address';
              }
            }
          })}
        />
        {errors.email && (
          <p className="text-sm text-coral font-medium animate-in fade-in-0">{errors.email.message}</p>
        )}
      </div>

      {error && (
        <p className="text-sm text-coral font-medium text-center">{error}</p>
      )}

      <div className="flex justify-center">
        <Turnstile
          ref={turnstileRef}
          siteKey={TURNSTILE_SITE_KEY}
          onSuccess={(token) => setTurnstileToken(token)}
          onError={() => {
            setTurnstileToken(null);
            setError('Security verification failed. Please try again.');
          }}
          onExpire={() => {
            setTurnstileToken(null);
          }}
          options={{
            theme: 'light',
            size: 'normal',
          }}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-sage text-white font-bold py-3 px-6 rounded-full refined-shadow hover:refined-shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        disabled={isSubmitting || !turnstileToken}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Signing up...</span>
          </>
        ) : (
          'Join the Waitlist'
        )}
      </button>
      
      <p className="text-xs text-center text-gray-500 mt-4">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
}
