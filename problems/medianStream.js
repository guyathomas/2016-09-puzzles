var MedianStream = function () {
    this.minHeap = [];
    this.maxHeap = [];
    this.count = 0;
};

MedianStream.prototype = {
  insert: function (item) {
      this.count++
      this.minHeap.push(item);
      
      //Calculate the current value and it's parent
      let lowerIndex = this.minHeap.length - 1;
      let parentIndex = Math.floor((lowerIndex - 1) / 2 );

      console.log('Before sort', this.minHeap)
      //While we are not at the top and the current value is smaller than the parent (should move up)
      while (this.minHeap[lowerIndex] < this.minHeap[parentIndex] && parentIndex >= 0) {
          this.swap(lowerIndex, parentIndex)
          lowerIndex = parentIndex;
          parentIndex = Math.floor((lowerIndex - 1) / 2 );
      }
      console.log('After sort', this.minHeap)
            
  },
  peekMedian: function () {},
  size: function () {
    return this.count;
  },
  swap: function(lower, parent) {
    let tempParent = this.storage[parent];
    this.storage[parent] = this.storage[lower];
    this.storage[lower] = tempParent;
  }
};

const stream = new MedianStream();

stream.insert(5);
stream.insert(7);
stream.insert(9);
stream.insert(4);
stream.insert(2);
stream.insert(1);