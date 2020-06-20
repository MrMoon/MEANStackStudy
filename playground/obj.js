const user = {
	name: 'Mohammad',
	age: 19,
	now: 'Testing'
};

const { name:MyName , age } = user;
console.log(MyName);

const go = (type , { name , age }) => console.log(name + age);

go('Hello' , user);
