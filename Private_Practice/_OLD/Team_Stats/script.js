const team = {
    _players: [
        {
            firstName: 'Maggie',
            lastName: 'Vien',
            age: 35,
        }, 
        {
            firstName: 'Anne',
            lastName: 'Vien',
            age: 34,

        }, 
        {
            firstName: 'Vickie',
            lastName: 'Vien',
            age: 31,
        }
    ],
    _games: [
        {
            opponent: 'Tieu',
            teamPoints: 15,
            opponentPoints: 22,
        }, 
        {
            opponent: 'Chau',
            teamPoints: 36,
            opponentPoints: 48,
        }, 
        {
            opponent: 'Chu',
            teamPoints: 38,
            opponentPoints: 25,
        }
    ],
    addPlayer(firstName, lastName, age) {
        const newPlayer = {
            firstName: firstName,
            lastName: lastName,
            age: age,
        }
        this._players.push(newPlayer);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        const gameObj = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints,
        }
        this._games.push(gameObj);
    }
}

team.addPlayer('Yvonne', 'Chu', 19);
team.addPlayer('Joanna', 'Tieu', 32);
team.addPlayer('Kevin', 'Chu', 30);

team.addGame('To', 32, 45);
team.addGame('Ma', 44, 22);
team.addGame('Kha', 68, 72);


console.log(team._players);
console.log(team._games);