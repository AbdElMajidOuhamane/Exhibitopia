import {collection, doc,getDocs,serverTimestamp,setDoc} from "firebase/firestore"
import  { db } from "../lib/firebase.config"




const Firestore= {
    readDocs: (...args) => {
        const [collections_name]=args
        let docs = []
        const ref = collection(db, "stocks")
        return new Promise(async resolve => {
            try {
                const snapshots = await getDocs(ref)
                snapshots.forEach(doc => {
                    const d = {...doc.data()}
                    docs.push(d)
                })
                resolve(docs)
            } catch(e) {
                console.log(e)
            }
        })
    },
    writeDoc: (...args) => {
        const [inputs,collections_name]=args
        return new Promise(async (resolve) =>{

            const randomIndex=Math.floor(Math.random()*100000000)
            try{
                const docRef = doc(db,"stocks",`${randomIndex}`)
                await setDoc(docRef,{ title: inputs.title,path:inputs.path, createdAt: serverTimestamp()});
                resolve(' new do successfully inserted ')

            }catch(e){

            }
        })
    }
}

export default Firestore;