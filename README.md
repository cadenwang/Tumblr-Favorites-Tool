# Tumblr Favoriting Tool
A Tool for retrieving Tumblr posts by tag and/or blog name, and the ability to add or remove posts from a favorites list

## Setup Instructions:  
**After pulling from Github**
**In the Terminal, navigate to the folder and run the following commands:**
  1. npm install (will install package dependencies)
  2. npm start (will start the server)

**Set up the API Key** 
  1. Navigate to the *key.config.js* file, one level inside the base folder
  2. Open the file inside a code editor and replace "INSERT API_KEY HERE" with the API key sent in the email (the key should go between the quotes, ex. API_KEY: "XXXXXXX")
  3. Rename the *key.config.js* file to *key.js*

**To run the tool in a browser:**
1. Open a Browser Window
2. In the address bar, navigate to http://localhost:3000

### Example
![](Sample.gif)

### Built With
    * React - The Library Used
    * Styled Components - Used to style the react components
    * Axios - Used to make API requests
