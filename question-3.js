var users = [
  {
    first_name: 'Tom',
    last_name: 'Dale'
  },
  {
    first_name: 'Yehuda',
    last_name: 'Katz'
  },
  {
    first_name: 'Taylor',
    last_name: 'Otwell'
  }
];


function normalize() {
    var concat = users.map(function(name){
    name.firstName = name.first_name;
    name.lastName = name.last_name;
    delete name.first_name;
    delete name.last_name;
    return name;


  })
  return concat;
}


var normalizedUsers = normalize(users);
console.log(normalizedUsers);


// normalizedUsers should look like: (notice the change in casing of first_name and last_name)
// [
//   {
//     firstName: 'Tom',
//     lastName: 'Dale'
//   },
//   {
//     firstName: 'Yehuda',
//     lastName: 'Katz'
//   },
//   {
//     firstName: 'Taylor',
//     lastName: 'Otwell'
//   }
// ]
