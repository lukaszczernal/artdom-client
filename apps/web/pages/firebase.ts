import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBHeFSmoFCTct9rb1420ByPfiRBbkRj0kI',
  authDomain: 'artdom-katalog-desktop.firebaseapp.com',
  databaseURL: 'https://artdom-katalog-desktop.firebaseio.com',
  projectId: 'artdom-katalog-desktop',
  storageBucket: 'artdom-katalog-desktop.appspot.com',
  messagingSenderId: '12057105480',
  appId: '1:12057105480:web:4f7cf5767eba5dcc4cb47d',
  measurementId: 'G-4RQ0GZ5F0K',
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const fireDB = getDatabase(app);
export const fireStore = getFirestore(app);
