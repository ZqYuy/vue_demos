<template>
<div class="container">
<h1>购物车管理</h1>
<table class="table table-hover">
<tr>
  <td>商品编号</td>
  <td>商品名称</td>
  <td>商品库存</td>
  <td>商品价格</td>
  <td>该商品总价值</td>
  <td>操&nbsp;作</td>
</tr>
<tr v-for="g in goods" :key="g.id">
  <td>{{g.id}}</td>
  <td>{{g.name}}</td>
  <td>
    <b-button variant="info" @click="g.count++">+</b-button>
    <input type="number" v-model="g.count" min="1" @blur="checkCountType(g)">
    <b-button variant="info" @click="checkCount(g)" >-</b-button>
  </td>
  <td>
    <input type="text" v-model="g.price" @input='checkGoodPrice(g)'>
  </td>
  <td>{{g.count*g.price}}</td>
  <td>
    <b-button variant="danger" @click="delOne(g)">下架商品</b-button>
    <b-button variant="success">修改商品</b-button>
  </td>
</tr>
<tr>
  <td>上架商品的总数量：</td>
  <td>{{Counts}}</td>
  <td>上架商品的总价格：</td>
  <td>{{sumPrices}}</td>
  <td>
    <b-button b-button variant="danger" @click="delAll">删除所有商品</b-button>
  </td>
  <td>
    <b-button b-button variant="success" @click="AddOne">添加</b-button>
  </td>
</tr>
</table>
<div id="addDiv" v-show="isAdd">
  <h3>添加一个商品</h3>
  <table>
    <tr>
      <td>商品编号</td>
      <td><input type="text"></td>
    </tr>
    <tr>
      <td>商品名称</td>
      <td><input type="text"></td>
    </tr>
    <tr>
      <td>商品库存</td>
      <td><input type="text"></td>
    </tr>
    <tr>
      <td>商品价格</td>
      <td><input type="text"></td>
    </tr>
    <tr>
      <td></td>
      <td>
        <button>添加商品</button>
        <button>取消</button>
      </td>
    </tr>
  </table>
</div>
<!-- <button class="btn btn-success" @click="jquery_demo">success</button> -->
<!-- <button class="btn btn-success">success</button>
<button class="btn btn-danger">danger</button>
<button class="btn btn-dark">dark</button>
<hr>
<b-button variant="danger">danger</b-button>
<b-button variant="outline-primary">primary</b-button>
 -->
</div>
</template>

<script>
// import $ from 'jquery'

export default {
  data () {
    return {
      isAdd: false,
      goods: [
        {
          id: 1001,
          name: 'iphone5',
          count: 2,
          price: 3500
        },
        {
          id: 1002,
          name: 'ipad',
          count: 4,
          price: 2000
        },
        {
          id: 1003,
          name: 'lenovo',
          count: 2,
          price: 5500
        },
        {
          id: 1004,
          name: '零食',
          count: 10,
          price: 100
        }
      ]
    }
  },
  methods: {
    // jquery_demo: function () {
    //   $(function () {
    //     alert('ok')
    //   })
    // }
    checkNumber: function (gid) {
      alert(gid)
      for (let a = 0; a < this.goods.length; a++) {
        if (gid === this.goosd[a].id) {
          alert(this.goods[a].price)
          if (isNaN(this.goods[a].price)) {
            alert('请输入一个数字')
            this.goods[a].price = 0
            return
          }
        }
      }
    },
    checkGoodPrice: function (g) {
      var regu = /^[0-9]+\.?[0-9]*$/
      if (regu.test(g.price)) {
        alert('请输入正确的商品价格（由浮点数或整数构成）：')
        g.price = 100.00
      }
    },
    checkCountType: function (g) {
      if (!g.count) {
        alert('商品的数量必须的正整数')
        g.count = 1
      }
    },
    // 检测number大于1
    checkCount: function (g) {
      // alert(gid)
      if (g.count >= 2) {
        g.count = g.count - 1
      } else {
        alert('商品数量不能小于1')
      }
    },
    delAll: function () {
      if (confirm('确定删除所有数据吗？')) {
        this.goods = []
      }
    },
    delOne: function (g) {
      for (let t = 0; t < this.goods.length; t++) {
        // console.log(a)
        if (this.goods[t].id === g.id) {
          if (confirm('确定删除此条数据吗？')) {
            this.goods.splice(t, 1)
            return
          }
        }
      }
    },
    // 添加一个商品
    AddOne: function () {
      this.isAdd = true
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成 （访问DOM元素）
  mounted () {

  },
  computed: {
    // 计算商品总数量
    Counts: function () {
      let num = 0
      for (let a = 0; a < this.goods.length; a++) {
        num += parseInt(this.goods[a].count)
      }
      return num
    },
    // 计算商品总价格
    sumPrices: function () {
      let num = 0
      let price = 0
      let sum = 0
      for (let a = 0; a < this.goods.length; a++) {
        num = parseInt(this.goods[a].count)
        price = parseFloat(this.goods[a].price)
        sum += num * price
      }
      return sum
    }
  }
}
</script>
<style scoped>
/* @import url(): 引入css类 */
/* tr:hover {
  background: #eeeeee;
} */
tr:not(:first-child):not(:last-child):hover{
  background: #eeeeee;
}
body table{
  font-size: 14px;
}
</style>
