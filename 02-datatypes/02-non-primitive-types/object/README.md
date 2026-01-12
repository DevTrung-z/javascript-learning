# Object trong JavaScript

## Giới thiệu

Object là một kiểu dữ liệu non-primitive cơ bản trong JavaScript, dùng để lưu trữ các cặp key-value. Object cho phép nhóm các dữ liệu liên quan và tạo ra các thực thể phức tạp.

## Cách tạo Object

### 1. Object Literal

```javascript
let person = {
  name: "Alice",
  age: 30,
  isStudent: false,
};
```

### 2. Constructor

```javascript
let car = new Object();
car.make = "Toyota";
car.model = "Camry";
```

### 3. Object.create()

```javascript
let person = Object.create(null); // Object không có prototype
```

## Truy cập và sửa đổi Properties

### Dot notation

```javascript
person.name = "Bob";
console.log(person.age);
```

### Bracket notation

```javascript
person["city"] = "New York";
console.log(person["name"]);
```

## Phương thức Object

| Phương thức                         | Mô tả                                                     |
| ----------------------------------- | --------------------------------------------------------- |
| `Object.keys(obj)`                  | Trả về array các keys của object                          |
| `Object.values(obj)`                | Trả về array các values của object                        |
| `Object.entries(obj)`               | Trả về array các [key, value] pairs                       |
| `Object.assign(target, ...sources)` | Copy properties từ sources vào target                     |
| `Object.freeze(obj)`                | Ngăn chặn mọi thay đổi đối với object                     |
| `Object.seal(obj)`                  | Cho phép thay đổi giá trị nhưng không thêm/xóa properties |
| `Object.create(proto)`              | Tạo object với prototype chỉ định                         |
| `Object.getPrototypeOf(obj)`        | Lấy prototype của object                                  |
| `Object.setPrototypeOf(obj, proto)` | Đặt prototype cho object                                  |
| `Object.is(obj1, obj2)`             | So sánh hai values (xử lý NaN và -0/+0)                   |
| `Object.hasOwn(obj, prop)`          | Kiểm tra property riêng (ES2022)                          |

## Object Methods (instance methods)

| Phương thức                  | Mô tả                                               |
| ---------------------------- | --------------------------------------------------- |
| `hasOwnProperty(prop)`       | Kiểm tra xem object có property riêng không         |
| `isPrototypeOf(obj)`         | Kiểm tra xem object có phải prototype của obj không |
| `propertyIsEnumerable(prop)` | Kiểm tra property có enumerable không               |
| `toString()`                 | Trả về string biểu diễn object                      |
| `valueOf()`                  | Trả về giá trị nguyên thủy của object               |

## Prototypes và Inheritance

### Constructor Functions

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, I'm ${this.name}`;
};

let alice = new Person("Alice", 30);
console.log(alice.greet());
```

### Classes (ES6)

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying`;
  }
}
```

## JSON

### JSON.stringify(obj)

Chuyển object thành JSON string.

```javascript
let json = JSON.stringify(person);
```

### JSON.parse(jsonString)

Chuyển JSON string thành object.

```javascript
let obj = JSON.parse(json);
```

## Ví dụ chi tiết

### Ví dụ cơ bản

```javascript
// Object literal
let person = {
  name: "Alice",
  age: 30,
  isStudent: false,
};

// Constructor
let car = new Object();
car.make = "Toyota";
car.model = "Camry";

// Truy cập properties
console.log(person.name); // 'Alice'
console.log(person["age"]); // 30

// Thêm/sửa properties
person.city = "New York";
person.age = 31;
```

### Ví dụ với Object methods

```javascript
let person = { name: "Alice", age: 30, city: "New York" };

// Object.keys
let keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']

// Object.values
let values = Object.values(person);
console.log(values); // ['Alice', 30, 'New York']

// Object.entries
let entries = Object.entries(person);
console.log(entries); // [['name', 'Alice'], ['age', 30], ['city', 'New York']]

// Object.assign
let copy = Object.assign({}, person);
let extended = Object.assign({}, person, { job: "Developer" });
console.log(copy); // { name: 'Alice', age: 30, city: 'New York' }
console.log(extended); // { name: 'Alice', age: 30, city: 'New York', job: 'Developer' }
```

### Ví dụ với freeze và seal

```javascript
let person = { name: "Alice", age: 30 };

// Object.freeze - không thể thêm/sửa/xóa
let frozen = Object.freeze(person);
// frozen.name = 'Bob'; // Error in strict mode
// frozen.city = 'LA'; // Error
console.log(frozen); // { name: 'Alice', age: 30 }

// Object.seal - có thể sửa nhưng không thêm/xóa
let sealed = Object.seal({ name: "Bob", age: 25 });
sealed.age = 26; // OK
// sealed.city = 'LA'; // Error
console.log(sealed); // { name: 'Bob', age: 26 }
```

### Ví dụ với Prototypes

```javascript
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, I'm ${this.name}`;
};

let alice = new Person("Alice", 30);
console.log(alice.greet()); // 'Hello, I'm Alice'

// Object.create
let personProto = {
  greet: function () {
    return `Hello, I'm ${this.name}`;
  },
};

let bob = Object.create(personProto);
bob.name = "Bob";
bob.age = 25;
console.log(bob.greet()); // 'Hello, I'm Bob'
```

### Ví dụ với Classes (ES6)

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
  }

  static create(name, age) {
    return new Person(name, age);
  }
}

let alice = new Person("Alice", 30);
console.log(alice.greet()); // 'Hello, I'm Alice and I'm 30 years old'

let bob = Person.create("Bob", 25);
console.log(bob.greet()); // 'Hello, I'm Bob and I'm 25 years old'
```

### Ví dụ với JSON

```javascript
let person = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "coding"],
};

// Serialize
let jsonString = JSON.stringify(person);
console.log(jsonString); // '{"name":"Alice","age":30,"hobbies":["reading","coding"]}'

// Deserialize
let parsedObject = JSON.parse(jsonString);
console.log(parsedObject); // { name: 'Alice', age: 30, hobbies: ['reading', 'coding'] }
```

### Ví dụ với instance methods

```javascript
let person = { name: "Alice", age: 30 };

// hasOwnProperty
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("toString")); // false (từ prototype)

// toString
console.log(person.toString()); // '[object Object]'

// valueOf
console.log(person.valueOf()); // { name: 'Alice', age: 30 }
```

## Lưu ý

- Object trong JS là reference type, so sánh bằng `===` kiểm tra tham chiếu.
- Để copy object sâu (deep copy), dùng `JSON.parse(JSON.stringify(obj))` hoặc thư viện như Lodash.
- Object có thể chứa functions, arrays, và nested objects.
- Properties có thể là strings hoặc symbols.
