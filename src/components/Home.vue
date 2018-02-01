<template>
  <div id="home">
    <header>
      <h1>Quotes for All</h1>
    </header>

    <b-container>
      <b-card-group deck>
        <b-card title="Get Inspired">
          <p class="card-text">
            Read people's favorites quotes and get motivated.
          </p>
          <b-button to="/quotes" variant="primary">Read Quotes</b-button>
        </b-card>
        <b-card title="Share the Love">
          <p class="card-text">
            Share your favorite quotes and help build the community.
          </p>
          <b-button to="/submit" variant="primary">Share Quotes</b-button>
        </b-card>
        <b-card title="Learn More">
          <p class="card-text">
            Learn why we got started and what makes us tick.
          </p>
          <b-button to="/about" variant="primary">Learn More</b-button>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
#home {
  margin-top: -15px;

  header {
    height: 400px;
    background: url(../assets/home.jpg) no-repeat center;
    background-size: cover;
    text-align: center;
    padding: 0 30px;
    margin-bottom: 20px;

    h1 {
      color: #e9e7e7;
      text-shadow: 0 0 5px #000;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
