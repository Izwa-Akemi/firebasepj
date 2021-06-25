import firebase from 'firebase'


if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyBo7JyGtJKm8JoDhy4ja48MoKABxcCSRX4",
      authDomain: "fir-pj-47fbf.firebaseapp.com",
      projectId: "fir-pj-47fbf",
      storageBucket: "fir-pj-47fbf.appspot.com",
      messagingSenderId: "1041825400337",
      appId: "1:1041825400337:web:fb102aa3cdcaf0b24b13b0",
      measurementId: "G-FKFCTMHX9Z"
    }
  )
}
export default firebase