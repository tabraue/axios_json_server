const axios = require("axios")

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    //timeout: 3000
})


const getPosts = async () => {
    try {
       const response = await api.get("", {
        params: {
            id: 8
        }
       })
       console.log('GET -> ',response.data)
    } catch (error) {
        console.log(error)
    }
}

getPosts()

const createPost = async () => {
    try {
        const response = await api.post("", {
            title: 'Sacar la basura',
            body: 'No puedo olvidarme'
        })
        console.log('POST -> ', response.data)
    } catch (error) {
        console.log(error)
    }
}

createPost()

const updatePost = async () => {
    try {
        const responseUpdate = await api.put("/1", {
            title: "Post updated",
        })
        console.log('PUT -> ', responseUpdate.data)
    } catch (error) {
        console.log(error)
    }
}

updatePost()

const patchPost = async (title) => {
    try {
        const responseUpdate = await api.patch("/1", {
            title: title
        })
        console.log('PATCH -> ', responseUpdate.data)
    } catch (error) {
        console.log(error)       
    }
}

patchPost()

const deletePost = async (id) => {
    try {
        const response = await api.delete(`/${id}`)
        console.log('DELETE -> ', response.statusText)
        const test = await api.get("/1")
        console.log('GET TEST -> ', test.status)
    } catch (error) {
        console.log(error)       
    }
}

deletePost()

module.exports = {
    patchPost,
    deletePost
}