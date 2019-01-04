"use strict";

console.log("before event handler");
// handleHttpRequest is the entry point for Lambda requests
exports.handleHttpRequest = function(request, context, done) {
   try {
       let response = {
           headers: {},
           body: '',
           statusCode: 200
       };
       console.log('Before API Call GET');
       switch (request.httpMethod) {
           case 'GET': {
               console.log('GET');
               response.body = JSON.stringify({"message": "helloworld!!"});
               done(null, response);
           }
               break;
       }
   } catch (e) {
       done(e, null);
   }
}