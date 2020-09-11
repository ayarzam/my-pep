const{ db }= require('./server/db/models/works')
const {green, red} = require('chalk')
const { Works } = require('./server/db/models/works')
const Sequelize = require('sequelize')

const seed = async () => {
  await db.sync({force: true})

  const project1 = await Works.create({
    "id": 1, 
      "project_title": "Music Mapper",
      "role":["Fullstack Engineer", "User Research", "Prototyping", "UX/UI", "Website Design", "Creative Direction"],
      "team":"Natalie Garate, Caoimhe Morgan-Feir, Tae-Hui Chang",
      "description": "An application to let Spotify users visualize their musical tastes!",
      "frontend_technologies": ["React", "Redux", "D3js", "HTML", "CSS"],
      "backend_technologies": ["Node", "Express", "OAUTH"],
      "testing_suite": ["Mocha", "Chai"], 
      "img": "https://i.imgur.com/Lxi1Ybh.png",
      "github": "https://github.com/music-mapper/music-mapper",
      "deployed": "https://spotify-music-mapper.herokuapp.com/", 
      "duration": "2 weeks", 
      "long_description": "During my final phase of bootcamp, we were assigned a data visualization team project which led to the creation of Music Mapper. Like Stackathon we were encouraged to use frameworks that we were unfamiliar with, for us that was D3.js. The team’s goal was to produce a visual representation of an individual’s music tastes via their Spotify accounts. As this was a team project roles were rotated daily among team members and pair coding was the norm. The roles included taskmaster, git master, and test master. The taskmaster was in charge of keeping us on schedule daily, the git master was responsible for making sure that we were using github efficiently, and the test master was responsible for making sure that we were writing tests to check our code. As a result, I touched every piece of code for this project and completed tasks ranging from writing end routes to assisting with deployment on heroku."
  })
  const project2 = await Works.create({
      "id": 2,
        "project_title": "Hike With Me",
        "role": ["Fullstack Engineer", "Mobile Developer", "UX/UI", "Prototyping", "Database Management"],
        "team": "Solo Developer",
        "description": "A mobile app that allows users the ability to map the distance and area that they hike.",
        "frontend_technologies": ["React Native", "CSS", "HTML"],
        "backend_technologies": ["Firebase", "Firestore"],
        "img": "https://i.imgur.com/AY7JE7N.png",
        "github": "https://github.com/ayarzam/HikeWithMe",
        "duration": "1.5 weeks",
        "long_description": "Each cohort at Grace Hopper does what is referred to as a “Stackathon”, a four day “Hackathon” like project where we can build whatever we want. The only catch is that we have to use a new stack. My “Stackathon” project was called “Hike With Me”, a mobile hiking app that allows users to map their hikes. I used React Native, and React Native maps using geolocation to render a map of the distance and location of a user’s hikes. "
  })
  const project3 = await Works.create({
      "id": 3,
        "project_title": "Island Shopper",
        "role":["Fullstack Engineer", "User Research", "Prototyping", "UX/UI", "Website Design", "Creative Direction", "Database Management"], 
        "team": "Yuting Zhang, Marigrace Leeman, Monica Zhou",
        "description": "An e-commerce website that allows users to buy fictional islands.",
        "frontend_technologies": ["React", "Redux", "HTML", "CSS", "React Bootsrap"],
        "backend_technologies": ["Nodejs", "Express","Sequelize"],
        "testing_suite": ["Mocha", "Chai"], 
        "img": "https://i.imgur.com/Pn9HnLQ.png",
        "github": "https://github.com/yachtworld/yachtshopper",
        "deployed": "https://yachtshopper.herokuapp.com/",
        "duration": "4 days",
        "long_description": "Our first project during the final phase of bootcamp was a team project. We were tasked with creating an e-commerce website that sold a product of our choice. We chose to sell imaginary islands. As this was a team project roles were rotated daily among team members and pair coding was the norm. The roles included taskmaster, git master, and test master. The taskmaster was in charge of keeping us on schedule daily, the git master was responsible for making sure that we were using github efficiently, and the test master was responsible for making sure that we were writing tests to check our code. We worked mostly in virtual slices while pair coding which enabled us touch and understand every part of the code."
  })
  const project4 = await Works.create({
    "id": 4,
      "project_title": "Node Card Game",
      "role": ["Backend Engineer", "Database Management"],
      "team": "Solo Developer",
      "description": "A simple backend mocking of a poker game.",
      "backend_technologies": ["Node", "Express"],
      "testing_suite": ["Mocha", "Chai", "Jest"],
      "img": "https://i.imgur.com/PbDQwxA.png",
      "github": "https://github.com/ayarzam/card_game",
      "duration": "4 days",
      "long_description": "This was a simple server side application. Created using Node js and the deck of cards api to provide a backend mocking of a Poker game. The app draws 5 cards from the api and using the wikipedia list of poker hands identifies which one your hand fulfils and prints it in the console."
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

      //             Deployed Site
      //           <a href="https://yachtshopper.herokuapp.com/">
      //             Github Repository
      //           <a href="https://github.com/yachtworld/yachtshopper">

      //             Github Repository
      //           <a href="https://github.com/ayarzam/HikeWithMe">

      //             Deployed Site
      //           <a href="https://spotify-music-mapper.herokuapp.com/">
      //             Github Repository
      //           <a href="https://github.com/music-mapper/music-mapper">

      //             Github Repository
      //           <a href="https://github.com/ayarzam/card_game">