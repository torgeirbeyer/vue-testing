<template>
  <div>
    <router-link to='/'>
      <h1>{{ header }}</h1>
    </router-link>
  </div>
</template>


<script>
export default {
  name: 'PageTwo',
  data () {
    return {
      header: 'Welcome'
    }
  }
}
</script>

<style scoped>
* {
  border: 1px solid black;
}

div {
  display: flex;
  justify-content: center;

}

a {
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in-out 0s;
}
a:hover {
  color: red;
  /* transform: rotate(360deg); */
  transition: all 0.3s ease-in-out 0s;}
</style>


