// 1.
function getCounter(num) {
    return {
        counter: num,

        log() {
            return this.counter
        },

        count(num) {
            this.counter += num
            return this
        },

        reset() {
            this.counter = 0
            return this
        }
    }
}

const counter = getCounter(5)
counter.log().count(4).reset()

// 2.
function GetCounter(num) {
    this.counter = num
  
    this.log = () => {
        return this.counter
    }
  
    this.count = (num) => {
        this.counter += num
    }
  
    this.reset = () => {
        this.counter = 0
    }
} 
  
const counter = new GetCounter(5)
counter.log()
counter.count(4)
counter.reset()