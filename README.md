# Kata Assignement

# Project structure

```
.
├── kataSymfonyBackend        # Backend Part
├── testkatavue               # Frontend Part
```

# Requirements

- PHP 8.1 or higher
- Composer
- Node.js (v18.15 or higher)
- npm or yarn
- Symfony CLI (optional)

# How to run the project

1. Clone this Repository

```
git clone https://github.com/bra1695/testKata 
```

2. Go to the project folder
3. Go to the kataSymfonyBackend folder
4. Execute this commandes
- npm install
- composer install
- symfony server:start --port=8001


4. Go to the testkatavue folder
5. Execute this commandes
- npm install
- npm run serve

# Implementation

this is a little brief for what i did in this project :
- add two api /api/products GET and POST for fetch and add Product
- implement a responsive product filtering system in Vue.js which allows users to filter products by title and price range seamlessly
- integrate a favorites feature to enable users to add products to their favorites and view them on a dedicated page, even after refreshing
-  Created a  product details view component that displays all relevant information when a user clicks on a product card
- implement add product feature that allow user to add new product to our product list
- implement add product feature that allow user to add new product to our product list
- incorporated toast notifications to confirm actions such as adding products to favorites 

# User Stories

1. As a customer, I want to see a list of products so that I can choose what to buy.

`images/ProductImage.png`

2. As a customer, I want to interact with a shopping cart to manage my product selections.

`images/cartImage.png`
`images/detailsProduct.png`

3. Bonus

- Add basic responsive design to ensure usability on both desktop and mobile

`images/responsive.png`










