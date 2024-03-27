function buildTower(n) {
  let tower = [];
  for (let i = 0; i < n; i++) {
    let floor = "";
    for (let j = 0; j < n - i - 1; j++) {
      floor += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      floor += "*";
    }
    for (let l = 0; l < n - i - 1; l++) {
      floor += " ";
    }
    tower.push(floor);
  }
  return tower;
}

console.log(buildTower(12).join("\n"));
