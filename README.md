# Project-app
- Project manager is a react app built using react hooks, redux and firebase v9.
- Users can log in to an existing account or create a new one. Logged in users can see each other projects as well as notifications whenever someone creates an account or add a new project.
- This app utilized tailwind CSS for styling
## Process
- Create the different components needed for this app, and add routes using React-Router. 
- Create controlled forms (sign in, signup) with the react hook `useState`, and the target event property. 
- Add a project Reducer and authentication Reducer to manage the state of projects and users who will sign up. 
- Combine reducers into one rootReducer using `combineReducers()` functions, and pass it to `createStore()`. 
- Add the project to firebase, and initialize firebase, firestore, and the authentication using a fbconfig provided.
#### Handle creating a new project and add it to firestore
- Create a handleSubmit function that fires when the user submits the `Create` form, which creates a new project. One of the most helpful things I **learned** here is, the lifesaver, react hooks `useSelector()` and `useDispatch()`. No more mapStateToProps and mapDispatchToProps :). When the functions fire it dispatches a `createproject(state)` action creator using the `useDispatch()` hook and passes the state (project created) as an argument.
- Add the thunk using `applyMiddleware()` to enhance the store functionality.
- The `createproject()` action uses the middleware Thunk to perform an asynchronous task that adds the project we sent from our `Create` components (form) to the firestore collection called "projects", then dispatch the action to the `projectReducer` to update the state.
#### Synchronize firestore with redux store
- One of the **problems** I faced is how to sync firestore with redux-store, and to solve it I've created a custom hook named `useSync`. The `useSync` hook listen to the firestore changes, using react hook `useEffect` and the firestore method `onSnapshot()`. `useSync` takes two parameters (The collection name and the action), and it dispatches the action to sync the collection with the redux store. The `useEffect` hook return a function `unsb` to detach the listener and avoid introducing a memory leak. 
- Call `useSync` whenever the Dashboard component is active, and then grab the projects from redux-store using `useSelector`, pass the projects as a property to the `projectList` components. 
- irritate through the projects using the array method `Array.map` to output a dynamic list. 
- Call `useSync` whenever the projectDetails component is active, and then get the projects from redux-store using `useSelector`. 
- Get the project id from the routing params property using `match.params.id`, then use the array method `Array.filter` to get only the project with the same id.
#### Implement authentication: signup
- Create `signup` action creator.
- In the Signup component, create a `handleSignup` that fires on submit.
- The function dispatches the `signup` action creator, using `useDispatch()`, that accepts four arguments email, password, first name, and last name.
- The `signup` action uses thunk to perform an asynchronous task that adds the user to both, the auth server from firebase using `signInWithEmailAndPassword()` and to the users' collection in firestore with the same uid we got from auth server. Then dispatch the action to the `authReducer` to update the state.
#### Implement authentication: sign in
- Create `signin` action creator.
- In the Signup component, create a `handleSignin` that fires on submit.
- The function dispatches, using `useDispatch()`, the `signin` action creator that accepts two arguments email, password.
- The `signup` action uses thunk to perform an asynchronous task that allows the user to signin using `signInWithEmailAndPassword()`.
#### Implement authentication: sign out
- Create `signout` action creator.
- In the SignedIn component, create a `handleSignin` that fires when the user clicks on the logout link. The function dispatches, using `useDispatch()`, the `signout` action creator
- The `signout` action uses thunk to perform an asynchronous task that signs out the user using the `signOut()` firebase authentication function.
#### Control the components that will be shown to the user.
- Depending on the user state, if he/she logged in or not. He will see different Links on the Navbar, and also won't be able to visit some routes.
- To get the currently signed-in user we use the `currentUser` property, if there is no user signed-in it's `null`.
- The **problem** I faced using this property, is there is always a flash(if the user signed in and refresh the page, he/she will see links for signed-out users for a second then the logged-in links will be shown). That's because the app is rendered before the firebase authentication is initialized and ready.
- To solve this **problem** I used `onAuthStateChanged()` observer on the `auth` object we got when we initialize the firebase authentication. By rendering the app inside `onAuthStateChanged()` as follow:
``` 
onAuthStateChanged(auth, user => (ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
     <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)))
```
we ensure that the app won't render until the authentication is ready.
- Rendering a `<Redirect />` o Prevent users to visit unrelated routes depending on the user state(for example to not allow logged-in users to visit the signUp component).
#### Add a notifications system
- Install the Firebase CLI to use cloud functions.
- Create the `projectCreated` function that triggers when there are changes on the firestore, specifically when a user adds a new project, using the firebase event handler `onCreate()`
- Create the `userJoined` function that triggers when there are changes on the firebase authentication using the firebase event handler `onCreate()`
- Inside the function we get the new signed-in user using
- Those functions return another one that adds a new notification to the notification collection on firestore.
#### Modify the firestore security rules
- Prevent not authenticated users to read or write new projects.
- allow all users to create a new user document, and the authenticated ones to read the data inside the users' collection.
- allow authenticated users to only read data from the notification collection.
## Improvements/features I'd like to add
- Add feature that allow admins to delete projects.
- Handle `onSnapshot()` errors.
- Add a profile page to allow users to see their information and edit it.
- Add future to allow users to edit their projects.
- Add a team feature, so every team can see theier own projects (currently all users can see eachother projects)
- Write some tests using Jest and the React-Testing-Library
## Installation
- First, use `npm install` to install all the dependencies.
- Then start the development server `npm start`.
- For more information  please refer to [react-app](/react-app.md)
## Try it !!
https://lelouch-manager.web.app/
- Feel free to open and/or solve an issue if you've noticed any bugs or edits you want to make.
