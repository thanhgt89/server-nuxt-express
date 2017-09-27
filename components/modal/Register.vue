<template>
  <!-- Modal register -->
  <div class="modal fade" id="register" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Đăng ký</h4>
        </div>
        <div class="modal-body">
          <form id="form-register">
            <div class="alert alert-warning wsalert wsregister-w" role="alert">
              This is a warning alert—check it out!
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email" name="username">
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password" placeholder="Enter password" name="password">
            </div>
            <div class="form-group">
              <label for="name">Họ và tên:</label>
              <input type="text" class="form-control" id="name" placeholder="Họ và tên" name="fullname">
            </div>
            <div class="form-group">
              <label for="phone">Số điện thoại:</label>
              <input type="text" class="form-control" id="phone" placeholder="Số điện thoại" name="phone">
            </div>
            <button type="button" class="btn btn-primary" id="register">Đăng ký
            </button>
          </form>
        </div>
        
      </div>
    </div>
  </div>

  <!-- end modal register -->
</template>

<style>
.form-group {
  margin-bottom: 0;
}
#register{
  width: 100%;
  margin-top: 10px;
}
.btn-login{
  color:white;
}
</style>
