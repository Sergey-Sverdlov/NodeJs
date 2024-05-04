const fs = require('fs')

const path = require('path')

console.log("START")
// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive: true}) // Создание папки
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log("Папка создана")
// }) // Создание папки
//
// console.log("END")

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err
//     }
// })

// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'HELLO', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log("Файл создан")
// })

const writeFileAsync = async (path, data) => {
    return new Promise((res, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                return reject(err.message)
            }
            res(0)
        })
    })
}

const appendFileAsync = async (path, data) => {
    return new Promise((res, reject) => {
        fs.appendFile(path, data, (err) => {
            if (err) {
                return reject(err.message)
            }
            res(0)
        })
    })
}

const readFileAsync = async (path) => {
    return new Promise((res, reject) => {
        fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
            if (err) {
                return reject(err.message)
            }
            res(data)
        })
    })
}

const removeFileAsync = async (path) => {
    return new Promise((res, reject) => {
        fs.rm(path, {encoding: 'utf-8'}, (err) => {
            if (err) {
                return reject(err.message)
            }
            res()
        })
    })
}

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'456'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'578'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '9999'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//

// removeFileAsync(path.resolve(__dirname, 'test.txt'))
//     .then(() => console.log("Файл удален"))

