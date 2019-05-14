## To access the public deployed version
1. Go to [Meetup Event RSVP](https://meetup-event-rsvp.netlify.com/) site and login with your Meetup account to get access token.
2. You should be able to see the list of Events and click on any one to expand it and reveal more details.
## Thought process and progress for this project
1. I am using [Create React App](https://github.com/facebook/create-react-app) to bootstrap this project since that is quick and easy. Setup webpack could take quite sometime and I assume that is not the major concern of this project.
2. I am also bringing Typescript into the project, even if I am the only one developing it, it could greatly help me to understand the intention as well couple month later when I completely forgot the details of this project.
3. I know the requirement says need to demonstrate React life cycle methods, but I always want to try React Hook since it came out and this seems like a good opportunity to do it. I will see where I can get with React Hook and add life cycle methods where needed.
4. Since we talked about Material-UI on the phone and I haven't used it before, this also seems like a great opportunity to try it out.
5. CORS issue solved. But to deploy it locally, I have to install [Allow-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) in chrome to make it work.
6. For security reason, I didn't check in my config file where it stores the meetupClientId. If you want to run this project locally. Please add config.ts to /src/infrastructure/ and add content below to that file and replace the *Your Meetup Client ID*
    ```Typescript
    export const config = {
        meetupClientID: "Your Meetup Client ID"
    }
    ```
7. Here are the progress log and I personally find it is interesting to work through all the issues I encounter.
    
    | Date            | Progress     |
    | :-------------: |:-------------|
    | 5-05      | Started the project and based on the requirements, get the data from Meetup API and display it, shouldn't be too hard. Oh wait, I need to register Meetup API consumer first to user the API? All right, read docs, not a pro user, have to user implicit flow which means browser only. OK... That's enough information for tonight. Need to think about how to approache it. |
    | 5-07      | Got some time tonight, let's do this! Register OAuth2 consumer and get access token to request the API. Yey! Oh wait! What is this? CORS... ok... Google it. Install a plugin to bypass the CORS check in Chrome. Finally it works! with some hacking... |
    | 5-08~5-11 | Going out of town, not much progress. |
    | 5-12      | Alright, I am back in the game. Looking throught the Demo and API for Material-UI component and put together all the information I care about for a Meetup event with it. |
    | 5-13      | Documenting my thought process and why I choose certain thing for this project. |


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
