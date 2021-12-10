const search = window.location.search;

const product_id = parseInt(search.substr(search.indexOf('=')+1));

const product = product_id != NaN ? products.find(p => p.id === product_id) : undefined;

displayProduct(product);


function displayProduct(product)
{
    let productHTML = '';

    if (product != undefined) {

        productHTML = `
            <div class="col-md-5">
                <div class="product-slider-single normal-slider">

                </div>
                <div class="product-slider-single-nav normal-slider">
                    <div class="slider-nav-img"><img src="img/${product.picture.src}" alt="${product.picture.alt}"></div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="product-content">
                    <div class="title"><h2>${product.name}</h2></div>
                    <div class="ratting">`;
                        for(let i=0; i<product.rating; i++){
                            productHTML += '<i class="fa fa-star"></i>';
                        }
    productHTML += `</div>
                    <div class="price">
                        <h4>Price:</h4>`;
                        if(product.price_discount > 0){
                            productHTML += `<p>$${product.price_discount} <span>$${product.price}</span></p>`;
                        }
                        else{
                            productHTML += `<p>$${product.price}</p>`;
                        }
    productHTML += `</div>
                    <div class="quantity">
                        <h4>Quantity:</h4>
                        <div class="qty">
                            <button class="btn-minus"><i class="fa fa-minus"></i></button>
                            <input type="text" value="1" id="quantity">
                            <button class="btn-plus"><i class="fa fa-plus"></i></button>
                        </div>
                    </div>
                    <div class="p-size">
                        <h4>Size:</h4>
                        <div class="btn-group btn-group-sm">`;
                            for(const size of product.sizes){
                                productHTML += `<button type="button" class="btn">${size.trim()}</button>`;
                            }
        productHTML += `</div> 
                    </div>
                    <div class="p-color">
                        <!--<h4>Color:</h4>
                        <div class="btn-group btn-group-sm">
                            <button type="button" class="btn">White</button>
                            <button type="button" class="btn">Black</button>
                            <button type="button" class="btn">Blue</button>
                        </div> -->
                    </div>
                    <div class="action">
                        <a class="btn add-to-cart" href="#" data-id="${product.id}"><i class="fa fa-shopping-cart"></i>Add to Cart</a>
                    </div>
                </div>
            </div>`;
    }
    else {
        productHTML += '<div class="col-md-5 center-block"><h1>PRODUCT NOT FOUND!</h1></div>';
    }

    $('#product').html(productHTML);
}

$('.add-to-cart').on('click', function(e){
    e.preventDefault();
    const quantity = parseInt($('#quantity').val());
    addToCart(quantity);
});

function addToCart(quantity){
    cart = getFromCart();

    if(cart != null){
        const productInCart = cart.find(p => p.id === product.id);
        if(productInCart){
            arrToCart = cart.map(item => {
                if(item.id === product.id)
                    item.quantity += quantity;
                return item;
            });
            
            localStorage.setItem('cart', JSON.stringify(arrToCart));
            displayCartTotal();
            window.alert('Cart sucessfully updated!');
        }
        else{
            product.quantity = quantity;
            cart.push(product);
            //cart.reverse();
            
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCartTotal();
            window.alert('Product sucessfully added to cart!');
        }
    }
    else{
        product.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify([product]));
        displayCartTotal();
        window.alert('Product sucessfully added to cart!');
    }

    window.location.replace('cart.html');
}

$(document).on('click', '.btn-plus', function(e){
    e.preventDefault();
    let currentValue = $(this).closest('.qty').find('input[type=text]');
    currentValue.val(parseInt(currentValue.val())+1);
});

$(document).on('click', '.btn-minus', function(e){
    e.preventDefault();
    let currentValue = $(this).closest('.qty').find('input[type=text]');
    if (parseInt(currentValue.val()) > 1) {
        currentValue.val(parseInt(currentValue.val())-1);
    }
});