const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://esgi_cloud_exam_55843_user:djhO6ioLmnlqGK3UFTDt5fFIEvzq51Na@dpg-clu1qk21hbls73e8e6m0-a/esgi_cloud_exam_55843', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;