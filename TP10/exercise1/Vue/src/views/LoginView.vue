
<template>
  <div class="wrappers">
    <div>
      <img src="@/assets/avatar.png" alt="avatar" />
      <div class="input">
        <label for="email">Email</label><br />
        <input id="email" type="text" v-model="email" placeholder="Enter email" />
      </div>
      <div class="input">
        <label for="password">Password</label><br />
        <input id="password" type="text" v-model="password" placeholder="Enter password" />
      </div>
      <!-- <div class="forget-password">
        <a href="">Forget Password?</a>
      </div> -->
      <div class="input">
        <button id="login" v-on:click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    login(){
      fetch('http://localhost:3001/login', {
        method: 'POST',
        credentials: "include",
        body: JSON.stringify({
          "email":this.email, 
          "password":this.password
        })
      }).then(res => {
        return res.json();
      }).then((data) => {
        // console.log(data);
        if(data.success == true){
          this.$router.push({name : 'home'})
        }
      })
    }
  }
}
</script>

<style>
.wrappers{
    display: block;
    width: 500px;
    border: 1px solid gray;
    padding: 20px;
    text-align: center;
}
.wrappers img{
    width: 200px;
    border-radius: 100%;
}
.forget-password{
  display: flex;
  justify-content: right;
  text-decoration: underline;
}
.input{
    
    text-align: left;
}
.input input{
    width: 100%;
    height: 50px;
    padding-left: 10px;
    margin: 10px 10px 10px 0px;
}
.input button{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    border: 0px solid black;
    color: white;
    background-color: green;
}
.content p{
    margin-top: 10px;
}
.content button{
    margin-left: 10px;
    width: 90px;
    height: 25px;
    color: white;
    background-color: gray;
    border: 0px;
    border-radius: 2px;
    margin-top: 5px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>