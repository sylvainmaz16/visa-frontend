on development
utils/constants.js
export const myURL = 'http://localhost:3000'
export const apiURL = 'http://localhost:4040/api/'

on production
utils/constants.js
export const myURL = 'http://3.16.123.4'
export const apiURL = 'http://3.16.123.4/v1/api/'

For deployment (temporarily)

yarn build
git push
ssh -i "immigration.pem" ubuntu@3.16.123.4
cd form-automation
git pull