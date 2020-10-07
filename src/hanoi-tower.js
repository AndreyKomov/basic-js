

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  // remove line with error and write your code here
  let hanoiTower = {
    turns: 0,
    seconds: 0,
  }

  hanoiTower.turns = Math.pow(2, disksNumber) - 1;
  hanoiTower.seconds = Math.floor((hanoiTower.turns) / (turnsSpeed / 3600));
  return hanoiTower;
};
