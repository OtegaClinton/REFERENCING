const express = require("express");
const schoolModel = require("../Models/schoolModel");

exports.createSchool = async (req,res)=>{
    try {
        const createSchool = await schoolModel.create(req.body);
        return res.status(200).json({
            message:`School: ${createSchool.schoolName} has been created successfully.`,
            data: createSchool

        });
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
        
    }
};



exports.getASchool = async(req,res)=>{
    try {
        const id = req.params.id;
        const getASchool = await schoolModel.findById(id).populate("studentInfo");

        res.status(200).json({
            message:`school with ID: ${id} was found.`,
            data: getASchool
        })
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
        
    }
};

exports.getAllSchool = async (req,res)=>{
    try {
        const getAllSchool = await schoolModel.find().populate("studentInfo");

        return res.status(200).json({
            totalNumberOfSchools :getAllSchool.length,
            message:`list of all schools:`,
            data: getAllSchool
           
        })
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
        
    }
}