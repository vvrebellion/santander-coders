class Person {
  constructor(first, last, age, gender, interests) {
    this.name = first+" "+last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    //this.bio = this.name+ " is "+this.age+ " years old. They like "+ this.interests+'.';
  }
    bio(){
        console.log(`${this.name} is ${this.age} years old. They like ${this.interests}`)
    }
    greeting(){
        console.log(`Hi! I'm ${this.name}`)
    }
}

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject) {
    super(first, last, age, gender, interests);
    // subject is specific to Teacher
    this.subject = subject;
  }
  
  greeting(){
        console.log(`Hello. My name is ${this.name}, and I teach ${this.subject}. `)
  }

}

class Student extends Person{
    constructor(first, last, age, gender, interests, subject) {
        super(first, last, age, gender, interests);
    }
    
    greeting(){
        console.log(`Hey! I'm ${this.name}`)
    }
}

const student1 = new Student("Adam", "Lavine", "40", "M", "music")
console.log(student1, student1.bio(), student1.greeting() )
console.log("***")
const teacher1 = new Teacher("Albert", "Einstein", "100", "M", "Science", "Physics")
console.log(teacher1, teacher1.greeting(), teacher1.bio())
console.log("***")
const person1 = new Person("Vittoria", "Ventura",'24', 'F', 'movies',"Art"); 
console.log(person1, person1.bio(), person1.greeting())
