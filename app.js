const express = require("express")
const app = express()



const pokemon = require("./models/pokemon.json");

//Poke-Express
app.get("/", (req,res) =>{
    res.send("Welcome 99 Pokemon")
})

//New Project Name Generator:
app.get("/:verb/:adjective/:noun", (req, res) =>{
    const {verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})

//99 Little Bugs in the Code
app.get("/bugs/101", (req, res) => {
    res.send("101 bugs in the code")
})

app.get("/bugs/:number_of_bugs", (req,res) =>{
    const {number_of_bugs} = req.params
    if (number_of_bugs < 200){
        
        res.send(`${number_of_bugs} little bugs in the code
        <a href="/bugs/${Number(number_of_bugs) + Number(2)}"> Pull one down, patch it around </a>`)
    }else {
        res.send(`  <a href="/bugs">Too many bugs!! Start over!</a>`)
    }
    
})

app.get("/bugs", (req, res) =>{
    res.send(`<h1>99 little bugs in the code </h1>
    <a href="/bugs/101"> pull one down </a>  `)
})

//Poke-Express
app.get("/pokemon", (req,res) =>{
    res.send(pokemon)
})


app.get("/pokemon/search?", (req, res) => {
    const { name } = req.query;
    res.json(
      pokemon.filter((poke) => {
        return poke.name === name || poke.name.toUpperCase() === name.toUpperCase();
      })
    );
  });
app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    if (pokemon[indexOfArray]) {
        res.json(pokemon[indexOfArray])
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
})

module.exports=app