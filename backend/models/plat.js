const mongoose = require('mongoose');
const platSchema = mongoose.Schema(
    {
        name: String,
        price: Number,
        description: String,

    }
);
const plat = mongoose.model('Plat',platSchema);
module.exports = plat;

// model:Plat , collection : plats
// model:User , collection : users
// model:Man , collection : men