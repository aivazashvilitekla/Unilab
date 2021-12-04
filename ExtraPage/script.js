

let table = document.getElementById('usersTable');

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/JSON'
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (respData) {
        for (let i = 1; i <= respData.length; i++){
            var row = table.insertRow(i);
            // Userid
            var cell1 = row.insertCell(0);
            cell1.innerHTML = respData[i].userId;
            
            
            // // id
            var cell2 = row.insertCell(1);
            cell2.innerHTML = respData[i].id;

            // // title
            var cell3 = row.insertCell(2);
            cell3.innerHTML = respData[i].title;

            // // body
            var cell4 = row.insertCell(3);
            cell4.innerHTML = respData[i].body;
            

            // let arr = respData.filter(item => {
            //     return item.userId==i;
            // })
            // console.log(arr);
        }
        
        
    })
    .catch(function (error) {
        console.log(error);
    })
}

getPosts()