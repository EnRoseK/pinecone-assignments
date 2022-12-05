const activities = [
  ['work', 'eat', 'talk', 'play', 'sleep'],
  [10, 1, 2, 3, 8],
];

console.table(activities);

const percents = [];
for (let i = 0; i < activities[activities.length - 1].length; i++) {
  percents[percents.length] = ((activities[activities.length - 1][i] * 100) / 24).toFixed(2);
}

activities[activities.length] = percents;

console.table(activities);
