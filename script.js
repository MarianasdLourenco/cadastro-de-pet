new Vue({
  el: '#app',
  data: {
    text: '',
    tasks: []
  },
  methods: {
    onAdd() {
      this.tasks.push(this.text)
      this.text = ''
    },
    onClear() {
      this.text = ''
    }
  }
})
