# Generated GitHub Pages repository

This repository contains the deployed output for the portfolio. The editable React/Vite source lives in the sibling `../new_site` repository. Make website changes there, run `npm run build`, and copy the resulting `dist/` contents here.

When synchronizing a build, delete obsolete generated files but preserve this repository's `.git`, `.gitignore`, `.nojekyll`, `AGENTS.md`, `README.md`, and `error_pages/`. From `../new_site`, use:

```sh
rsync -a --delete \
  --exclude='.git/' \
  --exclude='.gitignore' \
  --exclude='.nojekyll' \
  --exclude='AGENTS.md' \
  --exclude='README.md' \
  --exclude='error_pages/' \
  dist/ ../swangarch/
```

Do not edit hashed files under `assets/` or the generated `index.html` by hand. After synchronization, verify `git status --short` and `git diff --check`, then commit and push this repository after the corresponding source commit has been pushed.
