const{ db }= require('./server/db/models/works')
const {green, red} = require('chalk')
const { Works } = require('./server/db/models/works')
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
      "img": "/images/projects/MusicMapper/renders/Laptop_1.png"
  })
  const project2 = await Works.create({
      "id": 2,
        "project_title": "Hike With Me",
        "my_title": "Fullstack Engineer", 
        "Team": "Sole developer",
        "description": "A mobile app that allows users the ability to map the distance and area that they hike.",
        "frontend_technologies": "React Native, CSS",
        "backend_technologies": "Firebase and Firestore",
        "img": "/images/projects/HikeWithMe/renders/Mobile.png"
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
        "img": "/projects/IslandShopper/renders/Desktop_1.png"
  })
  const project4 = await Works.create({
    "id": 4,
      "project_title": "Node Card Game",
      "my_title": "Backend Engineer",
      "Team": "Sole Developer",
      "description": "A simple backend mocking of a poker game.",
      "backend_technologies": "Node, Express",
      "testing_suite": "Mocha, Chai, Jest",
      "img": "/projects/NodeCardGame/playing_card.png"
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
