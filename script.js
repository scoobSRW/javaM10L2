const cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn',
            'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)',
             'Tomato']

let loggedIn = false;

function iterate(cart) {
    for (const item of cart) {
        console.log("Item In Cart:", item);
    }
}

if (loggedIn == true) {
    iterate(cart);
    } else {
    console.log("You must be logged in.")
}