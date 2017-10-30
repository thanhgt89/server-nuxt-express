# Toan tu MONGODB
* $lte: <=
* $gte: >=
* $or
* $elemMatch: tìm kiếm với nhiều điều kiện trong nested array
> db.inventory.find( { "instock": { $elemMatch: { qty: { $gt: 10, $lte: 20 } } } } )  
> db.inventory.find( { "instock": { $elemMatch: { qty: 5, warehouse: "A" } } } )

* query trong array
* $all: tìm toàn bộ phần từ trong dk all
> db.posts.find( { tag : { $all: ["slide", "apollo"] } } )
* $size: lấy toàn bộ phần tử có size = ?
> db.inventory.find( { "tags": { $size: 3 } } )

* $type: 10 --> tim kiem phan tu co gia tri null 
* $exists: false --> tim kiem khong ton tai 1 field cua document

```js
// $unwind in ra cac phan tu nested trong array
// chi dinh field : $tenfield
db.posts.aggregate([{$match: {"by": "007"}},{$unwind: "$tag"}])
db.posts.aggregate([{$unwind: {path: "$tag"}}])


```