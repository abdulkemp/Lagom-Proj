<template>
    <div>
        <NavBar />
        <Deliver />
        <div class="everything">
            <div class="heading">
                <h1>CART</h1>
            </div>
            <div class="cart">
                <div class="modal-body">
                    <div class="row1">
                        <div class="col-md-auto c1">
                            <div class="c">
                                <div class="ite">
                                    <img src="https://i.postimg.cc/W3kf7M7G/American-Express-Logo-700x394.png" alt="">
                                </div>
                            </div>
                            <div class="c0">
                                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                                    <p>
                                        The Old Skool, the Vans classic skate shoe and first to bare the iconic sidestripe,
                                        is a low top lace-up featuring sturdy canvas and suede uppers, re-enforced toe caps
                                        to withstand repeated wear, padded collars for support and flexibility, and
                                        signature rubber waffle outsoles.
                                    </p>
                                </div>
                                <div class="qua">
                                    <div class="dec">-</div>
                                    <input type="text" value="0" class="input-filled" name="qty" id="1">
                                    <div class="inc">+</div>
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

.input-filled {
    width: 10px;
}

.modal-body {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin-left: 7rem;
}

.heading {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: 30vh;
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

.desc .qua{
    display: list-item;
    justify-content: center;
    align-items: center;
}

.c1 {
    width: 100%;
    max-width: 100%;
    border: 1px solid black;
    background-color: grey;
    height: 100%;
}

.checkout {
    float: right;
}

.right button {
    background: none;
    border: none;
}

.row1 {
    margin-bottom: 3rem;
    height: 20rem;
    max-height: 100%;
}

.total {
    margin: 1rem;
    border-bottom: 1px solid rgba(63, 63, 63, 0.493);
}

.right ion-icon {
    width: 30px;
    height: 30px;
}

.c1 .c img {
    width: 20rem;
    height: 100%;
}


.qua {
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
}

.c0 p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    max-height: 100%;
    max-width: 100%;
    height: 30px;
    /* margin-bottom: 8rem; */
}

.c {
    width: 50%;
    float: left;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 6px solid black; */
    background-color: aqua;
    /* max-width: 100%; */
}

.c0 {
    width: 50%;
    float: right;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 6px solid black; */
    background-color: red;
    /* max-width: 100%; */
}

/* .desc {
    display: flex;
    justify-content: center;
    align-items: center;
} */

.cart {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
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
    height: 18rem;
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