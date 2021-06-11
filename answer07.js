class Collection {
  constructor(collection) {
    this.collection = collection;
  }

  all() {
    return this.collection;
  }

  first() {
    return this.collection[0];
  }

  random() {
    const randomIndex = Math.floor(Math.random() * this.collection.length);
    return this.collection[randomIndex];
  }

  reverse() {
    return this.collection.reverse();
  }

  replace(newCollection) {
    return Object.assign(this.collection, ...newCollection);
  }

  filter(item) {
    return this.collection.find(function (x) {
      return x == item;
    });
  }
}

const example = new Collection([42, 5, 12, 21, -5, 24, -43]);
console.log(example.filter(5));
