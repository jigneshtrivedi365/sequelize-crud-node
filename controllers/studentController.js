const { where, Sequelize, Op } = require('sequelize');
const db = require('../models');
const { sendSuccess, sendError } = require('../utils/responseHelper');
const Student = db.student;
const Cource = db.cource;

/**
 * Validates the request data for adding a student.
 * @param {Object} data - The request body data.
 * @returns {Object} - An object containing the validation result and message.
 */
const validateStudentData = (data) => {
    const { name, roll_no } = data;
    if (!name || !roll_no) {
        return { isValid: false, message: 'Name and roll number are required.' };
    }
    return { isValid: true };
};

/**
 * Adds a new student to the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const addStudent = async (req, res) => {
    try {
        const { name, roll_no, cource_id } = req.body;
        // Validate request data
        const validation = validateStudentData(req.body);
        if (!validation.isValid) {
            return sendError(res, validation.message, {}, 400);
        }

        // Create a new student
        const result = await Student.create({ name, roll_no, cource_id });

        // Respond with success
        return sendSuccess(res, 'Student added successfully.', result, 200);
    } catch (error) {
        console.error('Error adding student:', error);
        return sendError(res, 'Failed to add student.', error.message || {}, 500);
    }
};

const getAllStudents = async(req,res) => {

    try {
        const studentId = 1;
        const dataResult = await Student.findAll({
            include:[{
                model:Cource,
                attributes:[['name','cource_name'],'fees']
            }],
            attributes: {
                exclude: ['id','name'],
                 include: [['name','student_name']]
            },
            // where:{
            //     // id:{
            //     //     [Op.ne]: studentId
            //     // }
            //     [Op.or]:[{id:1},{id:2}]
            // }
            // group: ['id', 'name', 'roll_no'] 
        });
        return sendSuccess(res,'All student datas',dataResult,200)
    } catch (error) {
        console.error('Error adding student:', error);
        return sendError(res, 'Failed to fetch all student.', error.message || {}, 500);
    }
}

const getStudent = async(req,res) => {
    try {
        const studentId = req.params.id;
        if(!studentId){
            return sendError(res, 'Student id is requied!', error.message || {}, 404);
        }
        const dataResult = await Student.findOne({
            where:{
                id:{
                    [Op.eq]: studentId
                }
            }
        });
        return sendSuccess(res,'All student datas',dataResult,200)
    } catch (error) {
        console.error('Error adding student:', error);
        return sendError(res, 'Failed to fetch student.', error.message || {}, 500);
    }
}

module.exports = {
    addStudent,
    getAllStudents,
    getStudent
};
