import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../firebaseConfig'  

export const getCategories = () => {
    const categoriesRef = query(collection(db, 'categories'), orderBy('label'))

    return getDocs(categoriesRef)
        .then(snapshot => {
            const categoriesAdapted = snapshot.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            return categoriesAdapted
        })
        .catch(error => {
            return error
        })
}