// adds Vuetify functionality to your Vue app
Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data:function () {
        return{
            title:'Playlisty',
            songList:[{songTitle:'Take on Me',albumImg:'',album:'Hunting High and Low',artist:'a-ha',length:'3:45',genre:'Rock',favorite:true},
                {songTitle:'Be Alright',albumImg:'',artist:'Zapp',album:'Zapp',length:'7:52',genre:'R&B',favorite:true},
                {songTitle:'This Must Be the Place',albumImg:'',album:'Speaking in Tongues',artist:'Talking Heads',length:'4:56',genre:'Pop',favorite:false},
                {songTitle:'Oogum Boogum Song',albumImg:'',album:'Oogum Boogum',artist:'Brenton Wood',length:'3:06',genre:'Soul',favorite:false},
                {songTitle:'You`re so Good to Me',albumImg:'',album:'Summer Days',artist:'The Beach Boys',length:'2:16',genre:'Surf',favorite:false},
                {songTitle:'Crazy Love',albumImg:'',album:'Moondance',artist:'Van Morrison',length:'2:35',genre:'Pop',favorite:false},
                {songTitle:'All Right',albumImg:'',album:'Another Page',artist:'Christopher Cross',length:'4:13',genre:'Pop',favorite:false}],
            songItem:{songTitle:'',albumImg:'',album:'',artist:'',length:'',genre:'',favorite:false}
        }

    },
    methods:{
        addSong:function(){
            console.log('Works!')
            this.songList.push(this.songItem);
            this.songItem = {songTitle:'',artist:'',length:'',genre:'',favorite:false}

            localStorage.setItem('songs',JSON.stringify(this.songList))

        }

    },
    created:function () {
        let data = localStorage.getItem('songs');
        let parsedData = JSON.parse(data);
        console.log(data)
        if (data === null){
            localStorage.setItem('songs',JSON.stringify(this.songList))
        }
        else if(parsedData !== this.songList){
            this.songList = parsedData;
        }
        else{
            this.songList = JSON.parse('songs');
        }

    }
})