function filterUsersByState(users, state) {
  // your implementation here using .filter() on the users array
  // return an array of users filtered by the 'state' variable
  var filteredStates = users.filter(function(users){
    if (users.address.state == 'CA')
    return users;

  });
  return filteredStates;
}

var users = [
  {
    name: 'David',
    address: {
      state: 'CA'
    }
  },
  {
    name: 'Jeff',
    address: {
      state: 'TX'
    }
  },
  {
    name: 'Sandra',
    address: {
      state: 'NY'
    }
  },
  {
    name: 'Nevil',
    address: {
      state: 'CA'
    }
  }
];


var usersInCA = filterUsersByState(users);
console.log(usersInCA);
module.exports = usersInCA;
