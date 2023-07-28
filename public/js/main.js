document.querySelector('button').addEventListener('click', reqBarbies)

async function reqBarbies(){
    //grab the value from the input
    const barbies = document.querySelector('input').value

    try{
        const response = await fetch(`https://gorgeous-fez-frog.cyclic.app/api/${barbies}`)

        const data = await response.json()

        console.log(data)
        document.querySelector('#barbieName').innerText = data.barbieName
        document.querySelector('#actorName').innerText = data.actorName        
        document.querySelector('#barbieQuote').innerText = data.barbieQuote
    }catch(error){console.log(err)}

}