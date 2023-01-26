/* Interfaces in TS */

/* Object Property Type Defination */
interface Human {
  firstName: string;
  lastName: string;
  age: number;

  greet: () => void;
}

class PersonInfo {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const pInfo = new PersonInfo('John', 'Smith', 30);
pInfo.getName();

let shani: Human;

shani = {
  firstName: 'Shani',
  lastName: 'Gupta',
  age: 24,
  greet() {
    console.log("Hello Shani");
  },
}

class Developer implements Human {
  firstName: string;
  lastName: string;
  age: number;
  greet() {
    console.log(this.firstName);
  }
}