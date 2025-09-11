# Simon's art

This project is a multi-page e-shop to serve as an artist's portfolio and online shop.

## Purpose of the project

I created this app as my first project with React router, my first multipage React app with an integrated e-shop. I created this app to allow a painter to sell his art online.

## Demo
You can try the live version here: [Simon's Art on Netlify](https://simonraydiscala.netlify.app/)


## Technologies used

* React and React router: building a multi-component web app using props, hooks and react router
* CSS modules: modular approach for component-specific design. Responsive design. Focus on responsive and user-friendly design
* Git and Github: version control
* Netlify: project hosting

## Features

The web app is composed of several pages:
 * the about page: the artist bio and picture
 * the portfolio: a gallery of the artist paintings. This page is built through mapping in an array of paintings
 * when the user clicks on a painting in the gallery, they land on a detail page where the painting is displayed with more information. On this page the painting can be added to the cart.
 * the cart contains a list of all the paintings added in it, with quantities and price. The total price is also displayed.


## Browser support

Tested on latest Chrome, Firefox and Safari versions.


## Future enhancements

* implement Stripe (payment method) 
* download data from Firebase (rather than a local array)
* add a contact form