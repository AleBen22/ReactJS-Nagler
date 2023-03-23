const products = [
    {
            id: '1',
            name: 'Dicroica led luz fria',
            price: 540,
            category: 'electricidad',
            img: '../img/dicroica.jpg',
            stock: 0,
            description: 'lampara dicroica led 7 watts 12 volts luz fria'
    },
    {
        id: '2',
        name: 'Dicroica led luz calida',
        price: 550,
        category: 'electricidad',
        img: '../img/dicroica.jpg',
        stock: 26,
        description: 'lampara dicroica led 7 watts 12 volts luz calida'
    },
    {
        id: '3',
        name: 'Tubo led luz fria',
        price: 596,
        category: 'electricidad',
        img: '../img/tubo.jpg',
        stock: 18,
        description: 'tubo led 18 watts luz fria'
    },
    {
        id: '4',
        name: 'Tubo led luz calida',
        price: 598,
        category: 'electricidad',
        img: '../img/tubo.jpg',
        stock: 18,
        description: 'tubo led 18 watts luz calida'
    },
    {
        id: '5',
        name: 'Luz emergencia 60 leds',
        price: 5499,
        category: 'seguridad',
        img: '../img/luz emergencia 60led.jpg',
        stock: 12,
        description: 'equipo de luz de emergencia 60 leds'
    },
    {
        id: '6',
        name: 'Luz emergencia 30 leds',
        price: 3699,
        category: 'seguridad',
        img: '../img/luz emergencia 30led.png',
        stock: 12,
        description: 'equipo de luz de emergencia 30 leds'
    },
    {
        id: '7',
        name: 'Lavandina x 1.5 lts',
        price: 608,
        category: 'limpieza',
        img: '../img/lavandina.png',
        stock: 8,
        description: 'lavandina gel aroma citrico x 1.5 lts'
    },
    {
        id: '8',
        name: 'Detergente 500ml',
        price: 468,
        category: 'limpieza',
        img: '../img/detergente.png',
        stock: 120,
        description: 'detergente active gel limon concentrado 500ml'
    },
    {
        id: '9',
        name: 'Felpudo',
        price: 11010,
        category: 'otros',
        img: '../img/felpudo.png',
        stock: 5,
        description: 'felpudo pvc rulo 3m alto transito 130x90cm'
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}