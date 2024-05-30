const generalinfo = require('../db/models/generalinfo')

const creategeneralinfo = async (req,res) => {

    const newHouseholder = await generalinfo.create({
        head_of_the_family : req.body.head_of_the_family,
        name_of_habitation : req.body.name_of_habitation,
        mandal : req.body.mandal,
        household_door_no : req.body.household_door_no,
        aadhar_number : req.body.aadhar_number,
        economic_status : req.body.economic_status,
        occupation : req.body.occupation,
        location : req.body.location,
        name_of_the_micro_watershed : req.body.name_of_the_micro_watershed,
        name_of_the_grampanchayat : req.body.name_of_the_grampanchayat,
        district : req.body.district,
        job_card_no : req.body.job_card_no,
        social_status : req.body.social_status,
        conatact_number : req.body.conatact_number,
        total_rainfed_area : req.body.total_rainfed_area,
        total_irrigated_area : req.body.total_irrigated_area,
        type_of_house : req.body.type_of_house,
        own_or_rented : req.body.own_or_rented
        });

    if(!newHouseholder){
        res.status(404).json({
            status : 'fail',
            message : 'record not inserted'
        })
    }
    return res.status(200).json({
        status : "success",
        data : newHouseholder
    })
}
module.exports = { creategeneralinfo }