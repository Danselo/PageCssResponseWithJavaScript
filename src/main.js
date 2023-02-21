const emailMenu= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector('.navbar-shopping-car')
const aside = document.querySelector('.product-detail')
//**card Container 
const container = document.querySelector('.cards-container');

emailMenu.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside)
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); //pone dependiendo si tiene o no
    aside.classList.add('inactive');
}
function toggleMobileMenu(){
    aside.classList.add('inactive'); //this for evited error (combinated menus)
     mobileMenu.classList.toggle('inactive'); //pone dependiendo si tiene o no
}
function toggleCarritoAside(){
    aside.classList.toggle('inactive'); //pone dependiendo si tiene o no
    mobileMenu.classList.add('inactive'); //this is for not combinate two menus
    desktopMenu.classList.add('inactive');
}

//? This part is for create products
const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image : 'https://images.pexels.com/photos/6492401/pexels-photo-6492401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: "Pantalla",
    price: 120,
    image : 'https://images.pexels.com/photos/5082570/pexels-photo-5082570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: "iPhone",
    price: 120,
    image : 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: "Afry",
    price: 1,
    image: 'https://i.pinimg.com/originals/80/ec/45/80ec4520805bab30cb5e204bef6c3211.png'
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
 

    function renderProducts(arr){
        for(product of arr){

            const productCard=  document.createElement('div');
            productCard.classList.add('product-card');
         
            const img = document.createElement('img');
            img.setAttribute('src',product.image)
         
             const productInfo = document.createElement('div');
             productInfo.classList.add('product-info');
             const productInfoDiv = document.createElement('div');
         
             const productPrice = document.createElement('p');
             const productName = document.createElement('p');
             productPrice.innerText='$'+product.price;
             productName.innerText= product.name;
         
             const productInfoFigure = document.createElement('figure');
         
             const productImgCart = document.createElement('img');
             productImgCart.setAttribute('src','/icons/bt_add_to_cart.svg')
         
             //? Insert inside the other element;
             productCard.append(img,productInfo)
             productInfo.append(productInfoDiv,productInfoFigure);
             productInfoDiv.append(productPrice,productName);
             productInfoFigure.append(productImgCart);
         
             //? ADD TO PRINCIPAL CONTAINER
             container.append(productCard);
    }

 }

 renderProducts(productList)
