const { KhmerDate } = require('./lib');

const date = new KhmerDate(new Date('2021-03-03T21:30:55.839Z'))

console.log(date.getDate())