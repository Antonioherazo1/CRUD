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
    // alert("printing list");
    let idString ='';
    const carList = document.getElementById('car-list');
    let htmlCardCarList = ``;
    carArray.forEach(car => {
        idString = car.id.toString();
        htmlCardCarList +=`
            <div class=" card shadow text-center mb-4 rounded">
                <div class="card-body row p-relative" id="${idString}">
                    <div class="col-md-4 p-absolute">
                        <strong> Marca </strong>: ${car.brand}</br>
                        <strong> Model </strong>: ${car.model}</br>
                        <strong> Color </strong>: ${car.color}</br>
                        <strong> Año </strong>: ${car.year}</br>
                        <strong> Precio </strong>: ${car.price}
                    </div>
                    <div class="col-md-4 p-absolute pt-2">
                        <img src="${car.photo}" class="rounded">
                    </div>
                    <div class="col-md-4 p-absolute pt-2">
                        <button onclick="deleteCar(${car.id})" class="btn btn-outline-dark rounded mb-3 btn-block">Eliminar</button>
                        <button onclick="editCar(${car.id})" class="btn btn-light rounded mb-3 btn-block">Editar</button>
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
function editCar(id){
    // alert("editing");
    const htmlEdit = document.getElementById(id.toString());
    htmlEdit.innerHTML = `
    <div class="card-body row p-relative d-flex" id="${id}">
        <div class="col-md-4 p-absolute">
            <form class="edit-form">
            <strong> Marca </strong>: <input id="brandEdit" value="${carArray[id].brand}"></input></br>
            <strong> Model </strong>: <input id="modelEdit" value="${carArray[id].model}"></input></br>
            <strong> Color </strong>: <input id="colorEdit" value="${carArray[id].color}"></input></br>
            <strong> Año </strong>: <input id="yearEdit" value="${carArray[id].year}"></input></br>
            <strong> Precio </strong>: <input id="priceEdit" value="${carArray[id].price}"></input></br>                    
            <strong> Url Foto </strong>: <input id="photoEdit" value="${carArray[id].photo}"></input> 
            </form>
        </div>
        <div class="col-md-4 p-absolute pt-2">
            <img src="${carArray[id].photo}" class="rounded">
        </div>
        <div class="col-md-4 p-absolute pt-2">
            <input onclick="saveEdit(${id})" value="Guardar" class="btn btn-light rounded btn-block">
        </div>        
    </div>
    `
}
function saveEdit(id){
    // alert("saving edit");
    const index = carArray.findIndex((carArray) => carArray.id == id);
    carArray[index].brand = document.getElementById('brandEdit').value;
    carArray[index].model = document.getElementById('modelEdit').value;
    carArray[index].color = document.getElementById('colorEdit').value;
    carArray[index].year = document.getElementById('yearEdit').value;
    carArray[index].price = document.getElementById('priceEdit').value;
    carArray[index].photo = document.getElementById('photoEdit').value;
    
    document.getElementById(id).innerHTML = `
    <div class="card-body row p-relative" id="${id}">
        <div class="col-md-4 p-absolute">
            <strong> Marca </strong>: ${carArray[id].brand}</br>
            <strong> Model </strong>: ${carArray[id].model}</br>
            <strong> Color </strong>: ${carArray[id].color}</br>
            <strong> Año </strong>: ${carArray[id].year}</br>
            <strong> Precio </strong>: ${carArray[id].price}
        </div>
        <div class="col-md-4 p-absolute pt-2">
            <img src="${carArray[id].photo}" class="rounded">
        </div>
        <div class="col-md-4 p-absolute pt-2">
            <button onclick="deleteCar(${id})" class="btn btn-outline-dark rounded mb-3 btn-block">Eliminar</button>
            <button onclick="editCar(${id})" class="btn btn-light rounded mb-3 btn-block">Editar</button>
        </div>        
    </div>
    `;
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