import { db, auth, basicInfoCollection } from '@/composables/fireInit'
import { BasicInfoFormData } from './staticData'
import { addDoc, collection } from "firebase/firestore"


const SaveBasicInfo = () => {
    addDoc(collection(db, basicInfoCollection.value), BasicInfoFormData.value).then((docData) => {
        alert(docData.id);
    }).catch((e) => console.log(e.message));

}



export { SaveBasicInfo }