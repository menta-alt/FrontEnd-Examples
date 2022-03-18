<template>
  <tab-bar>
    <tab-bar-item path='/home' activeColor='skyblue'>
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/c_home.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path='/category' activeColor='orange'>
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/c_category.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path='/shopcart' activeColor='grey'> 
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/c_shopcart.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path='/profile' activeColor='purple'>
      <img slot="item-icon" src="~assets/img/tabbar/me.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/c_me.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/tabbar/TabBar.vue'
import TabBarItem from 'components/tabbar/TabBarItem' 

export default {
  name:'MainTabBar',
  components: {
      TabBar,
      TabBarItem
    }
}
</script>

<style>

</style>