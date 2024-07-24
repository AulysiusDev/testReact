Base Url: https://f9d8c-service-14936190-f45164d8.us.monday.app
Enpoint: /fetch-data
Authorization header: "12345"
Content-type header: application/json

Requirements:

- Fetch data on intial render of the app, from the specified endpoint + url.
- Include specified headers to pass authentification.
- Sort the data into an array of names ordered ascending alphabetically.
- Render a list of these names to display on screen.
- Implement error handling by displaying the message to the user "There was an error" in the case of an error.
- Pass the list of people to modal as a prop.

- Bonus task:

1.  Create an button which, when clicked will rerender the array but sorted in decending order of age.
2.  Display the text "{name} is {age} years old"
3.  Add some styles to the button.

Tips:

- No backend is needed for this.
- There are no trick questions.
- Don't worry about styling other than the bonus task.
- This can all be done in the root component, however, if you wish to use another file for whatever reason feel free.
- A detailed explaination of how this would typically be done will suffice to showcase most skills, such as creating other files etc.
