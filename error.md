15:51:51.952 Running build in Washington, D.C., USA (East) – iad1
15:51:51.953 Build machine configuration: 2 cores, 8 GB
15:51:52.096 Cloning github.com/programmercintasunnah/zakie (Branch: main, Commit: 97d331d)
15:51:52.098 Previous build caches not available.
15:51:52.707 Cloning completed: 611.000ms
15:51:53.242 Running "vercel build"
15:51:53.256 Vercel CLI 64.3.1
15:51:54.106 Warning: Detected "engines": { "node": ">=20.19" } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: https://vercel.link/node-version
15:51:54.126 Installing dependencies...
15:51:54.913 npm warn Unknown env config "cache-dir". This will stop working in the next major version of npm. See `npm help npmrc` for supported config options.
15:52:01.271 npm warn deprecated glob@11.1.0: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
15:52:03.201 npm warn deprecated eslint@9.39.5: This version is no longer supported. Please see https://eslint.org/version-support for other options.
15:52:04.746 
15:52:04.746 added 614 packages in 10s
15:52:04.747 
15:52:04.747 169 packages are looking for funding
15:52:04.747   run `npm fund` for details
15:52:04.748 npm warn install-scripts 1 package has install scripts not yet covered by allowScripts:
15:52:04.749 npm warn install-scripts   esbuild@0.28.2 (postinstall: node install.js)
15:52:04.749 npm warn install-scripts
15:52:04.749 npm warn install-scripts Run `npm install-scripts ls` to review, or `npm install-scripts approve <pkg>` to allow.
15:52:04.751 npm notice
15:52:04.752 npm notice New major version of npm available! 11.19.0 -> 12.2.0
15:52:04.752 npm notice Changelog: https://github.com/npm/cli/releases/tag/v12.2.0
15:52:04.752 npm notice To update run: npm install -g npm@12.2.0
15:52:04.752 npm notice
15:52:04.848 Running "npm run build"
15:52:04.979 npm warn Unknown env config "cache-dir". This will stop working in the next major version of npm. See `npm help npmrc` for supported config options.
15:52:05.003 
15:52:05.003 > zakie-portfolio@1.0.0 build
15:52:05.004 > vite build && node scripts/prerender.mjs
15:52:05.004 
15:52:05.369 vite v7.3.7 building client environment for production...
15:52:05.852 transforming...
15:52:08.140 ✓ 55 modules transformed.
15:52:08.417 rendering chunks...
15:52:08.425 computing gzip size...
15:52:08.486 dist/index.html                   5.55 kB │ gzip:  1.71 kB
15:52:08.486 dist/assets/index-BrtpjYv5.css   30.82 kB │ gzip:  5.90 kB
15:52:08.490 dist/assets/index-CC0uN_ih.js   250.75 kB │ gzip: 81.75 kB
15:52:08.490 ✓ built in 3.06s
15:52:12.375 
15:52:12.375 PWA v2.0.0
15:52:12.375 mode      generateSW
15:52:12.375 precache  8 entries (322.89 KiB)
15:52:12.375 files generated
15:52:12.375   dist/sw.js
15:52:12.375   dist/workbox-dcde9eb3.js
15:52:14.060 Prerendered index.html (61.6 kB)
15:52:14.288 Error: [STATIC_BUILD_NO_OUT_DIR] No Output Directory named "build" found after the Build completed. Configure the Output Directory in your Project Settings. Alternatively, configure vercel.json#outputDirectory.
15:52:14.288 Learn More: https://vercel.link/missing-public-directory