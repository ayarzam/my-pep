module.exports = {
  up: (queryInterface, Sequelize) => { 
    return queryInterface.createTable('works', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      project_title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      role: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      team: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      frontend_technologies: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      backend_technologies: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      testing_suite: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      img: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      github: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
      deployed: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING,
        allowNull: false
      }, long_description: {
        type: Sequelize.STRING(1234),
        allowNull: false
      }

    });
  }, 
  down:(queryInterface, Sequelize) => {
    return queryInterface.dropTable('works')
  }
}