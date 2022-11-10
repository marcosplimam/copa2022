function createGame(player1, hour, player2) {
  return `
   <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>
  `
}

function createCard(date, day, games) {
  return `
   <div class="card">
          <h2>${date} <span>${day}</span></h2>
          <ul>
          ${games}
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
 <header>
        <img src="./assets/logo.svg" alt="Logo da NLW Copa" />
      </header>
      <main class id="cards">
      ${createCard("23/11", "quarta", createGame("germany", "10:00", "japan"))}
      
      ${createCard(
        "24/11",
        "quinta",
        createGame("uruguay", "10:00", "south korea") +
          createGame("brazil", "16:00", "serbia")
      )}
       
      ${createCard(
        "25/11",
        "terça",
        createGame("netherlands", "13:00", "ecuador") +
          createGame("england", "16:00", "united states")
      )}
       
       ${createCard(
         "26/11",
         "quarta",
         createGame("france", "13:00", "denmark") +
           createGame("argentina", "16:00", "mexico")
       )}

       ${createCard("27/11", "quinta", createGame("spain", "16:00", "germany"))}

    ${createCard(
      "28/11",
      "sexta",
      createGame("brazil", "13:00", "switzerland") +
        createGame("portugal", "16:00", "uruguay")
    )}

    ${createCard(
      "30/11",
      "domingo",
      createGame("tunisia", "12:00", "france") +
        createGame("argentina", "16:00", "poland")
    )}

     ${createCard(
       "01/12",
       "segunda",
       createGame("croatia", "12:00", "belgium") +
         createGame("spain", "16:00", "japan") +
         createGame("costa rica", "16:00", "germany")
     )}

     ${createCard(
       "02/12",
       "terça",
       createGame("south korea", "12:00", "portugal") +
         createGame("cameroon", "16:00", "brazil")
     )}

      </main>


`
