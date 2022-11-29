const batScore = 67,
  ontsDumdScore = 59;

let batUnelgee, ontsDumdUnelgee;

if (batScore >= 0 && batScore < 60) batUnelgee = "Маш муу";
else if (batScore >= 60 && batScore < 70) batUnelgee = "Хангалттай";
else if (batScore >= 70 && batScore < 80) batUnelgee = "Дунд";
else if (batScore >= 80 && batScore < 90) batUnelgee = "Сайн";
else if (batScore >= 90 && batScore <= 100) batUnelgee = "Маш сайн";
else console.log("Буруу мэдээлэл оруулсан байна!");

if (ontsDumdScore >= 0 && ontsDumdScore < 60) ontsDumdUnelgee = "Маш муу";
else if (ontsDumdScore >= 60 && ontsDumdScore < 70) ontsDumdUnelgee = "Хангалттай";
else if (ontsDumdScore >= 70 && ontsDumdScore < 80) ontsDumdUnelgee = "Дунд";
else if (ontsDumdScore >= 80 && ontsDumdScore < 90) ontsDumdUnelgee = "Сайн";
else if (ontsDumdScore >= 90 && ontsDumdScore <= 100) ontsDumdUnelgee = "Маш сайн";
else console.log("Буруу мэдээлэл оруулсан байна!");

console.log("Бат - " + batScore + " оноо - " + batUnelgee);
console.log("Онц Дүмд - " + ontsDumdScore + " оноо - " + ontsDumdUnelgee);
