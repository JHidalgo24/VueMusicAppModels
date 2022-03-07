// adds Vuetify functionality to your Vue app
Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data:function () {
        return{
            title:'Re-chord',
            cartVisibility:false,
            wishVisibility:false
        }

    },
})