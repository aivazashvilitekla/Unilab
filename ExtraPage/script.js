






let table = document.getElementById('usersTable');
// arrays
// colors = ['#00B45C', '#EA0049', '#FEC900', '#00A3BA']
names = ['Berthefried', 'Tatiana', 'Hildeburg', 'Bilbo'];
Snames = ['Baggins', 'Lightfoot', 'Boulderhill', 'Frodo'];
function getStatus() {
    return Math.floor((Math.random() * 2) + 1) == 1 ? 'Active' : 'Inactive';
}
function getPosts() {
    // let data = {
    //     userCount,
        
    // }
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
        console.log(respData);
        let arr = respData.map(item => {
            return item.userId;
        })
        let userIDs = [... new Set(arr)];
        console.log(userIDs);
        for (let i = 1; i <= userIDs.length; i++){
            let rand = Math.floor(Math.random() * 4);
            var row = table.insertRow(i);
            // row.style.background = colors[rand];

            // ID
            var cell1 = row.insertCell(0);
            cell1.innerHTML = i;
            
            
            // Firstname
            var cell2 = row.insertCell(1);
            cell2.innerHTML = names[rand];

            // Lastname
            var cell3 = row.insertCell(2);
            cell3.innerHTML = Snames[rand];

            // Status
            var cell4 = row.insertCell(3);
            cell4.innerHTML = getStatus();
            if (getStatus() === 'Active') {
                row.style.background = '#2bb52b';
            } else {
                row.style.background = '#e08566';
            }
            for (let j = 0; j <= 10; j++){
                var row = table.insertRow(i);
            }
            
            // var cell5 = row.insertCell(4);
            // cell5.innerHTML = "<button type='button' class='btn' onClick='openPosts()'>See Posts</button>";
            // cell5.style.textAlign = 'center';
        }
        
    })
    .catch(function (error) {
        console.log(error);
    })
    return
}

getPosts()
function openPosts() {
    let usersDiv = document.getElementById('users');
    let newDiv = document.createElement('div');

    newDiv.classList.add('modal');
    newDiv.classList.add('myModal');
    usersDiv.appendChild(newDiv);
    newDiv.innerHTML = `<div class="modal-content">
                        <span class="close">&times;</span>
                        <p>Some text in the Modal..</p>
                        </div>`;
    let modal = document.getElementsByClassName('modal');
    modal.style.display = "block";
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}
// 