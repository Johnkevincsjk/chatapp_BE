const mongoose = require('mongoose')



const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "chatModel"
    },

},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('MessageModels', messageSchema)