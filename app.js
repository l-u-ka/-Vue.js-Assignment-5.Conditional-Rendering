const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            tasks: [],
            isShown: true
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.userInput);
            this.userInput = '';
        },
        toggleVisibility() {
            this.isShown = !this.isShown;
        }
    }
});

app.mount('#assignment');