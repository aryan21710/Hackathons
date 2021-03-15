/**
 * https://edabit.com/challenges
 * Write a class called Point that represents a point in two-dimensional.
 *  It should have the following constructor:
 * Returns a string representation of this point, as [x=1, y=2].
 */

 class Point {
     constructor(x,y) {
         this.x=x;
         this.y=y;
     }

     toString() {
        return `[x=${this.x}, y=${this.y}]`
     }
 }


 const myPoint= new Point(3,4);
//  console.log(myPoint.toString());


 class Player {
    constructor(name, age, height, weight) {
        this.name= name;
        this.age = age;
        this.height= height;
        this.weight=weight;

    }


    getAge() {
        return `${this.name} is age ${this.age}`
    }

    getHeight() {
        return `${this.name} is ${this.height} cm`
    }

    getWeight() {
        return `${this.name} weighs ${this.weight} kg`

    }
 }

 p1 = new Player("David Jones", 25, 175, 75)

//  console.log(p1.getAge());
//  console.log(p1.getHeight());
//  console.log(p1.getWeight());

/**
 * Inheritance on objects
 */
// class BasicPlan {
//     constructor(canStream, canDownload, hasSD, hasHD, hasUHD,  numOfDevices, price) {
//         this.hasSD= hasSD;
//         this.hasUHD=hasUHD;
//         this.price=price;
//         this.numOfDevices=numOfDevices;
//         this.canStream= canStream;
//         this.canDownload = canDownload;
//         this.hasHD= hasHD;
//     }
// }

// const basicPlan= new BasicPlan(true, true, true, false, false, 1, '$8.99');
// console.log(basicPlan.price);

// class StandardPlan extends BasicPlan{
//     constructor(canStream, canDownload, hasSD, hasHD, hasUHD,  numOfDevices, price) {
//         super(canStream, canDownload, hasSD, hasHD, hasUHD,  numOfDevices, price)
//     }
// }

// const stdPlan= new StandardPlan(true, true,  true, true, false, 2, '$12.99');
// console.log(stdPlan.price);

// class PremiumPlan extends BasicPlan{
//     constructor(canStream, canDownload, hasSD, hasHD, hasUHD,  numOfDevices, price) {
//         super(canStream, canDownload, hasSD, hasHD, hasUHD,  numOfDevices, price)
//     }
// }

// const primPlan= new PremiumPlan(true, true,  true, true, true, 4, '$15.99');
// console.log(primPlan.price);


/**
 * Inheritance on classes
 */

class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';
}

class StandardPlan extends BasicPlan{
	static numOfDevices = 2;
	static hasHD = true;
	static hasUHD = false;
	static price = '$12.99';

}

class PremiumPlan extends BasicPlan{
	static numOfDevices = 4;
	static hasHD = true;
	static hasUHD = true;
	static price = '$15.99';

}



// console.log(PremiumPlan.hasSD);


class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		if (other.age > this.age) {
            return `${other.name} is older than me`
        } else if (other.age < this.age) {
            return `${other.name} is younger than me`
        } else {
            return `${other.name} is the same age as me`
        }
		
	}
}
// const p1 = new Person('Samuel',24);
// const p2 = new Person('Joel',36);
// const p3 = new Person('Lily',24);



// console.log(p1.compareAge(p2));
// console.log(p2.compareAge(p1));
// console.log(p1.compareAge(p3));

/**
 * Rectangle Series 1: Skeleton
 */

class Rectangle {
 constructor(x, y, width, height) {
     this.x=x;
     this.y=y;
     this.width=width;
     this.height=height;
 }
 toString() {
     return `[x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`
 }
}
const obj = new Rectangle(1,2,3,4)
// console.log(obj.toString());



/**
 * Ones, Threes and Nines (Version #1)
 */

 class OnesThreesNines {
     constructor(number) {
        this.number=parseInt(number);
     }

     get ones() {
         return parseInt(this.number / 1);
     }

     get threes() {
        return parseInt(this.number / 3);
    }

    get nines() {
        return parseInt(this.number / 9);
    }
 }

 let n1 = new OnesThreesNines(18)

console.log(n1.nines, n1.ones, n1.threes);
