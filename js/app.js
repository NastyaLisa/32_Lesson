console.group("Task 1");
const mixin = {
  vat() {
    return (this.price += this.price * 0.2);
  },
  exciseDuty() {
    return (this.price += this.price * 0.3 + 10);
  },
  singleTax() {
    return (this.price += 1);
  },
};

class Cola {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
}
Object.assign(Cola.prototype, mixin);

class Whiskey {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
}
Object.assign(Whiskey.prototype, mixin);

class Ice {
  constructor(price) {
    this.price = price;
  }
}
Object.assign(Ice.prototype, mixin);

const johnWalker = new Whiskey("john walker", 100);
const cocaCola = new Cola("Coca-Cola", 10);
const ice = new Ice(2);

console.log(cocaCola.vat());
console.log(johnWalker.exciseDuty());
console.log(ice.singleTax());
console.groupEnd();


console.group("Task 2");
function unicesString(str) {
  const words = str.split(";");

  const uniqueWords = new Set();

  for (let i = 0; i < words.length; i++) {
    const word = words[i].trim();
    if (word !== "") {
      uniqueWords.add(word);
    }
  }
  return uniqueWords;
}

console.log(unicesString("cherry; orange; cherry; banana; banana"));
console.groupEnd();


console.group("Task 3");

function uniquePhones() {
  const list = document.querySelectorAll(".shop-list li");
  const names = new Set();
  list.forEach((phones) => {
    names.add(phones.textContent);
  });
  return names;
}

console.log(uniquePhones());

console.groupEnd();


console.group("Task 4");

const userVisits = new Map();
function visitCounter() {
  function countVisits(user) {
    const visits = userVisits.get(user) || 0;
    userVisits.set(user, visits + 1);
    console.log(`${user.name} has been visited ${visits + 1} times`);
  }
  return countVisits;
}

let mike = { name: "Mike", age: 18 };
let bob = { name: "Bob", age: 25 };
let nikola = { name: "Nikola", age: 32 };

const mikeVisits = visitCounter();
const bobVisits = visitCounter();
const nikolaVisits = visitCounter();

mikeVisits(mike);
mikeVisits(mike);
mikeVisits(mike);
bobVisits(bob);
nikolaVisits(nikola);
nikolaVisits(nikola);
console.log(userVisits.get(mike));
console.log(userVisits.get(bob));
console.log(userVisits.get(nikola));

console.groupEnd();
