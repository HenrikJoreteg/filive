# FI Live Workshop App

Hi folks, it'll save us a ton of config/setup time at the beginning if you can get a few things set up and downloaded before the class.

So, if at all possible try to get the following things working before the workshop. If you have trouble, it's not a huge deal, it'll just save us some time.

## Things you'll need

1. node.js and npm installed (version 0.10 or newer should be fine)
2. some kind of terminal or command prompt where you can run commands
3. a text editor of your choice. I'll be using [Sublime Text](http://www.sublimetext.com/) but most any will do.
4. A free account on GitHub.com with at least one "repo" in it. If you don't have one [create one here](https://github.com/) and then follow instructions to create a repo. It doesn't even have to have anything in it, just needs to exist.
5. a browser, yup... duh :)

## Getting set up before class

If you already have node.js, npm, and git installed you should be able to get the app in this repo running by executing the following commands in your terminal:

```
git clone https://github.com/HenrikJoreteg/filive.git
cd filive
npm install
npm start
```

Some of those steps will take some time, but be patient. If at the end of that you open a browser to: http://localhost:3000 and see the text "Hello FI Live!" you're ready for the workshop.

## If that didn't work...

Worry not! We'll sort it out.

1.  If you're not familiar with git, you don't actually need it for the class, you can [simply download](https://github.com/HenrikJoreteg/filive/archive/master.zip) and unzip this project.
2. If you don't already have Node.js installed, please download and run the installer by clicking the Install button on the [Node.js homepage](https://nodejs.org/). This will install both node and npm. If you already have Node.js installed type `node --version` in your terminal or command prompt and verify you're on version 0.10 or above.

Now open a terminal or command prompt and `cd` to the root of the directory where you cloned this project and try running: `npm install`

You should see a spinner and then when it's done downloading, a list of things it installed.

Now run `npm start`, this will start the development server (it won't finish it'll just keep running). Then open http://localhost:3000 in a browser if you see a message that says: "Hello FI Live!" you're ready. 


## Goals?

1. Giving you tools, knowledge and confidence to build and deploy an application from scratch.
2. Familiarizing you with basics of:
    - ES6+
    - Node.js/npm
    - Ampersand.js
    - React
    - Webpack
    - Isomorphic Rendering
    - Providing user logins using an OAuth API
    - Consuming an external JSON API
3. Putting your app on the Internet

## Resources / Reading

- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
- [Reusable React Components](https://facebook.github.io/react/docs/reusable-components.html)
- [Standard Linter](https://github.com/feross/standard)
- [Setting up ESLint, React and ES6](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48)
- [Labelr Demo App Source](https://github.com/HenrikJoreteg/labelr)
- [Complete HubTags.com Source](https://github.com/henrikjoreteg/hubtags.com)

## Rough Outline

**9:00 Start**

- Short intro talk
- Project setup
- Render basic "hello" content with React
- Intro to React.js

- Adding styles
    - show yeticss.com
    - create styles folder in src
    - import yeticss.com
    - show what happens when you build now
    - show live reloading in action

- Convert ES5 React module to ES6
    - compare them side-by-side

**frameworks talk/discussion**

- Install and use the router
    - public and 'repos' routes
    - start with console.log routes
    - React.render inside method

- Introduce ampersand-app pattern
    - demo event signaling via app

- Add layout.js

- Local links/Internal Nav Component

- Authing with GitHub
- Persisting token, modeling 'me'
- fetching me from github
- Binding username

**Lunch Break somewhere in here**

- Rendering list of Repos
- Repo Detail Page
- Rendering The Labels
- Creating a Label component
- Adding Octicons

- Editing Mode for Labels
- Deleting Labels
- Updating Labels
- Creating New Labels

- Cleanup, Optimization, Bug Fixes
- Configs and Deploys
- Adding A 404 Page
- Static Isomorphic Rendering
- Using Standard for Code Style

## Taking it further

Hard to say how much we'll get through in the class, but following along is one thing, but tackling something on your own is quite another. 

I'd encourage you to keep hacking on this and finish whatever features we didn't build. 

A more "complete" version of this app is available here for reference: https://github.com/henrikjoreteg/hubtags.com 

In addition, you may want to try adding the following: 

- Add a link to real repo
- Add validation to form
- Add user avatar
- Switch it over to login with firebase
- Write module that fetches "all" repos (using github paging API)
- Add color picker?

Want this content in video form for you or someone you know? It's available online here: http://learn.humanjavascript.com/react-ampersand