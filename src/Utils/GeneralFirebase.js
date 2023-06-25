import { webDB, auth } from "../Services/FirebaseConnection";
import { collection, addDoc, onSnapshot, doc, deleteDoc, getDocs, query, where, orderBy, getDoc, updateDoc } from "firebase/firestore";

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
 * This function will data from database an set it for a state
 * @param {string} collectionName The name of the collection in the database
 * @param {function} setState Pass here the function that will change the state of the component that stores the fetched data
 * @param {boolean} sortDate Parameter option to order data by insertion date
 */
export const getFullData = async (collectionName, setState, sortDate = false) => {
    try {
        const list = [];
        const userUid = getUserUid();
        const q = sortDate ? query(collection(webDB, collectionName), where("userUid", "==", userUid), orderBy('date', 'desc')) :   query(collection(webDB, collectionName), where("userUid", "==", userUid))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            list.push({
                uid: doc.id,
                ...doc.data()
            })
        })
        setState(list);
    } catch (error) {
        console.log(`Deu algum BO ${error}`);
    }
}

/**
 * This function returns a specific document of a collection
 * @param {string} collectionName - The name of the collection in the database
 * @param {string} id  - Doc id to edit
 * @returns This function returns a object with the data finded of the document or null if does't find nothing
 */
export const getSpecificData = async (collectionName, id) => {
    try{
        const response = await getDoc(doc(webDB, collectionName, id))    
        return response.data();
    } catch (error) {
        return null;
    }
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
/**
 * This function will update a specific doc in a collection
 * @param {string} collectionName The name of the collection in the database
 * @param {string} id The id of the doc that needs to be updated
 * @param {object} data A object with the updated datas
 * @returns This function returns true if successful and false if unsuccessful
 */
export const updateData = async (collectionName, id, data) => {
    try{
        const docRef = doc(webDB, collectionName, id);
        await updateDoc(docRef, data);
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * This function will delete database data
 * @param {string} collection 
 * @param {string} docUid 
 * @returns This function returns true if successful and false if unsuccessful
 */
export const deleteDataById = async (collection, docUid) => {
    try{
        await deleteDoc(doc(webDB, collection, docUid))
        return true;
    } catch (error) {
        return false;
    }
}