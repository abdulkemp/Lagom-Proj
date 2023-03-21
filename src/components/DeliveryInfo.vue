<template>
    <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title h4 center" id="exampleModalLabel">Delivery Information</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>
                            The delivery process from an e-commerce website typically involves order confirmation,
                            processing time, shipping options, shipping partners, tracking information, and delivery. Order
                            confirmation includes details such as the product(s) ordered, shipping address, and estimated
                            delivery date. Processing time involves packaging the product and preparing it for shipment.
                            Shipping options include standard shipping, express shipping, or same-day delivery. Shipping
                            partners include UPS, FedEx, USPS, and DHL.

                            Tracking information allows customers to track the status of their package and get updates on
                            the estimated delivery date and time. Delivery involves leaving the package at the customer's
                            doorstep or another designated location. By providing clear information and options to
                            customers, e-commerce websites can ensure that their customers receive their products in a
                            timely and secure manner.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Deliver'
}
</script>

<style>
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
}</style>