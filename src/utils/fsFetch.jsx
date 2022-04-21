import { query, orderBy, where, collection, getDocs } from "@firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig'

export const fsFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "products"), where('id', '==', id));
    } else {
        q = query(collection(db, "products"), orderBy('nombre'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFireStore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFireStore;
}

export const fsFetchOne = async (idItem) => {
    const docRef = doc(db, "productos", idItem);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return {
            idItem: idItem,
            ...docSnap.data()
        }
    } else {
        console.log("No se encontró el documento.")
    }
}