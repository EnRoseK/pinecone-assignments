const teamOneScore1 = 96,
  teamOneScore2 = 108,
  teamOneScore3 = 89;

const teamTwoScore1 = 88,
  teamTwoScore2 = 91,
  teamTwoScore3 = 110;

const teamOneAverage = (teamOneScore1 + teamOneScore2 + teamOneScore3) / 3,
  teamTwoAverage = (teamTwoScore1 + teamTwoScore2 + teamTwoScore3) / 3;

if (teamOneAverage < 100 && teamTwoAverage < 100) console.log("Ялагч байхгүй");
else {
  if (teamOneAverage > teamTwoAverage) console.log("А баг ялав!");
  else if (teamOneAverage === teamTwoAverage) console.log("Тэнцэв");
  else console.log("Б баг ялав!");
}
