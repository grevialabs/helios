// // Set baseUrl 
// let baseUrl, apiUrl = ''
// if (process.env.NODE_ENV === 'production') {
//    baseUrl = 'http://yourdomain.com/api/'
//    apiUrlV1 = 'http://localhost/liquid/api/v1/'
// } else {
//    baseUrl = 'http://localhost:8080/helios/'
//    apiUrlV1 = 'http://localhost/liquid/api/v1/'
// }   
// // export const config = ENV

// const dotenv = require('dotenv');
// dotenv.config();

// module.exports = {
//     endpoint: process.env.API_URL,
//     masterKey: process.env.API_KEY,
//     port: process.env.PORT
//   };

var config = {};

config.twitter = {};
config.redis = {};
config.web = {};

config.default_stuff =  ['red','green','blue','apple','yellow','orange','politics'];
config.twitter.user_name = process.env.TWITTER_USER || 'username';
config.twitter.password=  process.env.TWITTER_PASSWORD || 'password';
config.redis.uri = process.env.DUOSTACK_DB_REDIS;
config.redis.host = 'hostname';
config.redis.port = 6379;
config.web.port = process.env.WEB_PORT || 9980;
// config.API_URL = 'http://localhost/liquid/api/v1/';
config.API_URL = 'http://liquid.grevialabs.com/api/v1/';

module.exports = config;