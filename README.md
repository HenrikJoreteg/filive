# FI Live Workshop App

This repo is for the workshop on "Building a Modular Front-end Application" workshop at [Future Insights Live, 2015](https://futureinsightslive.com/las-vegas-2015/schedule/workshops).

## Related docs

- Stuff to do [before the workshop](beforeclass.md)
- [Copy/paste snippets](copypaste.md)

## Goals of the workshop

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


## Further study

Want this content in video form for you or someone you know? It's available online here: http://learn.humanjavascript.com/react-ampersand

The code `workshopper` will take $20 off. Feel free to share it with co-workers or friends.

- [My Book, Human JavaScript](http://humanjavascript.com)
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
- [Reusable React Components](https://facebook.github.io/react/docs/reusable-components.html)
- [Standard Linter](https://github.com/feross/standard)
- [Setting up ESLint, React and ES6](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48)
- [Labelr Demo App Source](https://github.com/HenrikJoreteg/labelr)
- [Complete HubTags.com Source](https://github.com/henrikjoreteg/hubtags.com)


## Feedback

Please take a minute to give Henrik some feedback on the workshop here: http://bit.ly/filive-feedback

If you liked it maybe even tweet about it :) I'm [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter. 

<3