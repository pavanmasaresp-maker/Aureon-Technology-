# Aureon Technologies Website

A responsive, static company website ready for GitHub Pages.

## Files
- `index.html` — main website
- `style.css` — responsive styling
- `script.js` — mobile navigation, year, enquiry form
- `assets/favicon.svg` — favicon

## Demo projects (`projects/`)
- `projects/chat-demo` - AI assistant chat UI (canned replies, ready for an API)
- `projects/quote-calculator` - price estimate with WhatsApp send
- `projects/task-board` - saves tasks in the browser
Open `projects/index.html` to see all three.

## GitHub Pages deployment
1. Create a GitHub repository, for example `aureon-technologies`.
2. Upload all files from this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. GitHub will provide your `github.io` website address.

## Before launch
Replace:
- `91XXXXXXXXXX` with your WhatsApp number (in `index.html` and `projects/quote-calculator/index.html`)
- `hello@aureontechnologies.com`
- Product descriptions/statuses
- Portfolio cards with real project links/screenshots
- Pricing if your actual pricing differs

The enquiry form currently opens the visitor's email client. For direct form submissions without email-client dependency, connect Formspree, FormSubmit, or a custom backend.
