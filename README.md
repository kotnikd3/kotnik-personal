# www.kotnik.si
A Vue.js personal website.

## About the project
My personal web page build with Vue.js 3 and Bulma.  
Free to use.

## Update node on MacOS
```
brew update
```

## Update npm
```
npm install -g npm@latest
```

## Update packages
```sh
# Check for updates
ncu
# Update packages by modifying package.json
ncu -u
# Install new packages
npm install
```

## Project setup
```sh
npm install
```

### Compiles and hot-reloads for development
```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

The production build uses `vite-prerender-plugin` and Vue's server renderer to
generate complete HTML for `/` (Slovenian) and `/en/` (English). The browser
hydrates the same language selected by the URL. Language links also work without
JavaScript; no Vue Router or runtime rendering server is needed.

Each page has its own language, title, description, canonical URL, reciprocal
`hreflang` links, Open Graph tags, and `ProfilePage`/`Person` structured data.
Metadata is defined in `src/prerender.js`; page copy remains in `src/locales/`.
Update `public/sitemap.xml` if another indexable page is added.

### Cloudflare Pages

Keep the existing Git-triggered build workflow:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 22.18.0 or newer supported by `package.json` (`.node-version` selects 22)
- Package registry: public npm, configured in `.npmrc`

No browser installation, server-side runtime, or Pages Functions are required.
Cloudflare serves the generated `index.html` and `en/index.html` directly.
If the dashboard explicitly overrides the Node version, align it with this
repository's requirement.

To inspect the production output locally:

```sh
npm run preview
```


### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
