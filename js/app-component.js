
const StoreComponent = Vue.component('store',{
    props:{
        cartview:{
            type:Boolean,
            required:true
        }
    },
    data(){
        return{
            songs:[
                new Cassette('Torches','Foster The People',38,'Rock',12.99),
                new Cassette('Super Model','Foster The People',48,'Rock',12.99),
                new Cassette('Xscape','Michael Jackson',73,'Pop',12.99),
                new CD('Purple Rain','Prince',43,'Rock','9',12.99),
                new CD("Who's Next",'The Who',153,'Rock','29',12.99),
                new Vinyl('30','Adele',58,'Pop',33,2,12.99),
            ],
            cartItems:[]
        }
    },
    methods:{
        addSong(e){

            if (!this.cartItems.find(ele => ele === e)){
                this.cartItems.push(e);

            }
        },
        showCart(){

        }
    }
    ,
    template:`
    
    <span>
    <div v-show="!cartview">
    <h1 class="text-center">
      Store
    </h1>
    <song-item  @add-song="addSong" v-for="song in songs"  :song="song" :key="song.album"></song-item> 
    </div>
    <div v-show="cartview">
    <h1 class="text-center">
      Cart
    </h1>
    <cart :cartItems="cartItems"></cart>
    </div>
    </span>
    `

})

const StoreItemComponent = Vue.component('SongItem',{
    props: {
        song: {
            type: Object,
            required: true
        }

    },
    methods:{
        emitSelf(){
            this.$emit('add-song',this.song)
        }

    }
    ,
    computed:{
        typeOfSong(){
            return this.song.constructor.name;
        }
    },

    template: `
    <component @add-song="emitSelf" style="display: inline-block"  :is="typeOfSong" :song="song">
    </component>
    `
})

const VinylComponent = Vue.component('Vinyl',{
    extends:StoreItemComponent,
    template:`
    <span class="Vinyl">         
  <v-card
    class="ma-2"
    min-width="344"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{song.constructor.name}} - {{song.rpm}} RPM - {{song.sides}} Sides
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{song.album}}
        </v-list-item-title>
        <v-list-item-subtitle>{{song.artist}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{song.length}} Mins</v-list-item-subtitle>
        <v-list-item-subtitle>Genre: {{song.genre}}</v-list-item-subtitle>
      </v-list-item-content>

      
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        type="button"
        @click="emitSelf"
      >
        Add to Cart
      </v-btn>
      <v-spacer></v-spacer>
      <p>Cost: {{song.price}}</p>
    </v-card-actions>
  </v-card>
    </span>
    `
})

const CDComponent = Vue.component('CD',{
    extends:StoreItemComponent,
    template:`
    <span class="CD">         
  <v-card
    class="ma-2"
    min-width="344"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{song.constructor.name}} - {{song.trackCount}} Tracks
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{song.album}}
        </v-list-item-title>
        <v-list-item-subtitle>{{song.artist}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{song.length}} Mins</v-list-item-subtitle>
        <v-list-item-subtitle>Genre: {{song.genre}}</v-list-item-subtitle>
      </v-list-item-content>

      
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        type="button"
        @click="emitSelf"
      >
        Add to Cart
      </v-btn>
      <v-spacer></v-spacer>
      <p>Cost: {{song.price}}</p>
    </v-card-actions>
  </v-card>
    </span>
    `
})

const CassetteComponent = Vue.component('Cassette',{
    extends:StoreItemComponent,
    template:`
    <span class="Cassette">         
  <v-card
    class="ma-2"
    min-width="344"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{song.constructor.name}}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{song.album}}
        </v-list-item-title>
        <v-list-item-subtitle>{{song.artist}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{song.length}} Mins</v-list-item-subtitle>
        <v-list-item-subtitle>Genre: {{song.genre}}</v-list-item-subtitle>
      </v-list-item-content>

      
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        type="button"
        @click="emitSelf"
      >
        Add to Cart
      </v-btn>
      <v-spacer></v-spacer>
      <p>Cost: {{song.price}}</p>
    </v-card-actions>
  </v-card>
    </span>
    `
})

const CartItemComponent = Vue.component('cart-item',{
    extends: StoreItemComponent,
    template:`
    <span>
  <v-card
    class="ma-2"
    min-width="344"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{song.constructor.name}}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{song.album}}
        </v-list-item-title>
        <v-list-item-subtitle>{{song.artist}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{song.genre}}</v-list-item-subtitle>
      </v-list-item-content>

      
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        color="red">
        Remove
      </v-btn>
      <v-spacer></v-spacer>
      <p>Cost: {{song.price}}</p>
    </v-card-actions>
  </v-card>
</span>
    `
})

const CartComponent = Vue.component('cart',{
    props:{
        cartItems:{
            type:Array,
            required: true
        }
    },
    data(){
        return{
            total:0
        }
    },
    methods:{
        totalSum(){
            for (const x in this.cartItems) {
                this.total += x.price
            }
            console.log(this.total)
        }
    }
    ,
    template:`
    <span>
    <cart-item v-on:change="totalSum" style="display: inline-block" v-for="song in cartItems" :key="song.album" :song="song">
    
    </cart-item>
    <h1 class="text-center">Total: {{total}}</h1>
    </span>
    `
})



