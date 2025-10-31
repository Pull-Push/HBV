// Import Product Images
import barbarianImg from '../assets/images/coffeeProducts/bags/Barbarian.png';
import bardImg from '../assets/images/coffeeProducts/bags/Bard.png';
import clericnImg from '../assets/images/coffeeProducts/bags/Cleric.png';
import druidImg from '../assets/images/coffeeProducts/bags/Druid.png';
import fighterImg from '../assets/images/coffeeProducts/bags/Fighter.png';
import mimicImg from '../assets/images/coffeeProducts/bags/Mimic.png';
import monkImg from '../assets/images/coffeeProducts/bags/Monk.png';
import paladinImg from '../assets/images/coffeeProducts/bags/Paladin.png';
import rangerImg from '../assets/images/coffeeProducts/bags/Ranger.png';
import rogueImg from '../assets/images/coffeeProducts/bags/Rogue.png';
import sorcererImg from '../assets/images/coffeeProducts/bags/Sorcerer.png';
import warlockImg from '../assets/images/coffeeProducts/bags/Warlock.png';
import wizardImg from '../assets/images/coffeeProducts/bags/Wizard.png';

//Import box size images
import spriteImg from '../assets/images/coffeeProducts/pods/sprite.png'
import goblinImg from '../assets/images/coffeeProducts/pods/goblin.png'
import orcImg from '../assets/images/coffeeProducts/pods/orc.png'
import ogreImg from '../assets/images/coffeeProducts/pods/ogre.png'
import giantImg from '../assets/images/coffeeProducts/pods/giant.png'
import krakenImg from '../assets/images/coffeeProducts/pods/kraken.png'

//Pod Box sizes with pricing
export const boxSizes =[
    { id: 'sprite', name:"Sprite", pods:4, price:4.99, type:'pods', image:spriteImg},
    { id: 'goblin', name:"Goblin", pods:8, price:8.99, type:'pods', image:goblinImg},
    { id: 'orc', name:"Orc", pods:12, price:12.99, type:'pods', image:orcImg},
    { id: 'ogre', name:"Ogre", pods:24, price:23.99, type:'pods', image:ogreImg},
    { id: 'giant', name:"Giant", pods:48, price:44.99, type:'pods', image:giantImg},
    { id: 'kraken', name:"Kraken", pods:96, price:79.99, type:'pods', image:krakenImg}
]

//Coffee Bagh sizes with pricing
export const bagSizes = [
    {id:'bag-12oz', name:'12oz Bag', weight:'12oz', price:15.99, type:'bag', grindOptions:['whole-bean', 'ground']},
    {id:'bag-24oz', name:'24oz Bag', weight:'24oz', price:28.99, type:'bag', grindOptions:['whole-bean', 'ground']},
    {id:'bag-40oz', name:'40oz Bag', weight:'40oz', price:37.99, type:'bag', grindOptions:['whole-bean', 'ground']}
]
//Grind options
export const grindTypes = [
    {id:'whole-bean', name:"Whole Bean", description:'For maximum freshness'},
    {id:'ground', name:"Ground", description:'Ready to brew'}
]
//Shirt sizes and pricing
export const shirtSizes = [
    {id:'s', name:'Small', price:19.99},
    {id:'m', name:'Medium', price:19.99},
    {id:'l', name:'Large', price:19.99},
    {id:'xl', name:'XL', price:19.99},
    {id:'2xl', name:'2XL', price:22.99},
    {id:'3xl', name:'3XL', price:24.99},
]

