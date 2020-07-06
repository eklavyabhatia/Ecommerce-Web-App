
let productList = $('#product-list')

productList.empty()

fetchProducts(function (products) {
    for (product of products) {
        productList.append(createProduct(product))
    }
})