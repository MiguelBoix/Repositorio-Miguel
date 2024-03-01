module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      // TODO: Include the rest of the fields of the Restaurants table
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      postalCode: {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      url: {
        allowNull: false,
        type: Sequelize,STRING
      },
      shippingCosts: {
        allowNull:false,
        type: Sequelize.DOUBLE
      }, 
      averageServiceMinutes: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      logo: {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      heroImage: {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      status: {
        allowNull: false,
        type: Sequelize.ENUM
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
