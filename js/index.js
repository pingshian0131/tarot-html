const app = Vue.createApp({
    data() {
        return {
            isValid: {
                sm: [0, 0, 0],
                md: [0, 0, 0],
                lg: [0, 0, 0],
            }
        }
    },
    mounted() {
        document.querySelectorAll(".init").forEach((ele) => {
            ele.src = "img/0.jpg";
        })
    },
    methods: {
        // Get a random integer between min (inclusive) and max (inclusive)
        _getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        GetCard(id) {
            const size = id.split('-')[2];
            const num = id.split('-')[1];
            if (this.isValid[size][parseInt(num) - 1] === 0) {
                const index = this._getRandomInt(1, 49);
                const ele = document.querySelector(`#card-${num}-${size}`);
                ele.src = `img/${index}.jpg`;
                ele.className = 'intro';
                this.isValid[size][parseInt(num) - 1] = 1;
            }
        },
        reload() {
            window.location.reload();
        }
    }
}).mount('#app');
