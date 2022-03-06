// adds Vuetify functionality to your Vue app
Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data:function () {
        return{
            title:'Re-chord',
            songItem:{songTitle:'',albumImg:'',album:'',artist:'',length:'',genre:'',favorite:false},
            itemHidden: true,
            buttonLabel:'Favorite Songs'

        }

    },
    methods:{
        addSong:function(){

            this.songList.push(this.songItem);
            this.songItem = {songTitle:'',artist:'',length:'',genre:'',favorite:false}

            localStorage.setItem('songs',JSON.stringify(this.songList))

        },
        hideSongs(){
         this.itemHidden=!this.itemHidden
            if (this.itemHidden){
            this.buttonLabel = 'Favorite Songs'
            }
            else
                this.buttonLabel = 'All Songs'
        }


    },
    created:function () {

        let data = localStorage.getItem('songs');
        let parsedData = JSON.parse(data);

        if (data === null ){
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