//setTimeout(() => {
//	console.log('Two Seconds are up');
//, 2000);

const names = ['Mohammad0' , 'Moh1' , 'M2'];

const shortNames = names.filter((name) => name.length <= 4);

console.log(shortNames);

const add = (x , y , callback) => callback(x + y);

add(1 , 2 , (sum) => {
	console.log(sum);
});
