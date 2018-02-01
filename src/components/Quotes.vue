<template>
  <b-container>
    <h1>Quotes</h1>

    <div class="quotes">
      <div class="quote" v-for="quote in quotes" :key="quote.id">
        <b-card>
        <p class="text">{{ quote.text }}</p>
        <p class="author" v-if="quote.author !== null">{{ quote.author }}</p>
        <p class="author" v-else>Unknown</p>
        <p class="submitted">{{ quote.submitted | formatDate }}</p>
        </b-card>
      </div>
    </div>
  </b-container>
</template>

<script>
import { format } from 'date-fns';

export default {
  name: 'Quotes',
  data() {
    return {
      quotes: [
        {
          id: 0,
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum modi beatae inventore magnam, quibusdam nobis repellendus non, in soluta aperiam quos veniam, obcaecati autem similique nihil perspiciatis. Ex, consequatur.',
          author: null,
          submitted: '2018-01-31T05:22:41.852Z',
        },
        {
          id: 1,
          text: 'To be, or not to be, that is the question: Whether \'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles And by opposing end them.',
          author: 'My Boy Will',
          submitted: '2018-01-31T05:22:41.852Z',
        },
        {
          id: 0,
          text: 'Lorem ipsum, d. Reprehenderit nostrum modi beatae inventore magnam, quibusdam nobis repellendus non, in soluta aperiam quos veniam, obcaecati autem similique nihil perspiciatis. Ex, consequatur.',
          author: null,
          submitted: '2018-01-31T05:22:41.852Z',
        },
      ]
    }
  },
  filters: {
    formatDate(value) {
      return format(value, 'M/D/YYYY');
    }
  }
}
</script>

<style lang="scss" scoped>
.quotes {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  .quote {
    .author {
      font-style: italic;
      float: left;

      &::before {
        content: '- ';
      }
    }

    .submitted {
      float: right;
    }

    &::after {
      content: '';
      display: table;
      clear: both;
    }
  }
}
</style>
