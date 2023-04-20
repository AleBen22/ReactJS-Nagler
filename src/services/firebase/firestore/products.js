import { getDocs, doc, getDoc, collection, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebaseConfig'  
import { createAdaptedProductFromFirestore } from '../../../adapters/createAdaptedProductFromFirestore'

export const getProducts = (categoryId) => {
    const productsRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : query(collection(db, 'products'), orderBy('name'))

    return getDocs(productsRef)
        .then(snapshot => {
            const productsAdapted = snapshot.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
            })
            return productsAdapted
        })
        .catch(error => {
            return error
        })
}

export const getProductsById = (itemId) => {
    const productRef = doc(db, 'products', itemId)

    return getDoc(productRef)
        .then(snapshot =>{
            const data = snapshot.data()
            const productsAdapted = { id: snapshot.id, ...data}
            return productsAdapted
        })
        .catch(error => {
            return error
        })
}