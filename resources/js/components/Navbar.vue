<template>
    <nav class="navbar">
        <div class="container">
            <a href="/" class="navbar-brand">Beatboxd</a>
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
        background-color: #333;
        color: #fff;
        padding: 1rem;
    }
    .navbar-brand {
        font-size: 1.5rem;
        color: #fff;
        text-decoration: none;
    }
    .navbar-nav {
        list-style: none;
        display: flex;
        gap: 1rem;
    }
    .navbar-nav li a {
        color: #fff;
        text-decoration: none;
    }
</style>