const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Plese enter your note Title'],
        minlength: [3, 'Pleae Enter']
    },
    content:{
        type: String,
        required:[true, 'Please enter your note content'],
        minlength: [10, 'Note content too short']

    },
    isImportant:{
        type: Boolean,
        default: false
    }
//     user:{
//         type: mongoose.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     notes : {
//         type : [mongoose.Types.ObjectId],
//         ref: 'Note'
//     }
}, {timestamps: true});

module.export = mongoose.model('Note', NoteSchema);