function getCounter(num) {
    return {
        counter: num,

        log() {
            return this.counter
        },

        count(num) {
            this.counter += num
        },

        reset() {
            this.counter = 0
        }
    }
}