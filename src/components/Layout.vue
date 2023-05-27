<template>
  <div>
    <header>
      <h1>My Blog</h1>
      <nav>
        <router-link to="/">Home</router-link>
      </nav>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

header h1 {
  color: #333;
  font-size: 2em;
}

nav {
  margin: 15px 0;
}

nav a {
  text-decoration: none;
  color: #333;
  margin-right: 15px;
  font-size: 1.2em;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
