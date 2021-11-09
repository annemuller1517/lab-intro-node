class SortedList {
  constructor() {
    this.items = [] 
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b);
    this.length = this.items.length
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos]
    } else {
        throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length){
      return this.items[this.length - 1]
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length){
      return this.items[0]
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.length){
      return this.items.reduce((a,b)=> {
        return a + b
      },0)
    } else {
      return 0;
    }
  }

  avg() {
    if (this.length){
      return this.sum()/this.length
    }
    else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
