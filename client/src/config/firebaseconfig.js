import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";
require("dotenv/config");

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

firebase.initializeApp(config).auth();
firebase.analytics();
export const projectStorage = firebase.storage();
export const projectFireStore = firebase.firestore();
