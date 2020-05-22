//Write a JavaScript program to target a given value in a nested JSON object, based on the given key

const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  },
  level7: {
    level8: {
      level9: 'some other data'
    }
  }
};

const findVal = ( obj, key ) =>
   key in obj
      ? obj[key]
      : Object.values(obj).reduce( (acc, val) => {
        if ( acc !== undefined ) return acc;
        if ( typeof val === 'object') return findVal(val, key);
      }, undefined );


console.log(findVal(data, 'level9'));