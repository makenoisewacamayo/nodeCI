console.clear();

class Greetings {
  english() { return 'Hello'; }
  spanish() { return 'Hola'; }
}

class MoreGretings {
  german() { return 'Hallo'; }
  french() { return 'Bonjour'; }
}

const gretings = new Greetings();
const moreGrettings = new MoreGretings();

const allGreetings = new Proxy(moreGrettings, {
  get: (target, property) => target[property] || gretings[property],
});

console.log(allGreetings.french);
console.log(allGreetings.spanish);
console.log(allGreetings.french());
console.log(allGreetings.english());
console.log(allGreetings.german());
console.log(allGreetings.spanish());
