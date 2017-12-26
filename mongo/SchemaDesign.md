# 6 cách thiết kết MonggDB Schema:
* Tôi có nhiều kinh nghiệm với SQL, nhưng tôi là mới mới bắt đầu với Mongodb. Vậy làm thế nào để thiết kê mô hình 1 - n, đó chỉ là một trong rất nhiều câu hỏi chung tôi có được từ người tham gia tại giờ học Mongo DB.

* Tôi không có 1 câu trả lời ngắn cho câu hỏi trên, bởi vì không chỉ có 1 cách. Mongo DB là từ vựng giàu sắc thái và đa dạng cách thể hiện nó, trong SQL, khi làm việc với kiểu "1-n". Hãy để tôi đưa bạn vào một tour các lựa chon cho mô hình quan hệ one to N

* Có rất nhiều các để nói về vấn đề này, Tôi chia nhỏ vấn đề này thành 3 phần, Ở phần đầu, Tôi sẽ nói về 3 cách cơ bản để tạo mô hình quan hệ one to N. Phần thứ 2, tôi sẽ đề cập đến các thiết kế Schema phức tạp, tinh vi(sophisticated) hơn, bao gồm denormalization và 2 cách tham khảo (referencing). Và trong phần cuối cùng, I sẽ ôn lại toàn bộ các lựa chọn, và cho bạn một số gợi ý để chọn lựa giữa hàng nghìn lựa chọn mà bạn có thể xem xét (consider) trong mô hình quan hệ one to N
* Rất nhiều người bắt đầu nghĩ rằng chỉ có 1 cách để tạo mô hình one to N trong mongodb là nhúng (embed) vào một mảng của document con trong parent document, nhưng điều này chưa chính xác. Chỉ là bạn có thể nhúng vào document, chứ k có nghĩa là bắt buộc phải nhúng vào một document.
* Khi thiết kế Schema MongoDB, bạn cần bắt đầu với câu hỏi rằng bạn không bao giờ xem xét như đang sử dụng SQL: Thế nào  là mô hình quan hê? đặt nó trong hoàn cảnh chính thức: bạn muốn đặt trưng cho quan hệ one to N với một vài kiểu khác: như là "one to few", "one to many", "one to squillions"? Phụ thuộc vào nó là gì, bạn nên sử dụng một định dạng khác nhau để mô hình hoá quan hệ phụ thuộcthuộc

## Mô hình cơ bản one to few

Một ví dụ của one to few về địa chỉ của một người. Đây là môt trường hợp tốt sử dụng để nhúng, bạn nên đặt địa chỉ trong 1 array trong đối tượng Person 
```js
> db.person.findOne()
{
  name: 'Kate Monster',
  ssn: '123-456-7890',
  addresses : [
     { street: '123 Sesame St', city: 'Anytown', cc: 'USA' },
     { street: '123 Avenue Q', city: 'New York', cc: 'USA' }
  ]
}
```

* Thiết kế này có toàn bộ nhưng lợi thế và bất lợi của việc nhúng. Lợi thế chủ yếu của việc này là bạn không phải thực hiện một truy vấn riêng để có được các chi tiết nhúng, bất lợi chủ yếu là bạn không có các nào để truy cập các chi tiết nhúng như một thực thể độc lập

* Ví dụ, nếu bạn có một mô hình một task-tracking hệ thông, mỗi Person cần có một công việc cho mỗi người. Nhúng công việc trong mỗi Person document nên thực hiện các truy vấn như "hiển thị cho  toàn bộ các trong việc trong ngày mai" khó khăn hơn nhiều sơ với việc họ cần phải làm. Tôi sẽ giới thiệu một thiết kế phù hợp (appropriate) hơn cho trường hợp sử dụng này trong bài viết tiếp theo.

## Basic: one to many
* Một ví dụ của one to many có thể là một sản phầm trong hệ thống đặt hàng sửa chữa thay thế. Mỗi sản phẩm có hàm trăm phụ kiện thay thế, nhưng không bao giờ nhiều hơn một vài nghìn hoặc hơn. Đây là một trường hợp sử dụng tốt để tham khảo - Bạn đặt ObjectId của một phần trong một mảng product document (ở ví dụ này tôi sử dụng 2 byte ObjectIDs bởii vì chúng ta dễ dàng đọc, thực ra các mã thường để 12byte ObjectIDs)

* Mỗi phần sẽ có document riêng: 

```js
> db.parts.findOne()
{
    _id : ObjectID('AAAA'),
    partno : '123-aff-456',
    name : '#4 grommet',
    qty: 94,
    cost: 0.94,
    price: 3.99

```

