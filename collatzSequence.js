module.exports = {
  LongestCollatzSequenceCached: function() {
    const number = 1000000;

    var sequenceLength = 0;
    var startingNumber = 0;
    var sequence;
    var start, finish;

    start = new Date();

    var cache = new Array(number + 1);
    //Filling the cache array
    for (var i = 0; i < cache.Length; i++) {
      cache[i] = -1;
    }
    cache[1] = 1;

    //Doing the solution with cache, storing the sequences in the array avoiding to iterate them again
    for (var i = 2; i <= number; i++) {
      sequence = i;
      var k = 0;
      while (sequence != 1 && sequence >= i) {
        k++;
        if (sequence % 2 == 0) {
          sequence = sequence / 2;
        } else {
          sequence = sequence * 3 + 1;
        }
      }
      //Store result in cache
      cache[i] = k + cache[sequence];

      //Checking if it is the longest sequence
      if (cache[i] > sequenceLength) {
        sequenceLength = cache[i];
        startingNumber = i;
      }
    }
    finish = new Date();

    console.log(
      `The number ${startingNumber} generate a sequence of ${sequenceLength}. Operation took ${finish.getTime() -
        start.getTime()} ms to be finished in the Cached Solution.`
    );
  },

  LongestCollatzSequence: function() {
    const number = 1000000;

    var sequenceLength = 0;
    var startingNumber = 0;
    var sequence;
    var start, finish;

    start = new Date();

    //Doing the direct solution iterating all the numbers
    for (var i = 2; i <= number; i++) {
      var length = 1;
      sequence = i;
      while (sequence != 1) {
        if (sequence % 2 == 0) {
          sequence = sequence / 2;
        } else {
          sequence = sequence * 3 + 1;
        }
        length++;
      }

      //Checking if it is the longest sequence
      if (length > sequenceLength) {
        sequenceLength = length;
        startingNumber = i;
      }
    }
    finish = new Date();

    console.log(
      `The number ${startingNumber} generate a sequence of ${sequenceLength}. Operation took ${finish.getTime() -
        start.getTime()} ms to be finished in the Direct Solution.`
    );
  }
};