//Merch products
export const merchandise = [
    //Shirts
    {id:'merch-1',
    name:'Hero Brew Logo Shirt',
    type:'shirt',
    description:'Classic black t-shirt featuring the Hero Brew logo. Soft cotton blend, perfect for game night or everyday adventuring.',
    basePrice:19.99,
    sizes:shirtSizes,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },
    {id:'merch-2',
    name:'Barbarian Class Shirt',
    class:'Barbarian',
    type:'shirt',
    description:'Unleash your rage in style. Features Barbarian class artwork and the Rage Roast logo.',
    basePrice:19.99,
    sizes:shirtSizes,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },
    {id:'merch-3',
    name:'Bard Class Shirt',
    class:'Bard',
    type:'shirt',
    description:'For those who bring harmony to the party. Features Bard class artwork and Melody Blend branding.',
    basePrice:19.99,
    sizes:shirtSizes,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },
    {id:'merch-4',
    name:'Cleric Class Shirt',
    class:'Cerlic',
    type:'shirt',
    description:'Blessed apparl for the devoted healer. Features Cleric class artwork and Sanctum Light branding.',
    basePrice:19.99,
    sizes:shirtSizes,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },
    {id:'merch-5',
    name:'Druid Class Shirt',
    class:'Drid',
    type:'shirt',
    description:'nature-inspired design for the wild at heart. Featured Druid class artwork and Wildroot branding.',
    basePrice:19.99,
    sizes:shirtSizes,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },
    {id:'merch-6',
    name:'Fighter Class Shirt',
    class:'Fighter',
    type:'shirt',
    description:'Battle-ready apparel for the reliable warrior. Features Fighter class artwork and Battle Ready branding.',
    basePrice:19.99,
    sizes:shirtSizes,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },
    {id:'merch-7',
    name:'Monk Class Shirt',
    class:'Monk',
    type:'shirt',
    description:'Zen-inspired design for the disciplined adventurer. Featured Monk class artwork and Inner Focus branding.',
    basePrice:19.99,
    sizes:shirtSizes,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },
    {id:'merch-8',
    name:'Paladin Class Shirt',
    class:'Paladin',
    type:'shirt',
    description:'Righteous apparel for the oath-bound hero. Features Paladin class artwork and Oathbound branding.',
    basePrice:19.99,
    sizes:shirtSizes,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },
    {id:'merch-9',
    name:'Ranger Class Shirt',
    class:'Ranger',
    type:'shirt',
    description:'Wilderness-ready design for the wanderer. Features Ranger class artwork and Trail Brew branding.',
    basePrice:19.99,
    sizes:shirtSizes,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },
    {id:'merch-10',
    name:'Rogue Class Shirt',
    class:'Rogue',
    type:'shirt',
    description:'Stealthy style for the cunning adventurer. Featured Rogue class artwork and Shadow Step branding.',
    basePrice:19.99,
    sizes:shirtSizes,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },
    {id:'merch-11',
    name:'Sorcerer Class Shirt',
    class:'Sorcerer',
    type:'shirt',
    description:'Chaotic energy caotured in apparel. Features Sorcerer class artwork and Arcane Surge branding.',
    basePrice:19.99,
    sizes:shirtSizes,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },
    {id:'merch-12',
    name:'Warlock Class Shirt',
    class:'Warlock',
    type:'shirt',
    description:'Mysterious design for those bound by pacts. Features Warlock class artwork and Pact Brew branding.',
    basePrice:19.99,
    sizes:shirtSizes,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },
    {id:'merch-13',
    name:'Wizard Class Shirt',
    class:'Wizard',
    type:'shirt',
    description:'Scholarly apparel for the arcane master. Features Wizard class artowrk and Elder Sigil branding.',
    basePrice:19.99,
    sizes:shirtSizes,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },   

    //MUGS
    {id:'merch-14',
    name:'Hero Brew Mug - Black/Gold',
    type:'mug',
    size:'15oz',
    description:'Standard ceramic mug in sleek black with gold Hero Brew logo. Microwave and dishwasher safe.',
    price:14.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'   
    },
    {id:'merch-15',
    name:'Hero Brew Mug - White/Gold Exclusive',
    type:'mug',
    size:'15oz',
    description:'Exclusive white ceramic mug with elegant gold accents. For members only. Microwave and dishwasher safe.',
    price:16.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware',
    exclusive:true
    },
    {id:'merch-16',
    name:'Hero Brew Travel Mug',
    type:'travel-mug',
    size:'24oz',
    description:'Insulated stainless steel travel mug. Keeps coffee hot for hours. Perfect for adventurers on the go.',
    price:24.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'
    },
    {id:'merch-17',
    name:"Hero Brew Tankard",
    type:'tankard',
    size:'24oz',
    description:'Medieval-style stainless steel tankard with Hero Brew branding. Drink like a true adventurer',
    price:29.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'
    },
    {id:'merch-18',
    name:'Barbarian Class Mug',
    class:'Barbarian',
    type:'mug',
    size:'15oz',
    description:'Rage-worthy ceramic mug featuring Barbarian artwork. Microwave and dishwasher safe',
    price:14.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'
    },
    {id:'merch-19',
    name:'Bard Class Mug',
    class:'Bard',
    type:'mug',
    size:'15oz',
    description:'Harmonius ceramic mug featuring Bard artwork. Microwave and dishwasher safe',
    price:14.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'
    },
    {id:'merch-20',
    name:'Cleric Class Mug',
    class:'Cleric',
    type:'mug',
    size:'15oz',
    description:'Blessed ceramic mug featuring Cleric artwork. Microwave and dishwasher safe',
    price:14.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'
    },
    {id:'merch-21',
    name:'Druid Class Mug',
    class:'Druid',
    type:'mug',
    size:'15oz',
    description:'Nature-insprired ceramic mug featuring Druid artwork. Microwave and dishwasher safe',
    price:14.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'
    },
    {id:'merch-22',
    name:'Fighter Class Mug',
    class:'Fighter',
    type:'mug',
    size:'15oz',
    description:'Battle-tested ceramic mug featuring Fighter artwork. Microwave and dishwasher safe',
    price:14.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'
    },
    {id:'merch-23',
    name:'Monk Class Mug',
    class:'Monk',
    type:'mug',
    size:'15oz',
    description:'Zen-focused ceramic mug featuring Monk artwork. Microwave and dishwasher safe',
    price:14.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'
    },
    {id:'merch-24',
    name:'Paladin Class Mug',
    class:'Paladin',
    type:'mug',
    size:'15oz',
    description:'Righteous ceramic mug featuring Paladin artwork. Microwave and dishwasher safe',
    price:14.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'
    },
    {id:'merch-25',
    name:'Ranger Class Mug',
    class:'Ranger',
    type:'mug',
    size:'15oz',
    description:'Wilderness-ready ceramic mug featuring Ranger artwork. Microwave and dishwasher safe',
    price:14.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'
    },
    {id:'merch-26',
    name:'Rogue Class Mug',
    class:'Rogue',
    type:'mug',
    size:'15oz',
    description:'Stealthy ceramic mug featuring Rogue artwork. Microwave and dishwasher safe',
    price:14.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'
    },
    {id:'merch-27',
    name:'Sorcerer Class Mug',
    class:'Sorcerer',
    type:'mug',
    size:'15oz',
    description:'Chaotic ceramic mug featuring Sorcerer artwork. Microwave and dishwasher safe',
    price:14.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'
    },
    {id:'merch-28',
    name:'Warlock Class Mug',
    class:'Warlock',
    type:'mug',
    size:'15oz',
    description:'Mysterious ceramic mug featuring Warlock artwork. Microwave and dishwasher safe',
    price:14.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'
    },
    {id:'merch-29',
    name:'Wizard Class Mug',
    class:'Wizard',
    type:'mug',
    size:'15oz',
    description:'Scholarly ceramic mug featuring Barbarian artwork. Microwave and dishwasher safe',
    price:14.99,
    image:null,
    category:'merchandise',
    subcategory:'drinkware'
    },
    
    //HATS
    {id:'merch-30',
    name:'Hero Brew Beanie',
    type:'beanie',
    description:'Cozy knot beanie with embroidered Hero Brew logo. Perfect for cold campaign nights.',
    price:19.99,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },
    {id:'merch-31',
    name:'Hero Brew Dad Hat',
    type:'hat',
    description:'Classic clasp-back dad hat with Hero Brew logo. Adjustable, comfortable, and adventure-ready.',
    price:22.99,
    image:null,
    category:'merchandise',
    subcategory:'apparel'   
    },

    //Dice Set
    {id:'merch-32',
    name:'Hero Brew Dice Set',
    type:'dice',
    description:'Premium 7-piece polyhedral dice set set in dark chocolate brown with gold numbering. Comes with custom Hero Brew dice bag. Perfect for rolling initiative... or choosing your next coffee.',
    price:24.99,
    image:null,
    category:'merchandise',
    subcategory:'gaming',
    includes:['D4, D6, D8, D10, D%, D12, D20, and custom dice bag']
    }
]

