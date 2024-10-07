const mongoose = require('mongoose')
mongoose.connect('')


const chatSchema = new mongoose.Schema({

    ChatName: { type: String },
    isGroups: { type: Boolean },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    latestmessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MessageModels'
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},
    {
        timestamps: true
    }

)

module.exports = mongoose.model('chatModel', chatSchema)