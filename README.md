<p align="center">
  <h3 align="center">
React Pokédex
  </h3>
  <p align="center">
  A simple pokédex made with React 
    <br />

# Demo

[Pokedex - Live ◀️](https://giopokedeex.netlify.app/)

## Features ✅

- Data is loaded from [the Pokémon API](https://pokeapi.co/)
- Data cache provided by RTK Query
- Dispatching requests using React Router 6 loader 
- Infinite scroll (up to 151 Pokemon) employing a intersection observer hook


## Libs
Key Libs used in this project are:

| Lib             | Description   |
| :-------------:|--------------|
| [React](http://facebook.github.io/react/index.html) | A JavaScript library for building user interfaces. |
| [react-router](https://github.com/remix-run/react-router) | Declarative routing for React. |
| [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) | A utility-first CSS framework for rapid UI development.  |
| [Redux Toolkit](https://github.com/reduxjs/redux-toolkit) | The official, opinionated, batteries-included toolset for efficient Redux development. |

## Custom hooks
 Lib             | Description   |
| :-------------:|--------------|
| useIntersectionObserver| A React hook implementing the Intersection Observer API |
    
Getting started

```sh
git clone git@github.com:galletafromjell666/pokedex-rtk-router.git
cd pokedex-rtk-router
npm install
npm run dev # open localhost:5173
```