//All 13 coffee blends
export const products = [
    {
        id:1,
        name:'Rage Roast',
        class:'Barbarian',
        roastLevel:'Dark',
        caffeineLevel:'Very High',
        flavorNotes:['Bold', 'Smoky', 'Dark Chocolate', 'Primal'],
        description:'Unleash your inner fury with this aggressive dark roast. Smoky and intense with notes of dark chocolate and charred oak, this blend hits as hard as a greataxe. No subtlety, just raw caffeinated power.',
        tagline:'For those who rage against the morning',
        image:barbarianImg,
        category:'coffee'
    },
    {
        id:2,
        name:'Melody Blend',
        class:'Bard',
        roastLevel:'Medium',
        caffeineLevel:'Medium',
        flavorNotes:['Balanced', 'Caramel', 'Nutty', 'Harmonious'],
        description:'A perfectly balaced medium roast that pleases every palate. Smooth caramel sweetness dances with toasted nuts in perfect harmony. Like a well-performed ballad, this blend never hits a wrong note.',
        tagline:'Inspiration in every sip',
        image:bardImg,
        category:'coffee'
    },
    {
        id:3,
        name:'Sanctum Light Roast',
        class:'Cleric',
        roastLevel:'Light',
        caffeineLevel:'High',
        flavorNotes:['Bright', 'Honey', 'Citrus', 'Divine'],
        description:'A blessed light roast that uplifts and heal. Bright citrus notes blessed with natural honet sweetness create a radiant cup. Perfect for those early morning prayers or late-night healing sessions.',
        tagline:'May your coffee bless your day',
        image:clericnImg,
        category:'coffee'
    },
    {
        id:4,
        name:'Wildroot Medium Roast',
        class:'Druid',
        roastLevel:'Medium',
        caffeineLevel:'Medium',
        flavorNotes:['Earthy', "Herbal", 'Maple', 'Natural'],
        description:'An organic medium roast in harmony with nature. Earthy undertones meet subtle herbal notes with a hint of maple sweetness. Sustainable sourced from wild grown beans, this brew respects the natural order.',
        tagline:"Nature's caffeinated gift",
        image:druidImg,
        category:'coffee'
    },
    {
        id:5,
        name:'Battle Ready Blend',
        class:'Fighter',
        roastLevel:'Medium-Dark',
        caffeineLevel:'High',
        flavorNotes:['Strong', 'Robust', 'Cocoa', 'Reliable'],
        description:'A dependable medium-dark roast build for endurance. Rich cocoa notes with a robust body that powers through any encounter. No fancy tricks, just solid, reliable caffeine for the long haul.',
        tagline:'Strength and discipline in every cup',
        image:fighterImg,
        category:'coffee'
    },
    {
        id:6,
        name:'False Awakening',
        class:'Mimic',
        roastLevel:'Medium',
        caffeineLevel:'Decaf',
        flavorNotes:['Deceptive', 'Smooth', 'Chocolate', 'Surprising'],
        description:"Not everything is at it seems. This decaf blend tricks your taste buds into thinking it's the real deal. Smooth, rich, and satisfying with notes of milk chocolate - you won't even miss the caffeine. Or will you?",
        tagline:"The treasure was the coffee all along",
        image:mimicImg,
        category:'coffee'
    },
    {
        id:7,
        name:"Inner Focus Roast",
        class:"Monk",
        roastLevel:"Light-Medium",
        caffeineLevel:"Medium",
        flavorNotes:["Clean", "Jasmine", "Stone Fruit", "Zen"],
        description:"A disciplines light-medium roast that brings clarity and focus. Clean jasmine aromatics meet subtle stone fruit sweetness. Perfectly balances for meditation or perfecting your martial arts - or both.",
        tagline:"Find your center, one sip at a time",
        image:monkImg,
        category:'coffee'
    },
    {
        id:8,
        name:"Oathbound Roast",
        class:"Paladin",
        roastLevel:"Medium",
        caffeineLevel:"High",
        flavorNotes:["Noble", "Vanilla", "Cinnamon", "Righteous"],
        description:"A virtuous medium roast sworn to justice and flavor. Noble vanilla notes stand alongside warm cinnamon, creating a brew worthy of the most devoted champion. Smite evil, sip righteously.",
        tagline:"Uphold your oath with every cup",
        image:paladinImg,
        category:'coffee'
    },
    {
        id:9,
        name:"Trail Brew",
        class:"Ranger",
        roastLevel:"Medium",
        caffeineLevel:"Medium-High",
        flavorNotes:["Woodsy", "Berry", "Cedar", "Adventurous"],
        description:"A rugged medium roast for the wilderness wanderer. Wild berry notes mingle with subtle cedar undertones, evoking campfires and distant horizons. Perfect for tracking your prey - or just tracking down breakfast.",
        tagline:"Brewed for the road less traveled",
        image:rangerImg,
        category:'coffee'
    },
    {
        id:10,
        name:"Shadow Step Roast",
        class:"Rogue",
        roastLevel:"Dark",
        caffeineLevel:"Very High",
        flavorNotes:["Sneaky Smooth", "Cherry", "Dark Caramel", "Elusive"],
        description:"A dark roast the strikes from the shadows. Surprisingly smooth with hidden cherry sweetness and dark caramel depth. High caffeine content for those all-night heist planning sessions. Leaves no trace - except in your cup.",
        tagline:"Stealth and caffeine in perfect balance",
        image:rogueImg,
        category:'coffee'
    },
    {
        id:11,
        name:"Arcane Surge",
        class:"Sorcerer",
        roastLevel:"Medium-Dark",
        caffeineLevel:"Very High",
        flavorNotes:["Explosive", "Spice", "Wild Berry", "Chaotic"],
        description:"An unpredictable medium-dark roast with wild magic energy. Explosive spice notes burst with wild berry chaos and crackling intensity. Dangerously high caffeine - handle with care, or embrace the chaos.",
        tagline:"Unleash your inner power",
        image:sorcererImg,
        category:'coffee'
    },
    {
        id:12,
        name:"Pact Brew",
        class:"Warlock",
        roastLevel:'Dark',
        caffeineLevel:"Very High",
        flavorNotes:["Mysterious", "Black Cherry", "Smoke", "Forbidden"],
        description:"A dark, mysterious roast bound by ancient flavor pacts. Deep black cherry notes emerge through mystical smoke creating an otherwordly experience. The caffeine price? Your sleep. Worth it",
        tagline:"Power has a price, and it's delicious",
        image:warlockImg,
        category:'coffee'
    },
    {
        id:13,
        name:"Elder Sigil Roast",
        class:"Wizard",
        roastLevel:"Light",
        caffeineLevel:"High",
        flavorNotes:["Complex", "Citrus", "Floral", "Refined"],
        description:"A sophisticated light roast for the discerning scholar. Bright citrus notes intertwine with delicate floral undertones and a whisper of bergamot. Complex, cerebral, and perfectly calibrated for long study sessions in the tower.",
        tagline:"Knowledge tastes like excellence",
        image:wizardImg,
        category:'coffee'
    },
]
//Helper Functions to get product with size selction
export const getProductsWithSize = (productId, sizeId, grindType = null) =>{
    const product = products.find(p => p.id === productId)

    let size = boxSizes.find(s => s.id === sizeId)
    const isBag = sizeId.startsWith('bag-')

    if(isBag){
        size = bagSizes.find(s => s.id === sizeId)
    }

    if(!product || !size) return null

    return {
        ...product,
        selectedSize:size,
        grindType: isBag? grindType : null,
        finalPrice:size.price,
        productType: isBag? "bag":"pods"
    }
}