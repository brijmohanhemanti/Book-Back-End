const {Sequelize,DataTypes} = require(`sequelize`);        //yo sequelize lai bolakao ho
 
/*
yasri ni garna sakinxa long type

const sequelize = require(`sequelize`);
const Sequelize = sequelize.Sequelize;
const DataTypes = sequelize.DataTypes;

*/

const sequelizeghar = new Sequelize("postgresql://postgres.ngbvojwasacmrqqcmpng:Brij@1055@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres")                            //yo class instalottion ho mathi ko bolaiayeko ho ya yesley data baseconnect garxa


sequelizeghar.authenticate()
.then(()=>{
    console.log("Sucessfully Connected.")
})
.catch((err)=>{
    console.log("Error"+err)
})


//ab auta objt banayr arko file ma lagnu parxa 

const db = {}
db.Sequelize = Sequelize
db.Sequelize = Sequelize



db.books = require("./Models/book.model")(sequelizeghar,DataTypes)     // yo chai book.model.js file lai bolako ho.....
//migrate code for database ma table banna ko lagi

sequelizeghar.sync({alter : false}).then(()=>{                
    console.log("sucesfully Migrate.")
})

module.exports = db

