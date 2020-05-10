
module.exports = {
    uploadFile: async (req, res) => {
        res.statusCode = 200;
        res.json(req.file);
    }
}