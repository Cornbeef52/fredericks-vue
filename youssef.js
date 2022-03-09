const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The Final Empire',
      author: 'Thomas Fredericks',
      age: 18
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
  }
})

app.mount('#app')
