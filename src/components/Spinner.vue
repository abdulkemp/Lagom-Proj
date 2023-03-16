<template>
    <div class="body">
        <div class="spinner">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Spinner'
    }
</script>

<style >
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.body{
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
}

.spinner-hidden{
    opacity: 0;
    visibility: hidden;
}

.spinner{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.75s, visibility 0.75s;
}


.spinner::after{
    content: "";
    height: 100px;
    width: 100px;
    border: 6px solid;
    border-color: black transparent black transparent ;
    border-radius: 50%;
    animation: spin 0.75s ease infinite;
}

@keyframes spin {
    from{
        transform: rotate;
    }
    to{
        transform: rotate(360deg);
    }
}
</style>