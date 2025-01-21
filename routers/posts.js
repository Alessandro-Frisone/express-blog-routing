const express = require("express")
const router = express.Router()

// Index
app.get('/bacheca', function (req, res) {
    res.json(`Lista dei post`);
});
// Show
app.get('/bacheca/:id', function (req, res) {
    res.json(`Dettagli di un post ${req.params.id}`);
});
// Create
app.post('/bacheca', function (req, res) {
    res.json(`Creazione nuovo post`);
});
// Update
app.put('/bacheca/:id', function (req, res) {
    res.json(`Modifica integrale del post ${req.params.id} `);
});
// Modify
app.patch('/bacheca/:id', function (req, res) {
    res.json(`Modifica parziale del post ${req.params.id} `);
});
// Delete
app.delete('/bacheca/:id', function (req, res) {
    res.json(`Eliminazione del post ${req.params.id} `);
});