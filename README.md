# Precept Health
Coding test for job application at Precept Health

## Summary
Here is the summary of what had been done:
- All API call is working
- Typescript application is not the best but there is no type error
- Unit testing is not done

## Functionality

### 1. Login
Login credential will be:
  Email: Mozell.Jacobi@yahoo.com
  Password: password

Upon successful login, the token and login credential will be stored in the Vuex store and localStorage. As long as the token is not expired, user can make request (add, view devices)

### 2. Model Type
This is the default page that the home page will show. Since the data of the model type is large and most of the field is important, it is best to display all the fields in a compact and pleasant way so the user can preview as much without the UI felt so cluttered. Hence the table view with search and sort capabilities is the best way to go.

### 3. Model Data
You can preview the overview of specific Model Device by clicking the row in the Model Type. A overlay dialog will popup with another table data with search and sort features. The justification is same with Model Type

### 4. Add Model Type
Add model type is just a normal form with a validation(non-blank form). The TypeId selection data text is fetched from the given API in the 'Description' field, but the value that is used for submission is the 'Id' field

### 5. Users
API call to get all the users. Displayed in card view.


## Others

### Navigation guard 
Unauthorized user will be redirected to the login page if the they tried to access the page without logging in.



sidenote: Thank you for the opportunity. It is very fun and I learned couple of new things when doing this test especially on testing and typescript ;)
