/*Agent.js c'est l'équivalent de sendAgent.js et mon OmegaAgent.js l'équivalent de Agent.js */

const sendAgent = async () =>{
  let agent = document.querySelector('input[name="agent"]').value;
  let agentAge = document.querySelector('input[name="agentAge"]').value
  let agentCard = document.querySelector('input[name="agentCard"]').value
  console.log(agentAge)
  console.log(agentCard)

  let response = await fetch('http://localhost:3000/agents', {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/json',
      },
      body: JSON.stringify({name: agent, age: Number(agentAge), card: agentCard}),
   })
  window.location.href = 'PageOtherUser.html'
}

fetch('http://localhost:3000/agents')
.then((response) => response.json())
.then((data) => {
  console.log(data)
  let agents = document.querySelector('#agents')
  data.forEach((agent) => {
    agents.innerHTML += `
          <a href="agent.html?id=${agent.id}">
            <h2>${agent.name}</h2>
            <h3>${agent.age}</h3>
            <h3>${agent.card}</h3>
           
          </a>
          
        `
  })
})

