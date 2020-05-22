//Create a single array from object properties
//In this example I have an array of people, each person also has some friends,
//which holds an array of friends. Now I want to pull out the ages of
//all persons and friends and have that in a single array.
// https://medium.com/front-end-weekly/a-closer-look-on-array-reduce-with-useful-examples-34f222664e66

const people = [
  {
    name: 'Leo',
     age: 22,
     blackBelt: true,
     experience: 18,
     availableForWork: true,
     isTurtle: true,
     friends: [
      {
        name: 'Micky',
         age: 44,
         blackBelt: false,
         availableForWork: true,
         isTurtle: false
       },
       {
        name: 'Donny',
         age: 32,
         blackBelt: true,
         availableForWork: false,
         isTurtle: false
       }
     ]
   },
   {
    name: 'Rafael',
     age: 21,
     blackBelt: true,
     experience: 12,
     availableForWork: true,
     isTurtle: true,
     friends: [
      {
        name: 'Leo',
         age: 31,
         blackBelt: false,
         isTurtle: false,
         availableForWork: false
       },
       {
        name: 'Donny',
         age: 33,
         blackBelt: true,
         isTurtle: false,
         availableForWork: true
       }
     ]
   },
   {
    name: 'Donatello',
     age: 19,
     blackBelt: true,
     experience: 16,
     availableForWork: false,
     isTurtle: true,
     friends: [
      {
        name: 'Nicky',
         age: 34,
         blackBelt: false,
         isTurtle: false,
         availableForWork: true
       },
       {
        name: 'Splinter',
         age: 73,
         blackBelt: true,
         isTurtle: false,
         availableForWork: false
       }
     ]
   },
   {
    name: 'Michaelangelo',
     age: 17,
     blackBelt: true,
     experience: 10,
     availableForWork: false,
     isTurtle: true,
     friends: [
      {
        name: 'April',
         age: 21,
         blackBelt: false,
         isTurtle: false,
         availableForWork: false
       },
       {
        name: 'B-Bob',
         age: 21,
         blackBelt: true,
         isTurtle: false,
         availableForWork: true
       }
     ]
   }
 ];
 
 let result = [];
 
 const getAge = (objArr, age) =>
   objArr.reduce( (acc, val) => {
     if ( age in val ) acc.push(val[age]);
     if (Object.prototype.toString.call(val) === '[object Object]') {
       Object.values(val).forEach( item => {
         if ( Array.isArray(item) ) return getAge(item, age);
       } );
     };
     return acc;
 }, result);
 
 console.log(getAge(people, 'age'));