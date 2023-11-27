# Namaste-React rocke

# Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement (Automatic Refreshing)
- File Watching Alogorithm -> written in c++
- Caching - Faster Build
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - supports older browser
- Diagonistic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

// React Hooks

- Is a normal javascript function.
  types of hooks ->

1. useState() - use to create state variable
   // whenever the state variable chnages react will re-render the components
2. useEffect() - it will use to call the api it will render after components

# 2 types of routing in we apps

- client Side Routing
- server Side Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect a store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing (developer)

- Unit Testing : you test your react component in isolation.
- Integration Testing : multiple component talk with each other in react application.
- End-to-End Testing(E2E Testing)

# Setting up Testing in our app

1. Install React Testing Libaray.
2. Then Install Jest.
3. Install babel dependencies.(on jest website)
4. Configure Babel.(on jest website)
5. Configure Parcel Config file to disable default babel transpilation.
6. Jest - npx jest --init
7. Install jsdom library (from setup -> jest 28)
8. Install @babel/preset-react - to make jsx work in test cases.
9. Include(@babel/preset-react inside my bableconfigure )
10. Install @testing-library/jest-dom

# To run the command of test -> npm run test
