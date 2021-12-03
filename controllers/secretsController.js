const db = require('../models');

const index = (req, res) => {
    db.Secret.find({}, (err, foundSecrets) => {
        if (err) console.log('Error in secrets#index:', err)

        if (!foundSecrets) return res.json({
            message: 'No secrets found in database.'
        })

        res.status(200).json({ secrets: foundSecrets });
    })
}

const show = (req, res) => {
    db.Secrets.findById(req.params.id, (err, foundSecrets) => {
        if (err) {
            console.log('Error in secrets#show:', err);

            if (!foundSecrets) return res.json({
                message: 'There is no secret with this ID in the db.'
            })

            return res.send("Incomplete secrets#show controller function");
        }

        res.status(200).json({
            secret: foundSecrets
        });
    });
};

const create = (req, res) => {
    db.Secret.create(req.body, (err, savedSecret) => {
        if (err) console.log('Error in secrets#create:', err)

        // Validations and error handling here

        res.status(201).json({ secret: savedSecret})
    })
}

const update = (req, res) => {
    db.Secret.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedSecret) => {
        if (err) {
            console.log('Error in secrets#update:', err)

            return res.send("Incomplete secrets#update controller function");
        }

        res.status(200).json({
            updatedSecret
        });
    });
};

const destroy = (req, res) => {
    db.Secret.findByIdAndDelete(req.params.id, (err, deletedSecret) => {
        if (err) {
            console.log('Error in secrets#destroy:', err)

            return res.send("Incomplete tasks#destroy controller function");
        }

        res.status(200).json(
            {
                deleteSecret
            }
        );
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};
