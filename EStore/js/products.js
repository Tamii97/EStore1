writeProducts(products, 'col-md-4', '#products');

let categoriesHTML = '';
for (const category of categories) {
    categoriesHTML += `<option value="${category.id}">${category.text}</option>`;
}
$('#category').append(categoriesHTML);

function filterAndSort()
{
    const category = parseInt($('#category').val());
    const subcategory = parseInt($('#subcategory').val());
    const sort = $('#sort').val();
    const search = $('#search').val().trim();

    let tmpProducts = products;

    if(search != ''){
        tmpProducts = tmpProducts.filter(product => product.name.toLowerCase().indexOf(search) !== -1);
    }

    if(category != 0){
        tmpProducts = tmpProducts.filter(product => product.category_id === category);
    }

    if(subcategory != 0){
        tmpProducts = tmpProducts.filter(product => product.subcategory_id === subcategory);
    }

    switch(sort){
        case '0':
            tmpProducts.sort((a, b) => a.id - b.id); 
        break;
        case '1': 
            tmpProducts.sort((a, b) => sortByName(a, b, 'A-Z'));
        break;
        case '2': 
            tmpProducts.sort((a, b) => sortByName(a, b, 'Z-A'));
        break;
        case '3': 
            tmpProducts.sort((a, b) => b.price - a.price);
        break;
        case '4':
            tmpProducts.sort((a, b) => a.price - b.price);
        break;
    }

    writeProducts(tmpProducts, 'col-md-4', '#products');
}

function sortByName(a, b, dircetion)
{
    nameA = a.name.toUpperCase();
    nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
        if(dircetion == 'A-Z') {
            return -1;
        }
        if(dircetion == 'Z-A') {
            return 1;
        }
    }
    if (nameA > nameB) {
        if(dircetion == 'A-Z') {
            return 1;
        }
        if(dircetion == 'Z-A') {
            return -1;
        }
    }
    return 0;
}

function writeSubCategory(category_id)
{
    const category = categories.find(x => x.id === parseInt(category_id));

    $('#subcategory').hide();

    if(category != undefined){
        if(category.subcategories != null){
            let subcategoriesHTML = '<option value="0">Select Sub Category...</option>';
            for (const sc of category.subcategories) {
                subcategoriesHTML += `<option value="${sc.id}">${sc.text}</option>`;
            }
            $('#subcategory').html(subcategoriesHTML);
            $('#subcategory').show();
        }
    }
}

$('#search').on('keyup', function(e){
    e.preventDefault();
    filterAndSort();
});

$('#category').on('change', function(e){
    e.preventDefault();
    writeSubCategory($(this).val());
    filterAndSort();
});

$('#sort').on('change', function(e){
    e.preventDefault();
    filterAndSort();
});

$('#subcategory').on('change', function(e){
    e.preventDefault();
    filterAndSort();
});