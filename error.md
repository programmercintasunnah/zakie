15:41:35.365 Running build in Washington, D.C., USA (East) – iad1
15:41:35.366 Build machine configuration: 2 cores, 8 GB
15:41:35.534 Cloning github.com/programmercintasunnah/zakie (Branch: main, Commit: e3505e5)
15:41:35.536 Previous build caches not available.
15:41:36.191 Cloning completed: 657.000ms
15:41:36.773 Running "vercel build"
15:41:36.787 Vercel CLI 64.3.1
15:41:37.665 Warning: Detected "engines": { "node": ">=20.19" } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: https://vercel.link/node-version
15:41:37.691 Installing dependencies...
15:41:38.474 npm warn Unknown env config "cache-dir". This will stop working in the next major version of npm. See `npm help npmrc` for supported config options.
15:41:39.258 npm error code ERESOLVE
15:41:39.258 npm error ERESOLVE could not resolve
15:41:39.258 npm error
15:41:39.261 npm error While resolving: @eslint/js@10.0.1
15:41:39.262 npm error Found: eslint@9.39.5
15:41:39.262 npm error node_modules/eslint
15:41:39.262 npm error   dev eslint@"^9.39.5" from the root project
15:41:39.262 npm error   peer eslint@"^6.0.0 || ^7.0.0 || >=8.0.0" from @eslint-community/eslint-utils@4.10.1
15:41:39.263 npm error   node_modules/@eslint-community/eslint-utils
15:41:39.263 npm error     @eslint-community/eslint-utils@"^4.8.0" from eslint@9.39.5
15:41:39.263 npm error   3 more (eslint-config-prettier, eslint-plugin-react, eslint-plugin-react-hooks)
15:41:39.263 npm error
15:41:39.263 npm error Could not resolve dependency:
15:41:39.263 npm error peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
15:41:39.263 npm error node_modules/@eslint/js
15:41:39.263 npm error   dev @eslint/js@"^10.0.1" from the root project
15:41:39.264 npm error
15:41:39.264 npm error Conflicting peer dependency: eslint@10.13.0
15:41:39.264 npm error node_modules/eslint
15:41:39.264 npm error   peerOptional eslint@"^10.0.0" from @eslint/js@10.0.1
15:41:39.264 npm error   node_modules/@eslint/js
15:41:39.264 npm error     dev @eslint/js@"^10.0.1" from the root project
15:41:39.264 npm error
15:41:39.265 npm error Fix the upstream dependency conflict, or retry this command with --force or --legacy-peer-deps to accept an incorrect (and potentially broken) dependency resolution.
15:41:39.265 npm error
15:41:39.265 npm error
15:41:39.265 npm error For a full report see:
15:41:39.265 npm error /vercel/.npm/_logs/2026-10-20T08_41_37_884Z-eresolve-report.txt
15:41:39.265 npm notice
15:41:39.265 npm notice New major version of npm available! 11.19.0 -> 12.2.0
15:41:39.265 npm notice Changelog: https://github.com/npm/cli/releases/tag/v12.2.0
15:41:39.265 npm notice To update run: npm install -g npm@12.2.0
15:41:39.265 npm notice
15:41:39.266 npm error A complete log of this run can be found in: /vercel/.npm/_logs/2026-10-20T08_41_37_884Z-debug-0.log
15:41:39.303 Error: [BUILD_UTILS_SPAWN_1] Command "npm install" exited with 1