const app = {
    data() {
        return {
            msg: 'Hello Hercules'
        }
    },
    data() {
        return {
            lang: {
                support: 'การสนับสนุน',
                download: 'ดาวน์โหลด',
                singUP: 'ลงทะเบียน',
                logIn: 'เข้าสู่ระบบ',
                comment: 'เพลงและพอดแคสต์หลายล้านรายการ ไม่ต้องใช้บัตรเครดิต',
                midButton: 'ใช้ SPOTIFY FREE '
            }
        }
    },
    methods: {
        clickMe() {
            alert("กำลังเปืด https://www.spotify.com/th-th/");
        },
        eng() {
            this.lang = {
                support: 'Support',
                download: 'Download',
                singUP: 'Sing up',
                logIn: 'log in',
                comment: 'Millions of songs and podcasts. No credit card needed.',
                midButton: 'GET SPOTIFY FREE '
            }

        },
        thai() {
            this.lang = {
                support: 'การสนับสนุน',
                download: 'ดาวน์โหลด',
                singUP: 'ลงทะเบียน',
                logIn: 'เข้าสู่ระบบ',
                comment: 'เพลงและพอดแคสต์หลายล้านรายการ ไม่ต้องใช้บัตรเครดิต',
                midButton: 'ใช้ SPOTIFY FREE '
            }
        }
    },

}

Vue.createApp(app).mount('#app')