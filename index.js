fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      for (const variable in collection) {
        iteratee(collection[variable])
      }
    },
    map: function(collection, iteratee) {
      const array = [];
      for (const variable in collection) {
        array.push(iteratee(collection[variable]));
      }
      return array
    },
    reduce: function(collection, iteratee, acc){
      let adder = 0;
      for (const variable in collection) {
        adder += iteratee(acc, collection[variable], collection)
      }
      return adder
    },
    find: function(collection, predicate){
      for (const variable in collection) {
        if (predicate(collection[variable])) {
          return collection[variable]
        }
      }
    },
    filter: function(collection, predicate){
      const array = [];
      for (const variable in collection) {
        if (predicate(collection[variable])) {
          array.push(collection[variable]);
        }
      }
      return array;
    },
    size: function(collection){
      let counter = 0;
      for (const variable in collection) {
        counter++
      }
      return counter;
    },
    first: function(array, n){
      let arr = [];
      if (n){
        for (let i = 0; i < n; i++ ){
          arr.push(array[i]);
        }
      }else {
        arr.push(array[0]);
      }
      return arr;
    },
    last: function(array, n){
      let arr = [];
      if (n){
        for (let i = array.length - 1; i >= n; i-- ){
          arr.unshift(array[i]);
        }
      }else {
        arr.push(array[array.length - 1]);
      }
      return arr;
    },
    compact: function(array){
      let arr = [];
      for (const ele in array){
        if (array[ele]){
          arr.push(array[ele]);
        }
      }
      return arr;
    },
    sortBy: function(array, iteratee){
      return array.sort(function(a, b){return iteratee(a) - iteratee(b)});
    },
    keys: function(object){
      let arr = [];
      for(const key in object){
        arr.push(key);
      }
      return arr;
    },
    value: function(object){
      let arr = [];
      for(const key in object){
        arr.push(object[key]);
      }
      return arr;
    },
    functions: function(object){
      return self.keys(object).sort();
    },
    flatten: function(array) {
      let output =[];
      function innerFunc(array){
        for (const elem of array){
          if (typeof elem === 'object') {
            innerFunc(elem)
          }else {
            output.push(elem)
          }
        }
      }
      innerFunc(array)
      return output;
    },
    uniq: function(array, isSorted, iteratee){
      let arr = [];
      for(const ele of array){
          let already = false
          for(const newEle of arr){
            if (newEle === ele){
              already = true;
            }
          }
          if (already === false){
            arr.push(ele);
          }
        }
      return arr;
    }
  }
})()

fi.libraryMethod();
