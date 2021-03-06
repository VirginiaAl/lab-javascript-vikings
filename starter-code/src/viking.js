// Soldier
function Soldier (health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function() {
    return this.strength;
  }
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
  }
}

// Viking
function Viking (name, health, strength) {
  this.name = name;
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0){
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }
  this.battleCry = function() {
    return "Odin Owns You All!";
  }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength);
  this.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0){
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
  newViking = new Viking();
  this.addViking = function(newViking) {
    this.vikingArmy.push(newViking);
  }
  newSaxon = new Saxon();
  this.addSaxon = function(newSaxon) {
    this.saxonArmy.push(newSaxon);
  }
  this.vikingAttack = function() {
    var randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  }
}
