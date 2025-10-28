import './App.css'
import logo from './assets/images/logos/hero2.png'

function App() {
  return(
    <div className='landing-page'>
      {/* HERO SECTION */}
      <section className='hero'>
        <img src={logo} alt="Hero Brew" className='logo'/>
        <h1>Fuel Your Adventure</h1>
        <p>Premium coffee for heroes who need that extra boost</p>

        <div className='cta-buttons'>
          <button className='btn btn-primary'>Shop Coffee</button>
          <button className='btn btn-secondary'>Start Your Quest</button>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section className='about'> 
        <h2>Every Hero Needs Their Brew</h2>
        <p>
          At Hero Brew, we understand that epic adventures require epic fuel.
          Whether you're embarking on a marathon campaign session, studying ancient tomes,
          or battling through Monday morning, our class-inspired coffee blends are crafted
          to keep you at your best
        </p>
        <p>
          From the bold intensity of out Barabarian's Rage Roast to the refined complexity
          of our Wizard's Elder Sigil, each blend captures the essense of your favorite character class.
          Available in convenient pod boxes or fresh-roasted bags, fuel your next adventure however you brew.
        </p>
      </section>
      {/* FEATURED PRODUCTS */}
      <section className='featured-products'>
        <h2>Choose Your Class</h2>
        <p className='section-subtitle'>13 unique blends for every type of hero</p>

        <div className='product-preview-grid'>
          <div className='product-preview'>
            <div className='product-icon'>⚔️</div>
            <h3>Barbarian</h3>
            <p className='blend-name'>Rage Roast</p>
            <p>Bold, smoky, unstoppable</p>
          </div>

          <div className='product-preview'>
            <div className='product-icon'>🎵</div>
            <h3>Bard</h3>
            <p className='blend-name'>Melody Blend</p>
            <p>Balances, harmonious, smooth</p>
          </div>

          <div className='product-preview'>
            <div className='product-icon'>✨</div>
            <h3>Wizard</h3>
            <p className='blend-name'>Elder Sigl Roast</p>
            <p>Complex, refined, cerebral</p>
          </div>

          <div className='product-preview'>
            <div className='product-icon'>🗡️</div>
            <h3>Rogue</h3>
            <p className='blend-name'>Shadow Step Roast</p>
            <p>Sneaky smooth, high caffeine</p>
          </div>
        </div>
          <button className='btn btn-primary'>View All 13 Blends</button>
      </section>
      {/* Choose Us Section */}
      <section className='why-choose-us'>
        <h2>Why Hero Brew?</h2>
        <div className='benefits-grid'>
          <div className='benefit'>
            <div className='benefit-icon'>🎲</div>
            <h3>Class-Inspired Blends</h3>
            <p>13 unique roasts craftedf to match the personality and power of each D&D character class</p>
          </div>
          <div className='benefit'>
            <div className='benefit-icon'>☕</div>
            <h3>Premium Quality</h3>
            <p>Carefully sourced bean, expertly roasted for maximum flavor and caffeine power</p>
          </div>
          <div className='benefit'>
            <div className='benefit-icon'>📦</div>
            <h3>Adventurer Sizing</h3>
            <p>From Sprite sample packs to Kraken-sized bulk orders - choose your quest size</p>
          </div>
          <div className='benefit'>
            <div className='benefit-icon'>⚡</div>
            <h3>Fuel Long Sessions</h3>
            <p>High-quality caffeine to keep you charp through marathon gaming sessions</p>
          </div>
        </div>
      </section>
      {/* Call To Action */}
      <section className='final-cta'>
        <h2>Ready to Begin Your Quest?</h2>
        <p>Join fellow adventureres and fuel your next campaign with Hero Brew</p>
        <div className='cta-buttons'>
          <button className='btn btn-primary'>Shop All Coffee</button>
          <button className='btn btn-secondary'> Create Account</button>
        </div>
      </section>
    </div>
  )
}    
export default App