# Design-Patterns

## Introduction

This repo will contain the code and notes for the course: [The Ultimate Design Patterns Course](https://codewithmosh.com/courses/759570/).

## Table of Contents

- [Section 1: Design Patterns Introduction](#section-1-design-patterns-introduction)
- [Section 2: Memento Pattern](#section-2-memento-pattern)
- [Section 3: State Pattern](#section-3-state-pattern)

## Section 1: Design Patterns Introduction

Design Patterns, are elegant solutions to repeating problems in Software Design.

Design Patterns show how to structure classes and how they should talk to each other.

This course covers 23 design patterns that were covered in [Design Patterns: Elements of Reusable Object-Oriented Software](https://en.wikipedia.org/wiki/Design_Patterns):

- This book was Written by 4 Authors known as Gang of Four (GoF)
- Hence why these patterns are often reffered to as Gang of Four Patterns
- The GoF patterns are 23 patterns split into 3 categories:
  - Creational: Different ways to create objects
  - Structural: The Relationships between objects
  - Behavioural: The Interaction/Communication between objects

### Recap of OOP

Encapsultation:

- This principle states that all data, and methods that operate on said data should be bundled into one unit, better as we know it, a class.
- Furthermore, this principle ensures that our properties/states are hidden within the class, ensuring that our classes are robust.
  - This is typically done by creating private propeties that can only be directly modified within the class,

Abstraction:

- This principle states that we should hide complexity by hiding unnecessary details within our classes

  - This helps reduce complexity

- An example of this can be through the example of an email service:

  - In our example class, we can only call the sendEmail method, which will handle all the logic for sending the email
  - This method, does however incorporate numerous other methods, to carry out its functionality
  - Methods like connect, and authenticate, are private and hidden outside of our class as they are unnecessary implementation details which do not need to be accessed by our instances

  ```ts
  class MailService {
    sendEmail() {
      connect();
      authenticate();
      //Send Email
      disconnect();
    }
  }
  ```



Inheritance:

- Inheritance is a mechanism for reusing code
- It allows for us to set common properties and methods within a base class, wherein that base class can be extended for more specific implementation through child classes

Polymorphism:

- Polymorphism refers to the ability of an object to take on many fornms
- A base class could contain methods which have differing implementation based on their child classes
- In such cases, when extended, we can use the `override` keyword to change the implementation of said method
- Now every different child class will have different implementation details for said method and have different behaviour when called
- Essentially, our objects are able to take on different forms at runtime, depending on the type of subclass they are

### SOLID Principles
Solid is an acronym for the five OOP Design principles. Said principles allow for us to write maintainable which can be easily extended as a project grows.

Single-Responsibility Principle:

This principle states: "A class should have one and only one reason to change, meaning that a class should have only one job."

- Essentially all our classes should only have one specific purpose/responsibility and therefore only ever have one reason to change
  - An example of this could be a calorie tracker class which has a method to track calories and another to alert the user they're exceeding their calorie count
  - The problem here is that the calorie track has 2 jobs, tracking calories and alerting users, and say for instance, if the alert method had to change from printing to sending an email, the structure of the class would also have to change
  - Therefore, it would be best to create a separate class/module to handle the alerting of users, so that if it needs to be changed, it won't affect the structure of the calorie tracker class

Open/Closed Principle:

The Open-Closed Principle requires that classes should be open for extension and closed to modification.



## UML Relationships

UML (Unified Modeling Language) is a popular language used to model OOP systems:

- A Class in UML is represented by a Square block, with the name, fields and methods of that class
- Relationships between classes is conveyed using arrows:

- Inheritance is shown using a arrow from the child class to the parent
- Composition Relationships or the `has a` relationships are when a class is composed of another
  - It is indicated through a diamond arrow
  - Indicated that one class contains a field of type `other class`
  ```ts
  class Shape {
    private _size: Size;
  }

- The Dependency Relationship is denoted using a dashed arrow
  - In this relationship, a class references another class
  ```ts
  class Shape {
    render(doc: Document) {}
  }
  ```

## Section 2: Memento Pattern

This pattern is used on implementing undo/redo mechanisms.

In the case that we want to build a code editor that implements this mechanism:

- First we create the class `Editor`
- With a property `content`
  - With a getter and setter for this field
  - Should also have the feature to undo any changes

Implementing Undo:

The most efficient way of implementing this is by using 3 classes:

- The Editor/Originator: To contain the current content/input

  - It has a content property
  - a `createState` method, that stores the current state of the editor object inside a `EditorState` object and returns it
  - a `restore` method that takes the `EditorState` object and brings the editor back to that state

  ```ts
  export class Document {
    private _content!: string;
    private _fontName!: string;
    private _fontSize!: number;

    createState() {
      return new Memento(this._content, this._fontName, this._fontSize);
    }

    restore({ content, fontName, fontSize }: Memento) {
      this._content = content;
      this._fontName = fontName;
      this._fontSize = fontSize;
    }
  }
  ```

- The EditorState/Memento: To store the different state of the editor

  ```ts
  // Memento class to save previous states
  export class Memento {
    //Contains same fields as our originator
    constructor(
      private readonly _content: string,
      private readonly _fontName: string,
      private readonly _fontSize: number
    ) {}

    get content() {
      return this._content;
    }
    get fontName() {
      return this._fontName;
    }
    get fontSize() {
      return this._fontSize;
    }
  }
  ```

- The History/Caretaker: To keep track of the history of the EditorState

  - Contains method push to add `EditorState` to it's array
  - Pop to remove the last state from the array

  ```ts
  export class CareTaker {
    private states: Memento[] = [];

    push(state: Memento) {
      this.states.push(state);
    }
    pop() {
      return this.states.pop() as Memento;
    }
  }
  ```

## Section 3: State Pattern

### Problem

Say we have an editing app like Photoshop with multiple tools available. Each tool performs different actions when the mouse is pressed and when the mouse is released on the canvas.
One way we could implement this is by adding if/switch statements on both `mouseDown` and `mouseUp` events, based on the type of tool.
The problem here is that it leads to a lot of repeated code, and is not maintainable as for each new tool we add, we have to update both the mouse down and up implementations.

```ts
class Canvas{

  mouseDown(){
    if(currentTool=="")
  }

}


```
