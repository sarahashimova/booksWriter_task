const { Country } = require("../models/Country");



const countryController = {
    getAll: (req, res) => {

        Country.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })

    },
    getById: (req, res) => {
        let id = req.params.id;

        Country.findById(id)
            .then(data => {
                if (data)
                    res.json(data);
                else
                    res.status(404).json({ 'msg': 'Not found!' })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    add: (req, res) => {
        let country = new Country({
            name: req.body.name,
        })

        country.save();

        res.json(country);
    },
    deleteById: (req, res) => {

        let id = req.params.id;

        Country.findByIdAndDelete(id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })

    },
    update: (req, res) => {
        let id = req.params.id;

        Country.findById(id)
            .then(data => {
                data.name = req.body.name;
               
                data.save();

                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            })

    }
}


module.exports = {
    countryController
}
