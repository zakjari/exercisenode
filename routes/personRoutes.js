const express = require('express');
const router = express.Router();

const personController = require('../controllers/personController');

// Afficher tous les contacts
router.get('/', personController.getPersons);

// Rechercher un contact by id
router.get('/:id', personController.getPersonById);

// Ajouter un contact
router.post('/', personController.addPerson);

// Mettre à jour un contact
router.put('/:id', personController.updatePerson);

// Supprimer un contact
router.delete('/:id', personController.deletePerson);

module.exports = router
