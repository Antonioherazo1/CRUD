const carArray = [];
let id = 0;

class Car{
    constructor(id, brand, model, color, year, price, photo ){
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.price = price;
        this.photo = photo; 
    }
}

function printList(carArray){
    const carList = document.getElementById('car-list');
    let htmlCardCarList = ``;
    carArray.forEach(car => {
        htmlCardCarList +=`
       <div class=" card text-center mb-4">
           <div class="card-body row p-relative">
               <div class="col-md-4 p-absolute">
                   <strong> Marca </strong>: ${car.brand}</br>
                   <strong> Model </strong>: ${car.model}</br>
                   <strong> Color </strong>: ${car.color}</br>
                   <strong> Año </strong>: ${car.price}</br>
                   <strong> Precio </strong>: ${car.price}
               </div>
               <div class="col-md-4 p-absolute">
                   <img src="${car.photo}" class="">
               </div>
               <div class="col-md-4 p-absolute">
                   <button onclick="deleteCar(${car.id})" class="btn btn-danger">Eliminar</button>
               </div>        
           </div>
       </div>
       `;
       carList.innerHTML = htmlCardCarList;
   });
}

function deleteCar(id){
    const index = carArray.findIndex((carArray) => carArray.id == id);
    carArray.splice(index, 1);    
    printList(carArray);
}

// DOM Events
document.getElementById('car-form').addEventListener('submit', function(e){
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const photo = document.getElementById('photo').value; 
    const car = new Car(id, brand, model, color, year, price, photo);
    carArray.push(car);
    printList(carArray);
    id++; 
    e.preventDefault();
})