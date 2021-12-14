const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SecretSchema = new Schema({
    title: String,
    detail: String,
    recipient_email: String,
    fluster_factor: { type: Number, min: 1, max: 5 },

});

const Secret = mongoose.model('Secret', SecretSchema);

module.exports = Secret;
