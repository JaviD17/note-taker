const router = require('express').Router();
const { db } = require('../../db/db');
const path = require('path');
const uniqid = require('uniqid');

const fs = require('fs');

router.get('/api/notes', (req, res) => {
    fs.readFile('../../db/db.json', (err, data) => {
        if (err) throw err;
        console.log(data);
    });

    res.json(data);
});

router.post('/api/notes', (req, res) => {
    console.log(req.body);

    if (!req.body) {
        res.status(400).send('Note is not propertly formatted');
    }
    else {
        // create new note
        if (!noteId) {
            const noteId = [];
        }

        let id = uniqid();

        noteId.push(id);
        
        const note = req.body;
        db.push(note, noteId);

        fs.writeFileSync(
            path.join(__dirname, '../../db/db.json'),
            JSON.stringify({ db }, null, 2)
        );
    }
});

module.exports = router;