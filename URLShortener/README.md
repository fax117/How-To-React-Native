# URL Shortener React Native

This app is a URL shortener built with React Native. It allows users to enter a long URL and generate a shortened version that can be easily shared with others.

## Architecture

The architecture of a React Native app typically follows the Model-View-Controller (MVC) pattern, which separates the app into three distinct layers: the model, the view, and the controller. This app follows the example of others in the same way using a MVC pattern.

- **Model:** The model layer is responsible for managing the app's data and business logic. In the app, this includes generating the shortened URLs and communicating with the server-side API to retrieve and update data as needed. I implement the model layer using Typescript modules.

- **View:** The view layer is responsible for rendering the app's user interface. In the app, this includes displaying text inputs, buttons, and labels to the user. I implemented the view layer using React Native components, which are similar to HTML elements in web development.

- **Controller:** The controller layer is responsible for handling user input and updating the model and view layers accordingly. In the app, this includes handling the user's input when they enter a long URL and press the "Shorten" button, and updating the view to display the shortened URL once it is generated. I implemented the controller layer using event handlers and other Typescript functions.

Overall, the architecture of this React Native URL shortener app is designed to be modular and easy to maintain. By separating the app into distinct layers and using standardized libraries and components, we can build a scalable and a more robust app that can handle a wide range of user input and (in the future) maybe even add data storage needs.

## Dependencies

- React Native
- Axios
- Jest (Testing)

## Testing...

I came with the idea that this proyect was going to be quite easy to handle and test. Yet the most tasking part of this assesment was actually the testing.
I found more errors within errors of my code and my tests.
I fought against the configuration of my code, the default configuration of jest and even Libraries...
I don't even know how to explain how frustrating and time consuming testing was.

## Future Improvements

Where to start?

- The UI... definitely. I'm no designer so a better UI would absolutely be better.
- Analytics to track how many times each shortened URL is clicked.
- A way for users to customize the shortened URLs.
