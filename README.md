# Mind Timer Web App

A personal JavaScript and Express learning project: a simple browser meditation timer with start, pause and reset controls.

## Current behavior

- Home page at `/` and timer page at `/timer`.
- The timer counts elapsed time upward and displays minutes and seconds.
- Start begins counting, pause keeps the elapsed value, and reset returns it to zero.
- The start control is disabled while running to prevent multiple timer intervals.

## Run locally

Requires Node.js and npm. From the repository root:

```bash
npm ci
node index.js
```

Open `http://localhost:3000/timer`. Stop the server with Ctrl+C. Run it from the repository root because the standalone entrypoint serves the relative `public/` directory.

`index.js` is the entrypoint for the HTML timer demo described here. The repository also retains an older Express/Jade scaffold (`app.js`, `bin/www`); `npm start` currently selects that scaffold, so it is not the command for this timer demo.

## Repository map

- `index.js`: standalone server and HTML routes.
- `views/index.html`, `views/timer.html`: browser pages.
- `public/js/timer.js`: timer state and controls.
- `public/css/`: page styles.

## Scope and next steps

This is an early learning project, not a production application or a finished automation framework. It has no automated tests, persistence, accounts or session history. Elapsed time advances on browser interval callbacks; background throttling and reload recovery are not handled. Dependencies have not been modernized in this documentation update.

Future work: consolidate the two server entrypoints, add focused timer tests with a controlled clock, and make setup reproducible on a supported Node.js version. The deferred Playwright payment-checkout portfolio is a separate task.
