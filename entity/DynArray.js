class DynArray {

  constructor() {
    this.array = {};
    this.count = 0;
    this.capacity = 16;
  }

  makeArray(capacity) {

    //creating absolutely new array
    if (!Object.keys(this.array).length || Object.keys(this.array).length === 0) {
      for (let i = 0; i < this.capacity ; i++) {
        this.array[i] = null;
      }

    //increasing size of existing array
    } else if (this.capacity = capacity){

      for (let i = this.count; i < capacity; i++) {
        this.array[i] = null;
      }

      this.capacity = capacity;
    }

    //check capacity and decrease it (if it needs)
    if (this.capacity / this.count > 2 && this.capacity / 2 > 16) {

      for (let i = Object.keys(this.array).length / 2; i < this.capacity ; i ++) {
        console.log(i);
        delete (this.array[Math.floor(i)]);
      }

      this.capacity = Math.floor(this.capacity / 2);
    }

  }

  getItem(index) {

    if (index <= 0 || index > this.count) {
      throw new Error(`Index ${index} is out of range`);
    } else {
      return this.array[index];
    }

  }

  /*append(item) {

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
      let newCapacity = ((this.capacity * 3) / 2 ) + 1;
      this.makeArray(newCapacity);
      this.append(item);
      this.count--;
    }
  }*/

  append(item) {
    this.insertItem(this.count, item)
  }

  insertItem(index, item) {

    if (this.getItem(index)) {
      if (this.count + 1 === this.capacity) {
        this.capacity = ((this.capacity * 3) / 2 ) + 1;
        this.makeArray(this.capacity);
      }

      for (let i = this.count - 1; i > index-1; i--) {
        this.array[i+1] = this.array[i];
      }

      this.array[index] = item;
      this.count++;
    }
  }

  deleteItem(index) {

    if (this.getItem(index)) {
      for (let i = index +1; i< this.count + 1; i++) {
        this.array[i-1] = this.array[i];
      }

      this.count--;
    }

    this.makeArray(this.capacity);

  }


}

module.exports = DynArray;