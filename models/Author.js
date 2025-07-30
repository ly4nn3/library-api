const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        bio: { type: String },
        birthDate: { type: Date }
    }, {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
                delete ret.__v;
                delete ret.createdAt;
                delete ret.updatedAt;
                return ret;
            }
        }
    }
);

module.exports = mongoose.model('Author', AuthorSchema);