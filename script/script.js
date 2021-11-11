//fetch --> вид запроса на сервер
//XmlHTTPRequest , axios

//fetch(url, query)

// CRUD -> create read update delete
// CREATE  -> post request
// READ -> GET
// UPDATE -> pur(all update) Patch(some data update)
// DELETE -> delete
// API -> https://randomuser.com/q=120


// const API = 'https://randomuser.me/api/?results=10'

// const GetUsers =()=>{
//     fetch(API)
//     .then(data=>data.json())
//     .then(data=>data)
//     .then((data)=>{
//         console.log(data);
//     })

// }




// GetUsers()
// const GetUsers = async () =>{
//     const res = await fetch(API)
//     const req = await res.json()

//     renderUsers(req.results)
// }

// GetUsers()

// const renderUsers =(users)=> {
//     // console.log(users);
//     users.map(el=>{
//         console.log(el);
//         let block = document.createElement('div')
//         let img = document.createElement('img')
//         let name = document.createElement('h3')
//         let number = document.createElement('p')
//         let email = document.createElement('p')

//         img.src=el.picture.medium
//         name.textContent = `${el.name.title}. $(el.name.first) ${el.name.last}`
//         number.textContent = `tel: ${el.phone}`
//         email.textContent = 
//     })

// }

const API = 'https://raw.githubusercontent.com/manolo/v-upload-gallery/master/ajax/images.json'

const getUser = async()=>{
const res = await fetch(API)
const req = await res.json()
renderUser(req)
}

getUser()

const renderUser=(users)=>{
    users.map(el=>{
        console.log(el);
        // let block = document.createElement('div')
        let images= document.createElement('img')
        images.className='img'

        images.src=el.src
        // block.append(img)
        document.body.appendChild(images)
    })
}