<script setup>
import { ref } from 'vue';

const isSidebarVisible = ref(false);

function toggleSidebar() {
    isSidebarVisible.value = !isSidebarVisible.value;
}
</script>

<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <img class="navbar-brand-item" src="/public/images/beatboxd.png" alt="">
            <a href="/" class="navbar-brand-item">Beatboxd</a>
        </div>
        <ul class="navbar-nav">
            <li class="navbar-menu"><a href="/albums">Albums</a></li>
            <li class="navbar-menu"><a href="/reviews">Reviews</a></li>
            <li class="navbar-menu"><a href="/login">Login</a></li>
            <li class="navbar-menu"><a href="/register">Sign Up</a></li>
            <li class="navbar-toggle" @click="toggleSidebar"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
        </ul>
    </nav>

    <transition name="slide">
        <nav class="sidebar" v-if="isSidebarVisible">
            <ul class="sidebar-nav">
                <li class="sidebar-menu" @click="toggleSidebar"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
                <li><a href="/albums">Albums</a></li>
                <li><a href="/reviews">Reviews</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Sign Up</a></li>
            </ul>
        </nav>
    </transition>
</template>

<style scoped>
    .navbar {
        background-color: #131018;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .navbar ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .navbar li {
        height: 50px;
    }

    .navbar .navbar-nav a {
        height: 100%;
        padding: 0 30px;
        text-decoration: none;
        color: rgb(255, 255, 255);
        font-family: Manrope-Regular;
        display: flex;
        align-items: center;
        transition: all .5s ease;
    }

    .navbar a:hover {
        color: #836FFF;
    }

    .navbar-brand {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navbar-brand .navbar-brand-item {
        font-size: 2.2rem;
        color: white;
        text-decoration: none;
        font-family: Manrope-Extra-Bold;
        margin: 5px;
        transition: color .5s ease;
    }

    .navbar-brand img {
        width: auto;
        height: 5rem;
        left: 10rem;
    }

    .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: #191620;
    box-shadow: -10px 0 10px rgba(0, 0, 0, 0.603);
    width: 250px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    }

    .sidebar ul{
        text-align: start;
        width: 100%;
        font-family: Manrope-Regular;
    }

    .sidebar li {
        padding: 10px;
        list-style: none;
        width: 100%;
    }

    .sidebar li:hover:nth-child(n+2) {
        background-color: #110f16;
    }

    .sidebar a {
        margin: 0 20px;
        color: white;
        text-decoration: none;
    }

    .sidebar .sidebar-menu {
        margin: 4px;
        text-align: right;
    }

    .slide-enter-from {
    transform: translateX(100%); /* Start from the right */
    }

    .slide-enter-to {
        transform: translateX(0); /* End at original position */
    }

    .slide-enter-active {
        transition: transform 0.3s ease; /* Adjust timing as needed */
    }

    .slide-leave-to {
    transform: translateX(100%); /* Start from the right */
    }

    .slide-leave-active {
        transition: transform .5s ease; /* Adjust timing as needed */
    }

    @media screen and (max-width: 992px) {
        .navbar-menu {
            display: none;
        }
    }

    @media screen and (min-width: 992px) {
        .navbar-toggle {
            display: none;
        }

        .sidebar {
            display: none;
        }
    }

    @media only screen and (min-width: 321px) and (max-width: 768px){
        .navbar {
            background-color: #131018;
            display: flex;
            align-items: center;
            justify-content:space-between;
        }

        .navbar-brand{
            margin-left: 30%;
        }

        .navbar-brand .navbar-brand-item {
            font-size: 1.8rem;
            margin: 10px 0px;
        }

        .navbar-brand img {
            height: 4rem;
        }

    }

</style>
