<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 给插槽的外层都包装一层div 防止slot被替换时属性丢失 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  props: {
    path: String,
    activeColor :{
      type: String,
      default:'skyblue'
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    isActive() {
      //这里是route
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick() {
      //这里是router
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: center;
  }
</style>