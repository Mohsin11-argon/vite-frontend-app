import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    return () => 
      h('div', [
        h('h1', 'Welcome to Vite.js Frontend App'),
        h('p', 'This is a simple frontend application using Vite.js.')
      ]);
  },
});