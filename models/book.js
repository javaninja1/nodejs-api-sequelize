module.exports = (sequelize, DataTypes) => {
    const book = sequelize.define("book",
    {
     title: {type: DataTypes.STRING, allowNull: false}
    } );
    return book;
}