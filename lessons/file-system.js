const fs = require('fs')

const path = require('path')
const dotenv = require('dotenv')

dotenv.config()
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
        fs.rm(path, (err) => {
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

const text = process.env.TEXT || '234 324 gfgfdg'
const myPath = path.resolve(__dirname, 'text.txt')
const newFilePath = path.resolve(__dirname, 'count.txt')
writeFileAsync(myPath, text)
    .then(() => readFileAsync(myPath))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(newFilePath, "Количество слов "+count))
    .then(() => removeFileAsync(myPath))
    .then(() => console.log("Задание выполнено успешно"))
    .catch(err => console.log(err))
