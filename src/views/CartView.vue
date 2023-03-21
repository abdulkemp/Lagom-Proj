<template>
    <div>
        <NavBar />
        <Deliver />
        <div class="everything">
            <div class="cart">
                <div class="modal-body">
                    <div class="row1">
                        <div class="col-md-auto">
                            <div class="c">
                                <div class="imag d">
                                    <!-- <img src="https://i.postimg.cc/3Jkv9QPN/photo-1493612276216-ee3925520721.jpg"
                                    class="card-img-top" alt="..." style="width: 20rem; height: 30rem" /> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row2">
                        <div class="col-md-auto c2">
                            <div class="contai">
                                <div class="para">
                                    <div class="desc">
                                        Sub-Total
                                    </div>
                                    <div class="total">
                                        <h5>Total</h5>
                                    </div>
                                    <div class="add">
                                        <ul>
                                            <li>Sub-Total
                                                <span class="right"> R1232</span>
                                            </li>

                                            <li>Shipping Price
                                                <span class="right"> R1232</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                Delivery
                                                <span class="right">
                                                    <button type="button" data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal">
                                                        <ion-icon name="information-circle-outline"></ion-icon>
                                                    </button></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="accepted-card">
                                        <img class="acc-car" src="https://i.postimg.cc/MH0PCqNX/Untitled.png" alt="">
                                        <img class="acc-car" src="https://i.postimg.cc/3NQffdLP/Pay-Pal-Logo-500x281.png"
                                            alt="">
                                        <img class="acc-car" src="https://i.postimg.cc/2jnKb7ym/Mastercard-Symbol.jpg"
                                            alt="">
                                        <img class="acc-car"
                                            src="https://i.postimg.cc/W3kf7M7G/American-Express-Logo-700x394.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="checkout">
                                <button type="submit" class="btn btn-success">
                                    Proceed to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <Footer /> -->
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Deliver from '@/components/DeliveryInfo.vue'
export default {
    name: 'Cart',
    components: {
        NavBar,
        Footer,
        Deliver
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.modal-body {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
}

.add ul li {
    text-decoration: none;
}

.add {
    border-bottom: 1px solid rgba(63, 63, 63, 0.493);
}

.right {
    float: right;
    margin-right: 2rem;
}

.row1 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
}

.checkout {
    float: right;
}
.right button{
    background: none;
    border: none;
}

.total {
    margin: 1rem;
    border-bottom: 1px solid rgba(63, 63, 63, 0.493);
}

.right ion-icon{
    width: 30px;
    height: 30px;
}

.c {
    width: 30rem;
    height: 20rem;
    /* border: 6px solid black; */
    max-width: 100%;
}

.desc {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cart {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.row2 {
    width: 100%;
    /* height: 70rem;*/
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
}

.contai {
    /* width: 35rem; */
    height: 20rem;
    /* border: 1px solid black; */
    max-width: 100%;
}

.para {
    border: 3px solid black;
}

.accepted-card {
    display: flex;
    justify-content: center;
    align-items: center;
}

.accepted-card img {
    width: 90px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 2rem;
}

.acc-car {
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    margin-left: 5px;
}
</style>