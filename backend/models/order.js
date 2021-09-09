const mongoose = require('mongoose');
const orderSchema = mongoose.Schema(
    {
        idUser: String,
        idPlat: String,

    }
);
const order = mongoose.model('Order',orderSchema);
module.exports = order;

