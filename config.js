import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBSVXPrCF4oqKSuYCla01_WINGF4I0iiDI",
    authDomain: "team-voting-113c2.firebaseapp.com",
    databaseURL: "https://team-voting-113c2-default-rtdb.firebaseio.com",
    projectId: "team-voting-113c2",
    storageBucket: "team-voting-113c2.appspot.com",
    messagingSenderId: "851104377277",
    appId: "1:851104377277:web:9d8dc2b944193f8f300ad4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();