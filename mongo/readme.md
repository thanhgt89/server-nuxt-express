# MongoDB
## Model 
* Model represent collection in Mongo DB
  * User model to represent to collection of Users


## Schemas defined the struture of our data
```json
{
  name: String,
  age: Number,
  avaiability: Boolean
}

```

## Mongoose adds alayer of methods to easisy save, edit,retrive, and delete data from mongodb
## Allows us to create our Models and schema easilly

# Cac cau lenh truy van co ban
### Them  collection, database
```js
  db.createCollection('collection Name')
```
### Xoa collection, database

```js
  db.collection.drop()
  db.dropDatabase()
```
### Them 1 hay nhieu document vao collection

```js
  db.colleciton.insert({}) // insert 1
  db.colleciton.insert([{}]) // insert many

  db.colletion.insertOne({})
  db.collection.insertMany([{}])

```

### Tim kiem du lieu ket hop $or, > ~ $gt, < ~$lt , projection: tim kiem cac truong can hien thi

```js
  db.collection.find({})
  db.collection.find({}, {"name": 1}... )     // mac dinh lay _id
  db.collection.find({}, {"name": 1}, {"_id": 0} )     // Khong  lay _id

```
### lenh remove()
### lenh limit(): gioi han so luong ban ghi hien thi
### lenh skip(): bo qua so luong ban ghi
### sort("likes": 1): sap xep theo truong 
### Index cho field

```js
// co the danh index 1 h nhieu truong
  db.ensureIndex("title":1,"description":-1})

```
### aggregate: tap hop tuong duong count()

```js
Select by as user, count(*) from posts GROUP BY user
db.posts.aggregate([{$group: {_id: "by", count: {$sum: 1}} }])
```

