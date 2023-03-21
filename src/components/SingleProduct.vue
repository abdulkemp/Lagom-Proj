<template>
  <div>
    <!--Modal-->
    <div
      class="modal fade"
      id="exampleModalFullscreen"
      tabindex="-1"
      aria-labelledby="exampleModalFullscreenLabel"
      aria-hidden="true"
      style="display: none"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title h4 center" id="exampleModalFullscreenLabel">
              Single Product View
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row1">
              <div class="col-md-auto">
                <div class="conta">
                  <div class="imag d">
                    <img
                      src="https://i.postimg.cc/3Jkv9QPN/photo-1493612276216-ee3925520721.jpg"
                      class="card-img-top"
                      alt="..."
                      style="width: 20rem; height: 30rem"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="row2">
              <div class="col-md-auto c2">
                <div class="cont1">
                  <div class="para">
                    <div class="desc">
                      <h1>Product Description</h1>
                    </div>
                    <p>
                      this is the Description Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Eaque, reprehenderit, qui
                      porro et doloribus voluptate est illo eligendi beatae,
                      nesciunt fugit architecto cumque distinctio sed eveniet
                      repudiandae animi autem accusamus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-success">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProduct",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* .imag {
  height: 30rem;
  max-height: 100%;
} */
.d {
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1{
    font-size: 30px;
}

.desc{
    display: flex;
    justify-content: center;
    align-items: center;
}

.h4 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.modal-body {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
}
.row1 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.row2 {
  width: 100%;
  /* height: 70rem;*/
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
}
.para {
  max-width: 100%;
  width: 350px;
  padding: 0 10px;
  justify-content: space-around;
  flex-wrap: wrap;
}
.para p {
  letter-spacing: 1px;
  font-size: 16px;
  color: black;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.c2{
    border: 0px 0px 0px 1px solid black;
}
.conta {
  /* width: 35rem; */
  height: 20rem;
  border: 6px solid black;
  max-width: 100%;
}
.cont1 {
  /* width: 35rem; */
  height: 20rem;
  border: 6px solid black;
  max-width: 100%;
}
</style>