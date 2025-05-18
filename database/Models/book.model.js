// yo file ma hamiley database ko lagi table banauxam jun data haru li save garxa r connect.js sang link hunxa...

//books ko table ko lagi bookscost .bookprize, bookgenre haru

const bookmodel = (sequelize,DataTypes)=>{
    const book = sequelize.define("book",{
        bookName : {
            type : DataTypes.STRING,
            // allownull : false,              //yo chai bhaneko hamilia bookname imp xa chahinxa jasri ni ta yo rakhnu parza
        },
        bookPrice : {
            type : DataTypes.INTEGER                                  
        },
        bookAuthor : {
            type : DataTypes.STRING,
            // defaultValue : "Brijmohan"              // yo chai yadi user ley athor diyena bhane yesley afaii brijmohan edit garxa
        }
    })
    return book
}

// mathi ko sab table banako ho jun ma name pize authir coloumn ho

module.exports = bookmodel