# GreetApp - React Greeting Component

## Description

GreetApp is a simple React component that allows users to enter their name and receive a personalized greeting from a backend API.

## Features

- Accepts user input for a name.
- Fetches a greeting message from a backend API.
- Displays the greeting or an error message if the request fails.
- Simple and easy-to-use UI.

## Installation

1. Clone the repository (if applicable) and navigate to the project directory.
2. Install dependencies using:

   ```sh
   npm install
Ensure that the backend API is running at http://localhost:3000/api/greet.

##Usage
Import and use the GreetApp component in your React application:

jsx
Copy
Edit
import GreetApp from "./GreetApp";

function App() {
  return (
    <div>
      <GreetApp />
    </div>
  );
}

export default App;


##API Endpoint
This component expects an API at:

pgsql
Copy
Edit
GET http://localhost:3000/api/greet?name={name}


##Example Response
json
{
  "message": "Hello, YoungLabs!"
}


Dependencies
React (useState for managing input and message state)
CSS for basic styling (App.css)
Styling
Customize the styles in App.css:


Error Handling
If the name field is empty, a message "Please enter a name." is displayed.
If the server request fails, an error message "Error connecting to the server. Please try again." appears.
