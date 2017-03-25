// firebase requirements
let firebase = require('firebase');
let admin = require('firebase-admin');
let serviceAccount = require('./firebase.json');

//initialize firebase admin for databse access
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://comp308-w2017-lesson10.firebaseio.com/"
});

// initialize firebase web
// initialize firebase
var config = {
    apiKey: "AIzaSyA7BtFdIXaYF2idZqS8AFcW-OpM6zlchek",
    authDomain: "comp308-w2017-lesson10.firebaseapp.com",
    databaseURL: "https://comp308-w2017-lesson10.firebaseio.com",
    storageBucket: "comp308-w2017-lesson10.appspot.com",
    messagingSenderId: "901565402931"
  };
  firebase.initializeApp(config); 

  let firebaseDB = admin.database();

  module.exports.games = firebaseDB.ref("games");

  module.exports.admin = admin;

  module.exports.auth = firebase.auth();