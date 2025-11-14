const movies = [
  {
    name: "Inception",
    genre: "Sci-Fi",
    category: "Hollywood",
    year: 2010,
    img: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg"
  },
  {
    name: "Avengers: Endgame",
    genre: "Action",
    category: "Hollywood",
    year: 2019,
    img: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg"
  },
  {
    name: "Parasite",
    genre: "Thriller",
    category: "Korean",
    year: 2019,
    img: "https://pacdn.aoneroom.com/image/2024/04/15/6ca97cd51efe04c264285f7f7cca6c67.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "Your Name",
    genre: "Anime",
    category: "Japanese",
    year: 2016,
    img: "https://pacdn.aoneroom.com/image/2025/10/06/e5afa09822f10c68fb822c712fbef80d-s.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "Spider-Man: No Way Home",
    genre: "Action",
    category: "Hollywood",
    year: 2021,
    img: "https://pacdn.aoneroom.com/image/2025/10/02/6570f4f5623b4ebf0c8002fda3f5a1d3.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "The Batman",
    genre: "Action",
    category: "Hollywood",
    year: 2022,
    img: "https://pacdn.aoneroom.com/image/2025/10/04/ea02f51879c9210eaedcd4ae328ff96f.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "Jujutsu Kaisen 0",
    genre: "Anime",
    category: "Japanese",
    year: 2021,
    img: "https://pacdn.aoneroom.com/image/2025/10/03/2d49cef594f7110eca6bb1d052150bd8.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "Oppenheimer",
    genre: "Thriller",
    category: "Hollywood",
    year: 2023,
    img: "https://pacdn.aoneroom.com/image/2025/10/04/e49cc821b869f3ca5fdee9ad410060bf.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "Dune: Part Two",
    genre: "Sci-Fi",
    category: "Hollywood",
    year: 2024,
    img: "https://pacdn.aoneroom.com/image/2025/10/03/a966e8e61ece6a1c05edfd162ae3d6c6.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "Attack on Titan: The Final Season",
    genre: "Anime",
    category: "Japanese",
    year: 2023,
    img: "https://pacdn.aoneroom.com/image/2024/08/22/3c42c356b625c7bac382e1b7e584d2ad.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "Demon Slayer: Mugen Train",
    genre: "Anime",
    category: "Japanese",
    year: 2020,
    img: "https://pacdn.aoneroom.com/image/2025/10/02/19c0254b79909b46a5c05639458d2c0f.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "Black Panther: Wakanda Forever",
    genre: "Action",
    category: "Hollywood",
    year: 2022,
    img: "https://pacdn.aoneroom.com/image/2024/08/22/f67ca9b33f0348f072bd2960b74bcb00.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "John Wick 4",
    genre: "Thriller",
    category: "Hollywood",
    year: 2023,
    img: "https://pacdn.aoneroom.com/image/2025/10/02/36821532f6fe44e889ef32a52021ceb6.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "The Super Mario Bros. Movie",
    genre: "Animation",
    category: "Hollywood",
    year: 2023,
    img: "https://pacdn.aoneroom.com/image/2024/10/26/ef414c9c1f3579e0fbe5e15e29256b54.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "The First Slam Dunk",
    genre: "Anime",
    category: "Japanese",
    year: 2022,
    img: "https://pacdn.aoneroom.com/image/2025/10/03/862f4f6e7a9f2415a22138d1799d9d44.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "Guardians of the Galaxy Vol. 3",
    genre: "Action",
    category: "Hollywood",
    year: 2023,
    img: "https://pacdn.aoneroom.com/image/2025/06/14/9e232ab1debe26f67a48c249f77ea276.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "Suzume",
    genre: "Anime",
    category: "Japanese",
    year: 2023,
    img: "https://pacdn.aoneroom.com/image/2025/10/04/342bcfb082d7a907e0e6b3af6a7bec27.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "The Creator",
    genre: "Sci-Fi",
    category: "Hollywood",
    year: 2023,
    img: "https://pacdn.aoneroom.com/image/2025/10/03/77715887613202ca853e113ee862b81a.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "Godzilla Minus One",
    genre: "Action",
    category: "Japanese",
    year: 2023,
    img: "https://pacdn.aoneroom.com/image/2025/10/04/6a308b636a7a2cdaef5429d1ad83e15d.jpg?x-oss-process=image/resize%2Cw_250"
  },
  {
    name: "Inside Out 2",
    genre: "Animation",
    category: "Hollywood",
    year: 2024,
    img: "https://pacdn.aoneroom.com/image/2024/10/06/b4b953e395de5b8b662e91564b688753.jpg?x-oss-process=image/resize%2Cw_250"
  }
];

export default movies;