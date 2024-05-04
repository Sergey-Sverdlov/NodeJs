const path = require('path')

console.log(path.join('first', 'second'))

console.log('Склеить участки пути', path.join(__dirname, '..', '..'))
const fullPath = path.resolve('first', 'second', 'third.js')
console.log('Парсинг пути', path.parse(fullPath))

const siteURL = 'http://localhost:8080/users?id=5123'

const url = new URL(siteURL)

console.log(url)