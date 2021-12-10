function writeFromCart()
{
    const cart = getFromCart();

    let html = '';
    
    if(cart != null && cart.length > 0){
        html += `
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody class="align-middle">`;

        for (const product of cart) {
            html += `
                <tr>
                    <td>
                        <div class="img">
                            <a href="#"><img src="img/${product.picture.src}" alt="${product.picture.alt}"></a>
                            <p>${product.name}</p>
                        </div>
                    </td>
                    <td>$${product.price_discount ? product.price_discount : product.price}</td>
                    <td>
                        <div class="qty">
                            <button class="btn-minus" data-id="${product.id}"><i class="fa fa-minus"></i></button>
                            <input type="text" value="${product.quantity}">
                            <button class="btn-plus" data-id="${product.id}"><i class="fa fa-plus"></i></button>
                        </div>
                    </td>
                    <td>$${product.price_discount ? product.price_discount * product.quantity : product.price * product.quantity}</td>
                    <td><button class="btn-delete" data-id="${product.id}"><i class="fa fa-trash"></i></button></td>
                </tr>`;
        }

        html += `
                </tbody>
            </table>
        </div>`;
    }
    else{
        html += '<h2>Cart is empty!</h2>';
    }

    $('#table').html(html);
}

function writeCartTotalWithShipping(){
    
    const cart = getFromCart();

    let orderTotal = 0;
    let shippingValue = 0;
    let html = '';

    if(cart != null && cart.length > 0){
        shippingValue = 30;

        for (const product of cart) {
            orderTotal += product.price_discount ? product.price_discount * product.quantity : product.price * product.quantity;
        }

        if(orderTotal > 100){
            shippingValue = 20;
        }

        if(orderTotal > 300){
            shippingValue = 10;
        }
    }
    
    html += `
        <div class="col-md-12">
            <div class="cart-summary">
                <div class="cart-content">
                    <h1>Cart Summary</h1>
                    <p>Order Total<span>$${orderTotal}</span></p>
                    <p>Shipping Cost<span>$${shippingValue}</span></p>
                    <h2>Grand Total<span>$${orderTotal + shippingValue}</span></h2>
                </div>
                <div class="cart-btn">
                    <button style="display: block;margin: 25px auto 0px auto;" id="checkout">Checkout</button>
                </div>
            </div>
        </div>`;

    $('#shipping').html(html);    
}

function cartUpdateQuantity(newValue, id)
{
    cart = getFromCart();
    
    cartNewArr = cart.map(item => {
        if(item.id === id)
            item.quantity = newValue;
        return item;
    });
    
    localStorage.setItem('cart', JSON.stringify(cartNewArr));
}

function cartRemoveProduct(id)
{
    cart = getFromCart();
    
    cartNewArr = cart.filter(item => item.id !== id);
    
    localStorage.setItem('cart', JSON.stringify(cartNewArr));
}

writeFromCart();
writeCartTotalWithShipping();

$(document).on('click', '.btn-plus', function(e){
    e.preventDefault();
    let currentValue = $(this).closest('.qty').find('input[type=text]').val();
    currentValue = parseInt(currentValue) + 1;
    id = parseInt($(this).data('id'));

    cartUpdateQuantity(currentValue, id);
    displayCartTotal();
    writeFromCart();
    writeCartTotalWithShipping();
});

$(document).on('click', '.btn-minus', function(e){
    e.preventDefault();
    let currentValue = $(this).closest('.qty').find('input[type=text]').val();
    currentValue = parseInt(currentValue) - 1;
    id = parseInt($(this).data('id'));

    if (currentValue >= 1) {
        cartUpdateQuantity(currentValue, id);
        displayCartTotal();
        writeFromCart();
        writeCartTotalWithShipping();
    }
});

$(document).on('click', '.btn-delete', function(e){
    e.preventDefault();
    id = parseInt($(this).data('id'));
    
    cartRemoveProduct(id);
    displayCartTotal();
    writeFromCart();
    writeCartTotalWithShipping();
});

$(document).on('click', '#checkout', function(e){
    e.preventDefault();
    window.location.href = 'checkout.html';
})