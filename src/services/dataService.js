let catalog = [
    {
    "title":"Water",
    "category":"Household",
    "price":"15.99",
    "image":"water.jpeg",
    "_id":"1"
    },
    {
    "title":"Computer",
    "category":"Electronic",
    "price":"1299.99",
    "image":"cpu.jpeg",
    "_id":"2"
    },
    {
    "title":"Desktop",
    "category":"Electronic",
    "price":"659.99",
    "image":"cpu2.jpeg",
    "_id":"3"
    },
    {
    "title":"Headphones",
    "category":"Electronic",
    "price":"39.99",
    "image":"headphone.jpeg",
    "_id":"4"
    },
    {
    "title":"Computer-Mouse",
    "category":"Electronic",
    "price":"45.99",
    "image":"mouse.jpeg",
    "_id":"5"
    },
    {
    "title":"Phone",
    "category":"Electronic",
    "price":"439.99",
    "image":"phone.jpeg",
    "_id":"6"
    },
    {
    "title":"Socks",
    "category":"Clothes",
    "price":"25.99",
    "image":"socks.jpeg",
    "_id":"7"
    }
];

class DataService {

    getProducts(){
        return catalog;
    }


}
export default DataService;