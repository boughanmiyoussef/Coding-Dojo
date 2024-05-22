class Ninja{
    constructor (name , health , speed , strength ){
        this.name=name
        this.health=health
        this.speed=speed
        this.strength=strength
    }
    

    sayName(){
        console.log("name: ${this.name}")

    }

    showStats(){
        console.log("name : ${this.name}, health: ${this.health}, speed: ${this.speed} , strength ${this.strength}");
    }
    
    drinkSake(){
        this.health=+10
    }
}

class Sensei extends Ninja{
    constructor(name , wisdom=10){
        super(name, 200, 10, 10)
        this.wisdom=wisdom
    }

    speakWisdom(){
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.");

    }

        //      example output
        // const superSensei = new Sensei("Master Splinter");
        // superSensei.speakWisdom();
        //  -> "What one programmer can do in one month, two programmers can do in two months."
        // superSensei.showStats();
        // -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"





}
