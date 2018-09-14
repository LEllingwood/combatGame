// food fight

// constructor function
// function Food(options){
//     this.name = "ss";
//     this.health = 100;
//     this.fight = {}
// }

const hero = {
    name: 'Dryer Sheet EXTREEME',
    health: 100,
    chanceToMiss: 0.3,
    chanceToCrit: 0.9,
    fight: function (creature) {
      let message
      if (Math.random() < 0.3) {
        message = `${this.name} missed ${creature.name}.`
      } else {
        const dmg = Math.random() > 0.9 ? 20 : 10
        creature.health -= dmg
        message = `${creature.name} has been hit! It's now at ${creature.health} health.`
      }
      console.log(message)
      return message
    },
  }
  
  const monster = {
    name: 'Burt the Experimental Murder Bird',
    health: 50,
    chanceToMiss: 0.3,
    chanceToCrit: 0.9,
    fight: function (creature) {
      let message
      if (Math.random() < 0.3) {
        message = `${this.name} missed ${creature.name}.`
      } else {
        const dmg = Math.random() > 0.9 ? 20 : 10
        creature.health -= dmg
        message = `${creature.name} has been hit! It's now at ${creature.health} health.`
      }
      console.log(message)
      return message
    },
  }
  
  while (hero.health > 0 && monster.health > 0) {
    hero.fight(monster)
    monster.fight(hero)
    monster.fight(hero)
  }
  
  console.log(`${hero.name} is at ${hero.health} health and ${monster.name} is ${monster.health} health.`)
  console.log(`${hero.health > 0 ? hero.name : monster.name} was the victor!`)