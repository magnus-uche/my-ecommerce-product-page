window.onload = () => {

    let products = [
      {
        company: "Sneaker Company",
        name: "Fall Limited Edition Sneakers",
        description: "these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        price: "125.00",
        discount: "&#36;250.00",
        percenttage: "50&#37;",
        quantity: 0,
        deleteIcon: [
          {
            image: "./images/icon-delete.svg"
          }
        ],
        preview: [
          {
            image: "./images/image-product-1.jpg",
            thumbnail: "./images/image-product-1-thumbnail.jpg"
          },
          {
            image: "./images/image-product-2.jpg",
            thumbnail: "./images/image-product-2-thumbnail.jpg"
          },
          {
            image: "./images/image-product-3.jpg",
            thumbnail: "./images/image-product-3-thumbnail.jpg"
          },
          {
            image: "./images/image-product-4.jpg",
            thumbnail: "./images/image-product-4-thumbnail.jpg"
          }
        ]
      }
    ];
  
    let currency = "&#36;"
  
    let cartItems = []
  
    let currentProduct = products[0];
  
    let pLength = currentProduct.preview.length;
  
    let product = document.getElementsByClassName("product")[0];
    let thumbnails = document.getElementsByClassName("thumbnail");
    let thumbnailCover = document.getElementsByClassName("thumbnail-cover");
    let prev = document.getElementsByClassName("previous-icon")[0];
    let next = document.getElementsByClassName("next-icon")[0];
    let imageId = 0;
    let minus = document.getElementsByClassName("minus")[0];
    let plus = document.getElementsByClassName("plus")[0];
    let quantity = document.getElementsByClassName("value")[0];
    let qValue = 0;
    let addToCart = document.querySelector(".add-to-cart");
    let name = document.getElementById("name");
    let company = document.getElementById("company");
    let com = document.getElementById("product-image");
    let description = document.getElementById("description");
    let amount = document.getElementById("amount");
    let discount = document.getElementById("discount");
    let percentage = document.getElementById("percentage");
    let cartsection = document.getElementsByClassName("cart");
    let cartIcon = document.getElementsByClassName("cart-icon")[0];
    let chartCounter = document.getElementsByClassName("chart-counter")[0];
    let cartDesc = document.getElementsByClassName("cartDesc")[0];
    let cartPrice = document.getElementsByClassName("cart-price")[0];
    let cartQuantity = document.getElementsByClassName("cart-quantity")[0];
    let totalPrice = document.getElementsByClassName("totalPrice")[0];
    let ChartCheckout = document.getElementsByClassName("chart-items")[0];
    let emptyText = document.getElementsByClassName("empty-text")[0];
    let deleteIcon = document.getElementsByClassName("delete")[0];
    let backGroundShadow = document.getElementsByClassName("shadow")[0];
    let lightBox = document.getElementsByClassName("lightbox")[0];
    let minLightBox = document.getElementsByClassName("minimize")[0];
    let lightboxPrev = document.getElementsByClassName("lightboxprev")[0];
    let lightboxNext = document.getElementsByClassName("lightboxnext")[0];
    let lightboxImage = document.getElementsByClassName("lightbox-image")[0];
    let thumbnailLightbox = document.getElementsByClassName("thumbnail-lightbox");
    let lightboxSelection = document.getElementsByClassName("cover");
    
  
  // dynamically add element to the page
    company.innerHTML = currentProduct.company;
    name.innerHTML = currentProduct.name;
    description.innerHTML = currentProduct.description;
    amount.innerHTML = currency + currentProduct.price;
    discount.innerHTML = currentProduct.discount;
    percentage.innerHTML = currentProduct.percenttage;
    product.src = currentProduct.preview[0].image;
    lightboxImage.src = currentProduct.preview[0].image;
    cartDesc.innerHTML = currentProduct.name;
    cartPrice.innerHTML = `${currency + currentProduct.price} x`;
    quantity.innerHTML = 0;
    cartQuantity.innerHTML = 0;
    totalPrice.innerHTML = 0;
  
    let counter = 0
  
    // for preview icon change image update
    function pview(e) {
      imageId -= 1
      if (imageId < 0) {
        imageId = pLength - 1;
      }
      return e.src = currentProduct.preview[imageId].image;
    }
  
    // for next image update
    function nextimage(e) {
      imageId += 1
      if (imageId > pLength - 1) {
        imageId = 0;
      }
      return e.src = currentProduct.preview[imageId].image;
    }
  
  
    currentProduct.preview.forEach((item, index, i) => {
      // add image to the thumbnail(small images)
      thumbnails[index].src = item.thumbnail;
      thumbnailLightbox[index].src = item.thumbnail;
      // add image to the product image(big image)
      
     thumbnailCover[index].addEventListener('click', (el) => {
        product.src = currentProduct.preview[index].image;
      })
  
      lightboxSelection[index].addEventListener('click', (el) => {
        lightboxImage.src = currentProduct.preview[index].image;
        imageId = [index]
        
      })
    })
  
    // make thumbnail image active on a click
    let tabList = document.querySelectorAll(".u");
    
    tabList.forEach((item) => {
      item.addEventListener('click',
      (event, imageName) => { 
        for(let i = 0; i < tabList.length; i++){
          tabList[i].className = tabList[i].className.replace(" active", "");
        }
        event.currentTarget.className += " active";
      } )
  
    })
  
    product.onclick = () => {
      backGroundShadow.classList.remove("empty");
      lightBox.classList.remove("empty");
    }
  
    minLightBox.onclick = () => {
      backGroundShadow.classList.add("empty");
      lightBox.classList.add("empty");
    }
  
    prev.onclick = () => {
      return pview(product);
    }
  
    next.onclick = () => {
      return nextimage(product);
    }
  
    // for lightbox prev
    lightboxPrev.onclick = () => {
      return pview(lightboxImage);
    }
  
    // for lightbox next
    lightboxNext.onclick = () => {
      return nextimage(lightboxImage);
    }
  
    plus.onclick = () => {
      qValue += 1;
      quantity.innerHTML = qValue;
      cartQuantity.innerHTML = qValue;
      totalPrice.innerHTML = currency + currentProduct.price * qValue;
    }
  
    minus.onclick = () => {
      qValue -= 1;
      if (qValue < 0) {
        qValue = 0;
      }
      quantity.innerHTML = qValue;
      cartQuantity.innerHTML = qValue;
      totalPrice.innerHTML = currency + currentProduct.price * qValue;
      counter = qValue;
      chartCounter.innerHTML = qValue;
    }
  
    addToCart.onclick = () => {
      chartCounter.innerHTML = qValue;
      counter = qValue;
      chartCounter.classList.remove("empty");
      emptyText.classList.add("empty");
      if (counter < 1) {
        ChartCheckout.classList.add("empty")
      }
  
    }
  
    cartIcon.onmouseover = () => {
      if (counter > 0) {
        ChartCheckout.classList.remove("empty");
        chartCounter.classList.add("filled");
    } else if (counter <= 0) {
        emptyText.classList.remove("empty");
        ChartCheckout.classList.add("empty")
      }
    }
  
    deleteIcon.onclick = () => {
      chartCounter.innerHTML = "";
      counter = 0;
      qValue = 0;
      quantity.innerHTML = 0;
      cartQuantity.innerHTML = 0;
      totalPrice.innerHTML = currency + currentProduct.price * 0;
      ChartCheckout.classList.add("empty");
      chartCounter.classList.remove("filled");
    }
  
  
  
  }
  