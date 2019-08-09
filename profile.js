function Person() {
  let first = document.getElementById("Profile__first-name").value;
  let last = document.getElementById("Profile__last-name").value;
  let age = document.getElementById("Profile__age").value;
  let gender = document.getElementById("Profile__sex").value;
  let interests = document.getElementById("Profile__interests").value;
  //   let tryb = document.getElementById("try");
  //   tryb.onclick = function(event) {
  //     event.preventDefault();
  //     let string = `${first} ${last} is ${age} years old, `;

  //     let pronoun;
  //     if (
  //       gender === "male" ||
  //       gender === "Male" ||
  //       gender === "m" ||
  //       gender === "M"
  //     ) {
  //       pronoun = "He likes ";
  //     } else if (
  //       gender === "female" ||
  //       gender === "Female" ||
  //       gender === "f" ||
  //       gender === "F"
  //     ) {
  //       pronoun = "she likes ";
  //     } else {
  //       pronoun = "They like ";
  //     }
  //     string += pronoun;

  //     if (interests.length === "1") {
  //       string += `${interests[0]},`;
  //     } else if (interests.length === "2") {
  //       string += `${interests[0]} and ${interests[1]},`;
  //     } else {
  //       for (let i = 0; i < interests.length; i++) {
  //         if (i === interests.length - 1) {
  //           string += ` and ${interests[i]} `;
  //         } else {
  //           string += ` ${interests[i]},`;
  //         }
  //       }
  //     }

  //     this.greeting = function() {
  //       alert(`Hello am ${first} ${last}`);
  //     };

  //     alert(string);
  //   };
  let tryb = document.getElementById("try");
  tryb.onsubmit = function(event) {
    event.preventDefault();
    let string = `${first} ${last} is ${age} years old, `;

    let pronoun;
    if (
      gender === "male" ||
      gender === "Male" ||
      gender === "m" ||
      gender === "M"
    ) {
      pronoun = "He likes ";
    } else if (
      gender === "female" ||
      gender === "Female" ||
      gender === "f" ||
      gender === "F"
    ) {
      pronoun = "she likes ";
    } else {
      pronoun = "They like ";
    }
    string += pronoun;

    if (interests.length === "1") {
      string += `${interests[0]},`;
    } else if (interests.length === "2") {
      string += `${interests[0]} and ${interests[1]},`;
    } else {
      for (let i = 0; i < interests.length; i++) {
        if (i === interests.length - 1) {
          string += ` and ${interests[i]} `;
        } else {
          string += ` ${interests[i]},`;
        }
      }
    }

    this.greeting = function() {
      alert(`Hello am ${first} ${last}`);
    };

    alert(string);
  };
}
let person1 = new Person("Gbolahan", "Afolabi", 20, "F", [
  "football",
  "programming",
  "basket ball",
  "food"
]);

Person.prototype.farewell = function() {
  alert(this.name.first + " has left the building. Bye for now!");
};

let person2 = Object.create(person1);

//Teacher

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

Teacher.prototype.greeting = function() {
  let prefix;
  if (
    greeting === "Male" ||
    greeting === "male" ||
    greeting === "M" ||
    greeting === "m"
  ) {
    prefix = "Mr";
  } else if (
    greeting === "Female" ||
    greeting === "female" ||
    greeting === "F" ||
    greeting === "f"
  ) {
    prefix = "Mrs";
  } else {
    prefix = "Mx";
  }
  alert(`Hello am ${prefix} ${name} and I teach ${subject}`);
};

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;

let teacher1 = new Teacher(
  "Deborah",
  "Ninah",
  40,
  "female",
  ["football", "cookery"],
  "csc"
);

//Students

function Student(first, last, age, gender, interests) {
  Person.call(this, first, last, age, gender, interests);
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

let student1 = new Student("Moyin", "Afolabi", 20, "male", [
  "Programming",
  "Artificial Intelligence"
]);
