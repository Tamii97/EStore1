/**
 * Navigacija
 */
var navmenu = 
[
    {
        id: 1,
        href: 'index.html',
        text: 'Home'
    },
    {
        id: 2,
        href: 'product-list.html',
        text: 'Products'
    },
    {
        id: 3,
        href: 'cart.html',
        text: 'Cart'
    },
    {
        id: 4,
        href: 'checkout.html',
        text: 'Checkout'
    },
    {
        id: 5,
        href: 'shipped-orders.html',
        text: 'Shipped Orders'
    },
    {
        id: 6,
        href: 'contact.html',
        text: 'Contact Us'
    },
    {
        id: 7,
        href: 'author.html',
        text: 'Author'
    },
];

/**
 * Kategorije
 */
var categories = 
[
	    {
        id: 1,
        class: 'fa fa-tshirt',
        text: 'Men\'s Fashion',
        href: 'product-list.html',		
        subcategories: [
            {
                id: 1,
                class: 'fa fa-tshirt',
                text: 'Shirts'
            },
            {
                id: 2,
                class: 'fa fa-tshirt',
                text: 'Jeans'
            }
        ]
    },
    {
        id: 2,
        class: 'fa fa-female',
        text: 'Women\'s Fashion',
        subcategories: [
            {
                id: 1,
                class: 'fa fa-female',
                text: 'Dresses'
            },
            {
                id: 2,
                class: 'fa fa-female',
                text: 'Blouses'
            },
            {
                id: 3,
                class: 'fa fa-female',
                text: 'Jeans'
            }
        ]
    }
];

/**
 * Proizvodi
 */
var products = 
[
    {
        id: 1,
        name: 'Dress 1',
        color: '#fff',
        picture: {
            src: 'haljina1.jpg',
            alt: 'haljina'
        },
        price: 100,
        price_discount: 0,
        rating: 5,
        sizes: ['S', ' M', ' L'],
        featured: 1,
        category_id : 2,
        subcategory_id: 1
    },
    {
        id: 2,
        name: 'Dress 2',
        color: '#fff',
        picture: {
            src: 'haljina2.jpg',
            alt: 'haljina2'
        },
        price: 80,
        price_discount: 0,
        rating: 4,
        sizes: ['M', ' L'],
        featured: 1,
        category_id : 2,
        subcategory_id: 1
    },
    {
        id: 3,
        name: 'Dress 3',
        color: '#fff',
        picture: {
            src: 'haljina3.jpg',
            alt: 'haljina3'
        },
        price: 90,
        price_discount: 0,
        rating: 3,
        sizes: ['S', ' L'],
        featured: 1,
        category_id : 2,
        subcategory_id: 1
    },
    {
        id: 4,
        name: 'Dress 4',
        color: '#fff',
        picture: {
            src: 'haljina4.png',
            alt: 'haljina4'
        },
        price: 50,
        price_discount: 40,
        rating: 5,
        sizes: ['M'],
        featured: 1,
        category_id : 2,
        subcategory_id: 1
    },
    {
        id: 5,
        name: 'Blouse 1',
        color: '#fff',
        picture: {
            src: 'bluza1.jpg',
            alt: 'bluza1'
        },
        price: 65,
        price_discount: 0,
        rating: 3,
        sizes: ['S', ' M', ' L', ' XL'],
        featured: 0,
        category_id : 2,
        subcategory_id: 2
    },
    {
        id: 6,
        name: 'Blouse 2',
        color: '#fff',
        picture: {
            src: 'bluza2.jpg',
            alt: 'bluza2'
        },
        price: 70,
        price_discount: 60,
        rating: 4,
        sizes: ['M', ' XL'],
        featured: 0,
        category_id : 2,
        subcategory_id: 2
    },
    {
        id: 7,
        name: 'Blouse 3',
        color: '#fff',
        picture: {
            src: 'bluza3.jpg',
            alt: 'bluza3'
        },
        price: 58,
        price_discount: 0,
        rating: 5,
        sizes: ['S', ' M'],
        featured: 0,
        category_id : 2,
        subcategory_id: 2
    },
    {
        id: 8,
        name: 'Blouse 4',
        color: '#fff',
        picture: {
            src: 'bluza4.jpg',
            alt: 'bluza4'
        },
        price: 70,
        price_discount: 50,
        rating: 4,
        sizes: ['S', ' M', ' XL'],
        featured: 0,
        category_id : 2,
        subcategory_id: 2
    },
    {
        id: 9,
        name: 'Women Jeans 1',
        color: '#fff',
        picture: {
            src: 'farmerke-zenske1.jpg',
            alt: 'duks'
        },
        price: 60,
        price_discount: 50,
        rating: 4,
        sizes: ['S', ' L', ' XL'],
        featured: 0,
        category_id : 2,
        subcategory_id: 3
    },
    {
        id: 10,
        name: 'Women Jeans 2',
        color: '#fff',
        picture: {
            src: 'farmerke-zenske2.jpg',
            alt: 'farmerke'
        },
        price: 55,
        price_discount: 0,
        rating: 3,
        sizes: ['S', ' M', ' L', ' XL'],
        featured: 0,
        category_id : 2,
        subcategory_id: 3
    },
    {
        id: 11,
        name: 'Women Jeans 3',
        color: '#fff',
        picture: {
            src: 'farmerke-zenske3.jpg',
            alt: 'farmerke'
        },
        price: 60,
        price_discount: 30,
        rating: 5,
        sizes: ['L', ' XL'],
        featured: 0,
        category_id : 2,
        subcategory_id: 3
    },
    {
        id: 12,
        name: 'Men Jeans 1',
        color: '#fff',
        picture: {
            src: 'farmerke-muske1.jpg',
            alt: 'farmerke'
        },
        price: 60,
        price_discount: 50,
        rating: 4,
        sizes: ['L'],
        featured: 0,
        category_id : 1,
        subcategory_id: 2
    },
    {
        id: 13,
        name: 'Men Jeans 2',
        color: '#fff',
        picture: {
            src: 'farmerke-muske2.jpg',
            alt: 'farmerke'
        },
        price: 40,
        price_discount: 0,
        rating: 3,
        sizes: ['S', ' M', ' L', ' XL'],
        featured: 0,
        category_id : 1,
        subcategory_id: 2
    },
    {
        id: 14,
        name: 'Men Jeans 3',
        color: '#fff',
        picture: {
            src: 'farmerke-muske3.jpg',
            alt: 'farmerke'
        },
        price: 55,
        price_discount: 0,
        rating: 5,
        sizes: ['S', ' M', ' L', ' XL'],
        featured: 0,
        category_id : 1,
        subcategory_id: 2
    },
    {
        id: 15,
        name: 'Men Shirt 1',
        color: '#fff',
        picture: {
            src: 'kosulja1.jpg',
            alt: 'kosulje'
        },
        price: 20,
        price_discount: 16,
        rating: 5,
        sizes: ['S', ' M', ' L', ' XL', ' XXL'],
        featured: 0,
        category_id : 1,
        subcategory_id: 1
    },
    {
        id: 16,
        name: 'Men Shirt 2',
        color: '#fff',
        picture: {
            src: 'kosulja2.jpg',
            alt: 'kosulje'
        },
        price: 22,
        price_discount: 0,
        rating: 4,
        sizes: ['S', ' L', ' XXL'],
        featured: 0,
        category_id : 1,
        subcategory_id: 1
    },
    {
        id: 17,
        name: 'Men Shirt 3',
        color: '#fff',
        picture: {
            src: 'kosulja3.jpg',
            alt: 'kosulje'
        },
        price: 20,
        price_discount: 0,
        rating: 5,
        sizes: ['S', ' XL', ' XXL'],
        featured: 0,
        category_id : 1,
        subcategory_id: 1
    },
];

