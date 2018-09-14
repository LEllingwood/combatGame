
// create class for fruit
// create class for veggies
// make them fight

// set a prompt asking the user to pick a fruit or veggie

// new instance of class veggie
const brocolli = new Food({
  name: "Itty Bitty Brocollini", 
  type: "vegetable",
  freshness: 2000,
//   fight:
})

// New instance of class fruit
const banana = new Food({
  name: "Bodacious Banana", 
  type: "fruit",
  freshness: 0.3,
  chanceToCrit: 0.1,
})

// class - vegetables
const veggie = {
    name: "Bad Ass Brussels Sprout",
    type: "vegetable",
    freshness: 100,
    chanceToMiss: 0.3,
    chanceToCrit: 0.9,
    // fight: function (food) {
    //   let message
    //   if (Math.random() < 0.3) {
    //     message = `${this.name} missed ${Food.name}.`
    //   } else {
    //     const dmg = Math.random() > 0.9 ? 20 : 10
    //     creature.freshness -= dmg
    //     message = `${Food.name} has been hit! It's now at ${Food.freshness} health.`
    //   }
    //   console.log(message)
    //   return message
    },
  }
  
//   class - fruits
  const fruits = {
    name: "Sissified Strawberry",
    type: "fruit",
    freshness: 50,
    chanceToMiss: 0.3,
    chanceToCrit: 0.9,
    // fight: function (Food) {
    //   let message
    //   if (Math.random() < 0.3) {
    //     message = `${this.name} missed ${Food.name}.`
    //   } else {
    //     const dmg = Math.random() > 0.9 ? 20 : 10
    //     Food.freshness -= dmg
    //     message = `${Food.name} has been bruised! It's now at ${Food.freshness} freshness.`
    //   }
    //   console.log(message)
    //   return message
    },
  }
  
  while (veggie.freshness > 0 && fruit.freshness > 0) {
    veggie.fight(fruit)
    fruit.fight(veggie)
    fruit.fight(veggie)
  }
  
//   constructor function
  function Food (options) {
        this.health = options.health || 50
//         this.maxHealth = this.health * 2
//         this.chanceToCrit = options.chanceToCrit || 0.1
//         this.chanceToMiss = options.chanceToMiss || 0.3
//         this.baseDamage = options.baseDamage || 10
//         this.fight = function (food) {
//           let message
//           if (Math.random() < this.chanceToMiss) {
//             message = `${this.name} missed ${Food.name}.`
//           } else {
//             const dmg = Math.random() < this.chanceToCrit 
//               ? this.baseDamage * 2 
//               : this.baseDamage
//             Food.health -= dmg
//             message = `${Food.name} has been hit! It's now at ${Food.freshness} freshness.`
//           }
//           console.log(message)
//           return message
//         }
  
//   console.log(`${veggie.name} is at ${veggie.freshness} freshness and ${fruit.name} is ${fruit.freshness} freshness.`)
//   console.log(`${veggie.freshness > 0 ? veggie.name : fruit.name} was the victor!`)
  
    }

//   function battle (hero, ...monsters) {
//     if (monsters.length === 0) {
//       monsters = [new Creature({ name: "Martha Stewart Angry and Methed-Up"})]
//     }
  
//     monsters.forEach(monster => {
//       while (hero.health > 0 && monster.health > 0) {
//         hero.fight(monster)
//         monster.fight(hero)
//         monster.fight(hero)
//       }
  
//       hero.health = Math.random() > 0.9 
//         ? hero.maxHealth 
//         : hero.health * 2
//       console.log(`${hero.name} is at ${hero.health} health and ${monster.name} is ${monster.health} health.`)
//       console.log(`${hero.health > 0 ? hero.name : monster.name} was the victor!`)
//     })
    
//   }
  
//   battle(dryerSheet, burtTheBird, justADudeInTheBackgroundMindingHisOwnBusiness, glassButterfly)
  
  
  
  // TODO: Build a game where have a hero and a monster
  // TODO: I want to have them fight
  // TODO: Oh, and that will mean they will have to have health
  // TODO: They'll need to be able to affect each other's health
  
//   const theRealBurtShady = new Creature({
//     name: 'The Real Burt – Burt Reynolds, back for revenge', 
//     health: 2000,
//   })
  
//   const glassButterfly = new Creature({
//     name: 'Glass Butterfly', 
//     health: 0.3,
//     chanceToCrit: 0.1,
//     chanceToMiss: 0.1,
//     baseDamage: 1200,
//   })
  
//   const justADudeInTheBackgroundMindingHisOwnBusiness = new Creature({
//     name: 'Michael', 
//     chanceToCrit: 0.05,
//   })
  
//   function Creature (options) {
//     if (!options.name) {
//       throw (new Error("GIVE THE THING A NAME GOSHDANGIT."))
//     } else {
//       this.name = options.name
//     }
//     this.health = options.health || 50
//     this.maxHealth = this.health * 2
//     this.chanceToCrit = options.chanceToCrit || 0.1
//     this.chanceToMiss = options.chanceToMiss || 0.3
//     this.baseDamage = options.baseDamage || 10
  
//     this.fight = function (creature) {
//       let message
//       if (Math.random() < this.chanceToMiss) {
//         message = `${this.name} missed ${creature.name}.`
//       } else {
//         const dmg = Math.random() < this.chanceToCrit 
//           ? this.baseDamage * 2 
//           : this.baseDamage
//         creature.health -= dmg
//         message = `${creature.name} has been hit! It's now at ${creature.health} health.`
//       }
//       console.log(message)
//       return message
//     }
//   }
  
//   const dryerSheet = new Creature({
//     name: 'Dryer Sheet EXTREEME',
//     health: 100,
//   })
  
//   const burtTheBird = new Creature({
//     name: 'Burt the Experimental Murder Bird',
//   })
  
//   function battle (hero, ...monsters) {
//     if (monsters.length === 0) {
//       monsters = [new Creature({ name: "Martha Stewart Angry and Methed-Up"})]
//     }
  
//     monsters.forEach(monster => {
//       while (hero.health > 0 && monster.health > 0) {
//         hero.fight(monster)
//         monster.fight(hero)
//         monster.fight(hero)
//       }
  
//       hero.health = Math.random() > 0.9 
//         ? hero.maxHealth 
//         : hero.health * 2
//       console.log(`${hero.name} is at ${hero.health} health and ${monster.name} is ${monster.health} health.`)
//       console.log(`${hero.health > 0 ? hero.name : monster.name} was the victor!`)
//     })
    
//   }
  
//   battle(dryerSheet, burtTheBird, justADudeInTheBackgroundMindingHisOwnBusiness, glassButterfly)