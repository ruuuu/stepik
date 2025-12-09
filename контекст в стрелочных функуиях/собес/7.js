// Задача 7: Массивы и forEach/map

const team = {
  name: 'Avengers',
  members: ['Iron Man', 'Hulk', 'Thor'],

  listMembers: function() {  //  this = team
    this.members.forEach(function(member) { 
      console.log(`${member} - ${this.name}`);  // this потерян, поэтому this.name = undefined(window)
    });
  },

  listMembersArrow: function() {  //  this = team
    this.members.forEach((member) => {  // если стрелочную фукнцию поместить в метод объекта, то this = obj, поэтому this = team
      console.log(`${member} - ${this.name}`); // this.name = 'Avengers'
    });
  }

};



team.listMembers();      // тк вызов как obj.method(), то this = team
team.listMembersArrow(); //  тк вызов как obj.method(), то this = team