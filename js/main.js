var pizzas = [
    {
        name: 'Oq nonli',
        picture: './images/non1.webp',
    },
    {
        name: 'Peperon',
        picture: './images/non2.webp',
    },
    {
        name: 'Margaritta',
        picture: './images/non3.webp',
    },
    {
        name: 'Tomato',
        picture: './images/non4.webp',
    },
    {
        name: 'Potato',
        picture: './images/non5.webp',
    },
    {
        name: 'Buffalo',
        picture: './images/non6.webp',
    },
];
var contents = [
    {
        size: 'Kichkina',
        tarkibi: 'Mol go\'shtli',
        sous: 'Chili'
    },
    {
        size: 'Ortacha',
        tarkibi: 'Tovuq goshtli',
        sous: 'Oddiy sous'
    },
    {
        size: 'Katta',
        tarkibi: 'Qazili',
        sous: 'Moyonez'
    }
]
var buyurtma = [];
var wrapper = document.querySelector('#wrapper');
var form = document.querySelector('#form');


var NAMES = document.createElement('div');
NAMES.classList.add('col-2', 'p-3');
wrapper.appendChild(NAMES);

var namesWrapper = document.createElement('div');
namesWrapper.classList.add('row');
NAMES.appendChild(namesWrapper);

for(var i=0; i<6; i++){
    var Pizza = document.createElement('div');
    Pizza.classList.add('col-6');

    var formCheck = document.createElement('div');
    formCheck.classList.add('form-check', 'p-0');

    var PizzaInput = document.createElement('input');
    PizzaInput.setAttribute('class', 'form-check-input visually-hidden');
    PizzaInput.setAttribute('type', 'radio');
    PizzaInput.setAttribute('name', 'Turi');
    PizzaInput.setAttribute('id', 'name'+i);
    PizzaInput.setAttribute('value', pizzas[i].name)
    PizzaInput.dataset.id = i;

    var PizzaLabel = document.createElement('label');
    PizzaLabel.setAttribute('class', 'form-check-label');
    PizzaLabel.setAttribute('for', 'name'+i);
    PizzaLabel.dataset.id = i;

    var PizzaImg = document.createElement('img');
    PizzaImg.setAttribute('src', pizzas[i].picture);
    PizzaImg.setAttribute('width', '75');
    PizzaImg.setAttribute('height', '75');

    var PizzaName = document.createElement('p');
    PizzaName.setAttribute('class', 'text-center');
    PizzaName.textContent = pizzas[i].name;


    PizzaLabel.appendChild(PizzaImg);
    PizzaLabel.appendChild( PizzaName);
    Pizza.appendChild(formCheck);
    formCheck.appendChild(PizzaInput);
    formCheck.appendChild(PizzaLabel);
    namesWrapper.appendChild(Pizza);
} 


var CONTENT = document.createElement('div');
CONTENT.classList.add('col-6', 'p-3', 'mt-5');
wrapper.appendChild(CONTENT);

var pizzaSize = document.createElement('div');
pizzaSize.setAttribute('class', 'row border border-3 border-primary p-3 mb-3 bg-info');
CONTENT.appendChild(pizzaSize);


for(var i=0; i<3; i++){
    var inputWrapper = document.createElement('div');
    inputWrapper.setAttribute('class', 'form-check col-4');
    pizzaSize.appendChild(inputWrapper);

    var contentSize = document.createElement('input');
    contentSize.setAttribute('class', 'form-check-input');
    contentSize.setAttribute('value', contents[i].size);
    contentSize.setAttribute('type', 'radio');
    contentSize.setAttribute('name', 'Olchami');
    contentSize.setAttribute('id', 'size'+i);
    inputWrapper.appendChild(contentSize);
    contentSize.dataset.id = 6+i;

    var sizeLabel = document.createElement('label');
    sizeLabel.setAttribute('class', 'form-check-label');
    sizeLabel.setAttribute('for', 'size'+i);
    sizeLabel.textContent = contents[i].size;
    inputWrapper.appendChild(sizeLabel);

}
var contentWrapper = document.createElement('div');
contentWrapper.setAttribute('class', 'row border border-3 border-danger p-3 mb-3 bg-warning');
CONTENT.appendChild(contentWrapper);


