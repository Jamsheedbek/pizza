
var pizzas = [
    {
        name: 'Paperoni',
        picture: '/img/non1.webp',
    },
    {
        name: 'Margarita',
        picture: '/img/non2.webp',
    },
    {
        name: 'Potato',
        picture: '/img/non3.webp',
    },
    {
        name: 'Chicken',
        picture: '/img/non4.webp',
    },
    {
        name: 'Hawaiian',
        picture: '/img/non5.webp',
    },
    {
        name: 'Buffalo',
        picture: '/img/non6.webp',
    }
]

var contents = [
    {
        size: 'Kichkina',
        type: 'Mol go\'shti',
        sous: 'Chili'
    },
    {
        size: 'O\'rtacha',
        type: 'Tovuq g\'shti',
        sous: 'Oddiy sous'
    },
    {
        size: 'Katta',
        type: 'Vegetarian',
        sous: 'Mayonez'
    }
]

var wrapper = document.querySelector('#wrapper');
var form = document.querySelector('#form');


var names = document.createElement('div');
names.classList.add('col-2', 'p-2');
wrapper.appendChild(names);

var card = document.createElement('div');
card.classList.add('row');
names.appendChild(card);

for (var i = 0; i < 6; i++){
    var pizza = document.createElement('div');
    pizza.classList.add('col-6');
    
    var getPizza = document.createElement('input');
    getPizza.setAttribute('class', 'form-check-input visually-hidden');
    getPizza.setAttribute('type', 'radio');
    getPizza.setAttribute('name', 'type');
    getPizza.setAttribute('id', 'flexRadioDefault1'+i);
    getPizza.setAttribute('value', pizzas[i].name);
    getPizza.dataset.id = i;
    
    var getLabel = document.createElement('label');
    getLabel.setAttribute('class', 'form-check-label');
    getLabel.setAttribute('for', 'flexRadioDefault1'+i);
    getLabel.textContent = pizzas[i].name;
    getLabel.dataset.id = i;

    var getImg = document.createElement('img');
    getImg.setAttribute('src', pizzas[i].picture);
    getImg.setAttribute('width', '75');
    getImg.setAttribute('height', '75');

    
    
    pizza.appendChild(getPizza);
    pizza.appendChild(getLabel);
    getLabel.appendChild(getImg);
    card.appendChild(pizza);

}


var choose = document.createElement('div');
choose.classList.add('col-6', 'mt-5');
wrapper.appendChild(choose);

var pizzaSize = document.createElement('div');
pizzaSize.setAttribute('class', 'row border border-2 mb-2 p-4 border-primary bg-info')
choose.appendChild(pizzaSize);


for (var i = 0; i < 3; i++){
    var sizes = document.createElement('div');
    sizes.classList.add('col-4');

    var sizeLabel = document.createElement('label');
    sizeLabel.setAttribute('class', 'form-check-label');
    sizeLabel.setAttribute('for', 'flexRadioDefault');
    sizeLabel.textContent = contents[i].size;
    sizeLabel.dataset.id = i;

    var getSize = document.createElement('input');
    getSize.setAttribute('class', 'form-check-input');
    getSize.setAttribute('type', 'radio');
    getSize.setAttribute('name', 'size');
    getSize.setAttribute('id', 'flexRadioDefault');
    getSize.setAttribute('value', contents[i].size);
    getSize.dataset.id = i;


    sizes.appendChild(getSize);
    sizes.appendChild(sizeLabel);
    pizzaSize.appendChild(sizes);
}


var pizzaType = document.createElement('div');
pizzaType.setAttribute('class', 'row border border-2 mb-2 p-4 border-secondary bg-warning')
choose.appendChild(pizzaType);


for (var i = 0; i < 3; i++){
    var types = document.createElement('div');
    types.classList.add('col-4');

    var getType = document.createElement('input');
    getType.setAttribute('class', 'form-check-input');
    getType.setAttribute('type', 'checkbox');
    getType.setAttribute('id', 'flexCheckDefault'+i);
    getType.setAttribute('value', contents[i].type);
    getType.dataset.id = i;

    var typeLabel = document.createElement('label');
    typeLabel.setAttribute('class', 'form-check-label');
    typeLabel.setAttribute('for', 'flexCheckDefault'+i);
    typeLabel.textContent = contents[i].type;
    typeLabel.dataset.id = i;

    types.appendChild(getType);
    types.appendChild(typeLabel);
    pizzaType.appendChild(types);
}



var sousType = document.createElement('div');
sousType.setAttribute('class', 'row border border-2 p-4 border-dark bg-danger')
choose.appendChild(sousType);

for (var i = 0; i < 3; i++){
    var souses = document.createElement('div');
    souses.classList.add('col-4');

     var getSous = document.createElement('input');
    getSous.setAttribute('class', 'form-check-input');
    getSous.setAttribute('type', 'checkbox');
    getSous.setAttribute('id', 'flexCheckDefault1'+i);
    getSous.setAttribute('value', contents[i].sous);
    getSous.dataset.id = i;

    var sousLabel = document.createElement('label');
    sousLabel.setAttribute('class', 'form-check-label');
    sousLabel.setAttribute('for', 'flexCheckDefault1'+i);
    sousLabel.textContent = contents[i].sous;
    sousLabel.dataset.id = i;

    souses.appendChild(getSous);
    souses.appendChild(sousLabel);
    sousType.appendChild(souses);
}


var result = document.createElement('div');
result.classList.add('col-4', 'p-2');
wrapper.appendChild(result);

var resultHeading = document.createElement('div');
resultHeading.setAttribute('class', 'h2 m-0 text-center');
resultHeading.textContent = 'Natija';
result.appendChild(resultHeading);

var showResult = document.createElement('div');
showResult.setAttribute('class', 'border border-2 border-primary h-75 bg-info')
result.appendChild(showResult);



var div = document.createElement('div');
wrapper.appendChild(div);

var btn = document.createElement('button');
btn.setAttribute('class', 'btn btn-primary  float-end');
btn.setAttribute('type', 'submit');
btn.textContent = 'Submit';
div.appendChild(btn);




form.addEventListener('click', function (e) {
    var formIndex = e.target.dataset.id;
    console.log(formIndex);
    showResult.textContent = formIndex;

})