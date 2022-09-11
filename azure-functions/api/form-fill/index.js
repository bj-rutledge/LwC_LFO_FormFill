/**
 * Created by BJ Rutledge
 * Date: 2022-09-09
 * Living with Conviction.org
 * Azure function. Get Filled form.
 */

module.exports = async function (context, req) {
  if (!req.body) {
    context.res = {
      status: 500,
      body: {
        error: new Error('No body was received.'),
      },
    };
  }

  const data = req.body;
  switch (body.formType) {
    case 'gr39':
      //do gr39
      return;
    
    //do other forms when needed! 

    default:
      context.res = {
        status: 500,
        body: {
          error: new Error('No body was received.'),
        },
      };
      return; 
  }
};





















// context.log('JavaScript HTTP trigger function processed a request.');

// const name = (req.query.name || (req.body && req.body.name));
// const responseMessage = name
//     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

// context.res = {
//     // status: 200, /* Defaults to 200 */
//     body: responseMessage
// };
