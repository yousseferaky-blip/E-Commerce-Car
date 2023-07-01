
// Open And Close SideBar 

let sidebaropen = document.querySelector(".sidebaropen")
let sidebarclose = document.querySelector(".sidebarclose")
let nav=document.querySelector('nav')



sidebaropen.addEventListener("click",()=>{
    nav.classList.toggle("active")
})
sidebarclose.addEventListener("click",()=>{
    nav.classList.remove("active")
})


// Start Slider Items 


let SliderItemContainer = document.querySelector(".Slider-Item-Container")
let ButtonSlider = document.querySelectorAll(".Button-Slider")

ButtonSlider.forEach((items,index)=>{
    items.addEventListener("click",()=>{    
        SliderItemContainer.style.transform = `translateX(${-100*index}vw)`
    })
})




//  Start Category Button 

let AllImages =document.querySelector(".All-Images")
let CategoryButton =document.querySelectorAll(".Category-Button")

const Cars = [
    {
      img:'images/a1.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'audi'
    },

    {
      img:'images/b1.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'bmw'
    },

    {
      img:'images/m1.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'mercides'
    },

    {
      img:'images/k1.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'kia'
    },

    {
      img:'images/m2.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'mercides'
    },

    {
      img:'images/a2.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'audi'
    },

    {
      img:'images/k2.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'kia'
    },

    {
      img:'images/b2.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'bmw'
    },

    {
      img:'images/b4.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'bmw'
    },

    {
      img:'images/m4.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'mercides'
    },

    {
      img:'images/k4.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'kia'
    },

    {
      img:'images/a4.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'audi'
    },

    {
      img:'images/m5.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'mercides'
    },

    {
      img:'images/k5.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'kia'
    },

    {
      img:'images/a5.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'audi'
    },

    {
      img:'images/b5.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'bmw'
    },

    {
      img:'images/k3.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'kia'
    },

    {
      img:'images/b3.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'bmw'
    },

    {
      img:'images/a3.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'audi'
    },

    {
      img:'images/m3.jpg',
      model:'2023',
      price:'$999.999.999',
      category:'mercides'
    },


]


window.addEventListener("load",()=>{
    displayMenuItemCar(Cars)
})


CategoryButton.forEach((BTN)=>{
    BTN.addEventListener("click",(e)=>{
      
        let category = e.currentTarget.dataset.id
        let CarsCategory = Cars.filter((car)=>{
            if(car.category == category){
                return car
            }
        })
        if(category == 'all'){
            displayMenuItemCar(Cars)
        }else{
            displayMenuItemCar(CarsCategory)
        }
    })
})


function displayMenuItemCar(CarsMenu){
    let CarsMenuItem = CarsMenu.map((itemsCar)=>{
        return `
        <article class="Image-Card">
        <img src="${itemsCar.img}">
        <footer>
            <h4>${itemsCar.model}</h4>
            <h3>${itemsCar.price}</h3>
            <button>BUY NOW</button>
        </footer>
    </article>
        `
    })
    CarsMenuItem = CarsMenuItem.join("")
    AllImages.innerHTML = CarsMenuItem
}




// Start Slider Images 

let SliderImg = document.getElementById("Slider-Imges")
let Next = document.querySelector(".right")
let Brev = document.querySelector(".left")

let SliderImages = [
    {
        imges:"images/b1.jpg",
    },

    {
        imges:"images/a1.jpg",
    },

    {
        imges:"images/m1.jpg",
    },

    {
        imges:"images/k1.jpg",
    },

    {
        imges:"images/b2.jpg",
    },

    {
        imges:"images/m2.jpg",
    },

    {
        imges:"images/k2.jpg",
    },

    {
        imges:"images/a2.jpg",
    },

    {
        imges:"images/b3.jpg",
    },

    {
        imges:"images/m3.jpg",
    },

    {
        imges:"images/a3.jpg",
    },

    {
        imges:"images/k3.jpg",
    },

    {
        imges:"images/a4.jpg",
    },

    {
        imges:"images/b4.jpg",
    },

    {
        imges:"images/m4.jpg",
    },

    {
        imges:"images/k4.jpg",
    },

    {
        imges:"images/k5.jpg",
    },

    {
        imges:"images/a5.jpg",
    },

    {
        imges:"images/b5.jpg",
    },

    {
        imges:"images/m5.jpg",
    },


]

let NumImg=0

function NextBrev(){

    let SliderBrev = SliderImages[NumImg]
    SliderImg.src = SliderBrev.imges
     
    if( NumImg >= SliderImages.length-1){
        Next.style.display="none"
    }else{
        Next.style.display="inline-block" 
    }

    if( NumImg <= 0 ){
        Brev.style.display="none"
    }else{
        Brev.style.display="inline-block" 
    }
}

Next.addEventListener("click",()=>{
    NumImg++
    NextBrev()
})
Brev.addEventListener("click",()=>{
    NumImg--
    NextBrev()
})




//  Start Change Testimonial 

let Testimonia=[
    {
     UserName:"Youssef Eraky",
     Img:"images/m1.jpg",
     Paragraph:"Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best."
    },
    {
     UserName:"Youssef Eraky",
     Img:"images/b1.jpg",
     Paragraph:"I would also like to say thank you to all your staff. Wow what great service, I love it! BMW impressed me on multiple levels."
    },
]

let TestimonialContainerImg = document.querySelector(".Testimonial-Container-Img")
let TestimonialContainerText = document.querySelector(".Testimonial-Container-Paragraph")
let TestimonialContainerUserName = document.querySelector(".Testimonial-Container-UserName")

let index=0

Testimonias()

function Testimonias(){
  let TestimoniasItem = Testimonia[index]

  TestimonialContainerImg.src = TestimoniasItem.Img
  TestimonialContainerText.innerText = TestimoniasItem.Paragraph
  TestimonialContainerUserName.innerText = TestimoniasItem.UserName

  index++

if(index == Testimonia.length){
    index = 0
}

setTimeout(() => {
    Testimonias();
  }, 3000);

}       















