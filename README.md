![Drawing of a rocket launching with Pleo logo on the side](https://repository-images.githubusercontent.com/255552950/c9991080-ff11-11ea-8706-5d40322f68fe)

# ¡Space·Rockets! app

### [🚀 App in action 🚀](https://pleo-challenge-theta.vercel.app)
- [Old version link](https://spacerockets.netlify.app)
- [Task description](./CHALLENGE.md)

## Develop

> You'll need [Node](https://nodejs.org/en/) and
> [Yarn](https://classic.yarnpkg.com/en/) installed

- run `yarn` to install dependencies
- run `yarn start` to start development environment

## Test
> You'll need [Node](https://nodejs.org/en/) and
> [Yarn](https://classic.yarnpkg.com/en/) installed

- run `yarn` to install dependencies

### Unit tests
- run `yarn test` or `yarn test --watchAll` to run unit tests

### Integration tests
- run `yarn start` to start development environment
- in a new terminal window run `yarn cypress open` to launch cypress
- click on available test files

## Build

> You'll need [Node](https://nodejs.org/en/) and
> [Yarn](https://classic.yarnpkg.com/en/) installed

- run `yarn` to install dependencies
- run `yarn build` to build app for production
- output is in `build` directory,
  [ready to be deployed](https://create-react-app.dev/docs/deployment/)

## Data

All data is fetched from the unofficial SpaceX API V3 at
[spacexdata.com](https://docs.spacexdata.com/?version=latest).

## Technologies

> This project was bootstrapped with
> [Create React App](https://github.com/facebook/create-react-app). You can
> learn more in the
> [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

- [React](https://reactjs.org/) - UI library
- [Chakra UI](https://chakra-ui.com/) - Design system and component library,
  with [Emotion](https://emotion.sh), its peer dependency
- [SWR](https://swr.now.sh/) - Data fetching and caching library
- [React Router v6](https://github.com/ReactTraining/react-router/blob/f59ee5488bc343cf3c957b7e0cc395ef5eb572d2/docs/installation/getting-started.md) -
  routing library
- [React Feathers](https://github.com/feathericons/react-feather) - Icons
  ([Feather icons](https://feathericons.com/) wrapper for React)
- [timeago.js](https://timeago.org/) - Tiny library to display human-readable
  relative time difference
- [Recoil](https://recoiljs.org/) - lightweight state management library by Facebook Opensource team
- [Recoil persist](https://www.npmjs.com/package/recoil-persist) - tiny module for recoil to store and sync state to browser Storage
- [Cypress](https://cypress.io/) — end-to-end testing framework for web test automation

## Potential next steps
### Code improvement
- Move all hardcoded strings and routes to constants,
- Unify colors, margins and paddings with a set of variables,
- Look into unifying and reusing original Launch and Launch Pad cards,
- Introduce Typescript.

### Features
- Enable adding Rockets to Favourites tab,
- Add calendar feature to display nearest launches in calendar view.
