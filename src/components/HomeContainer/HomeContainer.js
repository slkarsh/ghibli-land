import React from 'react'
import './HomeContainer.scss'

export const HomeContainer = () => {
  return (
    <main className='home-container'>
      <section className='welcome-notes'>
        <div className='instructions'>
          <p className='message'>
            Welcome to Ghibli Land! Get familiar with the films of Hayao Miyazaki,
            the characters, the settings, and the unique vehicles. 
            See if your imagination and creativity stacks up against the films by 
            coming up with your own movie plot using the characters, locations, and vehicles here,
            and get a Rotten Tomatoes score for your creation
          </p>
        </div>
      </section>
    </main>
  )
}

export default HomeContainer