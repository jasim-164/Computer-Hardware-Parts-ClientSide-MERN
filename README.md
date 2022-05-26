# My Projects related All links  

## github server side link: 
 https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-jasim-164

## github client side link: 
https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-jasim-164

## firebase deploy link :
 https://grocery-store-fullstack.web.app/

## heroku deploy link:
https://protected-meadow-32127.herokuapp.com/

## stackoverflow question link : 
https://stackoverflow.com/questions/72071203/why-event-preventdefault-function-is-so-important

# what I haved used in this project 
## Generate a random JWT secret :
### Run this script on the terminal:
* link: https://jwt.io/#debugger-io
* node -e 
* "console.log(require('crypto').randomBytes(32).toString('hex'))"
## Heroku deploy :
    ONE TIME for your computer
    -----------------
      1. create heroku account
      2. verify email
      3. install heroku cli
      4. heroku login

    For each project one time
    --------------------------
    1. heroku create
    2. make sure you: git add . git commit. git push
    3. git push heroku main
    4. Go to Heroku Dashboard > Current Project> Settings > Reveal Config vars
    5. copy paste config vars from your .env file
    6. Make sure you have whitelisted all ip address to access mongodb

    UPDATE SERVER with new changes
    ------------------------
    1. Make changes
    2. make sure you: git add . git commit. git push
    3. git push heroku main

    Connect Server with Client and deploy client
    -------------------------
    1. replace localhost by heroku link
    2. npm run build
    3. firebase deploy

    
# react hook forms 
* https://react-hook-form.com/get-started#Integratinganexistingform

* https://react-hook-form.com/get-started#Registerfields

# axios install in react
* npm install axios
* https://www.digitalocean.com/community/tutorials/react-axios-react

#  Toastify install in react
* npm install --save react-toastify
* import { ToastContainer, toast } from 'react-toastify';
* import 'react-toastify/dist/ReactToastify.css';
* toast("Wow so easy !");
* ToastContainer tag place anywhere

# MongoDB use in MERN Stack
 * create account for MongoDB
 * then create create cluster
 * then create database name
 * then create collection
 * for your project save your username and Password
 
 # react router install
  * https://reactrouter.com/docs/en/v6/getting-started/installation
 * npm install react-router-dom@6
 ## Rect Router DOM
* https://reactrouter.com/docs/en/v6/getting-started/installation
## For using private pages 
* https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx
## React Firebase HOOKS
* https://github.com/CSFrequency/react-firebase-hooks

## For photo Hosting In online
* https://ibb.co/album/N6HqdS/embeds

## CSS Framework REACT-BOOTSTRAP USE
* https://react-bootstrap.netlify.app/components/cards/#background-color

## For FontAwesomeIcon
* https://fontawesome.com/v5/docs/web/use-with/react
    * Install first: Fontawesome in React
       * npm i --save @fortawesome/fontawesome-svg-core 
       * npm i --save @fortawesome/free-brands-svg-icons 
           // mainly used for social logo
       * npm i --save @fortawesome/react-fontawesome

    *  Then :

    * import in your project
 
        * import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
        * import { faFacebook  } from '@fortawesome/free-brands-svg-icons';




    * Use this
        *  </FontAwesomeIcon icon={faFacebook}>






