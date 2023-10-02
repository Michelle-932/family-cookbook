# Family Cookbook App



Welcome to my Family Cookbook App, a modern way for our family members from all over the country to share and cherish our recipes and memories. 

![Family Portrait](https://i.imgur.com/VoLv49l.jpg)

Instead of collecting recipes with my mom and trying to track down family members, this app allows us to submit, view, and sort recipes contributed by our family, making it a digital repository of our culinary traditions, as well as a nice little piece of Black American food history.


## Features

- **Recipe Submission:** Easily submit your favorite recipes to be shared with the family. Include details like ingredients, preparation steps, and even images.

![Submission Form](https://i.imgur.com/9fTvyb8.png)

- **Recipe Gallery:** Browse through a collection of delicious recipes contributed by various family members. Each recipe comes with a user-submitted photo (or stock image, if one isn't available).

![Recipe App Homepage](https://i.imgur.com/0OAGydH.jpg)


- **Sorting Options:** Sort recipes by contributor name or course (main dish, sides, dessert, etc.) for convenient access.

- **Family Gallery:** Explore a dedicated family gallery section, including a heartfelt dedication by our matriarch, showcasing family photos and memorable moments.

## Technologies Used

- **MongoDB:** The app uses MongoDB as its database to store and manage recipe data.

- **Express.js:** The backend of the app is built using Express.js, providing a robust and scalable server.

- **React:** The frontend is developed with React, allowing for a dynamic and responsive user interface.

- **Vite:** Vite is used as a fast and efficient build tool for bundling and optimizing the app's assets.

## Installation

To run this app locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/family-cookbook-app.git

3. Navigate to the project folder:
    ```bash
   cd family-cookbook-app

3. Install dependencies for both the server and client:
    ```bash
    cd server && npm install
    cd ../client && npm install

4. Set up your MongoDB database. Update connection details in the server if needed.

5. Start the server: 
    ```bash
    cd ../server && npm start

6. Start the client:
    ```bash
    cd ../client && npm start

7. Access the app in your browser at `http://localhost:3000`

## Future Features
Features to come include: 

1. The ability for family members to login, create profiles, save recipes, and see their contributions
2. Updated family galleries
3. Purchase of additional storage so family members can directly upload recipe images

Fixes currently being worked on include:

1. Additional styling
2. Resolving the dynamic recipe link issue
3. Dedicated domain name

Our annual book comes out in time for the holidays, so we'll be ready for submissions by 10/31/23.

## License

This project is licensed under the MIT license. Feel free to make one for your family! 

## Acknowledgements

I'd like to express my thanks to all family members who have contributed your recipes and memories to this app. Your participation makes this a cherished digital archive for our family.

![My grandmother in the Kitchen](https://i.imgur.com/srIgzV7.jpg)

<i>My grandmother in her kitchen, c. 1970</i>