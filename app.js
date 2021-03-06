let products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];
let boxes=[];


function box(id,name,price,image,color) {
    this.ele = document.createElement("div");
    this.ele.className = "product";
    this.ele.style.borderColor = "black";
    let picture = document.createElement("img");
    picture.src=image;
    let myname = document.createElement("p");
    myname.innerHTML="Name: " + name;
    let myprice = document.createElement("p");
    myprice.innerHTML = "Price: $" + price;
    this.ele.appendChild(picture);
    this.ele.appendChild(myname);
    this.ele.appendChild(myprice);

    this.ele.addEventListener("mouseenter", function(e){
        this.ele.style.borderColor=color;
    })
    this.ele.addEventListener("click", function() {
        let annoyance = document.createElement("div");
        annoyance.className = "popUp";
        document.body.appendChild(annoyance);
        let popupversion = document.createElement("div");
        popupversion.className = "product";
        let picture = document.createElement("img");
        picture.src=image;
        let myname = document.createElement("p");
        myname.innerHTML="Name: " + name;
        let myprice = document.createElement("p");
        myprice.innerHTML = "Price: $" + price;
        popupversion.appendChild(picture);
        popupversion.appendChild(myname);
        popupversion.appendChild(myprice);
        popupversion.addEventListener("click",function(){
            document.body.removeChild(annoyance);
        })
        annoyance.appendChild(popupversion);
    });
    document.body.appendChild(this.ele);
}

box.prototype.Increment = function() {
    this.number++;
    this.ele.innerHTML = this.number;
};
for (let i = 0; i < products.length; i++) {boxes.push(new box(products[i].color, products[i].name, products[i].price, products[i].image));}
boxes[-1].Increment();



// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT

// Create a div and give it a class of "popUp". Append that div to the body

// If I click on the popUp div, it should hide it

// Create a div for each item in the array above

// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";

// inside of each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.

