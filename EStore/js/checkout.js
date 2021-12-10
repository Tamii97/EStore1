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
            </div>
        </div>`;

    document.getElementById('shipping').innerHTML = html;
}

function getOrderTotal(){
    const cart = getFromCart();

    let orderTotal = 0;
    let shippingValue = 0;

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

    return orderTotal + shippingValue;
}

function checkout(event){
    event.preventDefault();
    event.stopPropagation();

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const mobile = document.getElementById('mobile');
    const address = document.getElementById('address');
    const country = document.getElementById('country');
    const city = document.getElementById('city');
    const municipality = document.getElementById('municipality');
    const zip = document.getElementById('zip');
    const payingMethod = document.querySelector('input[name="payment"]:checked') != null ? document.querySelector('input[name="payment"]:checked').value : null;
    const total = getOrderTotal();

    if(total == 0) {
        window.alert('Cart is empty!');
        return;
    }
    
    const regexName = /^[A-ZŽĐŠĆČ][a-zžđšćč]{2,}$/;
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexMobile = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9,10})$/;
    const regexAddress = /^[a-zžđšćčA-ZŽĐŠĆČ0-9\s,'-]*$/;
    const regexZip = /^[0-9]{5,30}$/;

    firstName.classList.remove('is-invalid');
    lastName.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    mobile.classList.remove('is-invalid');
    address.classList.remove('is-invalid');
    country.classList.remove('is-invalid');
    municipality.classList.remove('is-invalid');
    zip.classList.remove('is-invalid');
    document.getElementById('payment-method').style.display = 'none';

    let ok = true;

    if(!regexName.test(firstName.value.trim())){
        firstName.classList.add('is-invalid');
        ok = false;
    }

    if(!regexName.test(lastName.value.trim())){
        lastName.classList.add('is-invalid');
        ok = false;
    }

    if(!regexEmail.test(email.value.trim())){
        email.classList.add('is-invalid');
        ok = false;
    }
    
    if(!regexMobile.test(mobile.value.trim())){
        mobile.classList.add('is-invalid');
        ok = false;
    }

    if(address.value.trim() == ''){
        address.classList.add('is-invalid');
        ok = false;
    }else {
        if(!regexAddress.test(address.value.trim())){
            address.classList.add('is-invalid');
            ok = false;
        }
    }

    if(city.value.trim() != ''){
        if(!regexAddress.test(city.value.trim())){
            city.classList.add('is-invalid');
            ok = false;
        }
    }

    if(municipality.value.trim() != ''){
        if(!regexAddress.test(municipality.value.trim())){
            municipality.classList.add('is-invalid');
            ok = false;
        }
    }

    if(zip.value.trim() != ''){
        if(!regexZip.test(zip.value.trim())){
            zip.classList.add('is-invalid');
            ok = false;
        }
    }

    if(payingMethod == null){
        document.getElementById('payment-method').style.display = 'block';
        ok = false;
    }

    
    if(ok){
        shipped = {
            shipping_id: CryptoJS.MD5(Date.now().toString()).toString(),
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            email: email.value.trim(),
            mobile: mobile.value.trim(),
            address: address.value.trim(),
            country: country.value.trim(),
            city: city.value.trim(),
            municipality: municipality.value.trim(),
            zip: zip.value.trim(),
            payingMethod: payingMethod,
            total: total,
            cart: getFromCart(),
            date: getCurrentDate()
        }

        let shippedOrders = getShipped();

        if(shippedOrders != null){
            shippedOrders.push(shipped);
        }
        else{
            shippedOrders = [shipped];
        }

        localStorage.setItem('shipped', JSON.stringify(shippedOrders));
        localStorage.setItem('cart', null);

        firstName.classList.remove('is-invalid');
        lastName.classList.remove('is-invalid');
        email.classList.remove('is-invalid');
        mobile.classList.remove('is-invalid');
        address.classList.remove('is-invalid');
        country.classList.remove('is-invalid');
        municipality.classList.remove('is-invalid');
        zip.classList.remove('is-invalid');
        document.getElementById('payment-method').style.display = 'none';

        displayCartTotal();
        writeCartTotalWithShipping();
        window.alert('Successful purchase!');

        window.location.href = 'shipped-orders.html';
    }
}

writeCartTotalWithShipping();

document.getElementById('checkout').addEventListener('click', checkout);