const app = {
    data() {
        return {
            msg: 'Hello ,Vue3',
            shown: true,
            url: 'https://www.sit.kmutt.ac.th/',
            name: 'Jakkapong Parditthanachot',
            img: 'profile.jpg',
            wallpaper: 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        }
    },
}

var mountedApp = Vue.createApp(app).mount('#app')