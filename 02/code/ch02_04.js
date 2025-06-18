const users = [
  { id: 1, name: "김민수", age: 13, score: 14 },
  { id: 2, name: "이수진", age: 24, score: 45 },
  { id: 3, name: "박지훈", age: 25, score: 36 },
  { id: 4, name: "최유리", age: 28, score: 75 },
  { id: 5, name: "정현우", age: 30, score: 86 },
  { id: 6, name: "한지민", age: 31, score: 74 },
  { id: 7, name: "오세훈", age: 46, score: 96 },
  { id: 8, name: "윤아름", age: 48, score: 85 },
];

const youngs = users.filter((user) => {
  console.log(user);
  return user.age < 25;
});

const miman80 = users.filter((user) => {
  return user.score < 80;
});

console.log("---------");
console.log(youngs);
console.log("---------");
console.log(miman80);

const userNames = users.map((user) => {
  return user.name;
});
console.log("---------usersName");
console.log(userNames);

const idName = users.map((user) => {
  return { id: user.id, name: user.name };
});
console.log("---------usersName");
console.log(idName);

const hiScores = users
  .filter((user) => {
    return user.score > 80;
  })
  .map((user) => {
    return { id: user.id, name: user.name, score: user.score };
  });

const hiScores2 = users
  .filter((user) => user.score > 80)
  .map((user) => ({ id: user.id, name: user.name, score: user.score }));

console.log("---------hiScores");
console.log(hiScores);

const totalScore = users.reduce((sum, user) => {
  return sum + user.score;
}, 0);

console.log("---------totalScore");
console.log(totalScore);

const totalScore1 = users
  .filter((user) => {
    return user.age > 25;
  })
  .reduce((sum, user) => {
    return sum + user.score;
  }, 0);
console.log("---------totalScore1");
console.log(totalScore1);

//정렬
const sortedByAge = [...users].sort((a, b) => {
  return a.age - b.age;
});
console.log("---------sortedByAge");
console.log(sortedByAge);
