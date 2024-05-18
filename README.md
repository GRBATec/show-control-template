# ATec ShowControl - Plain

ATec ShowControl is intended to be run on a local mobile device on any event to control the show.
It is a web application that can be accessed by any device with a web browser.

## Usage

The `master` branch contains the plain or base version to start creating a new show control system for a specific event.
Simply clone this branch to a new one and start adding your configurations and features.

Clone the repository and run the following commands:

```bash
# frontend build
cd frontend
pnpm i
pnpm build
cd ..
# backend build and run the server
cd backend
pnpm i
pnpm build
pnpm start
# concrats the server is now running and accessible on http://localhost:3002 
# any can be opended by any device on the same network
```

## Base Features

-   `/beamer` view - display informations, like a timer or the school logo, publicly for the audience
-   `/ipad` view - display any content on an ipad or any other device to give the client, for example the speaker, a student or a teacher, the ability to see the current state of the show
-   `/admin/*` view - control the show, like starting the timer, changing texts being displayed
-   `/agenda` view - display the agenda of the event
