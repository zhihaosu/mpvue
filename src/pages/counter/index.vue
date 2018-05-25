<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import store from '../../store'

  export default {
    store,
    computed: {
      ...mapState('appState', ['count'])
    },
    methods: {
      ...mapMutations('appState', ['increment', 'decrement'])
    },
    mounted() {
      console.log(this.$store)
    }
  }
</script>

<style>
  .counter-warp {
    text-align: center;
    margin-top: 100px;
  }

  .home {
    display: inline-block;
    margin: 100px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
</style>
