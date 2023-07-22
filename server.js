const express = require('express')
const app = express()
const cors = require('cors') //handles local files
const PORT = 8000

app.use(cors())
app.use(express.static("./public"))


const barbies = {
    'Barbie':{
        'barbieName': 'Barbie',
        'actorName': 'Margot Robbie',
        'barbieQuote': 'testing 123',
        'barbieImg': 'x'
    },
    'Ken':{
        'barbieName': 'Ken',
        'actorName': 'Ryan Gosling',
        'barbieQuote': 'testing 123',
        'barbieImg': 'x'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:barbies', (req, res) => {
    const barbiesNames = req.params.barbies //set variable to barbiesNames that requests the entire barbies object from the url
    if(barbies[barbiesNames]){  //barbies is the object + barbiesNames is the variable
        res.json(barbies[barbiesNames]) //response with whatever the specific barbie's info is
    }else{
        console.log('Not Found')
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})