module.exports = {
    lastRequest: '',
    requestDelay: 5, // seconds
    checkPossibility: function() {
        if (this.lastRequest == '') {
            const now = new Date()
            this.lastRequest = now
            return [true]
        } else {
            const now = new Date()
            if (now - this.lastRequest > (this.requestDelay * 1000)) {
                this.lastRequest = now
                console.log(now - this.lastRequest)
                return [true]
            } else {
                return [false, (this.requestDelay * 1000) - (now - this.lastRequest)]
            }
        }
    }
}