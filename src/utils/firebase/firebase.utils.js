import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, connectFirestoreEmulator } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTreNmTNzqlwRKcbRbXh9QoTKgPz99LvA",
    authDomain: "crwn-clothing-db-25a2d.firebaseapp.com",
    projectId: "crwn-clothing-db-25a2d",
    storageBucket: "crwn-clothing-db-25a2d.appspot.com",
    messagingSenderId: "963291254301",
    appId: "1:963291254301:web:5698519d726bef09dbc0f4"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    //if user data not exist
    //create / set the document with the data from userAuth in my collection
    //if user data exists 
    //return userDocRef
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })
        }catch(error){
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef
  }