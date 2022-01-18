let appText = document.querySelector('.appetizer');
appText.innerText = appText.className;
appText.style.textTransform = "capitalize";

let mainText = document.querySelector('.main');
mainText.style.textTransform = "capitalize";

let desText = document.querySelector('.dessert');
desText.style.textTransform = "capitalize";

const totalP = document.createElement('h2');
document.body.appendChild(totalP);


const menu = {
    _courses: {
     appetizers: [],
     mains: [],
     desserts: [],
    },

    // get app() {},
    // set app(appIn) {},
    // get main() {},
    // set main(mainIn) {},
    // get des() {},
    // set des(desIn) {},
    // get course() {
    //   return {
    //     appetizers: this.appetizers,
    //     mains: this.mains,
    //     desserts: this.desserts,
    //   };
    // },

    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
      //retrieve array from _courses and store in var dishes
      const dishes = this._courses[courseName];
      
      //random length of dishes array round to floor
      const randomIndex = Math.floor(Math.random() * dishes.length);
      
      //return dish located at index in dishes
      return dishes[randomIndex];
    },

    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      
      appText.innerText = `${appText.className}: ${appetizer.name} $${appetizer.price}`
      mainText.innerText = `${mainText.className}: ${main.name} $${main.price}`
      desText.innerText = `${desText.className}: ${dessert.name} $${dessert.price}`
      totalP.innerText = `Total Price: $${totalPrice}`

      return `Today's menu:
        Appetizer: ${appetizer.name} $${appetizer.price}
        Main course: ${main.name} $${main.price}
        Dessert: ${dessert.nampe} $${dessert.price}
        Total Price: $${totalPrice}`;

    },

}

menu.addDishToCourse('appetizers', 'Burrata Salad', 12.50);
menu.addDishToCourse('appetizers', 'Octopus Salad', 14.50);
menu.addDishToCourse('appetizers', 'Curried Couscous', 11.00);
menu.addDishToCourse('appetizers', 'French Onion Soup', 12.00);
menu.addDishToCourse('appetizers', 'Guacamole and Chips', 10.50);

menu.addDishToCourse('mains', 'Apple Cranberry Compote Porkchops w/ Polenta', 20.50);
menu.addDishToCourse('mains', 'Tagliatelle w/ Beef & Pork Ragu', 19.50);
menu.addDishToCourse('mains', 'Yuzu Drizzled Seared Seabass', 21.00);
menu.addDishToCourse('mains', 'Garlicky Lemon Whole Grilled Branzino', 24.50);
menu.addDishToCourse('mains', '9-Grains Stuffed Portobello w/ Sweet Potato Mash', 18.50);

menu.addDishToCourse('desserts', 'Yuzu Cream Ice Pop', 10.00);
menu.addDishToCourse('desserts', 'Chocolate Molten Lava Cake', 12.50);
menu.addDishToCourse('desserts', 'Matcha Cream Pie w/ Fresh Berries', 14.50);
menu.addDishToCourse('desserts', 'Cherry Drizzle Cheesecake', 13.50);
menu.addDishToCourse('desserts', 'Trio of Seasonal Gelato', 11.50);

console.log(menu._courses.appetizers);
console.log(menu._courses.mains);
console.log(menu._courses.desserts);

menu.getRandomDishFromCourse('appetizers');
menu.getRandomDishFromCourse('mains');
menu.getRandomDishFromCourse('desserts');

console.log(menu.generateRandomMeal());
// appText.innerText = menu.generateRandomMeal();
