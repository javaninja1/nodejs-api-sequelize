const express = require('express');
const router = express.Router();
const db = require('../models');

//GET
router.get("/books", (req,res) => {
   db.book.findAll().then(books => res.send(books));
    } );

//POST
router.post("/books", (req,res) => {
   db.book.create( {
      title: req.body.title
   }).then( (addedBook) => res.send(addedBook))
});

//GET with path variable
router.get("/books/:id", (req,res) => {
    db.book.findAll(
        { where:
        {
            id: req.params.id
        }}
    ).then(book => res.send(book));
     } );

//PUT
router.put("/books", (req,res) => {
        db.book.update(
            {
                title: req.body.title
             }, 
            {   where: { id: req.body.id } }
        ).then(() => res.send('updated book'));
         } );     

//DELETE
router.delete("/books/:id", (req,res) => {
            db.book.destroy(
                { where:
                {
                    id: req.params.id
                }}
            ).then(() => res.send('Deleted book.'));
             } );  
 
module.exports = router;