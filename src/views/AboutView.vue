<template>
  <div class="every">
    <NavBar />
  <div>
      <div class="about">
        <div class="info">
          <img src="https://i.postimg.cc/P5R6CrKR/IMG-20230311-175710-1.jpg" style="border-radius: 30% 70% 45% 55% / 30% 30% 70% 70%; margin-top: 2rem; margin-bottom: 2rem;" alt="" srcset="">
          <div class="para">
            <h1>Hi I am Abdul-Azeez Kemp</h1>
            <h5>Founder of Lagom</h5>
            <p>Lagom is a clothing ecommerce platform that offers a range of minimalist and sustainable fashion options
              for customers. The name Lagom is derived from a Swedish word that roughly translates to "just the right
              amount" or "not too much, not too little," which reflects the brand's philosophy of offering clothing that
              is neither overly complex nor too simplistic. <br>
              Lagom's clothing collection includes a variety of basics, such as t-shirts, sweaters, and pants, as well as
              more unique pieces, such as jumpsuits and wrap dresses. The brand's aesthetic is characterized by neutral
              colors, minimalist designs, and high-quality materials, such as organic cotton and recycled polyester. <br>
              Customers appreciate Lagom's aesthetic for several reasons. First, the brand's clothing is versatile and
              easy to mix and match with other pieces, making it a great choice for building a minimalist wardrobe.
              Second, Lagom's commitment to sustainability and ethical production resonates with many consumers who are
              increasingly concerned about the environmental impact of fast fashion. Finally, the brand's focus on quality
              and durability ensures that customers get a lot of wear out of their Lagom clothing, making it a smart
              investment in the long run.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: 'About',
  components: {NavBar,Footer}
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.every {
  background: rgb(43, 43, 43);
}

.about {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about .info img {
  width: 600px;
  height: auto;
  max-width: 100%;
}
.para {
  max-width: 100%;
  width: 550px;
  padding: 0 10px;
}
.info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 1280px;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 3rem;
}
.para h1 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  color: red;
  font-size: 42px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.para h5 {
  margin-bottom: 1rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 2rem;
  color: cyan;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.para p {
  letter-spacing: 1px;
  font-size: 16px;
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
@media screen and (max-width: 650px) {
  .about .info img {
    margin-bottom: 35px
  }
  .para h1 {
    font-size: 25px;
    margin-bottom: 1rem;
  }
}
</style>