<template>
  <div>
    <div class="everything">
      <div class="login">
        <div class="front">
            <img src="https://i.postimg.cc/fT2ShMJR/23edd32f3158992ec50d955d6b39157a.jpg" alt="">
            </div>
        <div class="form">
          <div class="log">
            <form action="" class="loginform">
              <input type="text" placeholder="Please insert your email." />
              <input type="text" placeholder="Please insert your password." />
              <button class="btn btn-primary">Login</button>
              <router-link to="">Forget Password</router-link>
              <router-link to="/register">Create Account</router-link>
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

.everything{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.login{
    position: relative;
    width: 300px;
    height: 400px;
    background-color: aqua;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    transition: 1s;
}

.form{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
}

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
    width: 100%;
    height: 100%;
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
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform-style: preserve-3d;
}

</style>


