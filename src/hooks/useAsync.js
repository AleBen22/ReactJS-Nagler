import { useEffect, useState } from 'react'

export const useAsync = (asyncFunction, dependencies) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    if(!Array.isArray(dependencies)) {
        console.error('No se pasaron correctamente las dependencias')
        dependencies = []
    }

    useEffect(() => {

        asyncFunction()
            .then(data => {
                setData(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [...dependencies])//eslint-disable-line

    return {
        data,
        error,
        loading
    }
}