const { isValidObjectId } = require("mongoose");

const isValidID = (checkId) => (req, res, next) => {
    const id = req.params[checkId];
    if (!isValidObjectId(id)) {
        return res.status(400).json({
            code: 400,
            message: "Invalid ID",
        });
    }
    next();
};

module.exports = isValidID;
