let cars = [
    {
        img: `<img src="./images/benz-car.jpg" alt="">`,
        name: 'Mercedes Benz',
        price: '20,415, 000.',
    },

    {
        img: `<img src="./images/lambo-car1.jpg" alt="">`,
        name: 'Lamborghini',
        price: '115million.'
    },

    {
        img: `<img src="./images/lambo-car2.jpg" alt="">`,
        name: 'Lamborghini',
        price: '100million.'
    },

    {
        img: `<img src="./images/lambo-car-3.jpg" alt="">`,
        name: 'Lamborghini',
        price: '111million.'
    },
    {
        img: `<img src="./images/land-over1.jpg" alt="">`,
        name: 'Land Rover',
        price: '206,000,000'
    },
    {
        img: `<img src="./images/land-over-2.jpg" alt="">`,
        name: 'Land Rover',
        price: '206,000,000'
    },
    {
        img: `<img src="./images/lexus.jpg" alt="">`,
        name: 'Lexus',
        price: '5,100,000.'
    },
    {
        img: `<img src="./images/lexus-car2.jpg" alt="">`,
        name: 'Lexus',
        price: '10,700,000.'
    },
    {
        img: `<img src="./images/luxury-car.jpg" alt="">`,
        name: 'Luxury',
        price: '4,500,000.'
    },
    {
        img: `<img src="./images/luxury-car2.jpg" alt="">`,
        name: 'Luxury',
        price: '2,600,000.'
    },
    {
        img: `<img src="./images/suv-car.jpg" alt="">`,
        name: 'Suv',
        price: '8,600,000.'
    },
    {
        img: `<img src="./images/suv-car-2.jpg" alt="">`,
        name: 'Suv',
        price: '3,400,000.'
    }
]

let carImage = document.getElementById("car-images").width = "100px";
let carScetion = document.getElementById('cars-con');
let html = "";
cars.forEach(e =>  {
html += `
<div class="row">
<div class="col-md-6">
    <section class="cars-section" id="cars-con">
        <div class="cars-card shadow p-1 mb-2 bg-secondary text-white rounded">
            <div class="cars-img">
                ${e.img}
                <h1 class="car-name">${e.name}</h1>
                <p class="location ml-auto"><span>LOCATION</span><br> Lagos, Nigera</p>

                <p class="cars-price"><span>PRICE</span> <br> ${e.price}</p>
            </div>
        </div>
    </section>
</div>
</div>
`
console.log(html);
carScetion.innerHTML = html
})
