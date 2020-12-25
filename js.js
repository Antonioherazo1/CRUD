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

function printList(carArray, idEdit){
    const carList = document.getElementById('car-list');
    let htmlCardCarList = ``;
    carArray.forEach(car => {
        if(car.id == idEdit){
            htmlCardCarList +=`
            <div class=" card text-center mb-4 rounded">
                <div class="card-body row p-relative">
                    <div class="col-md-4 p-absolute">
                        <form>
                        <strong> Marca </strong>: <input id="brandEdit" value="${car.brand}"></input></br>
                        <strong> Model </strong>: <input id="modelEdit" value="${car.model}"></input></br>
                        <strong> Color </strong>: <input id="colorEdit" value="${car.color}"></input></br>
                        <strong> Año </strong>: <input id="yearEdit" value="${car.year}"></input></br>
                        <strong> Precio </strong>: <input id="priceEdit" value="${car.price}"></input>                        
                        <strong> Url Foto </strong>: <input id="photoEdit" value="${car.photo}"></input> 
                        <strong> Url Foto </strong>: <input id="photoEdit" value="${car.photo}"></input> 
                        </form>
                    </div>
                    <div class="col-md-4 p-absolute">
                        <img src="${car.photo}" class="">
                    </div>
                    <div class="col-md-4 p-absolute">
                        <button onclick="deleteCar(${car.id})" class="btn btn-danger rounded mb-3">Eliminar</button>
                        <input type="submit" onclick="saveEdit(${car.id})" value="Guardar" class="btn btn-info rounded">
                    </div>        
                </div>
            </div>
            `;
        }else{
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
                        <button onclick="deleteCar(${car.id})" class="btn btn-danger rounded mb-3">Eliminar</button>
                        <button onclick="editCar(${car.id})" class="btn btn-success rounded mb-3">Editar</button>
                    </div>        
                </div>
            </div>
            `;
        }

       carList.innerHTML = htmlCardCarList;
   });
}

function deleteCar(id){
    const index = carArray.findIndex((carArray) => carArray.id == id);
    carArray.splice(index, 1);    
    printList(carArray);
}
function editCar(id){
    printList(carArray, id);
}
function saveEdit(id){
    const index = carArray.findIndex((carArray) => carArray.id == id);
    carArray[index].brand = document.getElementById('brandEdit').value;
    carArray[index].model = document.getElementById('modelEdit').value;
    carArray[index].color = document.getElementById('colorEdit').value;
    carArray[index].year = document.getElementById('yearEdit').value;
    carArray[index].price = document.getElementById('priceEdit').value;
    carArray[index].photo = document.getElementById('photoEdit').value;
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