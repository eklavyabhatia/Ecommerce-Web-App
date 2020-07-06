let btn = $('#btnAdd')

let price = $('#price')
let productName = $('#productName')
let manufacturerName = $('#manufacturerName')


btn.click(function () {

    addProduct(productName.val(), manufacturerName.val(), price.val(), function (addedProduct) {
        window.alert("Product Added Successfully")
    })
})
