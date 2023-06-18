import { webDB, auth } from "../Services/FirebaseConnection";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

/**
 * This funciton sends data to the database generating an automatic id
 * @param {string} collectionName - The name of the collection in the database
 * @param {object} data - Object with the data to be sent
 * @returns - true if successful | false if unsuccessful
 */
export const sendDataAutoID = async (collectionName, data) => {
    try {
        await addDoc(collection(webDB, collectionName), {
            date: new Date(),
            ...data
        })
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * @returns The user uid
 */
export const getUserUid = () => {
    return auth.currentUser.uid;
}


/**
 * This function will fetch data in real time from some database table
 * @param {string} collectionName The name of the collection in the database
 * @param {function} setState Pass here the function that will change the state of the component that stores the fetched data
 * @param {boolean} sortDate Parameter option to order data by insertion date
 */
export const getRealTimeData = async (collectionName, setState, sortDate = false) => {
    await onSnapshot(collection(webDB, collectionName), (snapshot) => {
        const list = [];
        snapshot.forEach((doc) => {
            list.push({
                uid: doc.id,
                ...doc.data()
            })
        })        

        if (sortDate){
            list.sort((a, b) => {
                const dataA = new Date(a.date.seconds * 1000 + a.date.nanoseconds / 1000000);
                const dataB = new Date(b.date.seconds * 1000 + b.date.nanoseconds / 1000000);
                return dataB - dataA; 
            })
        }

        setState(list);
    })
}

export const deleteDataById = async (collection, docUid) => {

}