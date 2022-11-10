const sequelize = require("../config/connection");
const { User, Todo }= require("../models");
const userSeeds = require("./user-seeds.json");
const todoSeeds = require("./todo-seeds.json");

const seedUsers = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeeds, {
    individualHooks: true,
    returning: true,
  });



  for (let todo of todoSeeds) {
    await Todo.create({
      ...todo,
      user_id: users[Math.floor(Math.random() * users.length)].id
    });
  }

  process.exit(0);
};

seedUsers();
