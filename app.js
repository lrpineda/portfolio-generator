var profileDataArgs = process.argv.slice(2, process.argv.length);
const animalArray = ['dog', 'cat', 'pig'];

animalArray.push('cow');

const personObj = {
  name: 'Lernantino',
  age: 99
};

personObj.age = 100;
personObj.occupation = 'Developer';

const printProfileData = (profileDataArr) => {
  profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);