const { books } = require("../database/Connect")

exports.getbook = async(req,res)=>{
    const datas = await books.findAll()                 //logic halne thau yo logic ho
    res.json({
        message : "books fetched successfully",
        datas
    })
}

exports.addbook =async(req,res)=>{
    const{bookName,bookPrize,bookauthor}=req.body
    await books.create({
        bookName:bookName,
        bookPrice:bookPrize,          //column name : value
        bookAuthor:bookauthor
    })
    res.json({
        message : "Book added successfully"
    })
}


exports.deletebook=async(req,res)=>{
    const id = req.params.id        //yo id leko ho
    await books.destroy({
        where:{
            id
        }
    })
    res.json({
        massage:"book deleted."
    })
    
}


exports.editBooks=async(req,res)=>{
    const id = req.params.id
    const {bookName, bookauthor, bookPrize,} =req.body
    books.update({
        bookName:bookName,
        bookPrice:bookPrize,          //column name : value
        bookAuthor:bookauthor
    },{
        where:{
            id
        }
    })
    res.json({
        massage:"Edit Succesfully."
    })
}



exports.singlegetbook = async (req,res)=>{
    const id = req.params.id                //yo  chai user ley send garda kun id send gareko telai detect garxa paxadi ko jun id xa tyo route ma books:/id xa bhane taii akhne yadi id ko thau ma aru keii xa bhane teii rakhne 
    const datas = await books.findByPk(id)              //yasley object ma return dinxa

    // yo tarika baat pani hunxa tra mathi ko better ho 
    // const datass = await books.findAll({                //yesley aaray ma dinxa
    //     where :{
    //         id : id
    //     }
    // })  


    res.json({
        massage: "sinfle book goted.",
        datas,
        // datass

    })

}