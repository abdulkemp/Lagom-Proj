<template>
  <div>
    <div class="container">
      <div class="holder">
        <img src="https://i.postimg.cc/59BRtgd5/lagom-high-resolution-logo-black-on-transparent-background.png" class="logo" alt="">
      </div>
    </div>
    <div class="caro">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://i.postimg.cc/RCPKb5xb/b599128a16c6fe73af909cfa8ff12b98.jpg"
              class="d-block w-100"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://i.postimg.cc/GmTFyMNg/2021737b0a87fa1cca1e866ca7b50926.jpg"
              class="d-block w-100"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://i.postimg.cc/7ZjNtv0y/08cd159fcd0a2fd9bdef904b3db9e7cd.jpg"
              class="d-block w-100"
              alt=""
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" style="background-color:black;" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" style="background-color:black" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >
.container {
  border: 1px solid black;
  /* margin-left: 5rem;
  margin-right: 5rem; */
}
.caro {
  /* border: 1px solid black; */
  
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel-inner {
  width: 20rem;
  height: 20rem;
  border: 1px solid black;
}

button{
  background: black;
}
.logo{
  width: 30rem;
}
</style>