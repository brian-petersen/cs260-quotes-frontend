<template>
  <div id="app">
    <b-navbar toggleable type="dark" variant="dark" fixed="top">
      <b-container>
        <b-navbar-brand>Quotes</b-navbar-brand>

        <b-navbar-toggle target="menu"></b-navbar-toggle>

        <b-collapse is-nav id="menu">
          <b-navbar-nav>
            <b-nav-item to="/home">Home</b-nav-item>
            <b-nav-item to="/quotes">Quotes</b-nav-item>
            <b-nav-item to="/submit">Submit</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <router-view />

    <b-container>
      <footer>
        <p>Site made by <a href="http://recruitbrian.com/">Brian Petersen</a></p>
        <p>Source code available on <a href="https://github.com/brian-petersen/cs260-quotes-frontend">GitHub</a></p>
      </footer>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
body {
  padding-top: 70px;

  h1 {
    margin-bottom: 1rem;
  }

  footer {
    text-align: center;
    margin: 50px 0;

    @media screen and (max-width: 576px) {
      margin: 25px 0;
    }

    p {
      margin: 0;
    }
  }
}
</style>
