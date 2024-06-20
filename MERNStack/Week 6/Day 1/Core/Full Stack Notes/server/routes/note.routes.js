const {createNote, findallNotes , findOneNoteById , updateOneNote, deleteOneNote} = require('../controllers/note.controller');




module.exports = app => {
    // 
    app.post('/api/notes', createNote)
    app.get('/api/notes', findallNotes)
    app.get('/api/notes', findOneNoteById)
    app.put('/api/notes/:id', updateOneNote)
    app.delete('/api/notes/:id', deleteOneNote)



     

} 