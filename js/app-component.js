
Vue.component("song-card-list", {
    props: {
        songs: {
            type: Array, required: true
        },
        songitem: {
            type: Object, required: true
        },
        itemHidden:{
            type:Boolean,
            required:true
        }
    },
    data:function () {
        return{
            data_songs:this.songs,
            data_songitem:this.songitem,
            componentKey: 0
        }
    },
    methods:{
        trigger(){
            this.$emit('trigger')
        }
    },
    created:function () {
        this.songs.sort(function(a, b){return b.favorite - a.favorite});
    }
    ,

    template: `
<div  class="d-inline">
<v-row class="pa-0 ma-0">
    <v-col cols="auto">
        <h1 class="text-center title">Add Song</h1>
        <add-item @trigger="trigger" v-model:songs="songs" v-bind:songs="songs"  v-model:songItem="songitem" v-bind:song-item="songitem"></add-item>

    </v-col>
    <v-col v-show="itemHidden">
        <h1  class="text-center title">Songs</h1>
            <span v-for="(song,val) in songs">
                <song v-bind:itemHidden="itemHidden" v-model:itemHidden="itemHidden" v-model:songs="songs" v-bind:songs="songs"  v-bind:song="song"> </song>
            </span> 
    </v-col>
    <v-col v-show="!itemHidden">
        <h1 class="text-center title">Favorite Songs</h1>
             <span v-for="(song,val) in songs.filter(ev => ev.favorite === true)">
                <song v-bind:itemHidden="!itemHidden" v-model:itemHidden="!itemHidden"  v-model:songs="songs" v-bind:songs="songs"  v-bind:song="song"> </song>
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
        },
        itemHidden: {
            type:Boolean,
            required: true
        }
    },
    data:function(){
        return{
            showBtn:this.itemHidden
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
                localStorage.setItem('songs',JSON.stringify(this.songs))
            }
        },
        removeSong(){
        let x = this.songs.indexOf(this.song)
        this.songs.splice(x,1)

        localStorage.setItem('songs',JSON.stringify(this.songs))

        },
        SaveSong(error,response){
            this.song.albumImg = response;
        },
        getSongArt(){
            albumArt(this.song.artist,{album:this.song.album},this.SaveSong)
        }


    },
    created: function(){
        this.getSongArt()
      }
    ,
    template: `
    <v-card :id="this.song.songTitle"
    class="d-inline-block mb-4 ml-5"
    max-width="344"
    outlined>
    
    <v-img
      :id="song.albumSrc"
      min-width="300"
      max-width="344"
      :src="song.albumImg"
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
        <favorite-btn v-show="showBtn" @change-btn="favoriteChange" v-model:song="song" v-bind:song="song"></favorite-btn>
        <v-btn v-show="showBtn" v-on:click="removeSong" class="red"><v-icon>mdi-trash-can</v-icon></v-btn>
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
    min-width="300"
    max-width="344"
    outlined >
    
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
