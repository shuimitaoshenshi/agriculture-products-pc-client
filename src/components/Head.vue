<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="@/assets/logo.png" alt="" />
            <span>想吃杨梅</span>
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <!-- 区域选择菜单 -->
            <!-- <li>
              <div class="dropdown">
                <button
                  class="btn btn-default dropdown-toggle"
                  type="button"
                  id="dropdownMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  Dropdown
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
            </li> -->
            <!-- 区域选择菜单 -->
            <li><router-link to="/login">登陆</router-link></li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">我的</a></li>
            <li><a href="#">联系客服</a></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeadAll'
}
</script>

<style lang="less" scoped>
.navbar-brand {
  border-right: solid 1px #e7e7e7;
  font-size: 2rem;
  img {
    width: 50px;
    margin-top: -15px;
    float: left;
  }
}
.btn {
  margin: 10px;
}
</style>
