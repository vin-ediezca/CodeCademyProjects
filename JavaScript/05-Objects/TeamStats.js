const team = {
	_players: [
              {firstName: 'Lionel', lastName: 'Messi', age: 54},
              {firstName: 'Cristiano', lastName: 'Ronaldo', age: 47},
              {firstName: 'Kobe', lastName: 'Bryant', age: 58}
            ],
  _games: [
            {opponent: 'Ceres', teamPoints: 32, opponentPoints: 57},
            {opponent: 'Azkals', teamPoints: 29, opponentPoints: 96},
            {opponent: 'Purok Dos', teamPoints: 108, opponentPoints: 6}
          ],
  get players() {
    if (this._players) {
      return this._players;
    }
  },
  get games() {
    if (this._games) {
      return this._games;
    }
  },
  addPlayer: function(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  addGame: function(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  }
};

const newPlayers = [['Steph', 'Curry', 28], ['Lisa', 'Leslie', 44], ['Bugs', 'Bunny', 76]];
const newGames = [['Real Madrid', 4, 2], ['Fly Emerates', 3, 4], ['Purok tumpok', 19, 98]]

for (let i=0; i<newPlayers.length; i++ ) {
  team.addPlayer(newPlayers[i][0], newPlayers[i][1], newPlayers[i][2]);
}
// Or
// newPlayers.forEach(arr => team.addPlayer(arr[0], arr[1], arr[2]));

for (let i=0; i<newGames.length; i++) {
  team.addGame(newGames[i][0], newGames[i][1], newGames[i][2]);
}
// Or
// newGames.forEach(arr => team.addGame(arr[0], arr[1], arr[2]));

console.log(team.players);
console.log(team.games);

