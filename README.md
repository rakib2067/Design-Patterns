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
  ```
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
