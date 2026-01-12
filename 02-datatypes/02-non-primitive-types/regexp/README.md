# RegExp trong JavaScript

## Giới thiệu

RegExp (Regular Expression) là một công cụ mạnh mẽ để xử lý pattern matching trong string. Nó cho phép tìm kiếm, thay thế và validate text dựa trên các pattern phức tạp.

## Cách tạo RegExp

### 1. Literal Syntax

```javascript
let pattern = /pattern/flags;
```

### 2. Constructor

```javascript
let pattern = new RegExp("pattern", "flags");
```

## Flags (Cờ)

| Flag | Mô tả                                                     |
| ---- | --------------------------------------------------------- |
| `g`  | Global - Tìm tất cả matches, không dừng ở match đầu tiên  |
| `i`  | Case insensitive - Không phân biệt chữ hoa/thường         |
| `m`  | Multiline - Xử lý nhiều dòng (^ và $ match đầu/cuối dòng) |
| `s`  | DotAll - Dấu chấm (.) match cả newline                    |
| `u`  | Unicode - Hỗ trợ Unicode                                  |
| `y`  | Sticky - Match chỉ từ vị trí lastIndex                    |

## Phương thức phổ biến

### Với RegExp object

| Phương thức    | Mô tả                                                       |
| -------------- | ----------------------------------------------------------- |
| `test(string)` | Kiểm tra xem string có match pattern không, trả về boolean  |
| `exec(string)` | Thực thi search, trả về array chứa match và captured groups |

### Với String object

| Phương thức                    | Mô tả                                    |
| ------------------------------ | ---------------------------------------- |
| `match(regexp)`                | Tìm matches, trả về array hoặc null      |
| `matchAll(regexp)`             | Tìm tất cả matches, trả về iterator      |
| `search(regexp)`               | Tìm vị trí match đầu tiên, trả về index  |
| `replace(regexp, replacement)` | Thay thế matches                         |
| `split(regexp)`                | Chia string thành array dựa trên pattern |

## Metacharacters

### Anchors

| Metacharacter | Mô tả             |
| ------------- | ----------------- |
| `^`           | Đầu dòng/string   |
| `$`           | Cuối dòng/string  |
| `\b`          | Word boundary     |
| `\B`          | Non-word boundary |

### Character Classes

| Metacharacter | Mô tả                                      |
| ------------- | ------------------------------------------ |
| `.`           | Bất kỳ ký tự nào (trừ newline)             |
| `\d`          | Digit (0-9)                                |
| `\D`          | Non-digit                                  |
| `\w`          | Word character (letter, digit, underscore) |
| `\W`          | Non-word character                         |
| `\s`          | Whitespace                                 |
| `\S`          | Non-whitespace                             |
| `[abc]`       | Một trong các ký tự a, b, c                |
| `[^abc]`      | Không phải a, b, c                         |

### Quantifiers

| Quantifier | Mô tả           |
| ---------- | --------------- |
| `*`        | 0 hoặc nhiều    |
| `+`        | 1 hoặc nhiều    |
| `?`        | 0 hoặc 1        |
| `{n}`      | Chính xác n lần |
| `{n,}`     | Ít nhất n lần   |
| `{n,m}`    | Từ n đến m lần  |

### Groups

| Group              | Mô tả                 |
| ------------------ | --------------------- | ----------- |
| `(pattern)`        | Capturing group       |
| `(?:pattern)`      | Non-capturing group   |
| `(?<name>pattern)` | Named capturing group |
| `                  | `                     | OR operator |

## Ví dụ chi tiết

### Ví dụ cơ bản

```javascript
// Tạo patterns
let pattern1 = /hello/i; // Case insensitive
let pattern2 = new RegExp("hello", "i");

// Test
let text = "Hello World";
console.log(pattern1.test(text)); // true
console.log(pattern2.test("HELLO")); // true

// Match
let matches = text.match(/l/g); // Global match for 'l'
console.log(matches); // ['l', 'l', 'l']

// Replace
let replaced = text.replace(/world/i, "Universe");
console.log(replaced); // 'Hello Universe'
```

### Ví dụ với character classes và quantifiers

```javascript
// Email validation
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailPattern.test("user@example.com")); // true

// Phone number
let phonePattern = /^\d{3}-\d{3}-\d{4}$/;
console.log(phonePattern.test("123-456-7890")); // true

// Extract numbers
let text = "Price: $123.45 and $67.89";
let numberPattern = /\$\d+\.\d{2}/g;
let prices = text.match(numberPattern);
console.log(prices); // ['$123.45', '$67.89']
```

### Ví dụ với groups và capturing

```javascript
// Named groups
let datePattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
let match = "2023-12-25".match(datePattern);
console.log(match.groups); // { year: '2023', month: '12', day: '25' }

// Replace with capture groups
let namePattern = /(\w+) (\w+)/;
let result = "John Doe".replace(namePattern, "$2, $1");
console.log(result); // 'Doe, John'

// Multiple captures
let phonePattern = /(\d{3})-(\d{3})-(\d{4})/;
let phoneMatch = "123-456-7890".match(phonePattern);
console.log(phoneMatch); // ['123-456-7890', '123', '456', '7890']
```

### Ví dụ với lookahead/lookbehind

```javascript
let text = "John Doe and Jane Smith";

// Positive lookahead
let johnFollowedByDoe = /John (?=Doe)/;
console.log(text.match(johnFollowedByDoe)); // ['John ']

// Negative lookahead
let johnNotFollowedByDoe = /John (?!Doe)/;
console.log(text.match(johnNotFollowedByDoe)); // null

// Positive lookbehind
let doePrecededByJohn = /(?<=John )Doe/;
console.log(text.match(doePrecededByJohn)); // ['Doe']

// Negative lookbehind
let doeNotPrecededByJohn = /(?<!John )Doe/;
console.log(text.match(doeNotPrecededByJohn)); // null
```

### Ví dụ với flags

```javascript
let text = `Line 1: hello
Line 2: Hello
Line 3: HELLO`;

// Case insensitive
let caseInsensitive = /hello/i;
console.log(text.match(caseInsensitive)); // ['hello']

// Global
let global = /hello/gi;
console.log(text.match(global)); // ['hello', 'Hello', 'HELLO']

// Multiline
let multiline = /^Line \d:/gm;
console.log(text.match(multiline)); // ['Line 1:', 'Line 2:', 'Line 3:']
```

### Ví dụ với exec và matchAll

```javascript
let text = "The numbers are 123 and 456";
let pattern = /\d+/g;

// exec
let match;
while ((match = pattern.exec(text)) !== null) {
  console.log(`Found ${match[0]} at position ${match.index}`);
}
// Found 123 at position 14
// Found 456 at position 22

// matchAll (ES2020)
let matches = text.matchAll(/\d+/g);
for (let match of matches) {
  console.log(`Found ${match[0]} at position ${match.index}`);
}
// Found 123 at position 14
// Found 456 at position 22
```

## Lưu ý

- RegExp có thể phức tạp và khó debug, nên test kỹ.
- Performance có thể kém với pattern phức tạp trên string dài.
- Sử dụng online tools như regex101.com để test và debug.
- Trong ES2020+, có `matchAll()` method để iterate qua tất cả matches.
- RegExp là mutable, thay đổi lastIndex khi sử dụng flag `g`.
- Luôn escape các metacharacters đặc biệt khi dùng làm literal.
