<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <img src="/public/images/beatboxd.png" alt="">
                <a href="/" class="navbar-brand-item">Beatboxd</a>
            </div>
            <ul class="navbar-nav">
                <li><a href="/albums">Albums</a></li>
                <li><a href="/reviews">Reviews</a></li>
                <li><a href="/login"></a>Login</li>
                <li><a href="/register">Sign Up</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
    }
</script>

<style scoped>
    .navbar {
        color: gray;
        padding: 1rem;
    }

    .container{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .navbar-brand {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navbar-brand .navbar-brand-item{
        font-size: 2.2rem;
        color: white;
        text-decoration: none;
        font-family: Manrope-Extra-Bold;
    }

    .navbar-brand img{
        width: auto;
        height: 5rem;
    }

    .navbar-nav {
        list-style: none;
        display: flex;
        gap: 1rem;
    }
    .navbar-nav li a {
        text-decoration: none;
    }
</style>