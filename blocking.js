// blocking
const fs = require('fs/promises')
const path = require('path')
const read = async () => {
    const result = fs.readFile(path.join(__dirname, 'package.json'), 'utf-8')
    console.log(result)
    return result
}

read().then(f => console.log(f))
console.log('hi')
