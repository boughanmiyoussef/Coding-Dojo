
class Ninja {
    constructor (name,health=90, speed=3 , strength=3 ){
        this.name=name
        this.health=health
        this.speed=speed
        this.strength=strength
    }
    sayName(){
        console.log('name: ${this.name}');
    }

    showStats(){
        console.log('name : ${this.name} , strength: ${this.strength} , speed : ${this.speed} , health:${this.health} ' )
    }


    drinkSake(){
        this.health=+10
    }

   
}



