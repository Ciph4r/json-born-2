// getUsers();

const getUser = (id) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('loadend', (event) => {
      console.log(event.target.response);
    })
  
    xhr.open('GET',`http://localhost:3000/users/${id}`);
    xhr.send();
}

// getUser(2)


const postFriends = (friends ,id) => {
  const xhr = new XMLHttpRequest()
  const newFriend = {
    friends,
  }

  xhr.addEventListener('loadend' , (event) => {
    console.log(event.target.response);
  })
  xhr.open('POST' , `http://localhost:3000/users/1`)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(newFriend))
}


postFriends('james' , 1)

// xhr.open('GET',`http://localhost:3000/users/${id}`);