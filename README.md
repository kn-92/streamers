Project in this repository is an fullstack app using React(Typescript) on frontend and Node.js/Express(Typescript) on backend and MongoDB Cloud database.

On the main screen application fetches streamers data from the database and displays them in scrollable list.
It also has a form which enables to add a new streamer to the database.
Form is validated and submitted by using react-hook-form library.

The app enables showing details about streamer after click on every item in the displayed list by moving to details page.
The app has a feature to upvote and downvote for a streamer by clicking on up or down buttons in the item at list.

Application is using redux toolkit query as a state manager and source of truth and it also sends request to api with usage of Async Thunk.

## Available Scripts

In the project CLIENT directory you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

In the project SERVER directory you can run:

### `npm run dev`

Runs the app in the development mode. on [http://localhost:5000](http://localhost:5000) adress\
Command will recompile TypeScript files to ./dist JavaScript files afer changes and saving files and reload app.
When server is running it displays "Server is running!!!" in the server project console.
