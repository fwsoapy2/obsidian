# Obsidian Static Website

A complete static website project for GitHub Pages. No backend, no build step, no framework required.

## Included routes

- `/`
- `/fw/`
- `/fw/eb/`
- `/fw/ebv/`
- `/fw/sebv/`
- `/woof/`
- `/woof/t/`
- `/woof/p/`
- `/cheese/`
- `/cheese/r/`
- `/cheese/f/`
- `/cheese/v/`

## Quick upload steps for GitHub Pages

1. Download and unzip this project.
2. Create a GitHub repository, or open the one you want to use.
3. Upload **all files and folders** from this project to the root of the repository.
4. In GitHub, open **Settings** for the repository.
5. Open **Pages** in the left sidebar.
6. Under **Build and deployment**, set:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
7. Save the settings.
8. Wait for GitHub Pages to publish the site.
9. Open the Pages URL GitHub shows you.

## Notes

- This project uses folder based routes with `index.html` files so internal pages work correctly on GitHub Pages.
- All internal links are relative, which keeps routing safe whether you host at a custom domain or a GitHub Pages repository URL.
- Shared styling lives in `assets/css/style.css`.
- Shared interactions live in `assets/js/main.js`.

## Main files

- `index.html`
- `fw/index.html`
- `fw/eb/index.html`
- `fw/ebv/index.html`
- `fw/sebv/index.html`
- `woof/index.html`
- `woof/t/index.html`
- `woof/p/index.html`
- `cheese/index.html`
- `cheese/r/index.html`
- `cheese/f/index.html`
- `cheese/v/index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/img/favicon.svg`

## Customization tips

- Update text and pricing directly in the route HTML files.
- Adjust colors and glass styling in `assets/css/style.css`.
- Adjust motion and interactions in `assets/js/main.js`.
