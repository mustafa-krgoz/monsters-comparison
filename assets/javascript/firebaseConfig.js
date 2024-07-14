var config = {
    apiKey: "AIzaSyAH1lZdDNKxDUb6qxpzES4fdtDjHlEudDs",
    authDomain: "canavarlar-vs-canavarlar.firebaseapp.com",
    databaseURL: "https://canavarlar-vs-canavarlar.firebaseio.com",
    projectId: "canavarlar-vs-canavarlar",
    storageBucket: "canavarlar-vs-canavarlar.appspot.com",
    messagingSenderId: "434172907026"
};
firebase.initializeApp(config);
var db = firebase.database();
var ref = db.ref();
