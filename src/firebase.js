import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBIQhkdMN61q2fqockKJBnXbYOCn8hGGLQ",
    authDomain: "goalcoach-6ef7d.firebaseapp.com",
    databaseURL: "https://goalcoach-6ef7d.firebaseio.com",
    projectId: "goalcoach-6ef7d",
    storageBucket: "",
    messagingSenderId: "1023952880516"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completedGoals');