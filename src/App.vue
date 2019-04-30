<template>
  <v-app>
    <v-content>
      <ToolBar/>
      <Carousel/>
      <ProductDisplay/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Carousel from './components/Carousel'
import ToolBar from './components/ToolBar'
import ProductDisplay from './components/ProductDisplay'



export default {
  name: 'App',
  components: {
    HelloWorld,
    Carousel,
    ToolBar,
    ProductDisplay
  },
  data () {
    return {
      //
    }
  }
}
</script>
