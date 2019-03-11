import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.random = functions.https.onRequest((req, res) => {
    const randomNumber = Math.random();
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.status(200).send(`
        <!doctype html>
            <head>
                <title>Random Number</title>
            </head>
            <body>
                ${'Your number is: ' + randomNumber}
            </body>
        </html>`);
});
