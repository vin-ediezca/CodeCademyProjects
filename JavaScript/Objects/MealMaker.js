const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    if (this._courses.appetizers) {
      return this._courses.appetizers;
    } else {
      console.log('Error getting appetizers!');
    }
  },
  set appetizers(appetizerIn) {
    if (typeof(appetizerIn.name) === 'string' && typeof(appetizerIn.price) === 'number') {
      this._courses.appetizers.push(appetizerIn);
    } else {
      console.log('Error setting appetizers!');
    }
  },
  get mains() {
    if (this._courses.mains) {
      return this._courses.mains;
    } else {
      console.log('Error getting mains!');
    }
  },
  set mains(mainsIn) {
    if (typeof(mainsIn.name) === 'string' && typeof(mainsIn.price) === 'number') {
      this._courses.mains.push(mainsIn);
    } else {
      console.log('Error setting mains!');
    }
  },
  get desserts() {
    if (this._courses.desserts) {
      return this._courses.desserts;
    } else {
      console.log('Error getting desserts!');
    }
  },
  set desserts(dessertsIn) {
    if (typeof(dessertsIn.name) === 'string' && typeof(dessertsIn.price) === 'number') {
      this._courses.desserts.push(dessertsIn);
    } else {
      console.log('Error setting desserts!');
    }
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this[courseName] = dish;
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'Artichoke Spinach Dip', 4.75);
menu.addDishToCourse('appetizers', 'Cheesy Pull-Apart Bread', 4.20);
menu.addDishToCourse('appetizers', 'Fontina-Stuffed, Bacon-Wrapped Dates', 4.50);

menu.addDishToCourse('mains', 'Beef Main Dishes', 7.60);
menu.addDishToCourse('mains', 'Burritos and Tacos', 7.30);
menu.addDishToCourse('mains', 'Main Dish Casseroles', 7.50);

menu.addDishToCourse('desserts', 'Mint Oreo Cake', 5);
menu.addDishToCourse('desserts', 'Ultimate Gooey Brownies', 7);
menu.addDishToCourse('desserts', 'Chocolate And Strawberry Cake', 10);

let meal = menu.generateRandomMeal();
console.log(meal);