const Person = require('../models/person');

// Rechercher tous les persons
exports.getPersons = async (req, res) => {
    try {
        const persons = await Person.find()
        res.send(persons)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getPersonById = async (req, res) => {
    try {
        const person = await Person.findById(req.params.id)
        if (!person) {
            return res.status(404).send({error: 'person not found'})
        }
        res.send(person)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Ajouter un contact // destr    up 
exports.addPerson = async (req, res) => {
    try { const { nom, age, favoriteFoods} = req.body
    const newPerson = new Person({ nom, age, favoriteFoods: favoriteFoods || [] })
await newPerson.save()
        
    
        
     
        console.log('Saved person:', newPerson);
        res.status(201).send(newPerson)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

// Mettre à jour un contact
exports.updatePerson = async (req, res) => {
    try {
        const update = { $push: { favoriteFoods: req.body.favoriteFoods } };

        const person = await Person.findByIdAndUpdate(req.params.id, req.body, {new: true}, {runValidators: true})
        if (!person) {
            return res.status(404).send({error: 'Person not found'})
        }
        res.send(person)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

// Supprimer un contact
exports.deletePerson = async (req, res) => {
    try {
        const person = await Person.findByIdAndDelete(req.params.id)
        if (!person)
            return res.status(404).send({error: 'Person not found'})
        res.send({ message: 'Person supprimé avec succès' })
    } catch (error) {
        res.status(500).send(error.message)
    }};