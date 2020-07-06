function fetchProducts(done) {
    $.get('/api/products', function (data) {
        console.log(data)
        done(data)
    })
}

function createProduct(product) {
    return $(`
    <div class="card col-3" style="width: 18rem;">
      <div class="card-body">
        <h4 class="card-title">${product.name}</h4>
        <div class="small">${product.manufacturer}</div>
        <p class="card-text mt-2">${product.price}</p>
        <button class="btn btn-primary">Buy</button>
      </div>
    </div>`)
}

function addProduct(name, manufacturer, price, done) {

    $.post('/api/products', {
        name: name,
        manufacturer: manufacturer,
        price: price
    }, function (data) {
        done(data)
    })
}