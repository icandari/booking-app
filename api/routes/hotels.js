import express from "express";
import Hotel from "../models/Hotel.js"

const router = express.Router();

//CREATE
router.post("/", async (req,res)=>{
    
    const newHotel = new Hotel(req.body)
    
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(err)
    }
});
//UPDATE
router.put("/:id", async (req,res)=>{
    
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true}) //new true returns the updated data
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(err)
    }
});
//DELETE   UPDATE THIS Yotuube video stopped at 30:19
router.put("/:id", async (req,res)=>{
    
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true}) //new true returns the updated data
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(err)
    }
});
//GET
//GET ALL

export default router