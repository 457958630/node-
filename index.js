// 使用模块中的 MongoClient 这个属性
const MongoClient = require("mongodb").MongoClient;
// assert 另外一个模块
// const assert = require('assert');

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "test";

// Use connect method to connect to the server
MongoClient.connect(
  url,
  (err, client) => {
    //   assert.equal(null, err);
    console.log("Connected successfully to server");

    // 连接上了 mongoDB这个库
    const db = client.db(dbName);
    //   console.log(db);
    const collection = db.collection("foodList");
    // 批量插入数据----------------
    // collection.insertMany([
    //     {
    //         "name":"来福",
    //         "friend":"旺财"
    //     },
    //     {
    //         "name":"旺财",
    //         "friend":"常威"
    //     },
    //     {
    //         "name":"常威",
    //         "friend":"来福"
    //     }
    // ],(err,result)=>{
    //     console.log(err);
    //     console.log(result);
    // })

    // 插入一条数据
    // collection.insertOne({
    //     name:"曹常威",
    //     skill:"水师提督!!"
    // })

    // 查询数据
    // 查询所有
    // collection.find().toArray((err,docs)=>{
    //     if(err)console.log(err);
    //     console.log(docs);
    // })

    // 增加筛选条件
    // collection.find({friend:"旺财"}).toArray((err,docs)=>{
    //     if(err)console.log(err);
    //     console.log(docs);
    // })

    // 修改数据
    // collection.updateOne({name:"曹常威"},{$set:{
    //     skill:"两广总督"
    // }},(err,result)=>{
    //     if(err)console.log(err);
    //     console.log(result);
    // })

    // 进行操作了

    // 删除数据
    collection.remove({
        name:'曹常威'
    },(err,result)=>{
        if(err) console.log(err);
        console.log('success');
    })

    client.close();
  }
);
