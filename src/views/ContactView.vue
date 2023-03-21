<template>
  <div class="contact">
    <NavBar />
    <div class="con">
      <div class="hold">
        <div class="name">
          <h1>Contact Us</h1>
        </div>
        <div class="fo">
          <div class="co">
            <form action="https://formspree.io/f/xrgvgwee" method="POST" class="row row-md-4 g-3">
              <div class="col-md-6">
                <label for="validationDefault01" class="form-label"
                  >First name</label
                >
                <input
                  type="name"
                  class="form-control"
                  id="validationDefault01"
                  placeholder="First Name"
                  name="name"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="validationDefault02" class="form-label"
                  >Last name</label
                >
                <input
                  type="name"
                  class="form-control"
                  id="validationDefault02"
                  placeholder="Last Name"
                  name="name"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="validationDefault03" class="form-label">City</label>
                <input
                  type="name"
                  class="form-control"
                  id="validationDefault03"
                  name="name"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="validationDefault05" class="form-label">Zip</label>
                <input
                  type="name"
                  class="form-control"
                  id="validationDefault05"
                  name="number"
                  required
                />
              </div>
              <div class="col-md-56">
                <label for="validationDefault04" class="form-label"
                  >Province</label
                >
                <select
                  class="form-select"
                  id="validationDefault04"
                  name="name"
                  required
                >
                  <option selected disabled value="">Choose...</option>
                  <option>Eastern Cape</option>
                  <option>Free State</option>
                  <option>Gauteng</option>
                  <option>KwaZulu-Natal</option>
                  <option>Limpopo</option>
                  <option>Mpumalanga</option>
                  <option>Northern Cape</option>
                  <option>North West</option>
                  <option>Western Cape</option>
                </select>
              </div>
              <div class="col-md-56">
                <label for="validationDefault04" class="form-label"
                  >Provide Feedback Below</label
                >
                <textarea
                  class="form-select"
                  id="validationDefault04"
                  name="text"
                  required
                >
                </textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "ContactView",
  components: {
    NavBar,
  },
};
</script>
  
  <style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 7rem;
}
.con {
  border: 1px solid black;
  width: 60rem;
  max-width: 80%;
  margin-bottom: 3rem;
}
.co{
  margin: 10px;
}
.name {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .hold{
  width: 60rem;
  border-radius: 10px;
  background-color: whitesmoke;
  box-shadow: 0px 0px 10px 5px rgb(25, 131, 150);
} */
/* .heading {
  font-size: 10vw;
  color: purple;
  text-shadow: 0 0 2px, 0 0 5px, 0 0 4px;
  margin-bottom: -5rem;
}


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25rem;
  margin-bottom: 5rem;
}
*/
/* .col-12 {
  margin-top: 3rem;
  margin-bottom: -5rem;
}  */
/* .di{
      min-height: 100vh;
  } */
</style> 
