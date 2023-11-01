const mongoose = require('mongoose');

const mongoURI = 'mongodb://0.0.0.0:27017/Aj';

mongoose.connect(mongoURI).then(() => {
    console.log("MongoDB connected successfully")
}).catch((err) => {console.log(`Failed to connect ${err}`)});


const playlistschema = new mongoose.Schema({
    name: {
        type: 'string',
        required: [true, "can't be blank"],
    },
    age: Number,
    dob:'string',
    active:'boolean',
    date:{
        type: Date,
        default:Date.now
    }    
});

const Playlist =mongoose.model("Playlist",playlistschema);

const reactPlaylist = new Playlist({
    name:"Ajay Kumar",
    age:'19',
    dob:'25-07-2004',
    active:true, 
})

reactPlaylist.save().then((result)=>console.log(result));