* Mỗi sản phẩm sẽ có document riêng, nó sẽ chứa một mảng các tham chiếu ObjectID đến các bộ phận tạo nên sản phẩm đó: 

```js
> db.products.findOne()
{
    name : 'left-handed smoke shifter',
    manufacturer : 'Acme Corp',
    catalog_number: 1234,
    parts : [     // array of references to Part documents
        ObjectID('AAAA'),    // reference to the #4 grommet above
        ObjectID('F17C'),    // reference to a different Part
        ObjectID('D2AA'),
        // etc
    ]

```


* Sau đó bạn sẽ sử dụng ứng dụng phân cập để tham gia lấy ra từng phần của một sản phẩm cụ thể



```js
// Fetch the Product document identified by this catalog number
// Lay ra id san pham
> product = db.products.findOne({catalog_number: 1234});
   // Fetch all the Parts that are linked to this Product
   // Lay ra dữ liệu các phần của sản phẩm trong document product_parts
> product_parts = db.parts.find({_id: { $in : product.parts } } ).toArray() ;


```

* Hiệu quả của hoạt động này, bán cần tạo một index cho product.catalog_number . Chú ý rằng luôn có index cho parts._id, như vậy truy vấn này luôn luôn hiểu quả.
* Kiểu tham chiếu này có một tập hợp các ưu điểm và nhược điểm để nhúngnhúng. Mỗi phần là một document độc lập và nó đễ dàng để tìm kiếm chúng và cập nhật chúng độc lập. Một thương mại sử dụng Schema này phải thực hiện một truy vấn thứ 2 để lấy được thông tin chi tiết về từng phần của sản phẩm.(Nhưng giữ ý nghĩ đố cho đến khi chúng to đọc denomalizing trong part 2).
* Như một phần thưởng, Schema này mang đến cho chúng ta từng parts sử dụng trong sản phẩm, như vậy Schema one to N của bạn trở thành N - N không cần phải kết nối bảng.

### Basics: One-Squillions

* Một ví dụ sử dụng one to squillions có thể là một hệ thống ghi nhận sự kiện thu thập tin nhắn từ các máy khác nhau. Với bất kỳ máy chủ nào cũng có thể tạo ra đủ các thư để tràn lên dung lượng 16MB, ngay cả khi bạn luu trữ trong mảng ObjectId. Đây là trường hợp cổ điển sử dụng cho "parent tham khảo". Bạn sẽ có một document cho mỗi địa chỉ và lưu trữ ObjectId của máy chủ lưu trữ trong các tài liệu cho các tin nhắn đăng nhậpnhập


```js
> db.hosts.findOne()
{
    _id : ObjectID('AAAB'),
    name : 'goofy.example.com',
    ipaddr : '127.66.66.66'
}

>db.logmsg.findOne()
{
    time : ISODate("2014-03-28T09:42:41.382Z"),
    message : 'cpu is on fire!',
    host: ObjectID('AAAB')       // Reference to the Host document
}


```

* Bạn sẽ sử dụng tham gia cấp ứng dụng cho việc tìm hiểu 5000 tin nhắn gần nhất của một máy chủ: 

```js
  // find the parent ‘host’ document
> host = db.hosts.findOne({ipaddr : '127.66.66.66'});  // assumes unique index
   // find the most recent 5000 log message documents linked to that host
> last_5k_msg = db.logmsg.find({host: host._id}).sort({time : -1}).limit(5000).toArray()


```

### Tóm lại
* Vì vậy, ngay cả ở mức cơ bản này, còn có nhiều suy nghĩ khi thiết kế a Schema MongoDB hơn là khi thiết kế một Schema quan hệ tương đương. Bạn cần phải xem xét 2 yếu tố sau:
  * Liệu các thực thể ở bên N của One to N cần dứng một mình không ?
  * Lựa chọn mối quan hệ nào sau đây: one-to-few, one-to-many, hay one to squillions
* Dựa trên các yếu tố, bạn có thể lựa chon một trong 3 cách cơ bản thể thiết kế Schema:
  * Nhứng phía N nếu cardinality là one to few và không phải truy cập đối tượng nhứng bên ngoài bối cảnh của parent Object
  * Sử dụng một array đại diện cho bên N Object nêu cardinality là one to many h nếu bên Đối tượng N có thể dứng một mình với một số lý do.
  * Sử dụng một đại diện cho bên One bên trong bên đối tượng N nêu cardinality là one to squillions
