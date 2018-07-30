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
		if(this.hunger === 2) {
			//prompts user to feed T
			console.log("I'm hungry - feed me!")

		} else if(this.sleepiness === 2) {
			//prompts user to turn off the lights
			console.log("I'm tired - I need a nap!")

		} else if (this.boredom === 2) {
			//prompts user to play
			console.log("I'm bored - let's play!")

		} else {
			console.log("Hi!")
			}
		}
	}


// Add the ability to name your pet
// This also begins your pet's "life" and calls the hunger, sleepy and bored functions
$('#submit').on('click', (event) => {

	//show name on screen
	const newName = $('input').val();

	//newName becomes name of userTomagotchi
	userTomagotchi = new TomagotchiTemplate(newName);
	$('h1').text("My Tomagotchi: " + newName)
	$('#name').text("Your Tomagochi's name is " + newName)

	const img = $('<img>').attr('src', 'https://wikimon.net/images/thumb/1/15/Tsunomon.jpg/200px-Tsunomon.jpg');
	$('#tomagotchi').append(img);

	$(event.currentTarget).parent().remove();


	petHunger();
	petSleepy();
	petBored();
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
	if(sleep === 0) {
		// console.log("Your pet is already well rested!");
		lights = true;

	// if lights are on (true), turn them off (false)
	} else if(lights === true) {
		userTomagotchi.sleepiness = userTomagotchi.sleepiness - 1
		$(event.currentTarget).text('Turn Lights On')
		userTomagotchi.lights = false;
		$('body').attr('id', 'lights-off');
		$('#sleep').text('Sleepiness: ' + userTomagotchi.sleepiness)
		// console.log("Turned the lights off. Your pet needs some rest!");

		//if lights are off (false), turn them on (true)
	} else if(lights === false) {
			userTomagotchi.lights = true;
			$(event.currentTarget).text('Turn Lights Off')
			$('body').attr('id', 'lights-on');
			// console.log("Turned the lights on. Your pet is awake!");
	}
})

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
			$('#hunger').text("Hunger: " + userTomagotchi.hunger);
		} else {
			clearInterval(timer)
			$('#hunger').text("Hunger: " + userTomagotchi.hunger + " Your pet has died of starvation!");
			restartGame();
		}
	}, (1000 * 10));
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
			restartGame();
		}
	}, (1000 * 45));
}

// Increase your pet's Bored metrics on an interval of your choosing.
const petBored = () => {
	const timer = setInterval ( () => {
		let boredom = userTomagotchi.boredom

		if(boredom < 10){
			userTomagotchi.boredom = userTomagotchi.boredom + 1;
			$('#bored').text("Boredom: " + userTomagotchi.boredom);
		} else if(boredom === 10){
			clearInterval(timer)
			$('#name').text("Boredom: " + userTomagotchi.boredom + " Your pet has died of boredom!");
			restartGame();
		}
	}, (1000 * 15));
}

// Increase your pet's age every 1 minute
const petAge = () => {
	const timer = setInterval ( () => {

		userTomagotchi.age = userTomagotchi.age + 1;
		$('#age').text("Age: " + userTomagotchi.age);

		if(userTomagotchi.age === 3){

			//change photo to teen
			const imageDiv = $('img')
			imageDiv.remove();
			const img = $('<img>').attr('src', 'https://wikimon.net/images/thumb/f/fd/Gabumon.png/200px-Gabumon.png');
			$('#tomagotchi').append(img);

			const teenager = $('#name').text(userTomagotchi.name + " evolved into a teenager!");
			(teenager).appendTo($('#name'));

		} else if (userTomagotchi.age > 5) {
			//change photo to adult
			const imageDiv = $('img')
			imageDiv.remove();
			const img = $('<img>').attr('src', 'http://dma.wtw-x.net/DMA/DigimonStands/Toei/Garurumon.gif')
			$('#tomagotchi').append(img);

			const adult = $('#name').text(userTomagotchi.name + " evolved into an adult!");
			(adult).appendTo($('#name'));
		}
	}, (1000 * 15));
}

const restartGame = () => {
	const restartButton = $('<button>').text('Restart')
	restartButton.on('click', (event) => {
		location.reload();
	})
	restartButton.appendTo($('#restart'))
}

// Animate your pet across the screen  - COMMIT
