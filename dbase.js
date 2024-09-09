const mongodb = require('mongoose');

const createdschema = mongodb.Schema(
    {
        message:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        }
    },
    {
        timestamps:true
    }
)

const createmodel = mongodb.model('chat',createdschema);

module.exports = createmodel;