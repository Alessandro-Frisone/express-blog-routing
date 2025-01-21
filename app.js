const express = require('express')
const app = express()
const port = 3000
// IMPORTAZIONE MODULO CREATO DA ME
const postsRouter = require("./routers/posts")

// MIDDLEWARE
app.use(express.static('public'))

// ISTRUISCO L'APP
app.use('/bacheca', postsRouter)


app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    res.json([
        {
            id: 1,
            title: "Introduzione a HTML: La Base del Web",
            content: "Scopri cos'è HTML, come funziona e come creare la tua prima pagina web con i tag fondamentali.",
            image: `http://localhost:${port}/img/ciambellone.jpeg`,
            tags: ["HTML", "web development", "frontend", "tutorial"]
        },
        {
            id: 2,
            title: "Guida Completa a CSS: Stile e Layout",
            content: "Impara come usare CSS per migliorare l'aspetto delle tue pagine web, dai colori ai layout responsivi.",
            image:  `http://localhost:${port}/img/cracker_barbabietola.jpeg`,
            tags: ["CSS", "design", "frontend", "stili"]
        },
        {
            id: 3,
            title: "JavaScript: I Fondamenti per Principianti",
            content: "Scopri le basi di JavaScript, il linguaggio di programmazione più usato nel web moderno.",
            image:  `http://localhost:${port}/img/pane_fritto_dolce.jpeg`,
            tags: ["JavaScript", "frontend", "programmazione", "interattività"]
        },
        {
            id: 4,
            title: "Introduzione a Node.js: JavaScript sul Server",
            content: "Cos'è Node.js? Scopri come eseguire JavaScript lato server e creare applicazioni veloci e scalabili.",
            image:  `http://localhost:${port}/img/pasta_barbabietola.jpeg`,
            tags: ["Node.js", "backend", "JavaScript", "server"]
        },
        {
            id: 5,
            title: "Express.js: Creare un'API REST in pochi passi",
            content: "Impara a usare Express.js per creare API RESTful e gestire le richieste HTTP in modo efficiente.",
            image:  `http://localhost:${port}/img/torta_paesana.jpeg`,
            tags: ["Express.js", "backend", "API", "Node.js"]
        }
    ])
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
