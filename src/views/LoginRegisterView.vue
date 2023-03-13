<template>
  <div class="body">
    <div class="everything">
      <div class="login">
        <div class="front">
            <img src="https://i.postimg.cc/fT2ShMJR/23edd32f3158992ec50d955d6b39157a.jpg" alt="">
            </div>
        <div class="form">
          <div class="log">
            <form action="" class="loginform">
                <h1>Welcome Back!</h1>
              <input type="text" placeholder="Insert your email." class="my-2" />
              <input type="password" placeholder="Insert your password." class="my-2"/>
              <button class="btn btn-primary">Login</button>
              <router-link class="link" to="">Forget Password</router-link>
              <router-link class="link" to="/register">Create Account</router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body{
    overflow: hidden;
}
/* 
.loginform h1{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
}

.loginform input{
    margin-bottom: 2rem;
    border: none;
    border-bottom: 1px solid black;
    background: rgba(128, 128, 128, 0.322);
} */

.loginform{
    display: contents;
    justify-content: center;
    align-items: center;
}

.everything{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.login{
    position: relative;
    width: 20rem;
    height: 25rem;
    background-color: aqua;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    transition: 1s;
}

.form{
    position: absolute;
    top: 0;
    left: 0;
    width: 20rem;
    height: 25rem;
    padding: 20px;
    /* display: flex;
    justify-content: center;
    align-content: center; */
}

/* button{
    margin-bottom:1rem
} */

.login .form .log{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}

.login:hover{
    transform: translateX(50%);
}

.login .front{
    position: relative;
    width: 20rem;
    height: 25rem;
    z-index: 1;
    transform-origin: left;
    transform-style: preserve-3d;
    transition: 1s;
}

.login:hover .front{
transform: rotateY(-180deg);
}

.login .front img{
    position: relative;
    top: 0;
    left: 0;
    width: 20rem;
    height: 25rem;
    object-fit: cover;
    transform-style: preserve-3d;
    /* visibility: hidden; */
}

@media screen and (min-width: 650px) {
    .login .front img  {
        width: 150px;
        height: 200px;
        /* visibility: hidden; */
  }    
  .login{
    width: 150px;
    height: 200px;
    /* visibility: hidden; */
  }

  input {
    width: 110px;
    position: relative;
    float: left;
    font-size: 10px;
  }
  button{
    width: 50px;
    position: relative;
    float: left;
    /* margin-top: 10px;
    margin-bottom: 3px; */
  }
  .btn{
    font-size: 10px;
  }
  .link{
    font-size: 10px;
    margin-top: 3px;
  }
  .loginform h1{
    font-size: 15px;
  }
/* 
  .loginform input{
    margin-top: 10px;
  } */
}
</style>


