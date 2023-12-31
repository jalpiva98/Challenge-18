const { Thought, User } = require('../models');

const thoughtController = {
    // we retrieve all thoughts from the database
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.status(500).json(err));
    },

    // we retrieve a single thought by its ID
    getThoughtById({ params }, res) {
        Thought.findById(params.id)
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this ID!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(500).json(err));
    },

    // we create a new thought
    createThought({ body }, res) {
        Thought.create(body)
            .then(dbThoughtData => {
                // and after creating the thought, we update the user document's thoughts array with this new thought's ID
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: dbThoughtData._id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this ID!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    // we update an existing thought by its ID
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this ID!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(500).json(err));
    },

    // we delete a thought
    deleteThought({ params }, res) {
        Thought.findByIdAndDelete(params.id)
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this ID!' });
                    return;
                }
                // and after deleting the thought, we update the user document to remove the thought's ID from its array
                return User.findOneAndUpdate(
                    { thoughts: params.id },
                    { $pull: { thoughts: params.id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this thought ID!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    // we add a reaction
    addReaction({ params, body }, res) {
        Thought.findByIdAndUpdate(params.thoughtId, { $push: { reactions: body } }, { new: true, runValidators: true })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.json(err));
    },

    // we remove a reaction
    removeReaction({ params }, res) {
        console.log('thoughtId:', params.thoughtId);
        console.log('reactionId:', params.reactionId);
      
        Thought.findByIdAndUpdate(
          params.thoughtId,
          { $pull: { reactions: { reactionId: params.reactionId } } },
          { new: true }
        )
          .then((dbThoughtData) => {
            if (!dbThoughtData) {
              return res.status(404).json({ message: 'Thought not found' });
            }
            res.status(204).end(); // Return a 204 No Content status
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json(err);
          });
      }
}

module.exports = thoughtController;