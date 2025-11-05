module.exports = (sequelize, DataTypes) => {
  const Hotel = sequelize.define("Hotel", {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }, 
    Tipe_Kamar: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tableName: "hotel",
    freezeTableName: true,
    timestamps: true,
    createdAt: 'Tanggal_Pesan',
    updatedAt: false
  });

  return Hotel;
};