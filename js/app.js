console.log('test test')
let userTomagotchi;

// Create a class for you tomagotchi
class tomagotchiTemplate {
	constructor(name){
		this.hunger = 5;
		this.sleepiness = 5;
		this.boredom = 5;
		this.age = 0;
		this.name = name;
	}
	greet(user) {
		console.log("hi " + user);
	}
}

// Add the ability to name your pet
// This also begins your pet's "life" and calls the hunger, sleepy and bored functions
$('#submit').on('click', (event) => {

	//show name on screen
	const newName = $('input').val();

	//newName becomes name of userTomagotchi
	userTomagotchi = new tomagotchiTemplate(newName);

	$('#name').text("Your Tomagochi's name is " + newName)
	// petHunger();
	// petSleepy();
	// petBored();
	petAge();
})


//feed pet button
$('#feedbutton').on('click', (event) => {

	//if hunger is greater than 0, run code
	//prevents user from overfeedin and having a negative value in hunger
	let hunger = userTomagotchi.hunger
	if(hunger > 0) {
		userTomagotchi.hunger = userTomagotchi.hunger - 1
	}
	console.log(userTomagotchi.hunger)
})

//Light on/off button


//Play button
$('#playbutton').on('click', (event) => {

	//if boredom is greater than 0, run code
	let play = userTomagotchi.boredom

	if(play > 0) {
		userTomagotchi.boredom = userTomagotchi.boredom - 1
	}
	console.log(userTomagotchi.boredom)
})

// Increase your pet's Hunger on an interval of your choosing.

const petHunger = () => {
	const timer = setInterval ( () => {
		let hunger = userTomagotchi.hunger

		if(hunger < 10){
			userTomagotchi.hunger = userTomagotchi.hunger + 1;
			console.log("hunger level: " + userTomagotchi.hunger);
		} else {
		clearInterval(timer)
		console.log("your pet has died of starvation!");
	}
	}, 2000);
}


// Increase your pet's Sleepiness on an interval of your choosing.

const petSleepy = () => {
	const timer = setInterval ( () => {
		let tired = userTomagotchi.sleepiness

		if(tired < 10){
			userTomagotchi.sleepiness = userTomagotchi.sleepiness + 1;
			console.log("sleepiness level: " + userTomagotchi.sleepiness);
		} else {
		clearInterval(timer)
		console.log("your pet has died of sleep deprivation!");
	}
	}, 2000);
}

// Increase your pet's Bored metrics on an interval of your choosing.

const petBored = () => {
	const timer = setInterval ( () => {
		let boredom = userTomagotchi.boredom

		if(boredom < 10){
			userTomagotchi.boredom = userTomagotchi.boredom + 1;
			console.log("boredom level: " + userTomagotchi.boredom);
		} else {
		clearInterval(timer)
		console.log("your pet has died of boredom!");
	}
	}, 2000);
}

// Increase your pet's age every x minutes  - COMMIT

const petAge = () => {
	const timer = setInterval ( () => {

			userTomagotchi.age = userTomagotchi.age + 1;
			console.log("age: " + userTomagotchi.age);
		// } else {
		// clearInterval(timer)
	}, 2000);
}


// Morph your pet at certain ages  - COMMIT
// Style the page  - COMMIT
// Animate your pet across the screen  - COMMIT