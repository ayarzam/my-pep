const{ db }= require('./server/db/models/index')
const {green, red} = require('chalk')
const { Works } = require('./server/db/models/index')
const Sequelize = require('sequelize')

const seed = async () => {
  await db.sync({force: true})

  const project1 = await Works.create({
    "id": 1, 
      "project_title": "Music Mapper",
      "my_title":"Fullstack Engineer ",
      "Team":"Team Prokect ",
      "description": "An application to let Spotify users visualize their musical tastes!",
      "frontend_technologies": "React, Redux, D3js",
      "backend_technologies": "Node, Express, OAUTH",
      "testing_suite": "Mocha, Chai", 
      "img": "/Users/ayarzamanwaring/projects/my-pep/public/images/projects/MusicMapper/renders/Laptop_1.png"
  })
  const project2 = await Works.create({
      "id": 2,
        "project_title": "Hike With Me",
        "my_title": "Fullstack Engineer", 
        "Team": "Sole developer",
        "description": "A mobile app that allows users the ability to map the distance and area that they hike.",
        "frontend_technologies": "React Native, CSS",
        "backend_technologies": "Firebase and Firestore",
        "img": "/Users/ayarzamanwaring/projects/my-pep/public/images/projects/HikeWithMe/renders/Mobile.png"
  })
  const project3 = await Works.create({
      "id": 3,
        "project_title": "Island Shopper",
        "my_title":"Fullstack Engineer", 
        "Team": "Team Project",
        "description": "An e-commerce website that allows users to buy fictional islands.",
        "frontend_technologies": "React, Redux",
        "backend_technologies": "Technologies: Nodejs, Express and Sequelize",
        "testing_suite": "Mocha and Chai", 
        "img": "/Users/ayarzamanwaring/projects/my-pep/public/images/projects/IslandShopper/renders/Desktop_1.png"
  })
  
    db.close()
  console.log(`
    Seeding successful!
    Time to fly!
  `)
}
seed().catch(err => {
  db.close()
  console.log(`
    Error seeding:
    ${err.message}
    ${err.stack}
  `)
})
