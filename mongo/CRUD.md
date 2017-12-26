# insert 

```js
// mặc định insert có order true có nghĩa khi 1 document có lỗi nó trả về lỗi và không thực thi phần từ còn lại
// order: false, có lỗi mongo vẫn tiếp tục thêm các document còn lại trong array
  db.collection.insert({})
  db.collection.insertOne(
   <document>,
   {
      writeConcern: <document>
   }
)
  db.collection.insertMany({})

```

* Bổ sung các trường hợp insert
* tất cả trường hợp sử dụng khi option: upsert:true
```js
// when used with the upsert: true option.
  db.collection.update()
  db.collection.updateOne()
  db.collection.updateMany()
  db.collection.findAndModify()
  db.collection.findOneAndUpdate()
  db.collection.findOneAndUpdate()
  db.collection.findOneAndReplace()
  db.collection.save()
  db.collection.bulkWrite()

```