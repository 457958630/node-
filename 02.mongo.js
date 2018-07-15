// 导入模块(第三方)
const MongoClient = require("mongodb").MongoClient;

// 选择连接的mongo地址
const url = "mongodb://localhost:27017";

// 选择使用哪个库(dataBase)
const dbName = "test";

// 选择操纵哪个 集合
MongoClient.connect(url,function(err, client){
    // 选择使用哪个库
    const db = client.db(dbName);
    // 进行增删改查
    // 插入数据
    // 函数声明
    const insertDocuments = function(db, callback) {
      // Get the documents collection
      const collection = db.collection('foodList');
      // Insert some documents
      collection.insertMany([
        {a : 1,name:"打来福",tool:"榔头",position:"虐待动物,被查水表了!!"}, {a : 2}, {a : 3}
      ], function(err, result) {
        // assert.equal(err, null);
        // assert.equal(3, result.result.n);
        // assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
      });
    }

    // 调用函数
    insertDocuments(db,(result)=>{
      console.log(result);
    });

    // 关闭mongo连接
    client.close();
  }
);
