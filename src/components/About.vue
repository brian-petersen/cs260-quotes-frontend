<template>
  <b-container>
    <h1>About</h1>
    <p>
      This website is dedicated to helping share insipirational
      quotes that get people pumped about life. It started back
      in highschool when I started collecting my favorite quotes.
      Back then I didn't know much about websites though so I
      kept them in a simple journal. As the collection got larger,
      the more of a hastle it was to keep going.
    </p>
    <p>
      I eventually got inspired and made a simple website that
      parsed the quotes I had collected through a JSON file hosted
      on Dropbox. I thought it was pretty cool (and it was), but I
      wanted it to be a little more automated. After that I made
      a few different versions but each was pretty ugly and wasn't worth
      using. Also, I didn't allow submissions just from random people.
    </p>
    <p>
      I wanted to make it so anyone could share their favorite quotes.
      That's why I've made it so people can submit quotes to this website.
      I approve them to make sure their isn't anything too crazy. But then
      I'll publish them here to that everyone can enjoy the awesomeness
      that is community love and support.
    </p>
    <p>
      Enjoy the website!
    </p>
    <b-img src="../assets/me.jpg" fluid center />
  </b-container>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
img {
  max-width: 300px;
}
</style>
