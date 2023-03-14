<template>
  <div>
    <nav class="navbar fixed-top">
      <div class="image">
        <img
          src="https://i.postimg.cc/26C74zH7/lagom-high-resolution-logo-black-on-transparent-background.png"
          class="lagom"
          alt=""
          srcset=""
        />
      </div>
      <div>
        <ul class="cont">
          <button class="buttons">
            <router-link to="/" class="nav-link">Home</router-link>
          </button>
          <button class="buttons">
            <router-link class="nav-link" to="/about">About</router-link>
          </button>
          <button class="buttons">
            <router-link class="nav-link" to="/admin">Admin</router-link>
          </button>
          <button class="buttons">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </button>
          <button class="buttons">
            <router-link class="nav-link" to="/login"
              >Login/Register</router-link
            >
          </button>
        </ul>
      </div>
    </nav>
  </div>
</template>
 
 <script>
export default {};
</script>
 
 <style>
.lagom {
  height: 2rem;
  padding-left: 3rem;
}

/* .bt{
  max-width: 100%;
} */
.cont {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-right: 7rem;
  margin-top: 1rem;
}

.nav-link {
  text-decoration: none;
  color: black;
}

.buttons{
  width: 8rem;
  text-align: center;
  background-color: transparent;
  border: transparent;
}

.buttons:hover{
  background-color: black;
  color: white;
  border:1px solid white;
  /* transition-delay: 1s; */
}

</style> 

