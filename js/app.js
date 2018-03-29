console.log('test test')
let userTomagotchi;

// Create a class for you tomagotchi
class TomagotchiTemplate {
	constructor(name){
		this.hunger = 5;
		this.sleepiness = 5;
		this.boredom = 5;
		this.age = 0;
		this.name = name;
		this.lights = true;
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
	userTomagotchi = new TomagotchiTemplate(newName);

	$('#name').text("Your Tomagochi's name is " + newName)
	// petHunger();
	// petSleepy();
	// petBored();
	petAge();
})


//Feed pet button - decreases hunger
$('#feedbutton').on('click', (event) => {

	//if hunger is greater than 0, run code
	//prevents user from overfeedin and having a negative value in hunger
	let hunger = userTomagotchi.hunger
	if(hunger > 0) {
		userTomagotchi.hunger = userTomagotchi.hunger - 1
	}
	$('#hunger').text('Hunger: ' + userTomagotchi.hunger)
})

//Light on/off button - decreases sleepiness
$('#lightsbutton').on('click', (event) => {
	let sleep = userTomagotchi.sleepiness
	let lights = userTomagotchi.lights

	// if lights are on (true), turn them off (false)
	if(sleep = 0) {
		console.log("Your pet is already well rested!");
		lights = true;
	} else if(lights === true) {
		// if(sleep > 0) {
		userTomagotchi.sleepiness = userTomagotchi.sleepiness - 1
		userTomagotchi.lights = false;
		$('#sleep').text('Sleepiness: ' + userTomagotchi.sleepiness)
		console.log("Turned the lights off. Your pet needs some rest!");

		//if lights are off (false), turn them on (true)
		// }
	} else if(lights === false) {
			userTomagotchi.lights = true;
			console.log("Turned the lights on. Your pet is awake!");
		}
	})



// 	//if sleepiness is greater than 0, run code
// 	//prevents user from having a negative value in sleepiness

// 	// }
// 	console.log("sleepiness level: " + userTomagotchi.sleepiness)
// })

//Play button - decreases boredom
$('#playbutton').on('click', (event) => {

	//if boredom is greater than 0, run code
	let play = userTomagotchi.boredom

	if(play > 0) {
		userTomagotchi.boredom = userTomagotchi.boredom - 1
	}
	$('#bored').text('Boredom: ' + userTomagotchi.boredom)
})

// Increase your pet's Hunger on an interval of your choosing.
const petHunger = () => {

	const timer = setInterval ( () => {
		let hunger = userTomagotchi.hunger

		if(hunger < 10){
			userTomagotchi.hunger = userTomagotchi.hunger + 1;
			console.log("hunger level: " + userTomagotchi.hunger);
			$('#hunger').text("Hunger: " + userTomagotchi.hunger);
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
			$('#sleep').text("Sleepiness: " + userTomagotchi.sleepiness);
		} else {
			clearInterval(timer)
			$('#sleep').text("Sleepiness: " + userTomagotchi.sleepiness + " Your pet has died of sleep deprivation!");
		}
	}, 2000);
}

// Increase your pet's Bored metrics on an interval of your choosing.
const petBored = () => {
	const timer = setInterval ( () => {
		let boredom = userTomagotchi.boredom

		if(boredom < 10){
			userTomagotchi.boredom = userTomagotchi.boredom + 1;
			$('#bored').text("Boredom: " + userTomagotchi.boredom);
		} else {
			clearInterval(timer)
			$('#bored').text("Boredom: " + userTomagotchi.boredom + " Your pet has died of boredom!");
		}
	}, 1000);
}

// Increase your pet's age every 3 minutes
const petAge = () => {
	const timer = setInterval ( () => {

		userTomagotchi.age = userTomagotchi.age + 1;
		console.log("age: " + userTomagotchi.age);
		// } else {
		// clearInterval(timer)
	}, (1000 * 180));
}


// Morph your pet at certain ages  - COMMIT
// Animate your pet across the screen  - COMMIT