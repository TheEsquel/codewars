function points(games) {
      let teamPoints = 0;
      for (game in games){
         let teamOne =  games[game].split([':'])[0]
         let teamTwo = games[game].split([':'])[1]
          if(teamOne > teamTwo){
              teamPoints = teamPoints + 3
          }
          if (teamOne == teamTwo){
              teamPoints++
          }      
      }
      return teamPoints
  }

const games = ['1:1','2:0','3:4','4:0','0:1','3:1','4:1','3:4','4:2','4:3']

point(games)
