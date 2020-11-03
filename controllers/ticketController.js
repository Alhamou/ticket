const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Tickets = new Schema({
    
    support_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    ticket_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    create_at:{
        type: Date,
        default: Date.now
    },
    closet_at:{
        type: Date
    },
    caregory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    archave:{
        type: Boolean,
        default: true
    },
    redirce_to:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    withing:{
        type: Boolean,
        default: true
    },
    subject:{
        type: String,
        trim: true
    },
    rating:{
        type: String,
        trim: true,
        default: "0.0"
    },
    is_readet:{
        to:{
            type: Number,
            default: 1
        },
        status:{
            type: Boolean,
            default: true
        }
    },
    content: [
        {

            sended_at:{
                type: Date,
                default: Date.now
            },
            context:{
                type: String,
                trim: true
            },
            atachment:{
                type: String,
                trim: true
            },
        
        }
    ]

  }
    
);

module.exports = mongoose.model("tickets", Tickets);
