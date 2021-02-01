# Un_Box: The mover's app

## Planning Story

This idea spawned in the mind of Team Member Chris. He was moving soon and thought it would be nice to have an app that could track his items and their cost. We decided to give it a go and [Un_Box](https://github.com/Team-One-GA/un-box-client) was born.

This app is intended to be used with our [API](https://github.com/Team-One-GA/un-box-api)

The app itself is relatively simple. A user signs up on the [website](https://team-one-ga.github.io/un-box-client/) and can add items into their inventory and modify them at will. Each item has its own properties which help the movers decide how to handle them. The website makes request to the [back-end](https://infinite-fjord-17311.herokuapp.com/) and handles your inventory from there.

## User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create an inventory item.
- As a signed in user, I would like to update my inventory items.
- As a signed in user, I would like to delete my inventory items.
- As a signed in user, I would like to see all items.
- As a signed in user, I would like to see the quantity and price of each item.
- As a signed in user, I want to be able to update or create inventory without having to know what my current inventory levels are.
  - If the product exists in the inventory, the app should make a PATCH request to update the existing item. If I don't have enough product (when reducing product counts) the app should not allow the update.
  - If the product does not exists in the inventory, the app should make a POST request to create the new item.


## Technologies Used

- JavaScript
- ReactJs
- React-Bootstrap
- SASS
- JSX
- Axios

## Unsolved Problems/Planned Updates

Ticket submittal and collaboration were our primary ways of solving issues. That being said, there are still some things that need to be done:

- Home Button functionality
- Planning on adding checkbox to form for fragility of the items
- Planning on adding a sort and search feature

## Relevant Links

- Front-end repo: https://github.com/Team-One-GA/un-box-client
- Back-end repo: https://github.com/Team-One-GA/un-box-api
- Deployed Client: https://team-one-ga.github.io/un-box-client/
- Deployed API: https://infinite-fjord-17311.herokuapp.com/

## Wireframe

![Home](https://i.imgur.com/b0wvJT7.png)
![Index](https://i.imgur.com/HiP1Ga6.png)
![Show](https://i.imgur.com/AVSPfcd.png)
