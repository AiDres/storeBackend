const express=require("express")
const router=express.Router();
const pool=require("../pool");

// 处理图片
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/news')
    },
    filename: (req, file, cb) => {
      cb(null,file.originalname)
    }
});
var upload = multer({storage: storage});


// 添加门店
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
// 门店列表
router.get("/storelist",(req,res)=>{
  pool.query("SELECT * FROM store_manage;",(err,result)=>{
    if(err)throw err;
    res.send({code:200,data:result});
  });
})
// 门店详情
router.get("/storedetail",(req,res)=>{
 	let params = req.query;
 	if(params!="{}"){
 		let id = params.store_id;
 		pool.query("SELECT * FROM store_manage WHERE store_id=?",[id],(err,result)=>{
 			if(err)throw err;
 			res.send({code:200,data:result});
 		})
 		
 	}else{
 		res.send({code:301,msg:'地址请求异常'})
 	}
})
module.exports=router;