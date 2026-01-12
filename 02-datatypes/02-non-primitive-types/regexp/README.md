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

- `g`: Global - Tìm tất cả matches, không dừng ở match đầu tiên
- `i`: Case insensitive - Không phân biệt chữ hoa/thường
- `m`: Multiline - Xử lý nhiều dòng (^ và $ match đầu/cuối dòng)

## Phương thức phổ biến

### Với RegExp object

- `test(string)`: Kiểm tra xem string có match pattern không, trả về boolean
- `exec(string)`: Thực thi search, trả về array chứa match và captured groups

### Với String object

- `match(regexp)`: Tìm matches, trả về array hoặc null
- `matchAll(regexp)`: Tìm tất cả matches, trả về iterator
- `search(regexp)`: Tìm vị trí match đầu tiên, trả về index
- `replace(regexp, replacement)`: Thay thế matches
- `split(regexp)`: Chia string thành array dựa trên pattern

## Metacharacters

### Anchors

- `^`: Đầu dòng/string
- `$`: Cuối dòng/string
- `\b`: Word boundary
- `\B`: Non-word boundary

### Character Classes

- `.`: Bất kỳ ký tự nào (trừ newline)
- `\d`: Digit (0-9)
- `\D`: Non-digit
- `\w`: Word character (letter, digit, underscore)
- `\W`: Non-word character
- `\s`: Whitespace
- `\S`: Non-whitespace

### Quantifiers

- `*`: 0 hoặc nhiều
- `+`: 1 hoặc nhiều
- `?`: 0 hoặc 1
- `{n}`: Chính xác n lần
- `{n,}`: Ít nhất n lần
- `{n,m}`: Từ n đến m lần

### Groups

- `(pattern)`: Capturing group
- `(?:pattern)`: Non-capturing group
- `|` : OR operator

## Ví dụ

```javascript
// Email validation
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailPattern.test("user@example.com")); // true

// Extract phone numbers
let text = "Call me at 123-456-7890 or 098-765-4321";
let phonePattern = /\d{3}-\d{3}-\d{4}/g;
let phones = text.match(phonePattern);
console.log(phones); // ['123-456-7890', '098-765-4321']

// Replace with capture groups
let namePattern = /(\w+) (\w+)/;
let result = "John Doe".replace(namePattern, "$2, $1");
console.log(result); // 'Doe, John'
```

## Advanced Features

### Lookahead/Lookbehind

- `(?=pattern)`: Positive lookahead
- `(?!pattern)`: Negative lookahead
- `(?<=pattern)`: Positive lookbehind
- `(?<!pattern)`: Negative lookbehind

```javascript
let positiveLookahead = /John (?=Doe)/; // Match 'John ' only if followed by 'Doe'
let negativeLookbehind = /(?<!John )Doe/; // Match 'Doe' only if not preceded by 'John '
```

## Lưu ý

- RegExp có thể phức tạp và khó debug, nên test kỹ.
- Performance có thể kém với pattern phức tạp trên string dài.
- Sử dụng online tools như regex101.com để test và debug.
- Trong ES2020+, có `matchAll()` method để iterate qua tất cả matches.
