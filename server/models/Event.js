const { Schema, Model } = require("mongoose");
const { DataTypes } = require("sequelize");
const dateFormat = require("../utils/dateFormat");

const eventSchema = new Schema({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  event: {
    type: String,
    required: true,
    trim: true,
  },
  event_date: {
    type: dateFormat,
    required: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
});

const Event = Model("Event", eventSchema);

module.exports = Event;
