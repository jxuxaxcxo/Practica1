<template>
    <div class="product-display">

        <div class  = "shoes">
            <button id= "afOne" color="red" @click="selectProduct('AF1')">Air Force 1</button>
            <button id = "jordan1" color="purple" @click="selectProduct('Jordan1')" >Air Jordan 1 </button>
            <v-btn id = "airmax" color="green" @click="selectProduct('AirMax')">Air Max 97</v-btn>
            <v-btn id = "running" color="grey" @click="selectProduct('Running')" >Running</v-btn>
        </div>

        <img id="imagen" :src="getProductUrl(img)" alt="">
        
        <button id= "Inspect" color="red" @click="getInfo()" >Inspect</button>
        <h3 id="text">{{about}}</h3>;

        <div class="container">
 
        </div>

    </div>

   
</template>
<script>
export default {

    data() {
        return {
            
            img: 'default',
            about: ''
        
        }
    },
    methods: {
         getProductUrl(name) {
            if(name=='default'){
                return 'https://i.pinimg.com/736x/c4/ce/87/c4ce878870d075fcda7b6a40114f1757--shoe-outline-shoe-template-printable.jpg';
            }
            if(name == 'AF1'){
                return 'https://stockx.imgix.net/Nike-Air-Force-1-Low-All-Over-Logo-Red.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256';
           }
            if(name == 'Jordan1'){
                return 'https://stockx.imgix.net/Air-Jordan-1-Retro-High-Origin-Story-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1544632276';
            }
            if(name == 'AirMax'){
                return 'https://stockx.imgix.net/Nike-Air-Max-97-Have-a-Nike-Day-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1551456660';
            }
            if(name == 'Running'){
                return 'https://dsw.scene7.com/is/image/DSWShoes/420413_001_ss_01?$pdp-image$';
            }  
},

        getInfo(){
            if(this.img=='default')
                this.about='Select Shoe'

            if(this.img=='AF1') 
                this.about = 'The Air Force 1 was produced in 1982 and discontinued in 1984. It was re-released in 1986 with the modern italic Nike logo with a Swoosh on the bottom on the back of the shoe.'
    
            if(this.img=='Jordan1')
                this.about = 'When the Air Jordan 1 arrived in \'85, it was with rule-breaking bravado. The banned black-red colorway violated the league\'s uniform policy and resulted in a $5,000 fine from the NBA each time Michael Jordan wore sneakers.'

            if(this.img=='AirMax')
                this.about = 'The Air Max 97 was designed with the runner entirely in mind. The full-length visible air unit provided enough cushioning to comfort high-impact runners and keep casual wearers feeling light on their feet. The AM97 maintained the layered look from the AM95, but offered a sleeker take with its metallic coloring. The 3M stripe wrapping around the shoe gave the sneaker even more flash.'
   
            if(this.img=='Running')
                this.about = 'The company was founded on January 25, 1964, as Blue Ribbon Sports, by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971. The company takes its name from Nike, the Greek goddess of victory.'

   },
        selectProduct(imageName){
           this.img = imageName;
            this.about='';

        }

    }
}
</script>


<style scoped>


  img {
    border: 1px solid #d8d8d8;
    width: 50%;
    margin-top: -120px;    
    box-shadow: 0px .5px 1px #d8d8d8;
    margin-left: 48%;
  }

  .shoes{

      margin-top: 100px;
  }

  #Inspect{
      margin-top: 30px;
      margin-left: 900px;
  }
  </style>