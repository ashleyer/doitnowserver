const db = require('../models');

const index = (req, res) => {
    db.Task.find({}, (err, foundTasks) => {
        if (err) console.log('Error in tasks#index:', err)

        if (!foundTasks) return res.json({
            message: 'No tasks found in database.'
        })

        res.status(200).json({ tasks: foundTasks });
    })
}

const show = (req, res) => {
    db.Tasks.findById(req.params.id, (err, foundTask) => {
        if (err) {
            console.log('Error in tasks#show:', err);

            if (!foundTask) return res.json({
                message: 'There is no task with this ID in the db.'
            })

            return res.send("Incomplete tasks#show controller function");
        }

        res.status(200).json({
            task: foundTask
        });
    });
};

const create = (req, res) => {
    db.Task.create(req.body, (err, savedTask) => {
        if (err) console.log('Error in tasks#create:', err)

        // Validations and error handling here

        res.status(201).json({ task: savedTask })
    })
}

const update = (req, res) => {
    db.Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTask) => {
        if (err) {
            console.log('Error in tasks#update:', err)

            return res.send("Incomplete tasks#update controller function");
        }

        res.status(200).json({
            updatedTask
        });
    });
};

const destroy = (req, res) => {
    db.Task.findByIdAndDelete(req.params.id, (err, deletedTask) => {
        if (err) {
            console.log('Error in tasks#destroy:', err)

            return res.send("Incomplete tasks#destroy controller function");
        }

        res.status(200).json(
            {
                deleteTask
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
