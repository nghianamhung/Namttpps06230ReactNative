 
 import * as firebase from 'firebase';
 var config = {
  apiKey: "AIzaSyCf4q8lV1rD0fHmOnw8vvvp_1CXgHtU4B0",
  authDomain: "projectreact-native.firebaseapp.com",
  databaseURL: "https://projectreact-native.firebaseio.com",
  projectId: "projectreact-native",
  storageBucket: "projectreact-native.appspot.com",
  messagingSenderId: "139837412344"
};
  
  export const firebaseApp = firebase.initializeApp(config,"myApp");