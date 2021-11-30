let sportTypes = [];
sportTypes = ['football' , 'basketball' , 'valleyball' , 'soccer' , 'tennis'];

console.log(sportTypes[0]);
console.log(sportTypes[1]);
console.log(sportTypes[2]);
console.log(sportTypes[3]);
console.log(sportTypes[4]);
sportTypes.push('baseball');
sportTypes.splice(2, 1);

const sportTypesList = sportTypes.join(',')

console.log(sportTypes);
console.log(sportTypesList);






