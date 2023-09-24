import User, { hasMany } from "../controllers/api/accountRoutes";
import Event, { belongsTo } from "./Event";

hasMany(Event, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

belongsTo(User, {
  foreignKey: "user_id",
});

const models = { User, Event };

export default models;

// const User = require('./User');
// const Event = require('./Event');

// module.exports = { User, Event };
