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
                {songTitle:'This Must Be the Place',artist:'Talking Heads',length:'4:56',genre:'Pop',favorite:false},
                {songTitle:'This Must Be the Place',artist:'Talking Heads',length:'4:56',genre:'Pop',favorite:false},
                {songTitle:'This Must Be the Place',artist:'Talking Heads',length:'4:56',genre:'Pop',favorite:false},
                {songTitle:'This Must Be the Place',artist:'Talking Heads',length:'4:56',genre:'Pop',favorite:false}],
            songItem:{songTitle:'',artist:'',length:'',genre:'',favorite:false}
        }

    },
    methods:{
        addTrash:function(){

            console.log("society")
            this.songList.push(this.songItem);
            songItem = {songTitle:'',artist:'',length:'',genre:'',favorite:false}
            console.log("Thing was added")

        }

    }
})