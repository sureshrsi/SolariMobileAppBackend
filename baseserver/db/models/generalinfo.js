'use strict';
const {  Model ,Sequelize } = require('sequelize');
const sequelize = require('../../config/database');
const householdmembers = require('./householdmembers');
const generalinfo = sequelize.define('generalinfo',{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  head_of_the_family: {
    type: Sequelize.STRING
  },
  name_of_habitation: {
    type: Sequelize.STRING
  },
  mandal: {
    type: Sequelize.STRING
  },
  household_door_no: {
    type: Sequelize.STRING
  },
  aadhar_number: {
    type: Sequelize.STRING
  },
  economic_status: {
    type: Sequelize.STRING
  },
  occupation: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  },
  name_of_the_micro_watershed: {
    type: Sequelize.STRING
  },
  name_of_the_grampanchayat: {
    type: Sequelize.STRING
  },
  district: {
    type: Sequelize.STRING
  },
  job_card_no: {
    type: Sequelize.STRING
  },
  social_status: {
    type: Sequelize.STRING
  },
  conatact_number: {
    type: Sequelize.STRING
  },
  total_rainfed_area: {
    type: Sequelize.STRING
  },
  total_irrigated_area: {
    type: Sequelize.STRING
  },
  type_of_house: {
    type: Sequelize.STRING
  },
  own_or_rented: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  deletedAt: {
    type: Sequelize.DATE
  },
},{
  paranoid :true,
  freezeTableName : true,
  modelName : 'generalinfo'
})

generalinfo.hasMany(householdmembers, { foreignKey: 'headId' });
householdmembers.belongsTo(generalinfo, {
    foreignKey: 'headId',
});


module.exports = generalinfo