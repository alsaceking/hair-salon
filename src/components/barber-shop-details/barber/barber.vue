<template>
  <div class="barber">
    <ul>
      <li>11</li>
      <li>222</li>
      <li>333</li>
      <li>444</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .barber {
    width: 100%;
    ul {
      overflow: hidden;
      li {
        width: 48%;
        height: 100px;
        margin-bottom: 10px;
        background: skyblue;
        float: left;
        &:nth-child(even) {
          margin-left: 4%;
        }
      }
    }
  }
</style>
