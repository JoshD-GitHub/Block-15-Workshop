// create an object for the froyo
const froyo = {
    firstName: 'jake',
    lastName: 'smith',
    email: 'jaekSmih!aol.com',
    phone: undefined,
    zipCode: '631',
    favoritFlavors: 32,
    cupSize: 'medium',
    favoriteStore: 'target',
    firstVisit: false,
};

// change using bracket notation
froyo['email'] = 'jak3smith1992@email.com';
froyo['phone'] = 3195551234;
froyo['zipCode'] = '63132';
froyo['favoritFlavors'] = ['coffee', 'strawberry', 'macha'];
 
// delete using dot notation
delete froyo.zipCode;
delete froyo.favoriteStore;

// add using dot notation
froyo.toppings = ['chocolate sprinkles', 'waffer straws', 'gummy bears'];
froyo.futureFlavors = 'mango';
froyo.todaysPurchaseCost = 5.32;

// list keys in an array
console.log(Object.keys(froyo));