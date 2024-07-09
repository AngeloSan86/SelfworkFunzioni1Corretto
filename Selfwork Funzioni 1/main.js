let numeroTiri = prompt(`Quanti tiri di dado deve effettuare ogni giocatore?`);

let totP1 = 0;
let totP2 = 0;

for(let i = 1; i <= numeroTiri; i++)
{
  console.log(`TIRO N.${i}`);

  let tiroP1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  let tiroP2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

  console.log(`Il tiro di Player1 è di ${tiroP1}\nIl tiro di Player2 è di ${tiroP2}`);

  totP1 += tiroP1;
  totP2 += tiroP2;

  console.log(`Il punteggio del Player1 è di ${totP1}\nIl punteggio del Player2 è di ${totP2}`);
}

if(totP1 > totP2)
{
  console.log(`Player1 VINCE con un punteggio di ${totP1} contro un punteggio di ${totP2} di Player2.`);
}else if(totP1 < totP2){
  console.log(`Player2 VINCE con un punteggio di ${totP2} contro un punteggio di ${totP1} di Player1.`);
}else{
  console.log(`PAREGGIO! I giocatori hanno pareggiato con i punteggi di ${totP1} e ${totP2}!!!`);
}



