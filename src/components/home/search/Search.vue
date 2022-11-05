<template>
  <div class="search-container">
    <div class="row container">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search for..." />
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">搜索</button>
        </span>
      </div>
      <!-- /input-group -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
export default {
  name: 'HomeSearch'
}
</script>

<style lang="less" scoped>
.search-container {
  margin-bottom: 10px;
  .row {
    margin: 0 auto;
  }
  .input-group {
    width: 100%;
    input {
      display: block;
      height: 50px;
    }
    button {
      display: block;
      height: 50px;
    }
  }
  .form-control {
    width: 100%;
  }
}
</style>
