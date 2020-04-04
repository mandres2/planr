const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
// Output: 200 OK

const createNotifications = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc))
})

exports.projectCreated = functions.firestore
// the trigger is firestore which will hit the specific document -> projects -> projectId
.document('projects/{projectId}')
// Whenever a new project is created fire the call-back function
.onCreate(doc => {

    const project = doc.data();
    const notification = {
        content: 'Added a new project',
        // This is a specific template syntax for Firebase but it is the same concept as concatenation
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotifications(notification);
})
