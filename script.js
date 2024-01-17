const auto = {
    model: 'Land Rover',
    year: 2009,
    color: 'black',
}

auto.engine = () =>{
    console.log('дрдрдр');
}

const owner = {
    name: 'John Doe',
    age: 20,
    address: 'street',
}

owner.age = 30

const book = {
    title: 'python and javascript',
    autor: 'it-prog',
    year: '2024'
}

console.log(`
    название ${book.title}; автор ${book.autor}; год издания ${book.year}
`)

const animal = {
    makeSound: () => {}
}

auto.color = 'white'

const product = {
    title:'prod1',
    price:'300',
    qty:10,
}

product.qty +=5

const computer = {
    powerOn:()=>{}
}

owner.address = 'moscow street 20'

const fruit = {
    name : 'apple',
    toClean:()=>{}
}


for (key in owner){
    console.log(key);
    console.log(owner[key]);
}


const city = {
    name : "London",
    country:"UK",
    population:8746900,
}