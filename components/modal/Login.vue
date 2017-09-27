<template>
<!-- Modal login -->
  <div class="modal fade" id="login" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Đăng nhập</h4>
        </div>
        <div class="modal-body">
          <form id="form-login">
            <div class="alert alert-warning wsalert wssignup-w" role="alert">
              This is a warning alert—check it out!
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email-register" placeholder="Enter email" name="username">
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password-register" placeholder="Enter password" name="password">
            </div>
            <div class="checkbox">
              <label class="text-color"><input type="checkbox" name="remember"> Ghi nhớ tài khoản</label>
            </div>
            <a href="/">
              <button type="button" class="btn btn-primary get-sign" id="get-sign">Đăng nhập
              </button>
            </a>
            <div class="remember">
              <label class="text-color">
                <i class="fa fa-question-circle-o" x aria-hidden="true"></i>Quên mật khẩu ?
              </label>
            </div>
          </form>
        </div>
        <!-- <div class="modal-footer">
          <div class="col-md-* text-center login-face">
            <a href="https://www.facebook.com/">
              <i class="fa fa-facebook-official"></i>
            </a>
          </div>
          <div class="col-md-* text-center login-gmail">
            <a href="https://accounts.google.com/signin">
              <i class="fa fa-google" aria-hidden="true"></i>
            </a>
          </div>
        </div> -->
      </div>
    </div>
  </div>

  <!-- end modal login -->
</template>

<style>

</style>