for(var i=0; i<3; i++){
    var types = document.createElement('div');
    types.setAttribute('class', 'col-4');
    contentWrapper.appendChild(types);

    var contentTarkibi = document.createElement('input');
    contentTarkibi.setAttribute('class', 'form-check-input');
    contentTarkibi.setAttribute('value', contents[i].tarkibi);
    contentTarkibi.setAttribute('type', 'radio');
    contentTarkibi.setAttribute('name', 'Tarkibi')
    contentTarkibi.setAttribute('id', 'tarkib'+i);
    types.appendChild(contentTarkibi);
    contentTarkibi.dataset.id = 9+i;

    var tarkibLabel = document.createElement('label');
    tarkibLabel.setAttribute('class', 'form-check-label');
    tarkibLabel.setAttribute('for', 'tarkib'+i);
    tarkibLabel.textContent = contents[i].tarkibi;
    types.appendChild(tarkibLabel);
}



var sousType = document.createElement('div');
sousType.setAttribute('class', 'row border border-3 border-warning p-3 bg-danger');
    CONTENT.appendChild(sousType);

    for(var i=0; i<3; i++){
        var souses = document.createElement('div');
        souses.setAttribute('class', 'form-check col-4');
        sousType.appendChild(souses);

        var getSous = document.createElement('input');
        getSous.setAttribute('class', 'form-check-input');
        getSous.setAttribute('value', contents[i].sous);
        getSous.setAttribute('type', 'radio');
        getSous.setAttribute('name', 'Sousi')
        getSous.setAttribute('id', 'sous'+i);
        souses.appendChild(getSous);
        getSous.dataset.id = 12+i;

        var tarkibLabel = document.createElement('label');
        tarkibLabel.setAttribute('class', 'form-check-label');
        tarkibLabel.setAttribute('for', 'sous'+i);
        tarkibLabel.textContent = contents[i].sous;
        souses.appendChild(tarkibLabel);
    }


var RESULT = document.createElement('div');
RESULT.classList.add('col-4', 'p-4');
wrapper.appendChild(RESULT);

var text = document.createElement('p');
text.textContent = 'Ntija';
text.classList.add('h2', 'text-center', 'm-0');
RESULT.appendChild(text);

var resultText = document.createElement('div');
resultText.setAttribute('class', 'row border border-3 border-info h-75');
RESULT.appendChild(resultText);

var buttonWrapper = document.createElement('div');

var BUTTON = document.createElement('button');
BUTTON.setAttribute('class', 'btn btn-success float-end');
BUTTON.textContent = 'Buyurtma berish';
BUTTON.setAttribute('type', 'submit');
wrapper.appendChild(buttonWrapper);
buttonWrapper.appendChild(BUTTON);


wrapper.addEventListener('click', function(event){
    var inputValue = Number(event.target.dataset.id);
    
    
    if(event.target.matches('input')){
        if(inputValue>=0 && inputValue<6){
            buyurtma[0] = document.getElementsByTagName('input')[inputValue].value;
        } 
        if(inputValue>=6 && inputValue<9){
            buyurtma[1] = document.getElementsByTagName('input')[inputValue].value;
        }
        if(inputValue>=9 && inputValue<12){
            buyurtma[2] = document.getElementsByTagName('input')[inputValue].value;
        }
        if(inputValue>=12 && inputValue<15){
            buyurtma[3] = document.getElementsByTagName('input')[inputValue].value;
        }
        
        console.log(buyurtma);
    }
    if(buyurtma.length==4){
        resultText.textContent = 'Siz ' + buyurtma[1] + ' ' + buyurtma[2] + 'li ' + ' va ' + buyurtma[3] + 'li ' + buyurtma[0] + ' buyurtma qilmoqchimisz';
    }
})