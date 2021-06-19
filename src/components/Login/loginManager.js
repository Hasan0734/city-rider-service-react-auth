import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializedApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}


export const googleSignIn = () => {
   const provider = new firebase.auth.GoogleAuthProvider();
  return   firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {email, displayName}= result.user;
    const newUserInfo = {
      signedInUser: true,
      name: displayName,
      email: email
    }
   return newUserInfo;
  }).catch((error) => {
    const errorMessage = error.message;
    
    return errorMessage
  });
}
export const signOutUser = () => {
  firebase.auth().signOut()
  .then((res) => {
      console.log("Logout successfull")
  }).catch((error) => {
    console.log(error.message)
  });
}
export const createUserEmalAndPassword = (name, email, password)=> {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((res) => {
    const newUserInfo = {
      signedInUser: true,
      name: name,
      email: email,
      password: password
    }
    updateUserName(name)
    return newUserInfo
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}
export const signInWithEmailPassword = (email, password) => {
 return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((res) => {
    const {displayName, email} = res.user
    const newUserInfo = {
      name: displayName,
      email: email, 
      password: password,
      signedInUser: true
    }
    return newUserInfo;
  })
  .catch((error) => {
    console.log(error)
    const newUserInfo = {};
    return newUserInfo;
  });
}

const updateUserName = (name) => {
  const user = firebase.auth().currentUser;
  user
    .updateProfile({
      displayName: name,
    })
    .then(() => {
      console.log("user profle update successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
