### Description

Implement Simple App with Authentication

1. User can see login form with two fields - email and password
2. Email field should be validated against correct email format and required field
3. Password field should be validated against required field
4. Login button is disabled until both conditions meet the requirements
5. When the user click the "Login" button the form should validate credentials
    1. Show error if not valid
    2. Proceed to secure part of the application
6. Secured part of the application should validate if the user is logged in or not
    1. If logged in - show welcome message and button "Logout"
    2. If not logged in - redirect to Login Form

To implement the task please use the following libraries

- react-router-dom (https://www.npmjs.com/package/react-router-dom)
- formik (https://formik.org/docs/overview)
- yup (https://www.npmjs.com/package/yup)
- material-ui (https://material-ui.com/)

You can store auth status in localStorage / sessionStorage

### Requirements:

1. Valid email/password - test@test.com/123456
2. Two application pages
    1. /auth - for unauthorized user
    2. / - for authorized user
3. Material UI is used for Application Layout

### Addition Points:

1. Beautiful and responsive UI
2. Animations
