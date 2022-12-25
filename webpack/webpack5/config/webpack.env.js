/**
 * @file webpack env
 */
 function getEnv() {
 
     const raw = Object.assign({}, process.env, {
     });
 
     const stringified = {
         'process.env': Object.keys(raw).reduce(function (env, key) {
             env[key] = JSON.stringify(raw[key]);
             return env;
         }, {}),
     };
 
     return {
         raw,
         stringified,
     };
 }
 
 module.exports = getEnv;
 