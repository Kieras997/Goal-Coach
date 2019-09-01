import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC-MZVBNp8HaAiNo5uEultASy3nmUJ9TxM",
    authDomain: "goalcoach-4eaef.firebaseapp.com",
    databaseURL: "https://goalcoach-4eaef.firebaseio.com",
    projectId: "goalcoach-4eaef",
    storageBucket: "goalcoach-4eaef.appspot.com",
    messagingSenderId: "1039619598919"
};

export const firebaseApp = firebase.initializeApp(config);

export const goalRef = firebase.database().ref('goals');

export const completeGoalRef = firebase.database().ref('completeGoals');