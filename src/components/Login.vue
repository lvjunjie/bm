
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

<template>

  <div class="login">
    <label>账号：</label>
    <input type="text" v-model="account" />
    <label>密码：</label>
    <input type="password" v-model="password" />

    <button  type="button" @click="submit()">提交</button>
    <button  type="button" @click="getData()">获取</button>
  </div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password:''
    }
  },
  methods:{
    submit:function () {
      this.$http.post('/api/login/createAccount',{
        account:this.account,
        password:this.password
      }).then(res=>{
          console.log(res)
      }).catch(res=>{
        console.log(res)
      })
    },
    getData:function () {

      this.$http.get('/api/login/getAccount',{

      }).then(res=>{
        console.log(res)
      }).catch(res=>{
        console.log(res)
      })
    }
  }
}
</script>


