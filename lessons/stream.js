const fs = require('fs')
const path = require('path')
//
// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err) {
//         throw err
//     }
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
//
// // Один чанк весит по умолчанию 64Кбайт
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
//
// stream.on('end', () => {
//     console.log('Закончили читать')
// })
//
// stream.on('error', (e) => console.log(e))

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n')
// }
//
// writableStream.end()

// const http = require('http')
// http.createServer((req, res) => {
//     const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
//     strime.pipe(res)
//     stream.on('data', chunk=>res.write(chunk))
//     stream.on('end', chunk=>res.end())
// })