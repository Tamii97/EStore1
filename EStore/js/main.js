let categoriesHTML = '';
for (const category of categories) {
    categoriesHTML += `
    <li class="nav-item main-nav-item" style="border: none;">`;
        categoriesHTML += `<a class="nav-link" href="#"><i class="${category.class}"></i>${category.text}</a>`;
        if(category.subcategories != null){
            categoriesHTML += `<ul class="navbar-nav submenu" style="padding:0;">`;
            for (const subcategory of category.subcategories) {
                categoriesHTML += `<li class="nav-item" style="border: none;"><a class="nav-link" href="#"><i class="${subcategory.class}"></i>${subcategory.text}</a></li>`;
            }
            categoriesHTML += `</ul>`;
        }
    categoriesHTML += `</li>`;
}
$('#categories_index').html(categoriesHTML);

let customersHTML = '';
for (const customer of customers) {
    customersHTML += `
    <div class="col-md-6">
        <div class="review-slider-item">
            <div class="review-img">
                <img src="img/${customer.image.src}" alt="${customer.image.alt}">
            </div>
            <div class="review-text">
                <h2>${customer.name}</h2>
                <h3>${customer.Country}</h3>
                <div class="ratting">`;
                for (let i=0; i<customer.rating; i++) {
                   customersHTML += `<i class="fa fa-star"></i>`; 
                }                   
customersHTML += `</div>
                <p>
                   ${customer.comment}
                </p>
            </div>
        </div>
    </div>`;
}
$('#customers').html(customersHTML);

let featuredProducts = products.filter(item => item.featured == 1);
writeProducts(featuredProducts, 'col-lg-3', '#featured');

$(document).on('click', '.main-nav-item', function(e){
    e.preventDefault();
    $(this).find('.submenu').slideToggle();
});

$(document).on('click', '#email-submit', function(e){
    e.preventDefault();
    email = $('#email').val();
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!emailRegex.test(email)){
        window.alert('Invalid email format!');
        return;
    }

    $('#subss').html('<h2 class="float-right" style="color:white;">Thank you for subscribe!</h2>');
});