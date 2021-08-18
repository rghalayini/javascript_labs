function GetPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    return [
        new Person('Maria', 'Petterson', 22, 'mp@gmail.com'),
        new Person('Lexicon', 'Petterson'),
        new Person('Stefan', 'Larsson', 25),
        new Person('Peter', 'Jansson', 24, 'ptr@live.com')
    ];
}

console.log(GetPersons());