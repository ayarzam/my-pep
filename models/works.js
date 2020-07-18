module.exports = (sequelize, DataTypes) => {
  const Works = sequelize.define("works", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  project_title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  role: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  team: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  frontend_technologies: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  backend_technologies: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  testing_suite: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  github: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  deployed: {
    type: DataTypes.STRING
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false
  }, long_description: {
    type: DataTypes.STRING(1234),
    allowNull: false
  }
})
return Works
}