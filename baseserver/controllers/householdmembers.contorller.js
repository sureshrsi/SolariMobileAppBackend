const generalinfo = require('../db/models/generalinfo');
const householdmembers = require('../db/models/householdmembers');

const createHeadMembers = async (req, res, next) => {
    const data= req.body.data
    const newhouseHoldMemberRecord = await householdmembers.bulkCreate({
        data
    // name_of_the_family_member : req.body.name_of_the_family_member,
    // relationship_with_head : req.body.relationship_with_head,
    // disability : req.body.disability,
    // gender : req.body.gender,
    // age : req.body.age,
    // level_of_education : req.body.level_of_education,
    // occupation : req.body.occupation,
    // annual_gross_income : req.body.annual_gross_income,
    // membership : req.body.membership,
    // headId : req.body.headId
    });

    return res.status(201).json({
        status: 'success',
        data: newhouseHoldMemberRecord,
    });
};


module.exports = {createHeadMembers}