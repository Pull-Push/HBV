const pool = require('./db')

async function seedDatabase() {
  try {
    console.log('Starting database seed...')

    // Clear existing data
    await pool.query('TRUNCATE products, box_sizes, bag_sizes, grind_types RESTART IDENTITY CASCADE')
    console.log('Cleared existing data')

    // Insert products (13 coffee blends)
    const productInserts = [
      ['Rage Roast', 'Barbarian', 'Dark', 'Very High', '{Bold,Smoky,Dark Chocolate,Primal}', 'Unleash your inner fury with this aggressive dark roast. Smoky and intense with notes of dark chocolate and charred oak, this blend hits as hard as a greataxe. No subtlety, just raw caffeinated power.', 'For those who rage against the morning', '/images/barbarian.png', 'coffee', false],
      ['Melody Blend', 'Bard', 'Medium', 'Medium', '{Balanced,Caramel,Nutty,Harmonious}', 'A perfectly balanced medium roast that pleases every palate. Smooth caramel sweetness dances with toasted nuts in perfect harmony. Like a well-performed ballad, this blend never hits a wrong note.', 'Inspiration in every sip', '/images/bard.png', 'coffee', false],
      ['Sanctum Light Roast', 'Cleric', 'Light', 'High', '{Bright,Honey,Citrus,Divine}', 'A blessed light roast that uplifts and heals. Bright citrus notes blessed with natural honey sweetness create a radiant cup. Perfect for those early morning prayers or late-night healing sessions.', 'May your coffee bless your day', '/images/cleric.png', 'coffee', false],
      ['Wildroot Medium Roast', 'Druid', 'Medium', 'Medium', '{Earthy,Herbal,Maple,Natural}', 'An organic medium roast in harmony with nature. Earthy undertones meet subtle herbal notes with a hint of maple sweetness. Sustainably sourced from wild-grown beans, this brew respects the natural order.', 'Nature\'s caffeinated gift', '/images/druid.png', 'coffee', false],
      ['Battle Ready Blend', 'Fighter', 'Medium-Dark', 'High', '{Strong,Robust,Cocoa,Reliable}', 'A dependable medium-dark roast built for endurance. Rich cocoa notes with a robust body that powers through any encounter. No fancy tricks, just solid, reliable caffeine for the long haul.', 'Strength and discipline in every cup', '/images/fighter.png', 'coffee', false],
      ['False Awakening', 'Mimic', 'Medium', 'Decaf', '{Deceptive,Smooth,Chocolate,Surprising}', 'Not everything is as it seems. This decaf blend tricks your taste buds into thinking it\'s the real deal. Smooth, rich, and satisfying with notes of milk chocolate—you won\'t even miss the caffeine. Or will you?', 'The treasure was the coffee all along', '/images/mimic.png', 'coffee', true],
      ['Inner Focus Roast', 'Monk', 'Light-Medium', 'Medium', '{Clean,Jasmine,Stone Fruit,Zen}', 'A disciplined light-medium roast that brings clarity and focus. Clean jasmine aromatics meet subtle stone fruit sweetness. Perfectly balanced for meditation or perfecting your martial arts—or both.', 'Find your center, one sip at a time', '/images/monk.png', 'coffee', false],
      ['Oathbound Roast', 'Paladin', 'Medium', 'High', '{Noble,Vanilla,Cinnamon,Righteous}', 'A virtuous medium roast sworn to justice and flavor. Noble vanilla notes stand alongside warm cinnamon, creating a brew worthy of the most devoted champion. Smite evil, sip righteously.', 'Uphold your oath with every cup', '/images/paladin.png', 'coffee', false],
      ['Trail Brew', 'Ranger', 'Medium', 'Medium-High', '{Woodsy,Berry,Cedar,Adventurous}', 'A rugged medium roast for the wilderness wanderer. Wild berry notes mingle with subtle cedar undertones, evoking campfires and distant horizons. Perfect for tracking your prey—or just tracking down breakfast.', 'Brewed for the road less traveled', '/images/ranger.png', 'coffee', false],
      ['Shadow Step Roast', 'Rogue', 'Dark', 'Very High', '{Sneaky Smooth,Cherry,Dark Caramel,Elusive}', 'A dark roast that strikes from the shadows. Surprisingly smooth with hidden cherry sweetness and dark caramel depth. High caffeine content for those all-night heist planning sessions. Leaves no trace—except in your cup.', 'Stealth and caffeine in perfect balance', '/images/rogue.png', 'coffee', false],
      ['Arcane Surge', 'Sorcerer', 'Medium-Dark', 'Very High', '{Explosive,Spice,Wild Berry,Chaotic}', 'An unpredictable medium-dark roast with wild magic energy. Explosive spice notes burst with wild berry chaos and crackling intensity. Dangerously high caffeine—handle with care, or embrace the chaos.', 'Unleash your inner power', '/images/sorcerer.png', 'coffee', false],
      ['Pact Brew', 'Warlock', 'Dark', 'Very High', '{Mysterious,Black Cherry,Smoke,Forbidden}', 'A dark, mysterious roast bound by ancient flavor pacts. Deep black cherry notes emerge through mystical smoke, creating an otherworldly experience. The caffeine price? Your sleep. Worth it.', 'Power has a price, and it\'s delicious', '/images/warlock.png', 'coffee', false],
      ['Elder Sigil Roast', 'Wizard', 'Light', 'High', '{Complex,Citrus,Floral,Refined}', 'A sophisticated light roast for the discerning scholar. Bright citrus notes intertwine with delicate floral undertones and a whisper of bergamot. Complex, cerebral, and perfectly calibrated for long study sessions in the tower.', 'Knowledge tastes like excellence', '/images/wizard.png', 'coffee', false]
    ]

    for (const product of productInserts) {
      await pool.query(
        `INSERT INTO products (name, class, roast_level, caffeine_level, flavor_notes, description, tagline, image_url, category, is_decaf)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        product
      )
    }
    console.log('Inserted 13 coffee products')

    // Insert box sizes
    const boxSizes = [
      ['sprite', 'Sprite', 4, 4.99, 'pods', '/images/sprite.png'],
      ['goblin', 'Goblin', 8, 8.99, 'pods', '/images/goblin.png'],
      ['orc', 'Orc', 12, 12.99, 'pods', '/images/orc.png'],
      ['ogre', 'Ogre', 24, 23.99, 'pods', '/images/ogre.png'],
      ['giant', 'Giant', 48, 44.99, 'pods', '/images/giant.png'],
      ['kraken', 'Kraken', 96, 79.99, 'pods', '/images/kraken.png']
    ]

    for (const size of boxSizes) {
      await pool.query(
        'INSERT INTO box_sizes (id, name, pods, price, type, image_url) VALUES ($1, $2, $3, $4, $5, $6)',
        size
      )
    }
    console.log('Inserted 6 box sizes')

    // Insert bag sizes
    const bagSizes = [
      ['bag-12oz', '12oz Bag', '12oz', 15.99, 'bag'],
      ['bag-24oz', '24oz Bag', '24oz', 28.99, 'bag'],
      ['bag-40oz', '40oz Bag', '40oz', 37.99, 'bag']
    ]

    for (const size of bagSizes) {
      await pool.query(
        'INSERT INTO bag_sizes (id, name, weight, price, type) VALUES ($1, $2, $3, $4, $5)',
        size
      )
    }
    console.log('Inserted 3 bag sizes')

    // Insert grind types
    const grindTypes = [
      ['whole-bean', 'Whole Bean', 'For maximum freshness'],
      ['ground', 'Ground', 'Ready to brew']
    ]

    for (const grind of grindTypes) {
      await pool.query(
        'INSERT INTO grind_types (id, name, description) VALUES ($1, $2, $3)',
        grind
      )
    }
    console.log('Inserted 2 grind types')

    console.log('Database seeded successfully!')
    process.exit(0)
  } catch (err) {
    console.error('Error seeding database:', err)
    process.exit(1)
  }
}

seedDatabase()