const express = require("express");
const app = express();
PORT = process.env.PORT || 5000;

app.use(express.json());

const jokes = [
    { id: '1', text: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
    { id: '2', text: "How do you organize a space party? You 'planet'!" },
    { id: '3', text: "Parallel lines have so much in common. It's a shame they'll never meet." },
    { id: '4', text: "What do you call a bear with no teeth? A gummy bear!" },
    { id: '5', text: "I used to play piano by ear, but now I use my hands." },
];
app.get('/jokes', (req, res) => {
    res.json(jokes)
}
)
app.get('/jokes/:id', (req, res) => {
    const jokeId = req.params.id
    const findJoke = jokes.find((j) => j.id === jokeId)
    if (!findJoke) {
        return res.status(404).json({ error: "Joke not found" })
    }
    res.json(findJoke)
})
app.listen(PORT,
    () => {
        console.log(`Server is running on port ${PORT}`)
    })