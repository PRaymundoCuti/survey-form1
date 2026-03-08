
#  Assignment 4: dinamic form

## Project Overview

### Project Name: Cake Survey Form  
### Author: Pablo R.  


### this project mainly inplements DOM and differents tiypes of input and fieldset. Moreover in each of them ARIA was implemented in order increase user satisfaction and accesibility 

### Explanation of Code Functionality
- usename: input have a min of 5 and max 25 characteres, no special ones
- email : input have to follow default email pattern
- flavour of the cake : must select one othe the 3 choices of cake flavour
- topping : must select at least one of the topping 
- size of cake : must select one othe the 3 choices of size
- phone number : must contain 10 digits
- delivery day : must pick tomorrow or another day in the future
- quantity of cakes : must pick a number betwwen 1 and 6 

### Description of Coding Process:
- html form recives all the values of the form and js process it and filter all them, if one of the input values do not pass the validation function. showerror() method is performed that display an error in the html

### Discussion of Challenges Faced:
- html and js were the hardest to handle due the many line of code in the creation of html and js, moreover i was not much used to use accessability attributes in html and modificate according the value of the input using the js

### Consideration of Improvements:
- i would create method to validate each input in order to keep more order in isValid() method, also I would focus more in the css for User satisfaction, such another wasy to display error messages.
    