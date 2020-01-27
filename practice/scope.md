## Scope (Where to look for things)

1. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

console.log(window.firstName, window.lastName, window.knownAs);
// Output
 undefined undefined  "no one"
```

2. Guess the output:

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
	return a + b;
}

console.log(window.fullName(firstName, lastName));
// Output
AryaStark;
```

3. Make a Execution Context Diagram for the following JS and write the output.

```js
fucntion addOne(num){
  return num + 1;
}
var one = addOne(0);
var two = addOne(1);
console.log(one, two);
```

4. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
fucntion addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(one, two);
```

5. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
fucntion addOne(num){
  return num + 1;
}
var two = addOne(1);
console.log(two);
```

6. Make a Execution Context Diagram for the following JS and write the output.

```js
var one = addOne(0);
const addOne = num => {
	return num + 1;
};
var two = addOne(1);
console.log(two);
```

7. Make a Execution Context Diagram for the following JS and write the output.

```js
console.log(addOne(0));
const addOne = num => {
	return num + 1;
};
var two = addOne(1);
console.log(two);
```

8. What will be the output of the following

```js
function isAwesome() {
	var awesome;
	if (false) {
		awesome = true;
	}
	console.log(awesome);
}
isAwesome();
//  output
undefined;
```

9. What will be the output of the following

```js
function isAwesome() {
	let awesome;
	if (true) {
		awesome = true;
	}
	console.log(awesome);
}
isAwesome();
//  true
```

10. What will be the output of the following

```js
function isAwesome() {
	let awesome;
	if (false) {
		awesome = true;
	}
	console.log(awesome);
}
isAwesome();
// undefined
```

11. What will be the output of the following

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
	return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);
//  AryaStark
```

12. What will be the output of the following

```js
let firstName = "Arya";
const lastName = "Stark";
var knownAs = "no one";

function fullName(a, b) {
	return a + b;
}
const name = fullName(firstName, lastName);
console.log(name);
// AryaStark
```

13. Guess the output of the code below with a reason.

```js
function sayHello() {
	let name = "Arya Stark";
}
sayHello();

// console.log(name);
```

14. Guess the output of the code below with a reason.

```js
if (true) {
	var name = "Arya Stark";
}
console.log(name);
// Arya Stark , variable is accessible outside it's scope
```

15. Guess the output of the code below with a reason.

```js
if (true) {
	let name = "Arya Stark";
}
console.log(name);
// name not found
```

16. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
	//
}
console.log(i);
// 20 because variable declared is accessible outide it's scope
```

17. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
	//
}
console.log(i);
// i is not defined
```

18. Guess the output of the code below with a reason.

```js
for (var i = 0; i < 20; i++) {
	setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");
//  20 second
// after 20 sec : first
```

19. Guess the output of the code below with a reason.

```js
for (let i = 0; i < 20; i++) {
	setTimeout(() => console.log(i, "first"), 100);
}
console.log(i, "second");
// i is not defined
```

20. Guess the output and the reason behind that.

```js
function sample() {
	if (true) {
		var username = "John Snow";
	}
	console.log(username);
}
// sample is never called
```

21. Guess the output and the reason behind that.

```js
function sample() {
	if (true) {
		let username = "John Snow";
	}
	console.log(username);
}
// sample is never called
```

22. Guess the output and the reason behind that.

```js
function sample() {
	var username = "Arya Stark";
	if (true) {
		var username = "John Snow";
		console.log(username);
	}
	console.log(username, "second");
// sample is never called

```

23. Guess the output and the reason behind that.

```js
function sample() {
	let username = "Arya Stark";
	if (true) {
		let username = "John Snow";
		console.log(username, "first");
	}
	console.log(username, "second");
}
```

24. Guess the output and the reason behind that.

```js
function sample(...args) {
	for (let i = 0; i < args.length; i++) {
		let message = `Hello I am ${args[i]}`;
		console.log(message);
	}
}

sample("First", "Second", "Third");
// Hello I am First
// Hello I am Second
// Hello I am Third
```

25. Guess the output and the reason behind that.

```js
function sample(...args) {
	for (let i = 0; i < args.length; i++) {
		const message = `Hello I am ${args[i]}`;
		console.log(message);
	}
}

sample("First", "Second", "Third");
// Hello I am First
// Hello I am Second
// Hello I am Third
```

26. Guess the output and the reason behind that.

```js
if (true) {
	const myFunc = function() {
		console.log(username, "Second");
	};
	console.log(username, "First");
	let username = "Hello World!";
	myFunc();
}
// username not defined
```

27. Guess the output and the reason behind that.

```js
function outer() {
	let movie = "Mad Max: Fury Road";
	function inner() {
		console.log("I love this movie called ${movie.toUpperCase()}");
	}
	inner();
}

outer();
// I love this movie called MAD MAX: FURY ROAD
```

28. Guess the output and the reason behind that.

```js
function outer() {
	let movie = "Mad Max: Fury Road";
	function inner() {
		let movie = "Before Sunrise";
		console.log(`I love this movie called ${movie.toUpperCase()}`);
	}
	inner();
}

outer();
// I love this movie called Before Sunrise
```

29. Guess the output and the reason behind that.

```js
function outer() {
	let movie = "Mad Max: Fury Road";
	function inner() {
		let movie = "Before Sunrise";
		function extraInner() {
			let movie = "Gone Girl";
			console.log(`I love this movie called ${movie.toUpperCase()}`);
		}
		extraInner();
	}
	inner();
}

outer();
// I love this movie called Gone Girl
```

30. Execute all the functions inside `allFunctions` variable using any loop. (Hint: use for of loop functions are object)

```js
const add = (a, b) => {
	return a + b;
};
const sub = (a, b) => {
	return a - b;
};
const multiply = (a, b) => {
	return a + b;
};
const divide = (a, b) => {
	return a / b;
};

let allFunctions = [add, sub, multiply, divide];
```

31. You have to pass 10 and 12 as initial value and find the final output when you pass the return value of one function as an input to the next function in the array `allFunctions`.

```js
const add = (a, b) => {
	return a + b;
};
const sub = (a, b) => {
	return a - b;
};
const multiply = (a, b) => {
	return a + b;
};
const divide = (a, b) => {
	return a / b;
};

let allFunctions = [add, add, add, add, add, sub, sub, multiply, divide];
```
