const Ticket = require('../models/Ticket')


module.exports.getAll = async (req, res, next) => {
    const tickets = await Ticket.find({})
    res.send(tickets)
}

module.exports.createTicket = async (req, res, next) => {
    const {
        subject,
        body,
        user,
        assignment,
        category,
        status,
        attachment
    } = req.body

    try {
        const ticket = await Ticket.create({
            subject,
            body,
            user,
            assignment,
            category,
            status,
            attachment
        })
        res.send(ticket)


    }catch (e) {
     console.log(e)
    }

}