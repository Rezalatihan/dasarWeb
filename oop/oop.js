const table = {
    columns: ['Name', 'Email'],
    data: [
        ['reza', 'rezacatria1@gmail.com'],
        ['catria', 'catria1@gmail.com']
    ]
};

document.getElementById('nama').innerHTML = table.columns[0]
document.getElementById('email').innerHTML = table.columns[1]

const nama1 = document.getElementById('data1')
const nama2 = document.getElementById('data2')
const nama3 = document.getElementById('data3')
const nama4 = document.getElementById('data4')

nama1.innerHTML = table.data[0][0]
nama2.innerHTML = table.data[0][1]
nama3.innerHTML = table.data[1][0]
nama4.innerHTML = table.data[1][1]