class Product {
    constructor(id, name, price, stock) {
        this.id = id
        this.name = name
        this.price = price * 1.21
        this.stock = stock
    }
}

const products = []

function addProduct() {
    let name = prompt('Establezca el nombre del producto.')
    let price = parseInt(prompt('Establezca el precio del producto.'))
    let stock = parseInt(prompt('Establezca el stock disponible del producto.'))

    if (name === '' || price === '' || stock === '') {
        return alert('La información solicitada no fue completada.')
    }

    products.push(new Product(parseInt(Math.random() * 10000), name.toLocaleUpperCase(), price, stock))
}

function searchProduct() {
    let product = prompt('Ingrese el nombre o la ID del producto.')

    if (product === '') {
        return alert('La información solicitada no fue completada.')
    }

    let result = products.find(p => p.id === parseInt(product) || p.name === product.toLocaleUpperCase())

    if(!result) {
        return alert('El producto no fue encontrado')
    }

    console.table(result)
}

function addStockProduct() {
    let product = prompt('Ingrese el nombre o la ID del producto.')
    let units = parseInt(prompt('Ingrese las unidades que quiere agregar.'))

    if (product === '' || units === '') {
        return alert('La información solicitada no fue completada.')
    }

    let result = products.find(p => p.id === parseInt(product) || p.name === product.toLocaleUpperCase())

    if(!result) {
        return alert('El producto no fue encontrado')
    }

    const newStock = result.stock + units

    result.stock = newStock
}

function newPriceProduct() {
    let product = prompt('Ingrese el nombre o la ID del producto.')
    let price = parseInt(prompt('Ingrese el nuevo precio del producto.'))

    if (product === '' || price === '') {
        return alert('La información solicitada no fue completada.')
    }

    let result = products.find(p => p.id === parseInt(product) || p.name === product.toLocaleUpperCase())

    if(!result) {
        return alert('El producto no fue encontrado')
    }

    result.price = price * 1.21
}

function buyProduct() {
    let product = prompt('Ingrese el nombre o la ID del producto.')
    let units = parseInt(prompt('Ingrese las unidades que quiere comprar.'))

    if (product === '' || units === '') {
        return alert('La información solicitada no fue completada.')
    }

    let result = products.find(p => p.id === parseInt(product) || p.name === product.toLocaleUpperCase())

    if(!result) {
        return alert('El producto no fue encontrado')
    }

    if (units > result.stock) {
        return alert('No tenemos suficiente stock.')
    }

    result.stock -= units
}

function list() {
    console.table(products)
}