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

### Object.keys(obj)

Trả về array các keys của object.

```javascript
let keys = Object.keys(person); // ['name', 'age', 'city']
```

### Object.values(obj)

Trả về array các values của object.

```javascript
let values = Object.values(person); // ['Bob', 30, 'New York']
```

### Object.entries(obj)

Trả về array các [key, value] pairs.

```javascript
let entries = Object.entries(person);
// [['name', 'Bob'], ['age', 30], ['city', 'New York']]
```

### Object.assign(target, ...sources)

Copy properties từ sources vào target.

```javascript
let copy = Object.assign({}, person);
let merged = Object.assign({}, obj1, obj2);
```

## Object Methods

### hasOwnProperty(prop)

Kiểm tra xem object có property riêng không.

```javascript
console.log(person.hasOwnProperty("name")); // true
```

### Object.freeze(obj)

Ngăn chặn mọi thay đổi đối với object.

```javascript
let frozen = Object.freeze(person);
// person.name = 'Charlie'; // Error in strict mode
```

### Object.seal(obj)

Cho phép thay đổi giá trị nhưng không thêm/xóa properties.

```javascript
let sealed = Object.seal(person);
person.age = 31; // OK
// person.city = 'LA'; // Error
```

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

## Ví dụ thực tế

```javascript
// Tạo object đại diện cho sản phẩm
let product = {
  id: 1,
  name: "Laptop",
  price: 999,
  category: "Electronics",
  inStock: true,
  specs: {
    cpu: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD",
  },
  getInfo: function () {
    return `${this.name} - $${this.price}`;
  },
};

console.log(product.getInfo()); // 'Laptop - $999'
console.log(product.specs.cpu); // 'Intel i7'

// Thêm method vào prototype
Object.prototype.getType = function () {
  return typeof this;
};

console.log(product.getType()); // 'object'
```

## Lưu ý

- Object trong JS là reference type, so sánh bằng `===` kiểm tra tham chiếu.
- Để copy object sâu (deep copy), dùng `JSON.parse(JSON.stringify(obj))` hoặc thư viện như Lodash.
- Object có thể chứa functions, arrays, và nested objects.
- Properties có thể là strings hoặc symbols.
