var Hashes = require('jshashes')

const createHash = (str) => {
    const hash = new Hashes.MD5().hex(str)
    return hash
}

module.exports = createHash