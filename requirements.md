# FakeShop

connect to api https://fakeapi.platzi.com/ using axios

## Views
All views that aren't the login page should have a navigation menu
Nav menu should have:
- logout button: deletes the saved token from everywhere and redirects to login page 
- link to product list
- profile page


### Login 
Simple form with two inputs: email and password. Both fields mandatory and request won't be made if one of the inputs is empty or the email field isn't a valid email formaty

If correct, clicking the login button will make a request to 
[POST] https://api.escuelajs.co/api/v1/auth/login

See API documentation for how to make this request
If request is correct, returns a 201 status and data with the token
Save the token in the state and localStorage and navigate to the list of products 

If incorrect, returns a 401 status, should show an error page

### Product List
By default, results are shown without filter
Can be filtered by title, need to introduce at least 3 characters to filter. 

Positive if there is pagination? 

For each product, show a component with the basic data and one of the images associated with the product. 

If we click on the product, e.g. a button, navigate to detail of the product.
To obtain products, use:
[GET] https://api.escuelajs.co/api/v1/products
[GET] https://api.escuelajs.co/api/v1/products/?title=Generic


### Detail of product
Shows the same data as the previous component but additionally, can cycle through all of the images associated to the product

Should also be able to navigate to this page writing the address directly as a URL

To obtain detail of product, use:
[GET] https://api.escuelajs.co/api/v1/products/34


### Profile page
Create a view with the information of the authenticated user 
To get the info, use: 
[GET] https://api.escuelajs.co/api/v1/auth/profile

consult documentation to see how to do this properly 
