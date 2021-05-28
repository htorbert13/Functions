var damage = 0;
var fireDamage = 3;
var iceDamage = 1;
var poisonDamage = 4;

function myFunction(elem) {
  var y = elem.id;
  switch (y) {
    case "Fire Attack":
      damage = damage + fireDamage - 1;
      break;
    case "Ice Attack":
      damage = damage + iceDamage + 1;
      break;
    case "Poison":
      damage = damage + poisonDamage;
      break;
  }

  document.getElementById("status").innerHTML = "Dragon Damage: "+damage;
  if (damage >= 10) {
    document.getElementById("win").innerHTML = "You Win!";
  }
}
