<template>
  <div id="app" class="container">
    <div id="wrapper">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div id="content-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from "./components/Sidebar";

export default {
  name: 'app',
  components: {
      Sidebar,
    Navbar
  }
}
</script>

<style>
  @import './assets/styles/fontawesome/css/all.min.css';

  body {
    line-height: 1.5;
    padding-top: 60px;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  #wrapper {
    display: flex;
  }

  #wrapper #content-wrapper {
    overflow-x: hidden;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 80px;
  }

  .text-gray-800 {
    color: #5a5c69!important;
  }

  .btn.btn-bold {
    font-weight: 600;
  }

  .btn.btn-upper {
    text-transform: uppercase;
  }

  .btn.btn-brand {
    color: #fff;
    background-color: #5d78ff;
    border-color: #5d78ff;
  }

  .container .breadcrumb {
    background-color: transparent;
    border: 1px solid rgba(0,0,0,.125);
  }

  .card .card-header {
    background-color: transparent;
    font-weight: 100;
    border-bottom: none;
    font-size: 1.2rem;
  }

  .card-body img {
    width: 100%;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    border: none;
  }

  .card-footer i {
    font-size: 1.4em;
    padding-right: 1.3em;
  }

  .card-footer .fa-heart {
    color: red;
  }

  .card-footer .fa-eye {
    color: gray;
  }


</style>
