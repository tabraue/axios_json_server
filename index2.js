/* const { patchPost, deletePost } = require('./post.service')
let title = "hola"

await patchPost(title)
await deletePost(9) */

const { faker } = require('@faker-js/faker');
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

const animal = faker.animal.bear()
console.log(randomName)
console.log(randomEmail)
console.log(animal)