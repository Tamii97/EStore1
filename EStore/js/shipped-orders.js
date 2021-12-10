function writeShippedOrders(){
    const shippedOrders = getShipped();

    let html = '';
    
    if(shippedOrders != null && shippedOrders.length > 0){
        for (const order of shippedOrders) {
            html += `
            <div class="wishlist-page">
                <div class="container-fluid">
                    <div class="wishlist-page-inner">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <h3>Buyer info</h3>
                                    First Name: <b>${order.firstName}</b> <br>
                                    Last Name: <b>${order.lastName}</b> <br>
                                    Email: <b>${order.email}</b> <br>
                                    Mobile: <b>${order.mobile}</b> <br>
                                    Address: <b>${order.address}</b> <br>
                                    ${order.country != '' ? 'Country: <b>'+order.country+'</b> <br>' : ''}
                                    ${order.city != '' ? 'City: <b>'+order.city+'</b> <br>' : ''}
                                    ${order.municipality != '' ? 'Municipality: <b>'+order.municipality+'</b> <br>' : ''}
                                    ${order.zip != '' ? 'Zip Code: <b>'+order.zip+'</b> <br>' : ''}
                                    <br>
                                    <table class="table table-bordered">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody class="align-middle">`;
                                        for (const product of order.cart) {
                                            html += `
                                            <tr>
                                                <td>
                                                    <div class="img">
                                                        <a href="#"><img src="img/${product.picture.src}" alt="${product.picture.alt}"></a>
                                                        <p>${product.name}</p>
                                                    </div>
                                                </td>
                                                <td>$${product.price_discount ? product.price_discount : product.price}</td>
                                                <td>${product.quantity}</td>
                                                <td>$${product.price_discount ? product.price_discount * product.quantity : product.price * product.quantity}</td>
                                            </tr>`;
                                        }
                                html += `</tbody>
                                    </table>
                                    <br>
                                    <div class="float-right">
                                        Date: <b>${order.date}</b> <br>
                                        Shipping method: <b>${order.payingMethod}</b> <br>
                                        Shipping code: <b>${order.shipping_id.toUpperCase()}</b> <br>
                                        Shipping Total Cost: <b>$${order.total}</b> <br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    }
    else{
        html += `
            <div class="wishlist-page">
                <div class="container-fluid">
                    <div class="wishlist-page-inner">
                        <div class="row">
                            <div class="col-md-12">
                                <h2>There are no shipped orders yet!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    $('#content').html(html);
}

writeShippedOrders();