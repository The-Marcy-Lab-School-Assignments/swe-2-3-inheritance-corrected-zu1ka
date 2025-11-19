# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

In your own words, define what **inheritance** is in object-oriented programming. Then, explain what benefits it provides to developers who use it. Consider what problem it solves — what would be harder or messier without inheritance?

## Response 1

--- Inheritance is an OOP feature that lets one class reuse and extend the code of another class, so the child class automatically gets the parent’s properties and methods without rewriting them. It helps developers avoid duplicated code, keep shared logic in one place, and build cleaner, more organized systems. Without inheritance, every class would need to manually repeat the same features, making the code messier and harder to maintain.

## Prompt 2

Consider these classes:

```js
class Animal {
  eat() {
    return "eating";
  }
}

class Dog extends Animal {
  bark() {
    return "woof";
  }
}

class Puppy extends Dog {
  play() {
    return "playing";
  }
}

const rex = new Puppy();
```

Explain what happens when `rex.eat()` is invoked. In your answer, describe the role of **inheritance** and the **prototype chain**.

## Response 2

--- When you call rex.eat(), JavaScript first checks the rex object itself for the eat method. It doesn’t find it there, so it follows the prototype chain created by inheritance. Since rex is a Puppy, JavaScript looks at Puppy.prototype, then moves up to Dog.prototype, and finally reaches Animal.prototype, where the eat method is defined. It stops there, runs that method, and returns "eating". Inheritance is what sets up this chain of linked prototypes, and the prototype chain is what allows a Puppy instance to use a method that originally comes from the Animal class.

## Prompt 3

Look at these classes:

```js
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getDetails() {
    return `${this.name} earns $${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getDetails() {
    return `${super.getDetails()} and manages the ${
      this.department
    } department`;
  }
}
```

Complete the `Manager` class by filling in the `constructor` and `getDetails` methods. Explain why you need to use `super` in each method and what would happen if you didn't use it.

## Response 3

You need to use super in the Manager constructor because the parent class Employee is the one that sets up the name and salary properties. Calling super(name, salary) runs that parent constructor so the object is initialized correctly, and without it JavaScript won’t let you use this at all and will throw an error. In the getDetails method, you use super.getDetails() so you can reuse the original Employee version of the method and then add the department information on top of it. If you didn’t call super.getDetails(), you would either lose the employee details or be forced to rewrite the same logic, which defeats the point of inheritance.
