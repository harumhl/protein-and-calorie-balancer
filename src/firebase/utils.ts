import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { getDoc, getFirestore, setDoc } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { LOCAL_STORAGE_PREFIX } from "../utils/constants";
import { ImportExport } from "../utils/import_export";
import { toast } from "react-toastify";

const LOCAL_STORAGE_FIREBASE_KEY = `${LOCAL_STORAGE_PREFIX}:firebase`;

type FirebaseInfo = {
  username: string;
};

export const firebaseInfo: FirebaseInfo = ((): FirebaseInfo => {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_FIREBASE_KEY) || "{}");
  } catch {
    return { username: "" };
  }
})();

const firebaseConfig: FirebaseOptions = {
  // Get from https://console.firebase.google.com/u/0/project/.../settings/general/
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "",
};

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
export const firebaseDb = getFirestore(firebaseApp);

export const addData = async (data: object) => {
  if (!firebaseInfo.username) return;

  // TODO 'data' type
  try {
    const docRef = doc(firebaseDb, "data", firebaseInfo.username);
    await setDoc(docRef, data);
    toast.success("Saved to the the server");
    console.log("Document written with ID: ", docRef);
  } catch (e) {
    toast.error("Failed to save to the server");
    console.error("Error adding document: ", e);
  }
};

export const updateData = async (data: object) => {
  if (!firebaseInfo.username) return;

  // TODO 'data' type
  try {
    const docRef = doc(firebaseDb, "data", firebaseInfo.username);
    await updateDoc(docRef, data);
    toast.success("Saved to the the server");
    console.log("Document updated with ID: ", docRef);
  } catch (e) {
    toast.error("Failed to save to the server");
    console.error("Error updating document: ", e);
  }
};

export const getData = async (): Promise<
  (ImportExport & { id: string; timestamp: number }) | undefined
> => {
  if (!firebaseInfo.username) return;

  try {
    const docRef = doc(firebaseDb, "data", firebaseInfo.username);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as ImportExport & {
        id: string;
        timestamp: number;
      };
    } else {
      return;
    }
  } catch (e) {
    toast.error("Failed to get data from the server");
    console.error("Error getting document: ", e);
    return;
  }
};
