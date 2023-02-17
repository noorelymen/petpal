import express from "express";
import Pet from "../models/Pet.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  //create a new pet
  const newPet = new Pet(req.body);
  try {
    const savedPet = await newPet.save();
    res.status(200).json(savedPet);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } //because the find and update by id method is gonna return the unchanged object and we need it to return the object after the put method
    );
    res.status(200).json(updatedPet);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.status(200).json("Pet deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET
router.get("/:id", async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PETS
router.get("/", async (req, res) => {
  try {
    const pets = await Pet.find(req.params.id);
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json(err);
  }
});
export default router;
