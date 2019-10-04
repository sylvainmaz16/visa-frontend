on development
utils/constants.js
export const myURL = 'http://localhost:3000'
export const apiURL = 'http://localhost:4040/api/'

on production
utils/constants.js
export const myURL = 'https://ds-160.us'
export const apiURL = 'https://ds-160.us/v1/api/'

For deployment (temporarily)

yarn build
git push
ssh -i "immigration.pem" ubuntu@18.190.97.9
cd form-automation
git pull