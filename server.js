const express = require('express')
const app = express()
const cors = require('cors') //handles local files
const PORT = 8000

app.use(cors())
app.use(express.static('public'))


const barbies = {
    'barbie':{
        'barbieName': 'Barbie',
        'actorName': 'Margot Robbie',
        'barbieQuote': 'no quote found'
    },
    'ken':{
        'barbieName': 'Ken, Ken, Ken',
        'actorName': 'Ryan Gosling, Scott Evans, Kingsley Ben-Adir, Simu Liu, Ncuti Gatwa',
        'barbieQuote': 'no quote found'
    },
    'allan':{
        'barbieName': 'Allan',
        'actorName': 'Michael Cera',
        'barbieQuote': 'no quote found'
    },
    'author':{
        'barbieName': 'Celebrated Author',
        'actorName': 'Alexandra Shipp',
        'barbieQuote': 'no quote found'
    },
    'diplomat':{
        'barbieName': 'Diplomat',
        'actorName': 'Nicola Coughlan',
        'barbieQuote': 'no quote found'
    },
    'doctor':{
        'barbieName': 'Doctor',
        'actorName': 'Hari Nef',
        'barbieQuote': 'no quote found'
    },
    'humans':{
        'barbieName': 'human',
        'actorName': 'Ariana Greenblatt, America Ferrera, Will Ferrell',
        'barbieQuote': 'no quote found'
    },
    'intern':{
        'barbieName': 'intern',
        'actorName': 'Connor Swindells',
        'barbieQuote': 'no quote found'
    },
    'lawyer':{
        'barbieName': 'lawyer',
        'actorName': 'Sharon Rooney',
        'barbieQuote': 'no quote found'
    },
    'mermaid':{
        'barbieName': 'mermaid',
        'actorName': 'Dua Lipa',
        'barbieQuote': 'no quote found'
    },
    'midge':{
        'barbieName': 'midge',
        'actorName': 'Emerald Fennell',
        'barbieQuote': 'no quote found'
    },
    'narrator':{
        'barbieName': 'narrator',
        'actorName': 'Helen Mirren',
        'barbieQuote': 'no quote found'
    },
    'noble prize':{
        'barbieName': 'nobel prize',
        'actorName': 'Emma Mackey',
        'barbieQuote': 'no quote found'
    },
    'president':{
        'barbieName': 'president',
        'actorName': 'Issa Rae',
        'barbieQuote': 'no quote found'
    },
    'pulitzer':{
        'barbieName': 'pulitzer',
        'actorName': 'Ritu Arya',
        'barbieQuote': 'no quote found'
    },
    'supreme court justice':{
        'barbieName': 'supreme court justice',
        'actorName': 'Ana Cruz Kayne',
        'barbieQuote': 'no quote found'
    },
    'split':{
        'barbieName': 'split',
        'actorName': 'Kate McKinnon',
        'barbieQuote': 'no quote found'
    },
    'suit':{
        'barbieName': 'suit',
        'actorName': 'Jamie Demetriou',
        'barbieQuote': 'no quote found'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:barbies', (req, res) => {
    const barbiesNames = req.params.barbies.toLowerCase() //set variable to barbiesNames that requests the entire barbies object from the url
    if(barbies[barbiesNames]){  //barbies is the object + barbiesNames is the variable
        res.json(barbies[barbiesNames]) //response with whatever the specific barbie's info is
    }else{
        console.log('Not Found')
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})