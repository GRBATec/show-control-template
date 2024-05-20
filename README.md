# ATec ShowControl - Template

ATec ShowControl is intended to be run on a local mobile device on any event to control the show.
It is a web application that can be accessed by any device with a web browser.

## Base Features

-   `/beamer` - display informations, like a timer or the school logo, publicly for the audience
-   `/admin` - decide what is displayed on the beamer
-   `/agenda` - overview of the agenda of the event
-   `/agenda/*` - details of one agenda item

## Usage

### Installation and Running

Add a `.env` file in the `server` folder with the following content:

```env
FRONTEND = frontend/dist # change this to the path of your frontend build
```

To run the web app, run the following commands:

```bash
# frontend build
cd frontend
pnpm i
pnpm build
cd ..
# backend build and run the server
cd backend
pnpm i
yarn tsc
pnpm start
# concrats the server is now running and accessible on http://localhost:3002
# any can be opended by any device on the same network
```

### Configuration

#### Agenda

You can configure the agenda in `frontend/src/content/agenda`.
Note: the agenda is getting is displayed in the order of the files in the folder (aplhabetical order by filename).

#### Images

You can configure the images in `frontend/public`.

#### Admin Panel Buttons

You can configure the buttons in the array in `frontend/src/config/AdminButtons.ts`.

#### More

For more configuration you need to rewrite and change code. For the frontend: reactive/ non-static components/ pages are written in Vue.js.
