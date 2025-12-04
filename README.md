# Choccy Box

This is a code bundle for Choccy Box. The original project is available at https://www.figma.com/design/YXPZcpjQBcZChQfq61FEJs/Choccy-Box.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

Run `npm run build` to build for production.

## Deploying to Netlify

### Option 1: Deploy via Netlify UI

1. Push this repository to GitHub, GitLab, or Bitbucket
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git provider and select this repository
5. Netlify will automatically detect the build settings from `netlify.toml`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run `netlify login` to authenticate
3. Run `netlify init` to link your site
4. Run `netlify deploy --prod` to deploy

The site is optimized with:
- Code splitting (React vendor chunks, UI vendor chunks)
- Terser minification with console/debugger removal
- Optimized image loading with proper sizing
- Security headers and long-term caching for assets
- SEO meta tags and social sharing tags
