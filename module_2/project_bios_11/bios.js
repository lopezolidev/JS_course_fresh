// We'll create the biographies of mages

function Mages_creator (name, power, base) {
    this.name = name
    this.power = power
    this.base = base 
    this.isLeader = false

    this.greet = function () {
        console.log(`
        Salutes, I'm ${this.name} with a power of ${this.power}.
        I reside in ${this.base}.
        Leader of the group of mages? ${this.isLeader ? 'Yes I am' : 'No I am not'}`)
    }

    this.hasBecomeLeader = function () {
        this.isLeader = true
        console.log(`${this.name} has become leader of the group of Mages !!!`)
    }
}

const baldur_green_nose = new Mages_creator('Baldur Green Nose', 40, 'Casterly Rock')

const saruman_the_white = new Mages_creator('Saruman The White', 50, 'Black Tower')

const gandalf_the_great = new Mages_creator('Gandalf The Great' , 45, 'Mithlandir')

baldur_green_nose.greet()
/*
    Salutes, I'm Baldur Green Nose with a power of 40.
    I reside in Casterly Rock.
    Leader of the group of mages? No I am not
*/

saruman_the_white.greet()
/*
    Salutes, I'm Saruman The White with a power of 50.
    I reside in Black Tower.
    Leader of the group of mages? No I am not
*/

gandalf_the_great.greet()
/*
    Salutes, I'm Gandalf The Great with a power of 45.
    I reside in Mithlandir.
    Leader of the group of mages? No I am not
*/

gandalf_the_great.hasBecomeLeader()
// Gandalf The Great has become leader of the group of Mages !!!

baldur_green_nose.greet()
/*
    Salutes, I'm Baldur Green Nose with a power of 40.
    I reside in Casterly Rock.
    Leader of the group of mages? No I am not
*/

saruman_the_white.greet()
/*
    Salutes, I'm Saruman The White with a power of 50.
    I reside in Black Tower.
    Leader of the group of mages? No I am not
*/

gandalf_the_great.greet()
/*
    Salutes, I'm Gandalf The Great with a power of 45.
    I reside in Mithlandir.
    Leader of the group of mages? Yes I am
*/