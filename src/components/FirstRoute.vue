<template>
   <div>
     <h1>{{ msg }}</h1>
       Hello there {{ $route.params.name }}
   </div>
</template>

<script>
  export default {
    name: 'firstroute',
    data () {
      return {
      msg: 'FirstRoute'
    }
  }
}
</script>