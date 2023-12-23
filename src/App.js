import './App.css';

const players = [
  'UltraKalden', 'fr0gu', 'NotKaizul', 'souls', 'legofreak106', 'NotSoNightmare', 'KingZxyqopnmv7924',
  'takoyakilover68', 'iAmFrank1019', 'ad_onz', 'Daisy3137', 'perplex_a', 'MrCheese', 'maxysad', 'MrTentee',
  'JhayMoon', 'evilpooper21', 'RADBAT1231', 'abddah11', 'Intidal', 'sheilabebs', 'lmao_welcometohell',
  'Orricca', 'fridasation', 'gaminghappyyo', 'Creatortionist', 'Krinafar', 'trashbagsan'
]

function App() {
  let rounds = []
  for (let i = 0; i < players.length; i++) {
    let obj = {}
    obj.Player = players[i]
    obj.Opp1 = i-1 < 0 ? players[players.length - Math.abs(i-1)] : players[i-1]
    obj.Opp2 = i-2 < 0 ? players[players.length - Math.abs(i-2)] : players[i-2]
    obj.Opp3 = i-3 < 0 ? players[players.length - Math.abs(i-3)] : players[i-3]
    obj.Opp4 = i-4 < 0 ? players[players.length - Math.abs(i-4)] : players[i-4]
    obj.Opp5 = i+1 >= players.length ? players[i + 1 - players.length] : players[i+1]
    obj.Opp6 = i+2 >= players.length ? players[i + 2 - players.length] : players[i+2]
    obj.Opp7 = i+3 >= players.length ? players[i + 3 - players.length] : players[i+3]
    obj.Opp8 = i+4 >= players.length ? players[i + 4 - players.length] : players[i+4]
    rounds[i] = obj
  }
  console.log(rounds)
  return (
    <div className="App">
      {rounds.map((round) => {
        return <p><strong>{round.Player}</strong>: {round.Opp1}, {round.Opp2}, {round.Opp3}, {round.Opp4}, {round.Opp5}, {round.Opp6}, {round.Opp7}, {round.Opp8}</p>
      })}
    </div>
  );
}

export default App;
