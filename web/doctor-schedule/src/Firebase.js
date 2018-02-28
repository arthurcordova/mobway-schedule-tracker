import firebase from 'firebase'
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZgfYTrnsrmxrB_ZkbiRes84IuZSVNtXs",
    authDomain: "mobway-schedule-tracker.firebaseapp.com",
    databaseURL: "https://mobway-schedule-tracker.firebaseio.com",
    projectId: "mobway-schedule-tracker",
    storageBucket: "mobway-schedule-tracker.appspot.com",
    messagingSenderId: "381332215711"
  };
var firebase = firebase.initializeApp(config);
export default firebase;