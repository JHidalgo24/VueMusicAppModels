// adds Vuetify functionality to your Vue app
Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data:function () {
        return{
            title:'Playlisty',
            songList:[{songTitle:'Take on Me',artist:'a-ha',length:'3:45',genre:'Rock',favorite:true},
                {songTitle:'Be Alright',artist:'Zapp',length:'7:52',genre:'R&B',favorite:true},
                {songTitle:'This Must Be the Place',artist:'Talking Heads',length:'4:56',genre:'Pop',favorite:false},
                {songTitle:'Oogum Boogum Song',artist:'Brenton Wood',length:'3:06',genre:'Soul',favorite:false},
                {songTitle:'You`re so Good to Me',artist:'The Beach Boys',length:'2:16',genre:'Surf',favorite:false},
                {songTitle:'Crazy Love',artist:'Van Morrison',length:'2:35',genre:'Pop',favorite:false},
                {songTitle:'All Right',artist:'Christopher Cross',length:'4:13',genre:'Pop',favorite:false}],
            songItem:{songTitle:'',artist:'',length:'',genre:'',favorite:false}
        }

    },
    methods:{
        addSong:function(){
            console.log('Works!')
            this.songList.push(this.songItem);
            this.songItem = {songTitle:'',artist:'',length:'',genre:'',favorite:false}


        }

    }
})