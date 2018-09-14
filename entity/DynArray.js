class DynArray {

  constructor() {
    this.array = {};
    this.count = 0;
    this.capacity = 16;
  }

  makeArray(capacity) {

    if (!Object.keys(this.array).length || Object.keys(this.array).length === 0) {
      for (let i = 0; i < this.capacity ; i++) {
        this.array[i] = null;
      }
    } else {
      let currentCapacity = Object.keys(this.array).length;

      for (let i = currentCapacity - 1; i < capacity; i++) {
        this.array[i] = null;
      }

      this.capacity = capacity;
    }

  }

  getItem(index) {

    if (!this.array[index] || index > this.count - 1) {
      throw new Error('Index out of range');
    } else {
      return this.array[index];
    }

  }

  append(item) {

    if (Object.keys(this.array).length > 0) {

      for (let key in this.array) {

        if (this.array[key] === null) {
          this.array[key] = item;
          this.count++;
          break;
        }
      }

    }

    if (this.count === this.capacity) {
      this.capacity = ((this.capacity * 3) / 2 ) + 1;
      this.makeArray(this.capacity);
      this.append(item);
      this.count--;
    }
  }

  insertItem(index, item) {

  }

  deleteItem(index) {

  }


}

module.exports = DynArray;