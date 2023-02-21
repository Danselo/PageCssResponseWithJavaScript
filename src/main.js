let emailMenu= document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let menuHamIcon = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu")
let menuCarritoIcon = document.querySelector('.navbar-shopping-car')
let asideShoppingCart = document.querySelector('#shoppingCartContainer')
//**card Container 
let container = document.querySelector('.cards-container');
//**aaa */
let productDetailContainer= document.querySelector('#productDetail');
let productDetailCloseIcon = document.querySelector('.product-detail-close')
let productImagenInfo = document.querySelector('#productDetail > img:nth-child(2)')
let productInfoName= document.querySelector('.product-info p:nth-child(1)');
let productInfoPrice = document.querySelector('.product-info p:nth-child(2)')
let productInforDescription = document.querySelector ('.product-info p:nth-child(3)')
//? DESCRIPTION DETAIL VARIABLES







//? ENDDDDDDDDD

emailMenu.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside)
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);




function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); //pone dependiendo si tiene o no
    asideShoppingCart.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive'); //pone dependiendo si tiene o no
    productDetailContainer.classList.add('inactive');
    asideShoppingCart.classList.add('inactive'); //this for evited error (combinated menus)
     
}
function toggleCarritoAside(){
    asideShoppingCart.classList.toggle('inactive'); //pone dependiendo si tiene o no
    mobileMenu.classList.add('inactive'); //this is for not combinate two menus
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');



}
function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive') //this is for remove class inactive
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    asideShoppingCart.classList.add('inactive')
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive') //this is for remove class inactive
}

//? This part is for create products
const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image : 'https://images.pexels.com/photos/6492401/pexels-photo-6492401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "This is the product example for the other products "

});
productList.push({
    name: "Pantalla",
    price: 120,
    image : 'https://images.pexels.com/photos/5082570/pexels-photo-5082570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "This is the product example for the other products  "

});
productList.push({
    name: "iPhone",
    price: 120,
    image : 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "This is the product example for the other products  "

});
productList.push({
    name: "Afry",
    price: 1,
    image: 'https://i.pinimg.com/originals/80/ec/45/80ec4520805bab30cb5e204bef6c3211.png',
    description: "This is the product example for the other products  "
})
 //? ADD NEW OBJECT

//  `
//     <div class="product-card">
//                 <img src=${producto.img}" alt="" class="product-img">
//                 <div class="product-info">
//                     <div>
//                     <p>${producto.price}</p>
//                     <p>${producto.name}</p>
//                     </div>
//                     <figure>
//                     <img src="/icons/bt_add_to_cart.svg" alt="carrito">
//                 </figure>
//                 </div>
//             </div>
//     `
   
{/*   <div class="product-detail-close">
            <img src="./icons/icon_close.png" alt="close">
        </div>
        <img src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product">
        <div class="product-info">
            <p>$35</p>
            <p>Producto</p>
            <p>With is functional and practical interior, this refrigerator alse fulfills a decorative function, adding personality and retro-vintage aesthetic to your kitchen or workplace </p>
            <button class="primary-button add-to-car-button">
                <img src="./icons/bt_add_to_cart.svg" alt="add to car">
                Add to cart
            </button>
        </div> */}



    function renderProducts(arr){
        for(const product of arr){

            let productCard=  document.createElement('div');
            productCard.classList.add('product-card');
         
            let productImg = document.createElement('img');
            productImg.setAttribute('src',product.image)
   
         
             let productInfo = document.createElement('div');
             productInfo.classList.add('product-info');
             let productInfoDiv = document.createElement('div');
         
             let productPrice = document.createElement('p');
             let productName = document.createElement('p');
             productPrice.innerText='$'+product.price;
             productName.innerText= product.name;
         
             let productInfoFigure = document.createElement('figure');
         
             let productImgCart = document.createElement('img');
             productImgCart.setAttribute('src','/icons/bt_add_to_cart.svg')
         
             //? Insert inside the other element;
             productCard.append(productImg,productInfo)
             productInfo.append(productInfoDiv,productInfoFigure);
             productInfoDiv.append(productPrice,productName);
             productInfoFigure.append(productImgCart);
         
             //? ADD TO PRINCIPAL CONTAINER
             container.append(productCard);

            //* THIS FOR VIEW DETAIL PRODUCT 
            productImg.addEventListener('click',function(){
                mostrarInfoProduct(product.name,product.price,product.image,product.description)
                openProductDetailAside()
            })
            // productImgCart.addEventListener('click',function(){
            //     let productAdded = [];
            //     productAdded.push({
            //         name: product.name,
            //         price: product.price,
            //         image: product.image
            //     })
            // }) 
    }

 }
function mostrarInfoProduct(name,price,image,description){
productImagenInfo.setAttribute('src', image);
productInfoPrice.innerHTML = '$'+price
productInfoName.innerHTML = name
productInforDescription.innerHTML = description
}
 renderProducts(productList)
