Vue.component("song-card-list", {
    props: {
        songs: {
            type: Array, required: true
        },
        songitem: {
            type: Object, required: true
        }
    },
    data:function () {
        return{
            data_songs:this.songs,
            data_songitem:this.songitem
        }
    },
    methods:{

    }
    ,

    template: `
<div  class="d-inline">
<v-row no-gutters>
    <v-col cols="auto">
        <h1 class="text-center title">Add Song</h1>
        <add-item v-model:songs="songs" v-bind:songs="songs"  v-model:songItem="songitem" v-bind:song-item="songitem"></add-item>

    </v-col>
    <v-col>
        <h1 class="text-center title">Songs</h1>
            <span v-for="song in songs" :key="song.objectId">
                <song v-bind:song="song"> </song>
            </span> 
    </v-col>
</v-row>
</div>
`
})

Vue.component('song', {
    props: {
        song: {
            type: Object, required: true
        }
    }, watch: {
        favoriteEmit: function (val) {
            song.favorite = val;
        }
    }, template: `
    <v-card
    class="d-inline-block ma-3"
    max-width="344"
    outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h6 mb-1">
          {{song.songTitle}}
        </v-list-item-title>
        <v-list-item-subtitle>Artist: {{song.artist}}</v-list-item-subtitle>
        
        <v-list-item-subtitle>Time: {{song.length}}</v-list-item-subtitle>
        <v-list-item-subtitle>Genre:  {{song.genre}}</v-list-item-subtitle>
        
        <v-card-actions>
      
        <favorite-btn v-bind:favorite="song.favorite"></favorite-btn>
        </v-card-actions>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

  </v-card> `
})

Vue.component('favorite-btn', {
    data: function () {
        return {
            favorite: false
        }
    }, methods: {
        favoriteChange() {
            this.favorite = !this.favorite
            this.$emit('favoriteEmit', this.favorite)
            console.log("jinkies")
        }
    }, template: `<v-btn v-on:click="favoriteChange" class="green" >
      <v-icon v-show="favorite" large color="white"> mdi-star </v-icon>
      <v-icon v-show="!favorite" large color="yellow"> mdi-star </v-icon>
      </v-btn>`
})

Vue.component('add-item', {
    props: {
        songItem:{
            type:Object,
            required:true,
            default: ''
        },
        songs:{
            type:Array,
            required:true
        }
    },
    data:function () {
        return{
            data_songitem:this.songItem
        }
    },
    methods:{
        add:function(){
            console.log("society")
            let song = this.data_songitem;
            this.songs.push(song);
            this.songItem = {songTitle:'',artist:'',length:'',genre:'',favorite:false}
        }
    }

    , template: `
<v-card
    class="d-inline-block ma-3"
    max-width="344"
    outlined>
    <v-list-item three-line>
    
      <v-list-item-content>
        <v-list-item-title class="text-h6 mb-1">
         
        </v-list-item-title>
        
        <form @submit.prevent="add">
        <v-text-field
      v-model="songItem.songTitle"
      label="Title"
      required
    ></v-text-field>
        
        <v-text-field
      v-model="songItem.artist"
      label="Artist"
      
    ></v-text-field>
        <v-text-field
      v-model="songItem.length"
      
      label="Genre"
      
    ></v-text-field>
    <v-text-field
      v-model="songItem.genre"
      
      label="Length"
      
    ></v-text-field>
        
      
        <button type="submit">Add</button>
        </form>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      
    </v-list-item>

  </v-card> `
})