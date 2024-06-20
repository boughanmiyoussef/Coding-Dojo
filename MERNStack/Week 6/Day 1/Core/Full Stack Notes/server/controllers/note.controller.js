const Note = require('../models/note.model')


module.export = {
    createNote: (req, res) =>{
        Note.create(req.body)
        .then(newCreatedNote => {
            console.log('New Node Created With Success \n${newCreatedNote}');
            res.status(201).json({data: newCreatedNote, message:'New Note Created With Success', ok:true})
        })
        .catch(error =>{
            console.log('New Node Created With Success \n${error}');
            res.status(500).json(error.message);
        })

    },
    findAllNotes: (req, res) =>{
      Note.find()
      .then(AllNotes => res.status(200).json({AllNotes,message:"All Notes"}))
      .catch(error => res.status(500).json(error))
    },
    findOneNoteById:(req, res) =>{
        Note.findOneNoteById(req.params.id)
        .then(oneNote => {
            if(!oneNote){
                res.status(404).json({error:"Note Not Found"})

            }else{
                res.status(200).json(oneNote)
            }
        }
    )
    .catch(error => res.status(500).json(error))
    },
    updateOneNote:(req, res) =>{
        Note.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
        .then(UpdatedNote => res.status(200).json(UpdatedNote))
        .catch(error => res.status(400).json(error))
    },  
    deleteOneNote:(req, res) =>{Note. findByIdAndDelete(req.params.id)
        .then(deletedNote => res.status(200).json(deletedNote))
        .catch(error => res.status(400).json(error))

    },
}