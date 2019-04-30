<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://wallpaperaccess.com/full/281104.jpg'
          },
          {
            src: 'https://wallpapercave.com/wp/wp1904218.jpg'
          },
          {
            src: 'https://wallpaperaccess.com/full/789344.jpg'
          },
          {
            src: 'https://images4.alphacoders.com/632/thumb-1920-632661.jpg'
          }
        ]
      }
    }
  }
</script>   

<style>

</style>
