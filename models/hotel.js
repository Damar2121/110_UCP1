module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define("hotel", {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }, 
    Tipe_Kamar: {
      type: DataTypes.VARCHAR(50 ),
      allowNull: false      
    },
    Kapasitas_Tamu: {
      type: DataTypes.INTEGER,       
        allowNull: false
    },
    Lantai: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    Fasilitas: {
      type: DataTypes.VARCHAR(50),
      allowNull: false
    },
  }, {
    tableName: "hotel",
    freezeTableName: true,
    timestamps: true
  });
  return hotel;
};