<!-- Created by zhihao_su on 2018/5/28. -->
<template>
<div>
  <div class="index-header">
    <div class="search-bar d-flex">
      <div class="search-icon padding-l-0-6x">
        <icon type="search" size="22"></icon>
      </div>
      <input class="search-input padding-l-0-6x" v-model="key" type="text" name="search" placeholder="请输入企业名，人名，品牌名等" />
    </div>
  </div>
  <img src="./images/finance2.png"/>
</div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        key: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/common';

  view {
    background: #ffffff;
    transition: .36s;
  }

  .index-header {
    overflow: hidden;
    width: 375px;
    height: 198px;
    background-image: url('./images/tanner.png');
    background-size: 100%;
  }

  .search-bar {
    position: relative;
    width: 345px;
    height: 45px;
    margin: 120px auto 0;
    box-shadow: 0 7px 34px -12px #7A808F;
  }

  .search-input {
    height: 45px;
    line-height: 44px;
    flex: 1;
    font-size: 14px;
  }

  .search-icon {
    display: flex;
    align-items: center;
  }

  .search-sorts {
    display: flex;
    padding: 15px 10px;
  }

  .tabs-items {
    white-space: nowrap;
    overflow: hidden;
  }

  .sorts-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  .sorts-item image {
    width: 56px;
    height: 56px;
  }

  .sorts-item p {
    color: #43464F;
  }

  .hot-industry-title {
    border-left: 5px solid #0fbbe9;
    // font-size: 18px;
    font-weight: bold;
    padding-bottom: 5px;
  }

  .hot-industry-items {
    padding: 0 7.5px;
    box-sizing: border-box;
  }

  .hot-industry {
    padding: 15px 0;
    color: #43464F;
  }

  .item-container {
    display: flex;
    align-items: center;
  }

</style>
