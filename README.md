# interviewDemo

interviewDemo App v0.0.1 developed using React Native

> This project is using yarn's [workspace](https://classic.yarnpkg.com/en/docs/workspaces/) to install node_modules

## List of commands

- Install dependancy
  `yarn`

- run app on android device
  `yarn run android`

- run app on ios device
  `yarn run ios`

- remove all `node_modules` 
  `yarn run rm:nm`

> Replace package name to whatever you desire in following two commands

- add package in node_modules
  `yarn add react-navigation`

# Instruction to Login and signin

> Here we use Rest API(https://reqres.in/) for Login and Signup.
> BASE_URL: https://reqres.in/

- Login: 
  title: LOGIN - SUCCESSFUL
  url: /api/login
  reqest object: {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
    }
  response object: {
    "token": "QpwL5tke4Pnpja7X4"
  }

- Signup: 
  title: REGISTER - SUCCESSFUL
  url: /api/register
  reqest object: {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
  }
  response object: {
    "id": 4,
    "token": "QpwL5tke4Pnpja7X4"
  }
# To get sucess response you have to only enter above listed email and password in request.