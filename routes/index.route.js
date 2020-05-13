const express=require("express")
const router=express.Router();
const pool=require("../pool");

router.post("/addstore",(req,res)=>{
  let params = req.body;
  if(params!="{}"){
    let arr = [];
    Object.keys(params).forEach(v => {
       // console.log(v)
       arr.push(params[v]);
    });
    pool.query('INSERT INTO store_manage(title,logo,distance,address,phone,detail_area,image) VALUES(?,?,?,?,?,?,?);',arr,(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:200,msg:"成功"});
    }else{
      res.send({code:301,msg:"数据库异常"});
    }
  })
  }else{
    res.send({code:202,msg:"数据不能为空"});  
  }
})
router.get("/storelist",(req,res)=>{
  pool.query("SELECT * FROM store_manage;",(err,result)=>{
    if(err)throw err;
    if(result.length!=0){
      res.send({code:200,data:result});
    }else{
      res.send({code:301,data:[]});
    }
  });
})
router.get("/storedetail",(req,res)=>{
 res.send({msg:"storedetail"});
})
module.exports=router;