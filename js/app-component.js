
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
        trigger(){
            this.$emit('trigger')
        }
    }
    ,

    template: `
<div  class="d-inline">
<v-row class="pa-0 ma-0">
    <v-col cols="auto">
        <h1 class="text-center title">Add Song</h1>
        <add-item @trigger="trigger" v-model:songs="songs" v-bind:songs="songs"  v-model:songItem="songitem" v-bind:song-item="songitem"></add-item>

    </v-col>
    <v-col>
        <h1 class="text-center title">Songs</h1>
            <span v-for="song in songs">
                <song v-model:songs="songs" v-bind:songs="songs"  v-bind:song="song"> </song>
            </span> 
    </v-col>
</v-row>
</div>
`
})

Vue.component('song', {
    props: {
        song: {
            type: Object,
            required: true
        },
        songs:{
            type:Array,
            required:true
        }
    },
    data:function () {
        return{
            albumSrc: ''
        }
    }
    ,
    methods:{
        favoriteChange(e) {



            for (let i = 0; i < this.songs.length; i++) {
                let songThingy = this.songs[i]
                if (songThingy === e){
                    this.songs.find(ev => ev === songThingy).favorite = e.favorite
                }

            }

        },
        removeSong(){

        let x = this.songs.indexOf(this.song)
        this.songs.splice(x,1)


        },
        SaveSong(error,response){
            if (error === null){
            this.albumSrc = response
            }
            else
                this.albumSrc = 'https://upload.wikimedia.org/wikipedia/commons/3/3c/No-album-art.png'

        }



    },
    created: function(){
          albumArt(this.song.artist,{album:this.song.album},this.SaveSong)

      }
    ,
    template: `
    <v-card
    class="d-inline-block ma-3"
    min-width="344"
    max-width="344"
    outlined>
    
    <v-img
      height="250"
      :src="this.albumSrc"
    ></v-img>
    
    <v-list-item  three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h6 mb-1">
          {{song.songTitle}}
        </v-list-item-title>
        <v-list-item-subtitle>Artist: {{song.artist}}</v-list-item-subtitle>
        <v-list-item-subtitle>Album: {{song.album}}</v-list-item-subtitle>
        <v-list-item-subtitle>Time: {{song.length}}</v-list-item-subtitle>
        <v-list-item-subtitle>Genre:  {{song.genre}}</v-list-item-subtitle>
        
        <v-card-actions>
      
        <favorite-btn @change-btn="favoriteChange" v-model:song="song" v-bind:song="song"></favorite-btn>
        <v-btn v-on:click="removeSong" class="red">Remove</v-btn>
        
        </v-card-actions>
      </v-list-item-content>
      
</v-list-item-avatar>
    </v-list-item>

  </v-card> `
})

Vue.component('favorite-btn', {
    props:{
        song:{
            type:Object,
            required:true
        }
    },
    data: function () {
        return {
            favorite: this.song.favorite
        }
    }, methods: {
        favoriteChange() {
            this.favorite = !this.favorite
            this.$emit('change-btn',this.song)
            this.song.favorite = this.favorite
        }
    }, template: `<v-btn v-on:click="favoriteChange" class="green" >
      <v-icon v-show="!favorite" large color="white"> mdi-star </v-icon>
      <v-icon v-show="favorite" large color="yellow"> mdi-star </v-icon>
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
        trigger(){
            this.$emit('trigger')
        }
    }

    , template: `
<v-card
    class="ma-3 d-inline-block"
   min-width="344"
    max-width="344"
    outlined>
    
    <v-list-item>
    
    <v-list-item-content>
        
        <v-form ref="form" lazy-validation  @submit.prevent="trigger" >
        <v-text-field #validate v-model="songItem.songTitle" label="Title" required></v-text-field>
        <v-text-field v-model="songItem.artist" label="Artist" required></v-text-field>
        <v-text-field v-model="songItem.album" label="Album" required></v-text-field>
        <v-text-field v-model="songItem.length" label="Length" required></v-text-field>
        <v-text-field v-model="songItem.genre" label="Genre " required></v-text-field>
        <v-checkbox color="green" v-model="songItem.favorite"  label="Favorite"></v-checkbox>
        <v-btn type="submit">Add</v-btn>
        </v-form>
    </v-list-item-content>
    </v-list-item>
  </v-card> `
})
