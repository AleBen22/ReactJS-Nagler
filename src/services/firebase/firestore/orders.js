import { documentId, getDocs, query, collection, writeBatch, where, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'  

export const createOrder = async(cart, objOrder) => {

    const ids = cart.map(prod => prod.id)

    const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

    const productsAddedFromFirestore = await getDocs(productRef)

    const { docs } = productsAddedFromFirestore

    const batch = writeBatch(db)
    const outOfStock = []
                
    docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity
            
        if(stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity })
        } else {
            outOfStock.push({ id: doc, ...dataDoc})
        }
    })

    if(outOfStock.length === 0) {
        batch.commit()

        const orderRef = collection(db, 'orders')

        const orderAdded = await addDoc(orderRef, objOrder)
                    
        return orderAdded.id
                    
    } else {
        const error = 'Se produjo un error generando la orden'
        return error
    }
}