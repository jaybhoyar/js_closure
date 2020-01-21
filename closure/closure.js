// 1
function nonsense(string) {
	var blab = function() {
		alert(string);
	};
	blab();
}
// 1
function nonsense(string) {
	var blab = function() {
		alert(string);
	};
	setTimeout(blab, 2000);
}
// 1
function nonsense(string) {
	var blab = function() {
		alert(string);
	};
	return blab;
}
var blabLater = nonsense("hello");
var blabAgainLater = nonsense("world");

// Full Name
var lastNameTrier = function(firstName) {
	var firstName = firstName;

	var innerFunction = function(lastName) {
		//does stuff
		console.log(firstName + " " + lastName);
	};
	return innerFunction; //maybe returns something here
};
var firstNameFarmer = lastNameTrier("Farmer"); //logs nothing
firstNameFarmer("Brown"); //logs 'Farmer Brown'

// storyWriter

function storyWriter() {
	let story = "";
	const storyMethods = {
		addWords: function storyLine() {
			story += storyLine;
			console.log(story);
		},
		erase: function eraseStory() {
			story = "";
			console.log(story);
		}
	};
	return storyMethods;
}
