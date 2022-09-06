import getData from "./data.js"

// getData()
// console.log(getData().columns[0])

// console.log(columns[0])

document.getElementById('nama').innerHTML = getData().columns[0]
document.getElementById('email').innerHTML = getData().columns[1]

const nama1 = document.getElementById('data1')
const nama2 = document.getElementById('data2')
const nama3 = document.getElementById('data3')
const nama4 = document.getElementById('data4')

nama1.innerHTML = getData().data[0][0]
nama2.innerHTML = getData().data[0][1]
nama3.innerHTML = getData().data[1][0]
nama4.innerHTML = getData().data[1][1]
