<template>
  <div>
    <NavBar />
    <div class="containe">
      <div class="rows table-container">
        <div class="column">
          <div class="colu">
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Profile Img</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>id</td>
                  <td>firstname</td>
                  <td>lastname</td>
                  <td>email</td>
                  <td>http://</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
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
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.containe {
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flexbox;
  justify-content: center;
  align-items: center;
}

.column .colu .table {
  width: 100%;
  height: auto;
  max-width: 100%;
}

/* @media screen and (max-width: 650px) {
  .containe {
    width: 50%;
    max-width: 100%;
    height: 100%;
  }
} */
</style>