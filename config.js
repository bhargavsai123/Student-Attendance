import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCQs8VXTMj8pdi_A0nZhCo1ClbuzlOc5W8',
  authDomain: 'student-attendance-c6382.firebaseapp.com',
  databaseURL: 'https://student-attendance-c6382.firebaseio.com',
  projectId: 'student-attendance-c6382',
  storageBucket: 'student-attendance-c6382.appspot.com',
  messagingSenderId: '439861088226',
  appId: '1:439861088226:web:2a2a4b1c4ed9e605d7f3bb',
};
// Initialize Firebase

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
