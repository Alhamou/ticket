const mongoose = require('mongoose')


const ticketSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    assignment: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    attachment: {
        type: Array,
        required: true
    },
    replays: {
        type: Array,
        required: true
    }
});

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket