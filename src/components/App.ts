import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div>
        <h1>Welcome to Vite.js Frontend App</h1>
        <p>This is a simple frontend application using Vite.js.</p>
      </div>
    );
  },
});