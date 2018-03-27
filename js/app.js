console.log('test test')
let userTomagotchi;

// Create a class for you tomagotchi - COMMIT
class tomagotchiTemplate {
	constructor(name){
		this.hunger = 5;
		this.sleepiness = 4;
		this.boredom = 4;
		this.age = 0;
		this.name = name;
	}
	greet(user) {
		console.log("hi " + user)
	}
}

// Add the ability to name your pet  - COMMIT
$('#submit').on('click', (event) => {

	//show name on screen
	const newName = $('input').val();

	//newName becomes name of userTomagotchi
	userTomagotchi = new tomagotchiTemplate(newName);

	$('#name').text("Your Tomagochi's name is " + newName)
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
$('#lightsbutton').on('click', (event) => {
	//if lights on equals true, turn lights off
	if()
	//else lights on



//Play button
$('#playbutton').on('click', (event) => {

	//if hunger is greater than 0, run code
	let play = userTomagotchi.boredom
	if(play > 0) {
		userTomagotchi.boredom = userTomagotchi.boredom - 1
	}
	console.log(userTomagotchi.boredom)
})

// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.  - COMMIT



// Increase your pet's age every x minutes  - COMMIT

// You pet should die if Hunger, Boredom, or Sleepiness hits 10.  - COMMIT
// Morph your pet at certain ages  - COMMIT
// Style the page  - COMMIT
// Animate your pet across the screen  - COMMIT