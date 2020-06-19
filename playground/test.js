const eve = {
	name: 'Testing',
	guests: ['Mohammad' , 'Mohammad2' , 'Mohamamd3'],
	printList(){
		console.log('List for ' , this.name);
		this.guests.forEach((guest) => {
			console.log(guest + ' is going to ' + this.name);
		});
	}
};

eve.printList();