/**
 * Kupci
 */
var customers = 
[
    {
        id: 1,
        name: 'Elizabeth',
        Country: 'US',
        image: {
            src: 'review-1.jpg',
            alt: 'rev1'
        },
        rating: 5,
        comment: 'I absolutely love EStore. Their selections, prices, notifications and returns are so easy and customer friendly.'
    },
    {
        id: 2,
        name: 'Bill ',
        Country: 'Greece',
        image: {
            src: 'review-2.jpg',
            alt: 'rev2'
        },
        rating: 5,
        comment: ' My wife and I have been prime members for many years and have ordered 50\'s of products from EStore. Never a bad experience. Products delivered promptly, and issues are quickly resolved. Their prices are very fair, and their customer service is excellent.'
    },
    {
        id: 3,
        name: 'Jovana',
        Country: 'Serbia',
        image: {
            src: 'review-3.jpg',
            alt: 'rev3'
        },
        rating: 4,
        comment: 'With EStore you can leisurely shop in the comfort of your own home.'
    },
	{
        id: 4,
        name: 'Susan',
        Country: 'Germany',
        image: {
            src: 'review-4.jpg',
            alt: 'rev3'
        },
        rating: 4,
        comment: 'I always find exactly what I need at EStore. I really don\'t have to shop around and for me, time is of the essence. I have a busy schedule and EStore is perfect. I always find the perfect dresses.'
    }
];

let navmenuHTML = '';
for (const item of navmenu) {
    navmenuHTML += `<a href="${item.href}" class="nav-item nav-link">${item.text}</a>`;
}
$('#navmenu').html(navmenuHTML);

displayCartTotal();

//localStorage.setItem('cart', null); //brisanje korpe rucno
//localStorage.setItem('shipped', null); //brisanje porudzbina rucno

console.warn(getFromCart());
console.log(getShipped());

function writeProducts(products, col_size, toElement)
{
    html = '';
    for (const product of products) {
        html += `<div class="${col_size}">`;
        html += `
        <div class="product-item">
            <div class="product-title">
                <a href="product-detail.html?id=${product.id}">${product.name}</a>
                <div class="ratting">`;
                for (let i=0; i < product.rating; i++) {
                    html += `<i class="fa fa-star"></i>`;
                }
        html += `</div>
            </div>
            <div class="product-image">
                <a href="product-detail.html?id=${product.id}">
                    <img src="img/${product.picture.src}" alt="${product.picture.alt}" height="450px">
                </a>
                <div class="product-action">
                    <!-- <a href="#"><i class="fa fa-cart-plus"></i></a>
                    <a href="#"><i class="fa fa-heart"></i></a> -->
                    <a href="product-detail.html?id=${product.id}"><i class="fa fa-search"></i></a>
                </div>
            </div>
            <div class="product-price">
                <h3><span>$</span>${product.price}</h3>
                <strong class="sizes">Sizes: ${product.sizes.toString()}</strong> 
                <!--<a class="btn" href="#"><i class="fa fa-shopping-cart"></i>Buy Now</a>-->
            </div>
        </div>`;
        html += '</div>';
    }
    $(toElement).html(html);
}

function getFromCart(){
    return JSON.parse(localStorage.getItem('cart'));
}

function getShipped(){
    return JSON.parse(localStorage.getItem('shipped'));
}

function displayCartTotal()
{
    const cart = getFromCart();
    let total = 0;

    if(cart != null){
        for (const item of cart) {
            total += item.quantity;
        }
    }

    $('.cart').find('span').html('('+total+')');
}

function getCurrentDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return dd + '.' + mm + '.' + yyyy;
}