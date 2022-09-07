function getData(url, cek) {
    let req = new XMLHttpRequest();
    req.onload = function () {
        if (req.status === 200) {
            return cek(JSON.parse(req.responseText));
        }
    }
    req.open("GET", url);
    req.send();
}

export const data = getData("https://jsonplaceholder.typicode.com/users", function (data) {

    let tab =
        `<tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Address</th>
        <th>Company</th>
        </tr>`;

    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
                <td>${r.id} </td>
                <td>${r.name}</td>
                <td>${r.username}</td> 
                <td>${r.email}</td>
                <td>${r.address.city}</td>          
                <td>${r.company.name}</td>          

                </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;

})

