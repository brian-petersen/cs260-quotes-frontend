<template>
  <b-container>
    <h1>Submit</h1>

    <b-form @submit="onSubmit">
      <b-form-group label="Your Email Address">
        <b-form-input v-model="email" type="email" required />
      </b-form-group>
      <b-form-group label="Your Name">
        <b-form-input v-model="name" type="text" required />
      </b-form-group>
      <b-form-group label="Quote Author">
        <b-form-input v-model="author" type="text" required />
      </b-form-group>
      <b-form-group label="Quote Text">
        <b-form-textarea v-model="text" rows="3" max-rows="6" required />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: 'Submit',
  data() {
    return {
      email: null,
      name: null,
      author: null,
      text: null
    };
  },
  methods: {
    onSubmit() {
      console.log('email', this.email);
      console.log('name', this.name);
      console.log('author', this.author);
      console.log('text', this.text);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
