# Lead Predictor LC

Small client-side lead-prediction demo built with plain HTML, CSS and JavaScript.

## Project Overview

Lead Predictor LC is a lightweight front-end project demonstrating a simple lead scoring/prediction UI. It is implemented as a static site so it can be run locally or hosted on any static-file hosting service.

## Features
- Small, dependency-free front-end app
- Single-page UI served from `index.html`
- Core logic and UI interactions in `app.js`
- Styling in `styles.css`

## Prerequisites
- A modern web browser (Chrome, Edge, Firefox, Safari)
- Optional: Node.js (for a local static server) or Python (for quick local hosting)

## Quick Start

Option A — Open in browser

1. Open [index.html](index.html) directly in your browser (double-click or use "Open File").

Option B — Serve locally with Node.js (recommended during development)

1. If you don't have a static server installed, install `serve` globally:

```
npm install -g serve
```

2. Start the server from the project root:

```
serve .
```

3. Follow the local URL printed by `serve` (usually http://localhost:5000).

Option C — Quick Python server

For Python 3.x run:

```
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Usage

- Interact with the UI in `index.html` to enter lead data and view predictions.
- `app.js` contains the logic that reads the form, runs the prediction algorithm, and updates the DOM with results.
- `styles.css` contains the layout and visual styling rules.

## Project Structure

- `index.html`: Single-page entry point and UI markup.
- `app.js`: Application logic, event handlers, and prediction code.
- `styles.css`: Styles used by the app.
- `readme.md`: This documentation.

## How it Works (high level)

1. The user enters lead information in the form on `index.html`.
2. `app.js` validates input and computes a score or prediction using an internal function.
3. The UI is updated to show the predicted lead quality or suggested next steps.

Adjust `app.js` to integrate with a server or ML model if you want to replace the demo logic with a real predictor.

## Development Tips
- Make iterative edits to `app.js` and `styles.css` and refresh the browser to see changes.
- Use a local static server (see Quick Start) to avoid browser CORS/file restrictions.
- If you add third-party packages, create a `package.json` and document install steps here.

## Testing

This project does not include automated tests. For small UI projects consider adding:
- Unit tests for pure JS functions using Jest or similar.
- End-to-end tests with Playwright or Cypress for user flows.

## Deployment

Because this is a static site, deployment options include GitHub Pages, Netlify, Vercel, or any static web host. Simply publish the project root as the site root.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repo and create a feature branch.
2. Make changes and test locally.
3. Open a pull request describing the change.

Please include a short description of any new dependencies and update this README with run instructions.

## Troubleshooting
- If the page doesn't load, ensure you opened the correct file: [index.html](index.html).
- If scripts don't run, open the browser console to check for errors and the network panel to confirm `app.js` is loaded.

## License

Add a license file if you intend to make this project public. Common choices: MIT, Apache-2.0.

## Contact

For questions about this project, contact the project owner or add an issue in the repo.
