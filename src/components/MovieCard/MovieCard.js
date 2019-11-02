import React from 'react'

// import one from '../../images/1castleinthesky.jpg';
// import two from '../../images/2totoro.jpg';
// import three from '../../images/3kikisdeliveryservice.jpg';
// import four from '../../images/4porcorosso.jpg';
// import five from '../../images/5princessmononoke.jpg';
// import six from '../../images/6spirited_away.jpg';
// import seven from '../../images/7howlsmovingcastle.jpg';
// import eight from '../../images/8ponyo.png';
// import nine from '../../images/9thewindrises.jpg'
// src/images/1castleintheksy.jpg



// const images = {
//   1: ['../../images/1castleinthesky.jpg'],
//   2: [two, 'https://www.youtube.com/watch?v=gYbW1F_c9eM', 'https://www.amazon.com/Star-Wars-Episode-Attack-Widescreen/dp/B00006HBUJ'],
//   3: [three, 'https://www.youtube.com/watch?v=5UnjrG_N8hU', 'https://www.amazon.com/Star-Wars-Episode-Revenge-Widescreen/dp/B00005JLXH'],
//   4: [four, 'https://www.youtube.com/watch?v=MpkrMqmmy5k', 'https://www.amazon.com/Star-Wars-Episode-IV-Limited/dp/B000FQJAIW'],
//   5: [five, 'https://www.youtube.com/watch?v=xESiohGGP7g', 'https://www.amazon.com/Star-Wars-Empire-Strikes-Limited/dp/B000FQJAJG'],
//   6: [six, 'https://www.youtube.com/watch?v=MYD_xxY5wEI', 'https://www.amazon.com/Star-Wars-Episode-VI-Limited/dp/B000FQVX78'],
//   7: [seven, 'https://www.youtube.com/watch?v=sGbxmsDFVnE', 'https://www.amazon.com/Star-Wars-Episode-2Blu-Ray-subtitles/dp/B01EFU2GKC'],
//   8: [eight],
//   9: [nine]
// }


  const pics = {
    1:'https://image.tmdb.org/t/p/w1280/4RTG2AaqZ9eleL51ryWwv78WwDu.jpg',
    2:'https://image.tmdb.org/t/p/w1280/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg',
    3:'https://image.tmdb.org/t/p/w1280/3LvTAZayVIWke8XDmiwNR6cX6EP.jpg',
    4:'https://image.tmdb.org/t/p/w1280/d8J98dLZkfTpJY64VvtCOH2UkXP.jpg',
    5:'https://image.tmdb.org/t/p/w1280/mNqZOtJIQfFQPjo3hmYLIn8Qqhf.jpg',
    6:'https://image.tmdb.org/t/p/w1280/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg',
    7:'https://image.tmdb.org/t/p/w1280/iMarB2ior30OAXjPa7QIdeyUfM1.jpg',
    8: 'https://image.tmdb.org/t/p/w1280/3s0mpSpLkI7cIhqWGrGbsiyvlsH.jpg',
    9: 'https://image.tmdb.org/t/p/w1280/3OTcCyf7QbGdVxsS8GLtaSsTZtP.jpg'
  }

export const MovieCard = ({ title, description, release_date, rt_score, setId}) => {
  return (
    <section>
      <img
        src={pics[setId]}
        className='poster-image'
        alt={`movie poster`}
      />
      <h3>{title}</h3>
      <p className='description'>{description}</p>
      <p className='date'>{release_date}</p>
      <p className='score'>{rt_score}</p>
    </section>
  )
}

export default MovieCard