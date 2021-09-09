const mongoose = require('mongoose');
const chefSchema = mongoose.Schema(
    {
        name: String,
        speciality: String,
        note: String,
        entryDate:String

    }
);
const chef = mongoose.model('Chef',chefSchema);
module.exports = chef;