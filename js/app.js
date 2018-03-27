console.log('test test')
let userTomagotchi;

// Create a class for you tomagotchi - COMMIT
class tomagotchiTemplate {
	constructor(name){
		this.hunger = 4;
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


// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.  - COMMIT
// $('#feedbutton').on('click', (event) => {
// 	$(userTomagotchi.hunger) = hunger--
// 	console.log(hunger)
// })


// Increase your pet's age every x minutes  - COMMIT

// You pet should die if Hunger, Boredom, or Sleepiness hits 10.  - COMMIT
// Morph your pet at certain ages  - COMMIT
// Style the page  - COMMIT
// Animate your pet across the screen  - COMMIT