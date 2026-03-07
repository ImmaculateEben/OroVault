// ============================================================
// Watch Store — Product Catalog (50+ Products)
// ============================================================

const products = [
  // ── LUXURY (10) ──────────────────────────────────────────
  {
    id: 1,
    name: "Chrono Prestige I",
    brand: "Aurevine",
    category: "Luxury",
    price: 2499,
    originalPrice: 2999,
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"
    ],
    description: "An exquisite timepiece crafted from 18K rose gold with a Swiss automatic movement. The sapphire crystal dial features luminous hour markers and a date complication at 3 o'clock, making this a perfect blend of form and function.\n\nThe 42mm case is meticulously polished by hand, taking over 12 hours to achieve the mirror-like finish that Aurevine is renowned for. Each edge is chamfered at precisely 45 degrees, catching the light with every subtle movement of the wrist.\n\nWater resistant to 100 meters, this watch transitions effortlessly from the boardroom to a weekend sailing trip. The genuine alligator leather strap is hand-stitched in Italy, developing a unique patina over time that makes each piece truly one-of-a-kind.\n\nThe transparent caseback reveals the beautifully decorated movement, featuring C\u00f4tes de Gen\u00e8ve striping and blued screws \u2014 a testament to the artisan\u2019s dedication to perfection even in the unseen details.",
    specs: "Case: 42mm Rose Gold | Movement: Swiss Automatic | Crystal: Sapphire | Water Resistance: 100m | Strap: Genuine Alligator Leather",
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 2,
    name: "Royal Tourbillon",
    brand: "Aurevine",
    category: "Luxury",
    price: 4999,
    originalPrice: 5499,
    rating: 4.9,
    reviews: 87,
    images: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600"
    ],
    description: "A masterpiece of horology featuring an exposed tourbillon at 6 o\u2019clock. Hand-finished 950 platinum case with guilloché dial. Limited edition of 500 pieces worldwide, each accompanied by a certificate of authenticity signed by the master watchmaker.\n\nThe tourbillon cage rotates once every 60 seconds, continuously compensating for the effects of gravity on the movement\u2019s accuracy. Visible through the open-worked dial, it is a mesmerizing display of mechanical precision that has captivated collectors for centuries.\n\nEvery surface of the guilloché dial is engine-turned by hand using a traditional rose engine lathe, a nearly lost art that Aurevine has painstakingly preserved. The resulting pattern creates a hypnotic play of light that photographs simply cannot capture.\n\nThe hand-stitched crocodile strap is sourced from a single French tannery that has supplied the world\u2019s finest maisons since 1870. A deployant clasp in matching platinum ensures the bracelet sits securely and comfortably on the wrist.",
    specs: "Case: 40mm Platinum | Movement: Manual Tourbillon | Crystal: Sapphire | Water Resistance: 50m | Strap: Hand-Stitched Crocodile",
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 3,
    name: "Eternum Grand Date",
    brand: "Maison Élaire",
    category: "Luxury",
    price: 3299,
    originalPrice: 3799,
    rating: 4.7,
    reviews: 65,
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600"
    ],
    description: "Elegant grand date display with moon phase indicator. The hand-polished white gold case houses a COSC-certified chronometer movement, guaranteeing accuracy to within -4/+6 seconds per day. A watch for the true connoisseur.\n\nThe oversized date window at 12 o\u2019clock uses two overlapping discs to display the date in a format that is both striking and effortlessly legible. The moon phase complication is accurate to within one day every 122 years, requiring virtually no correction in a lifetime.\n\nMaison \u00c9laire has paired this exceptional caliber with a dial finished in a rich silver-white opaline, complemented by applied rose gold hour markers and leaf-shaped hands. The result is a timepiece that exudes quiet confidence rather than ostentatious display.",
    specs: "Case: 41mm White Gold | Movement: COSC Chronometer | Crystal: Sapphire | Water Resistance: 30m | Strap: Italian Calfskin",
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 4,
    name: "Noir Skeleton",
    brand: "Maison Élaire",
    category: "Luxury",
    price: 3899,
    originalPrice: null,
    rating: 4.6,
    reviews: 42,
    images: [
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600"
    ],
    description: "A mesmerizing skeleton dial reveals the intricate workings of the manually wound movement. Black DLC-coated titanium case with matching bracelet. Bold and unapologetically modern, the Noir Skeleton is for those who appreciate the mechanical artistry hidden inside a watch.\n\nEvery bridge and plate has been redesigned to serve a dual purpose \u2014 structural integrity and visual drama. The movement is finished in matte black with polished bevels that catch the light like veins of silver running through obsidian.\n\nThe DLC (Diamond-Like Carbon) coating provides virtually scratch-proof protection while keeping the overall weight remarkably light at just 85 grams on the wrist. The 44mm case makes a bold statement, yet the ergonomic lugs ensure it wears comfortably even on smaller wrists.\n\nWinding the watch each morning becomes a meditative ritual, connecting you to a centuries-old tradition of mechanical watchmaking. The 72-hour power reserve means even a weekend away won\u2019t leave you without the time.",
    specs: "Case: 44mm DLC Titanium | Movement: Manual Skeleton | Crystal: Sapphire | Water Resistance: 50m | Bracelet: DLC Titanium",
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: 5,
    name: "Heritage 1955",
    brand: "Castellane",
    category: "Luxury",
    price: 2899,
    originalPrice: 3200,
    rating: 4.8,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600"
    ],
    description: "Inspired by the golden age of watchmaking, the Heritage 1955 faithfully recreates the iconic dress watch that established Castellane\u2019s reputation over seven decades ago. The enamel dial with blued steel cathedral hands captures an era when craftsmanship was king.\n\nThe original 1955 model was created for European diplomats who needed a watch that conveyed authority and taste without excess. This modern reissue stays true to that philosophy, housing a contemporary automatic caliber inside a case that is dimensionally identical to the original.\n\nThe grand feu enamel dial undergoes multiple firings at over 800\u00b0C, each layer adding depth and luminosity. The result is a surface with an almost liquid quality that will look exactly the same in 100 years as it does today \u2014 enamel does not fade, discolor, or age.\n\nPaired with a shell cordovan strap from Horween Leather in Chicago, the Heritage 1955 bridges continents and centuries. It is a watch that your grandchildren will one day wear with the same pride.",
    specs: "Case: 38mm Yellow Gold | Movement: Automatic | Crystal: Domed Sapphire | Water Resistance: 30m | Strap: Brown Shell Cordovan",
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 6,
    name: "Sovereign Perpetual",
    brand: "Castellane",
    category: "Luxury",
    price: 6999,
    originalPrice: null,
    rating: 5.0,
    reviews: 34,
    images: [
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600"
    ],
    description: "A perpetual calendar complication that requires no adjustment until 2100. Displays day, date, month, moonphase, and leap year indicator. The pinnacle of Castellane craftsmanship and one of the most complex mechanical watches in this collection.\n\nThe perpetual calendar mechanism consists of over 200 individual components, all working in concert to account for the varying lengths of months \u2014 including the leap year cycle. Once set, this watch will faithfully track every calendar nuance for generations.\n\nHoused in a 41mm platinum case, the Sovereign Perpetual has a presence on the wrist that is both commanding and refined. The navy alligator strap adds a dash of personality, while the pin buckle in matching platinum ensures a secure fit.\n\nEach Sovereign Perpetual is assembled by a single master watchmaker over the course of three months. The caseback is engraved with the watchmaker\u2019s personal mark \u2014 a tradition Castellane has maintained since its founding.",
    specs: "Case: 41mm Platinum | Movement: Perpetual Calendar Automatic | Crystal: Sapphire | Water Resistance: 30m | Strap: Navy Alligator",
    inStock: false,
    isNew: true,
    isFeatured: true
  },
  {
    id: 7,
    name: "Midnight Lune",
    brand: "Vostel",
    category: "Luxury",
    price: 1999,
    originalPrice: 2499,
    rating: 4.5,
    reviews: 98,
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600"
    ],
    description: "Aventurine dial mimics a starlit sky, complemented by a moonphase display at 6 o\u2019clock. Polished steel case with diamond-set bezel \u2014 romance captured on your wrist in mechanical form.\n\nThe aventurine stone used for the dial is carefully selected from a limited supply in Italy. Each piece contains naturally occurring copper inclusions that shimmer like distant stars, meaning no two dials are ever exactly alike. Under candlelight, the effect is nothing short of magical.\n\nForty brilliant-cut diamonds totaling 0.45 carats are individually set into the bezel by hand, each stone selected for matching color, clarity, and fire. The midnight blue satin strap evokes the twilight sky, completing the celestial narrative.\n\nAt 36mm, the Midnight Lune is designed for those who prefer understated elegance over imposing size. The automatic movement provides the convenience of self-winding, so you can simply put it on and lose yourself in the stars.",
    specs: "Case: 36mm Steel | Movement: Automatic | Crystal: Sapphire | Water Resistance: 50m | Strap: Midnight Blue Satin",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 8,
    name: "Imperiale Chrono",
    brand: "Vostel",
    category: "Luxury",
    price: 3599,
    originalPrice: null,
    rating: 4.7,
    reviews: 71,
    images: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600"
    ],
    description: "Column-wheel chronograph with vertical clutch for instantaneous start-stop precision. Bi-compax layout with 30-minute counter and tachymeter bezel for speed calculations. A true instrument for measuring time and performance.\n\nThe vertical clutch mechanism is the gold standard for chronograph design, allowing the chronograph seconds hand to start without the slightest skip or stutter. The column wheel provides a tactile, satisfying click with each pusher press that cheaper cam-lever systems simply cannot replicate.\n\nThe two-tone steel and rose gold construction strikes a balance between sportiness and sophistication. Whether you\u2019re timing a presentation or lapping a race circuit, the Imperiale Chrono delivers unerring accuracy with unmistakable style.\n\nWater resistant to 100 meters with a screw-down crown and pushers, this chronograph is as robust as it is beautiful. The bracelet features a micro-adjustment clasp, ensuring the perfect fit regardless of temperature or activity level.",
    specs: "Case: 43mm Steel & Rose Gold | Movement: Automatic Chronograph | Crystal: Sapphire | Water Resistance: 100m | Bracelet: Two-Tone Steel",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 9,
    name: "Opulent Diamond",
    brand: "Aurevine",
    category: "Luxury",
    price: 8499,
    originalPrice: 9999,
    rating: 4.9,
    reviews: 23,
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600"
    ],
    description: "Encrusted with 2.5 carats of VS-clarity diamonds, the Opulent Diamond redefines luxury wrist art. A mother-of-pearl dial with cabochon crown creates a piece that is as much jewelry as it is timepiece.\n\nEach of the 120 diamonds is hand-selected by Aurevine\u2019s master gemologist to ensure consistent color, cut, and brilliance. The pav\u00e9 setting technique used for the bezel and bracelet links creates a seamless river of light that flows across the surface of the watch.\n\nThe mother-of-pearl dial exhibits a unique iridescence that shifts between soft pink, blue, and green hues depending on the angle of light. No two dials are identical \u2014 each is cut from a single shell and polished to a mirror finish.\n\nDespite its lavish exterior, the Opulent Diamond maintains the precision of a fine Swiss quartz movement. The 34mm white gold case is designed for the refined wrist, making an unforgettable impression at galas, openings, and intimate dinner parties alike.",
    specs: "Case: 34mm White Gold | Movement: Quartz | Crystal: Sapphire | Water Resistance: 30m | Bracelet: White Gold & Diamond",
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 10,
    name: "Le Grand Classic",
    brand: "Maison Élaire",
    category: "Luxury",
    price: 2199,
    originalPrice: null,
    rating: 4.6,
    reviews: 110,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600"
    ],
    description: "The quintessential dress watch. Ultra-thin profile at just 7mm, with a silver sunburst dial and dauphine hands. Understated elegance at its finest \u2014 a watch that whispers rather than shouts.\n\nMaison \u00c9laire\u2019s engineers spent two years developing the ultra-thin automatic movement that powers the Le Grand Classic. At just 2.9mm thick, it is one of the slimmest self-winding calibers in its price range, yet delivers a solid 42-hour power reserve.\n\nThe sunburst dial finish is achieved through a precise radial brushing process that creates rays emanating from the center. In direct light, the effect is warm and luminous; in subdued lighting, it takes on a cool, silvery sophistication.\n\nThe black calfskin strap with tone-on-tone stitching completes the minimalist aesthetic. This is the watch for professionals who let their achievements speak for themselves and want a timepiece that does the same.",
    specs: "Case: 39mm Steel | Movement: Ultra-Thin Automatic | Crystal: Sapphire | Water Resistance: 30m | Strap: Black Calfskin",
    inStock: true,
    isNew: false,
    isFeatured: false
  },

  // ── SPORT (10) ───────────────────────────────────────────
  {
    id: 11,
    name: "Aqua Diver Pro",
    brand: "Horizone",
    category: "Sport",
    price: 899,
    originalPrice: 1099,
    rating: 4.7,
    reviews: 234,
    images: [
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600"
    ],
    description: "Professional-grade dive watch rated to 300 meters. Unidirectional rotating ceramic bezel with luminous markers ensures safe timing of underwater excursions. The helium escape valve allows for saturation diving operations at extreme depths.\n\nThe Aqua Diver Pro was developed in partnership with commercial dive teams in the North Sea, tested in conditions that would destroy lesser instruments. The ceramic bezel insert is virtually scratch-proof and maintains its vivid color markings even after years of saltwater exposure.\n\nSuper-LumiNova BGW9 coats the hands, hour markers, and bezel pip, providing exceptional legibility in zero-visibility conditions. The 44mm steel case is substantial without being unwieldy, and the integrated diver extension on the bracelet allows the watch to be worn over a wetsuit.\n\nWhether you\u2019re descending to a coral reef or sitting at a caf\u00e9 by the harbor, the Aqua Diver Pro delivers the confidence that comes with genuine professional-grade equipment on your wrist.",
    specs: "Case: 44mm Steel | Movement: Automatic | Crystal: Sapphire | Water Resistance: 300m | Bracelet: Steel with Diver Extension",
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 12,
    name: "Summit Chronograph",
    brand: "Horizone",
    category: "Sport",
    price: 749,
    originalPrice: null,
    rating: 4.5,
    reviews: 189,
    images: [
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600",
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"
    ],
    description: "Built for altitude and adventure, the Summit Chronograph packs altimeter, barometer, and compass functions into a rugged titanium case. Scratch-resistant sapphire crystal with anti-reflective coating ensures legibility at any angle, even in blinding mountain sun.\n\nThe triple-sensor module draws data from a precision barometric pressure sensor, a 3-axis compass, and calculated altitude readings accurate to \u00b11 meter. Storm alerts based on rapid pressure drops give you critical advance warning when weather turns treacherous.\n\nGrade 2 titanium construction makes the Summit Chronograph 40% lighter than an equivalent steel watch, a difference you\u2019ll appreciate during long summit pushes or trail runs. The NATO nylon strap is military-spec, rated to withstand over 300 kg of load.\n\nThe anti-reflective coating on both sides of the sapphire crystal eliminates glare, making the display crystal-clear whether you\u2019re navigating by compass or checking altitude halfway up a rock face. This is a watch that works as hard as you do.",
    specs: "Case: 46mm Titanium | Movement: Quartz ABC Sensor | Crystal: Sapphire AR | Water Resistance: 100m | Strap: NATO Nylon",
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 13,
    name: "Rally GT Carbon",
    brand: "Korver",
    category: "Sport",
    price: 1299,
    originalPrice: 1599,
    rating: 4.6,
    reviews: 145,
    images: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600",
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600"
    ],
    description: "Motorsport-inspired chronograph with carbon fiber dial and tachymeter bezel. The flyback function allows instant chronograph reset and restart without stopping \u2014 essential for timing consecutive laps on the track.\n\nThe carbon fiber dial is not merely decorative; it is forged from the same material used in Formula 1 chassis construction. The characteristic twill weave pattern catches the light at different angles, adding depth and texture that changes with every glance.\n\nKorver developed the Rally GT Carbon in consultation with professional racing drivers who demanded a timing instrument as precise and reliable as their cars. The perforated racing strap is designed to breathe during high-adrenaline moments, keeping your wrist cool and the watch firmly in place.\n\nThe flyback chronograph mechanism is one of the most complex and expensive to manufacture, yet Korver has made it accessible. Push, reset, restart \u2014 all in a single fluid motion. It\u2019s the difference between a tool and a masterpiece.",
    specs: "Case: 44mm Carbon & Steel | Movement: Automatic Flyback Chrono | Crystal: Sapphire | Water Resistance: 100m | Strap: Perforated Leather",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 14,
    name: "Titanium Force",
    brand: "Korver",
    category: "Sport",
    price: 999,
    originalPrice: null,
    rating: 4.4,
    reviews: 167,
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600"
    ],
    description: "Ultra-light at just 68 grams on the wrist, the Titanium Force proves that toughness and comfort are not mutually exclusive. Grade 5 titanium construction with DLC coating for superior scratch resistance. Day-date display with Super-LumiNova for round-the-clock legibility.\n\nGrade 5 titanium (Ti-6Al-4V) is the same alloy used in aerospace and medical implant applications \u2014 it is biocompatible, hypoallergenic, and extraordinarily strong for its weight. The DLC (Diamond-Like Carbon) coating adds an additional layer of hardness, giving the case a stealthy gunmetal appearance.\n\nThe automatic movement inside is mounted on silent-bloc shock absorbers, protecting it from the impacts of an active lifestyle. Whether you\u2019re mountain biking, hiking, or simply navigating a busy commute, the Titanium Force takes everything in stride.\n\nWith 200 meters of water resistance and a screw-down crown, this watch is ready for spontaneous ocean swims, rain storms, and anything the elements throw at it. The titanium bracelet features a micro-adjust clasp for a perfect fit in any conditions.",
    specs: "Case: 42mm Grade 5 Titanium DLC | Movement: Automatic | Crystal: Sapphire | Water Resistance: 200m | Bracelet: Titanium",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 15,
    name: "Marathon Solar",
    brand: "Nexwatch",
    category: "Sport",
    price: 349,
    originalPrice: 449,
    rating: 4.3,
    reviews: 312,
    images: [
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600"
    ],
    description: "Solar-powered sports watch with 6-month power reserve \u2014 set it and forget it. World time display with 38 time zones makes this the ideal companion for the frequent traveler. 1/100 second chronograph and countdown timer cover every timing need.\n\nThe high-efficiency solar cell is integrated beneath the dial, harvesting energy from any light source \u2014 sunlight, office fluorescents, even a bedside lamp. A full charge in direct sunlight takes just four hours and powers the watch for up to six months in complete darkness.\n\nAt a price point that defies expectations, the Marathon Solar delivers features typically found in watches costing three times as much. The 1/100 second chronograph is accurate enough for professional athletics, while the world time function displays the current time in any of 38 cities around the globe.\n\nThe silicone strap is comfortable for extended wear during workouts and resists sweat, saltwater, and UV degradation. If you need one watch that does everything without ever needing a battery change, the Marathon Solar is your answer.",
    specs: "Case: 45mm Resin & Steel | Movement: Solar Quartz | Crystal: Mineral | Water Resistance: 100m | Strap: Silicone",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 16,
    name: "Expedition GMT",
    brand: "Horizone",
    category: "Sport",
    price: 1199,
    originalPrice: null,
    rating: 4.7,
    reviews: 198,
    images: [
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600",
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600"
    ],
    description: "Dual time zone GMT with independently adjustable hour hand \u2014 perfect for tracking home time while traveling. The red and blue ceramic bezel insert pays homage to the classic \u2018Pepsi\u2019 GMT watches of the 1960s, reimagined with modern materials.\n\nThe independently adjustable local hour hand can be set without stopping the seconds hand, making time zone changes as simple as pulling the crown and clicking forward. The 24-hour hand on the GMT scale lets you distinguish between day and night in your home time zone.\n\nHorizonne\u2019s 70-hour power reserve means you can take the watch off Friday evening and skip straight to Monday morning without missing a beat. The oyster-style bracelet features solid end links and a glide-lock clasp with 18mm of micro-adjustment.\n\nCeramic bezel inserts are fade-proof, scratch-resistant, and will look factory-fresh for decades. Whether you\u2019re flying between continents or simply want the reassurance of a second time zone, the Expedition GMT is built for the long haul.",
    specs: "Case: 40mm Steel | Movement: Automatic GMT | Crystal: Sapphire | Water Resistance: 200m | Bracelet: Oyster-style Steel",
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 17,
    name: "Stealth Tactical",
    brand: "Korver",
    category: "Sport",
    price: 599,
    originalPrice: 749,
    rating: 4.5,
    reviews: 223,
    images: [
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600"
    ],
    description: "Military-spec tactical watch with tritium gas tubes for constant visibility without relying on external light exposure. Sapphire crystal with anti-reflective coating eliminates glare in any operational environment. Carbon-reinforced polymer case keeps weight down.\n\nUnlike Super-LumiNova, which fades after a few hours without light, tritium gas tubes glow continuously for over 25 years with no charging required. In pitch-black conditions, the Stealth Tactical remains fully legible \u2014 a critical advantage for night operations and tactical scenarios.\n\nThe carbon-reinforced polymer case is not only lighter than steel but also non-magnetic and non-reflective, making it the preferred choice for military and law enforcement professionals who cannot afford a glinting watch to compromise their position.\n\nThe ballistic nylon strap is the same grade used in military load-bearing equipment. It won\u2019t stretch, fray, or absorb water, and it dries in minutes after submersion. The Stealth Tactical is certified to MIL-STD-810 for shock, vibration, and temperature extremes.",
    specs: "Case: 46mm Carbon Polymer | Movement: Swiss Quartz | Crystal: Sapphire AR | Water Resistance: 200m | Strap: Ballistic Nylon",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 18,
    name: "Ocean Master 500",
    brand: "Nexwatch",
    category: "Sport",
    price: 1599,
    originalPrice: null,
    rating: 4.8,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600"
    ],
    description: "500-meter professional diving instrument engineered for the most demanding underwater operations. Monoblock titanium case with automatic helium release valve, featuring an internal rotating bezel operated by the crown at 4 o\u2019clock to prevent accidental misalignment.\n\nThe monoblock case construction means the entire case is milled from a single block of Grade 2 titanium, eliminating weak points found in traditional multi-piece designs. At 500 meters, the pressure exerted on the crystal is equivalent to 50 kilograms per square centimeter \u2014 and the Ocean Master handles it without flinching.\n\nThe 5.5mm-thick sapphire crystal is the thickest in Nexwatch\u2019s lineup, providing distortion-free readability at depth. The crown-operated internal bezel means there are no external rotating parts that could be damaged by impacts or entanglement.\n\nDespite its professional pedigree, the Ocean Master 500 is comfortable enough for daily wear above sea level. The rubber strap with titanium buckle is skin-friendly, quick-drying, and virtually indestructible.",
    specs: "Case: 47mm Titanium | Movement: Automatic | Crystal: Sapphire (5.5mm thick) | Water Resistance: 500m | Strap: Rubber with Titanium Buckle",
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: 19,
    name: "Velocity Lap Timer",
    brand: "Korver",
    category: "Sport",
    price: 849,
    originalPrice: 999,
    rating: 4.4,
    reviews: 134,
    images: [
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600"
    ],
    description: "Split-second chronograph designed for motorsport timing, capable of recording up to 99 lap times. High-contrast orange accents against the dark dial provide quick readability at speed when fractions of a second matter.\n\nThe mecha-quartz movement combines the sweep of a mechanical chronograph seconds hand with the accuracy of a quartz oscillator. The result is the satisfying \u2018sweep\u2019 motion beloved by watch enthusiasts, paired with accuracy that never drifts beyond \u00b115 seconds per month.\n\nThe 44mm steel PVD case is finished in a stealthy matte black that resists fingerprints and minor scratches. Orange accents on the seconds hand, subdial hands, and crown guards pay homage to the high-visibility safety colors used in professional racing.\n\nThe rubber strap features an integrated deployant clasp that prevents accidental release, even under the G-forces experienced in a fast corner. For amateur racers and motorsport fans, the Velocity Lap Timer brings professional-grade timing to the wrist.",
    specs: "Case: 44mm Steel PVD | Movement: Mecha-Quartz Chrono | Crystal: Sapphire | Water Resistance: 100m | Strap: Rubber with Deployant",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 20,
    name: "Trail Blazer Solar",
    brand: "Nexwatch",
    category: "Sport",
    price: 499,
    originalPrice: null,
    rating: 4.6,
    reviews: 256,
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600"
    ],
    description: "Eco-friendly solar-powered field watch with compass bearing display, built to outlast any trail. Tough construction with carbon fiber insert bezel makes the Trail Blazer Solar a rugged companion for outdoor adventures without the guilt of disposable batteries.\n\nPowered entirely by light, the Trail Blazer Solar converts both natural and artificial illumination into reliable energy. The power-save function extends the charge to 9 months in total darkness, so even during the shortest winter days, your watch keeps ticking.\n\nThe compass bearing function provides 16-point directional readings, helping you orient a map or verify your heading on the trail. Combined with the inherent robustness of a carbon-and-steel case, this is a watch that thrives in the great outdoors.\n\nThe canvas and leather strap develops a beautiful patina over time, becoming softer and more comfortable with age. Nexwatch plants one tree for every Trail Blazer sold, making this a purchase you can feel good about in more ways than one.",
    specs: "Case: 43mm Steel & Carbon | Movement: Solar Quartz | Crystal: Sapphire | Water Resistance: 100m | Strap: Canvas & Leather",
    inStock: true,
    isNew: false,
    isFeatured: true
  },

  // ── CASUAL (10) ──────────────────────────────────────────
  {
    id: 21,
    name: "Everyday Classic",
    brand: "Timecraft",
    category: "Casual",
    price: 199,
    originalPrice: 249,
    rating: 4.4,
    reviews: 456,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600"
    ],
    description: "A versatile daily wear watch with clean lines and easy readability, designed to transition seamlessly from the office to the weekend. The stainless steel case with mesh bracelet offers a modern Scandinavian aesthetic that pairs with everything in your wardrobe.\n\nThe Japanese quartz movement is reliable, low-maintenance, and accurate to \u00b120 seconds per month. With a 10-year battery life, the Everyday Classic is truly a set-and-forget timepiece that rewards you with years of faithful service.\n\nThe mesh bracelet features a sliding clasp that allows infinite micro-adjustment \u2014 simply slide it to the exact position that feels right, without the limitations of fixed sizing holes. It\u2019s remarkably comfortable, breathable, and never pulls arm hair.\n\nAt 40mm with a slim 9mm profile, the Everyday Classic sits unobtrusively on the wrist. The dial is clean and uncluttered, with applied indices and a date window at 3 o\u2019clock providing just enough functionality without visual noise.",
    specs: "Case: 40mm Steel | Movement: Japanese Quartz | Crystal: Mineral | Water Resistance: 50m | Bracelet: Mesh Steel",
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 22,
    name: "Canvas Explorer",
    brand: "Timecraft",
    category: "Casual",
    price: 149,
    originalPrice: null,
    rating: 4.3,
    reviews: 387,
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600"
    ],
    description: "Rugged-meets-refined field watch with a waxed canvas strap and sandwich dial construction for superior legibility. The Canvas Explorer is the perfect companion for urban exploration and weekend escapes alike.\n\nThe sandwich dial design features cutouts in the top dial layer that reveal a luminous layer beneath. This construction method creates three-dimensional depth and ensures readability in all lighting conditions, from bright sunshine to total darkness.\n\nThe brushed steel case is intentionally left without high-polished surfaces \u2014 every scratch and mark earned through daily wear adds character rather than detracting from its appearance. This is a watch designed to be worn, not coddled.\n\nThe waxed canvas strap from a British heritage mill develops a unique patina over time, softening and molding to your wrist. It\u2019s water-resistant, breathable, and easy to swap thanks to quick-release spring bars.",
    specs: "Case: 42mm Brushed Steel | Movement: Automatic | Crystal: Hardened Mineral | Water Resistance: 100m | Strap: Waxed Canvas",
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: 23,
    name: "Minimalist Blanc",
    brand: "Elston",
    category: "Casual",
    price: 179,
    originalPrice: 219,
    rating: 4.5,
    reviews: 298,
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600"
    ],
    description: "Less is more. A pure white dial with no indices, just two slender hands marking the passage of time. The Minimalist Blanc is a design statement that reduces timekeeping to its essence.\n\nThe ultra-thin 6.5mm case is achieved through a Swiss quartz movement that measures just 1.5mm in height. On the wrist, the Minimalist Blanc practically disappears, making it ideal for those who want to tell time without making a spectacle of it.\n\nThe Italian leather strap is sourced from Tuscany and treated with natural vegetable tanning processes. It arrives supple and refined, developing warm tones and a soft hand-feel with daily wear. Multiple strap colors are available to suit your mood.\n\nSapphire crystal protects the dial from scratches, ensuring that pristine white surface remains unblemished. Elston's design philosophy is clear: remove everything unnecessary until only beauty remains.",
    specs: "Case: 38mm Steel | Movement: Swiss Quartz | Crystal: Sapphire | Water Resistance: 30m | Strap: Italian Leather",
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 24,
    name: "Retro California",
    brand: "Elston",
    category: "Casual",
    price: 229,
    originalPrice: null,
    rating: 4.6,
    reviews: 176,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600"
    ],
    description: "California dial blending Roman and Arabic numerals for a unique vintage aesthetic that defies convention. Domed acrylic crystal adds to the retro charm, creating a warm distortion that modern sapphire crystals deliberately avoid.\n\nThe California dial originated in the 1930s as a way to improve legibility for both analog and digital-trained eyes. The upper half features Roman numerals (XII, I, II) while the lower half uses Arabic numbers (6, 7, 8), creating a visually distinctive and historically rich design.\n\nThe Miyota automatic movement provides the heartbeat of mechanical horology at an accessible price point. Wind it by hand or let the rotor do the work \u2014 either way, you\u2019re connected to a centuries-old tradition of self-powered timekeeping.\n\nAvailable in five dial colors \u2014 cream, sage green, salmon, sky blue, and charcoal \u2014 the Retro California lets you express your personality on your wrist. The suede leather strap adds tactile warmth to the vintage character.",
    specs: "Case: 40mm Steel | Movement: Automatic Miyota | Crystal: Domed Acrylic | Water Resistance: 50m | Strap: Suede Leather",
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: 25,
    name: "Weekend Aviator",
    brand: "Timecraft",
    category: "Casual",
    price: 269,
    originalPrice: 329,
    rating: 4.4,
    reviews: 203,
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"
    ],
    description: "Pilot-style casual watch with oversized crown for easy operation, even with gloves. Type-B dial with inner rotating hour ring follows the classic navigational instrument design first developed for WWII aviators.\n\nThe Type-B dial configuration places minutes on the outer ring and hours on an inner triangle-marked ring. Originally designed so pilots could time navigation legs at a glance, it has become an icon of aviation watchmaking that continues to captivate collectors today.\n\nThe riveted leather strap is a nod to the original pilot watch straps of the 1940s, where rivets reinforced the leather at stress points during high-G maneuvers. Today, they serve as a stylistic tribute to that daring era of flight.\n\nQuick-release spring bars make strap changes a 30-second affair, allowing you to switch from the riveted leather to a NATO nylon for a more casual look in moments.",
    specs: "Case: 42mm Steel | Movement: Automatic | Crystal: Sapphire | Water Resistance: 50m | Strap: Riveted Brown Leather",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 26,
    name: "Coastal Breeze",
    brand: "Elston",
    category: "Casual",
    price: 159,
    originalPrice: null,
    rating: 4.2,
    reviews: 334,
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"
    ],
    description: "Beach-ready casual watch with a gradient blue dial evoking the transition from shallow turquoise shallows to deep ocean blue. Lightweight fibreglass-reinforced case keeps weight down while maintaining toughness.\n\nThe solar-powered quartz movement is charged by any light source, eliminating battery changes entirely. The quick-dry recycled nylon strap is made from recovered ocean-bound plastic, giving discarded materials a second life on your wrist.\n\nThe gradient blue dial is achieved through a multi-step pad-printing process, carefully layering translucent inks to create a smooth transition that mirrors the ocean\u2019s color palette. Applied silver indices catch the sunlight like whitecaps on the water.\n\nAt 100 meters of water resistance, the Coastal Breeze handles swimming, snorkeling, and beach activities with ease. Rinse it with fresh water afterward, shake it dry, and it\u2019s ready for tomorrow\u2019s adventure.",
    specs: "Case: 40mm Fiberglass | Movement: Solar Quartz | Crystal: Mineral | Water Resistance: 100m | Strap: Recycled Nylon",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 27,
    name: "Urban Matte Black",
    brand: "Korver",
    category: "Casual",
    price: 299,
    originalPrice: 349,
    rating: 4.5,
    reviews: 267,
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"
    ],
    description: "Murdered-out matte black aesthetic from case to dial to strap. The Urban Matte Black is a sleek statement for the modern urbanite who wants a watch as bold and uncompromising as their city lifestyle.\n\nThe subtle textured dial features a radiating pattern visible only at close range, adding depth without breaking the monochromatic color scheme. Applied indices in matching matte black are distinguished only by their raised profile, catching light at oblique angles.\n\nThe PVD (Physical Vapor Deposition) coating on the 41mm steel case is significantly more durable than traditional plating. It resists scratches, chips, and the everyday knocks of an active urban life while maintaining its deep, rich black finish.\n\nThe black silicone strap is hypoallergenic, sweat-resistant, and virtually maintenance-free. Whether you\u2019re commuting through a rainstorm or stepping out for the evening, the Urban Matte Black remains unfazed and effortlessly stylish.",
    specs: "Case: 41mm Steel PVD | Movement: Automatic | Crystal: Sapphire | Water Resistance: 50m | Strap: Black Silicone",
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 28,
    name: "Bamboo Eco",
    brand: "Timecraft",
    category: "Casual",
    price: 119,
    originalPrice: null,
    rating: 4.1,
    reviews: 445,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600"
    ],
    description: "Sustainably crafted from natural bamboo with a genuine leather strap. At just 28 grams, the Bamboo Eco is one of the lightest watches in the world, sitting so lightly on the wrist you\u2019ll forget it\u2019s there until you need it.\n\nEach case is carved from sustainably harvested bamboo, one of the fastest-growing plants on Earth, requiring no pesticides or irrigation. The natural wood grain ensures that every Bamboo Eco is unique \u2014 a one-of-a-kind piece shaped by nature.\n\nFor every watch sold, Timecraft plants a tree through a verified reforestation partner. To date, the Bamboo Eco program has contributed over 50,000 trees to forests in South America and Southeast Asia.\n\nThe Japanese quartz movement is housed in a stainless steel insert within the bamboo case, providing the reliability and water resistance needed for daily wear. The genuine leather strap is vegetable-tanned and will develop a warm honey tone with age.",
    specs: "Case: 40mm Bamboo Wood | Movement: Japanese Quartz | Crystal: Mineral | Water Resistance: Splash-proof | Strap: Genuine Leather",
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: 29,
    name: "Horizon GMT Casual",
    brand: "Elston",
    category: "Casual",
    price: 339,
    originalPrice: 399,
    rating: 4.6,
    reviews: 142,
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600"
    ],
    description: "Travel-ready GMT in a casual package. Pepsi-colored aluminum bezel insert with a jubilee-style bracelet makes tracking two time zones effortless and stylish.\n\nThe aluminum bezel insert is lightweight, anodized in two tones of red and blue, and designed to distinguish AM from PM hours in a second time zone. The jubilee-style bracelet provides a dressy look while remaining comfortable for all-day wear.\n\nThe GMT complication is powered by a reliable automatic movement with an independently adjustable local hour hand. Crossing time zones is as simple as pulling the crown and clicking the hour hand forward or back without affecting the running seconds.\n\nAt 40mm, the Horizon GMT Casual hits the sweet spot for wrist presence without excess. It\u2019s equally at home on a long-haul flight as it is at a weekend brunch, embodying the laid-back versatility that defines Elston\u2019s design language.",
    specs: "Case: 40mm Steel | Movement: Automatic GMT | Crystal: Sapphire | Water Resistance: 100m | Bracelet: Jubilee Steel",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 30,
    name: "Linen Day-Date",
    brand: "Timecraft",
    category: "Casual",
    price: 189,
    originalPrice: null,
    rating: 4.3,
    reviews: 321,
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"
    ],
    description: "Textured linen-pattern dial with day and date windows brings a subtle warmth to the wrist. The comfortable curved case back hugs the natural contour of your arm, making this the perfect everyday companion that never tries too hard.\n\nThe linen-textured dial is created through a stamping process that embosses a fine woven pattern into the metal surface. The result is a tactile, fabric-like quality that sets the Linen Day-Date apart from the flat, featureless dials found at this price point.\n\nDay and date windows at 3 o\u2019clock provide practical functionality without cluttering the clean layout. The tan leather strap with contrast stitching adds a casual warmth that pairs naturally with rolled sleeves and weekend wear.\n\nTimecraft designed the Linen Day-Date as a \u2018no-brainer\u2019 daily wearer \u2014 reliable, comfortable, handsome, and priced so you never worry about wearing it to the beach, the garden, or the office.",
    specs: "Case: 39mm Steel | Movement: Quartz | Crystal: Mineral | Water Resistance: 50m | Strap: Tan Leather",
    inStock: true,
    isNew: false,
    isFeatured: false
  },

  // ── SMART (10) ───────────────────────────────────────────
  {
    id: 31,
    name: "Pulse Pro Ultra",
    brand: "Zentrek",
    category: "Smart",
    price: 449,
    originalPrice: 499,
    rating: 4.6,
    reviews: 567,
    images: [
      "https://images.unsplash.com/photo-1544117519-31731f4fcddc?w=600",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600"
    ],
    description: "Advanced health monitoring with ECG, SpO2, and continuous heart rate tracking \u2014 the Pulse Pro Ultra puts a medical-grade sensor suite on your wrist. The always-on AMOLED display delivers 1000 nits of brightness, readable even in direct sunlight.\n\nThe 14-day battery life sets the Pulse Pro Ultra apart from competitors that barely last two days. Zentrek achieved this through an efficient chipset and intelligent power management that reduces display refresh rates when the wrist is stationary.\n\nBeyond health metrics, the Pulse Pro Ultra supports over 150 workout modes, contactless payments, music storage with offline Spotify, and a full app ecosystem via WearOS. It\u2019s a smartwatch that replaces your phone for hours at a time.\n\nThe 1.43-inch AMOLED screen is protected by hardened glass and the watch body is rated at 5ATM water resistance. Whether you\u2019re swimming laps, tracking a trail run, or monitoring your heart rhythm overnight, the Pulse Pro Ultra captures every data point.",
    specs: "Display: 1.43\" AMOLED 466×466 | Sensors: ECG, SpO2, HR, Temp | Battery: 14 days | Water: 5ATM | Storage: 32GB | OS: WearOS",
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 32,
    name: "Zenith Fitness",
    brand: "Zentrek",
    category: "Smart",
    price: 299,
    originalPrice: null,
    rating: 4.4,
    reviews: 432,
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600",
      "https://images.unsplash.com/photo-1544117519-31731f4fcddc?w=600",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600"
    ],
    description: "100+ sport modes with AI-powered workout recognition that automatically detects and logs your activity. Built-in GPS with dual-band satellite tracking provides pinpoint route accuracy, even under heavy tree canopy.\n\nThe Zenith Fitness weighs just 32 grams, making it one of the lightest full-featured fitness watches available. You\u2019ll forget you\u2019re wearing it during sleep tracking \u2014 yet it\u2019s always working, analyzing your sleep stages and readiness score for the day ahead.\n\nThe AI coaching engine adapts training suggestions based on your fitness level, recovery state, and goals. It calculates your VO2 Max, training load, and recovery time, helping you push harder when you\u2019re ready and rest when you need it.\n\nWith 10-day battery life and a water resistance rating of 5ATM, the Zenith Fitness handles week-long camping trips and open-water swims without breaking a sweat. The proprietary OS is fast, intuitive, and designed for mid-workout glances.",
    specs: "Display: 1.39\" AMOLED | Sensors: HR, SpO2, GPS | Battery: 10 days | Water: 5ATM | Storage: 8GB | OS: Proprietary",
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 33,
    name: "ClassicHybrid",
    brand: "Elston",
    category: "Smart",
    price: 349,
    originalPrice: 429,
    rating: 4.5,
    reviews: 198,
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600",
      "https://images.unsplash.com/photo-1544117519-31731f4fcddc?w=600",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600"
    ],
    description: "Looks like a classic analog watch, works like a smartwatch. The ClassicHybrid conceals a hidden OLED display behind its physical hands, showing notifications, step counts, and alarms without sacrificing traditional aesthetics.\n\nThe 30-day battery life is the ClassicHybrid\u2019s secret weapon. While conventional smartwatches die after a day or two, this hybrid keeps running for a full month thanks to the e-paper OLED that sips power only when activated by a wrist gesture.\n\nNotifications from your phone appear as scrolling text on the hidden display, visible only to you. Incoming calls, messages, and calendar alerts are delivered silently through a vibration motor so discreet that no one around you will notice.\n\nThe ClassicHybrid comes in three dial colors \u2014 black, silver, and navy \u2014 each paired with a genuine leather strap. It\u2019s the perfect choice for professionals who need smart connectivity but refuse to sacrifice the classic watch look.",
    specs: "Display: Hidden 0.49\" OLED | Sensors: HR, Steps | Battery: 30 days | Water: 50m | Features: Notifications, Sleep, Activity | Style: Analog Hybrid",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 34,
    name: "Atlas Navigator",
    brand: "Zentrek",
    category: "Smart",
    price: 549,
    originalPrice: null,
    rating: 4.7,
    reviews: 276,
    images: [
      "https://images.unsplash.com/photo-1544117519-31731f4fcddc?w=600",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600"
    ],
    description: "Premium outdoor smartwatch with topographic maps and turn-by-turn trail navigation. Solar charging extends battery life to 30+ days under regular outdoor use. MIL-STD-810 certified for shock, vibration, thermal shock, and humidity extremes.\n\nThe Atlas Navigator is the outdoor adventurer\u2019s most trusted tool. Pre-loaded topographic maps cover major trail systems worldwide, with breadcrumb tracking and TracBack navigation to guide you home when the trail runs out.\n\nMulti-GNSS satellite support (GPS, GLONASS, Galileo, BeiDou) ensures accurate positioning even in deep canyons and dense forest. The ABC sensors \u2014 altimeter, barometer, compass \u2014 provide real-time environmental data at a glance.\n\nSolar charging through a transparent panel ring around the display adds hours of runtime every day. In expedition mode, the Atlas Navigator can run for over 60 days, making it ideal for extended wilderness trips where charging isn\u2019t an option.",
    specs: "Display: 1.4\" MIP Color | Sensors: Multi-GNSS, ABC, HR | Battery: 24 days (solar 30+) | Water: 10ATM | Maps: Topo | Build: MIL-STD-810",
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 35,
    name: "Luxe Connect",
    brand: "Vostel",
    category: "Smart",
    price: 699,
    originalPrice: 799,
    rating: 4.3,
    reviews: 134,
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600",
      "https://images.unsplash.com/photo-1544117519-31731f4fcddc?w=600",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600"
    ],
    description: "Where luxury meets technology. The Luxe Connect wraps a full WearOS smartwatch in a ceramic case with sapphire crystal touchscreen, delivering digital intelligence with the prestige of a fine timepiece.\n\nThe ceramic case is twice as hard as stainless steel and virtually scratch-proof, maintaining its polished surface through years of daily wear. The sapphire crystal touchscreen responds to taps and swipes with the same fluidity as a premium smartphone.\n\nNFC payments, voice assistant integration, and a full app store transform the Luxe Connect into a wrist-worn personal assistant. Interchangeable designer straps \u2014 available in leather, metal, and silicone \u2014 allow you to match your watch to the occasion.\n\nWhile smart functionality is the headline, Vostel hasn\u2019t forgotten the fundamentals: always-on display with customizable analog watch faces ensures you can tell the time at a glance, just like a traditional timepiece.",
    specs: "Display: 1.4\" AMOLED Sapphire Touch | Case: Ceramic | Sensors: Full Suite | Battery: 3 days | NFC: Yes | OS: WearOS",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 36,
    name: "Kiddo Track Jr",
    brand: "Nexwatch",
    category: "Smart",
    price: 129,
    originalPrice: 159,
    rating: 4.2,
    reviews: 543,
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600",
      "https://images.unsplash.com/photo-1544117519-31731f4fcddc?w=600"
    ],
    description: "GPS-enabled kids' smartwatch with real-time location sharing, giving parents peace of mind and children a sense of independence. The SOS button triggers an instant alert with the child's exact location to designated emergency contacts.\n\nGeofencing alerts notify parents when their child arrives at or leaves predetermined safe zones like school, home, or a friend's house. The video call feature lets families stay connected face-to-face, even when apart.\n\nFun customizable watch faces and a step-counting game encourage an active lifestyle, turning daily activity into an adventure. The colorful, kid-friendly design is available in six vibrant colors that children love to show off.\n\nIP68 water resistance handles handwashing, rain, and accidental splashes without damage. The 2-day battery life is managed through a dedicated parental control app that also controls permissions, allowed contacts, and usage schedules.",
    specs: "Display: 1.3\" LCD Color Touch | GPS: Real-time | Features: SOS, Geofence, Video Call | Battery: 2 days | Water: IP68",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 37,
    name: "Medic Alert Watch",
    brand: "Zentrek",
    category: "Smart",
    price: 399,
    originalPrice: null,
    rating: 4.8,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1544117519-31731f4fcddc?w=600",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600"
    ],
    description: "Medical-grade health monitoring with FDA-cleared ECG and continuous glucose monitoring support. The Medic Alert Watch brings hospital-grade diagnostics to your wrist, providing actionable health data 24 hours a day.\n\nFall detection uses a combination of accelerometer and gyroscope data to identify hard falls and automatically calls emergency services if the wearer is unresponsive for 30 seconds. The on-screen Medical ID displays critical health information to first responders even when the watch is locked.\n\nContinuous glucose monitoring integration connects wirelessly with compatible CGM sensors, displaying real-time blood glucose levels and trend arrows directly on the watch face. Customizable alerts warn of dangerously high or low readings before symptoms appear.\n\nThe FDA-cleared ECG provides medical-grade single-lead electrocardiogram readings on demand, helping detect signs of atrial fibrillation and other heart rhythm irregularities. Share PDF reports directly with your physician from the companion app.",
    specs: "Display: 1.45\" AMOLED | Sensors: ECG (FDA), SpO2, HR, Temp, Fall | Battery: 7 days | Emergency: SOS + Fall Detect | Water: 5ATM",
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: 38,
    name: "Marathon GPS",
    brand: "Nexwatch",
    category: "Smart",
    price: 349,
    originalPrice: 399,
    rating: 4.5,
    reviews: 312,
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600",
      "https://images.unsplash.com/photo-1544117519-31731f4fcddc?w=600"
    ],
    description: "Built for runners by runners. Multi-band GPS with instant satellite lock provides race-grade route accuracy from the moment you step outside. Running dynamics, training load analysis, and race predictor help you train smarter.\n\nThe lightweight 39-gram design disappears on the wrist during long training sessions and races. The 1.3-inch MIP display remains visible in all lighting conditions, from pre-dawn training runs to sunny afternoon marathons.\n\nAdvanced running dynamics capture cadence, ground contact time, vertical oscillation, and power output \u2014 metrics that elite coaches use to optimize form and reduce injury risk. The race predictor estimates finish times for 5K, 10K, half-marathon, and marathon distances based on your current fitness.\n\nWith 20 days of battery life in smartwatch mode and 40 hours in continuous GPS, the Marathon GPS handles ultra-distance events without needing a mid-race charge. It\u2019s the watch that won\u2019t quit before you do.",
    specs: "Display: 1.3\" MIP | Sensors: Multi-GPS, HR, Running Dynamics | Battery: 20 days (GPS 40h) | Weight: 39g | Water: 5ATM",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 39,
    name: "Solar Infinite",
    brand: "Zentrek",
    category: "Smart",
    price: 479,
    originalPrice: null,
    rating: 4.6,
    reviews: 187,
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600",
      "https://images.unsplash.com/photo-1544117519-31731f4fcddc?w=600",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600"
    ],
    description: "Never-charge solar smartwatch with transparent solar panel overlay \u2014 the Solar Infinite harvests energy continuously through a nearly invisible photovoltaic ring, delivering unlimited battery life in smartwatch mode with just 3 hours of daily sunlight.\n\nThe transparent solar panel is Zentrek\u2019s breakthrough technology, layered between the crystal and the MIP display without affecting readability. In direct sunlight, the charging rate exceeds the power draw, actually building reserve while you wear it.\n\nA full fitness and notification suite keeps you connected without compromise: heart rate monitoring, SpO2, GPS tracking, smartphone notifications, weather forecasts, and over 100 activity profiles are all included.\n\n10ATM water resistance makes the Solar Infinite suitable for swimming, surfing, and water sports. For environmentally conscious tech enthusiasts, this watch eliminates battery waste entirely \u2014 a smartwatch that truly runs on sunshine.",
    specs: "Display: 1.35\" MIP Solar | Sensors: HR, SpO2, GPS, ABC | Battery: Unlimited (solar) | Water: 10ATM | Solar: Transparent Panel",
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 40,
    name: "Dive Computer Pro",
    brand: "Horizone",
    category: "Smart",
    price: 799,
    originalPrice: 899,
    rating: 4.7,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1544117519-31731f4fcddc?w=600",
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600"
    ],
    description: "Full dive computer with decompression planning and air integration, supporting recreational, technical, and freediving modes. Surface GPS navigation and smart notifications round out this versatile wrist-mounted instrument.\n\nThe Dive Computer Pro calculates real-time decompression schedules using the B\u00fchlmann ZHL-16C algorithm, updated continuously based on your depth, time, and nitrogen loading. An optional wireless air transmitter displays remaining tank pressure and estimates air time remaining at current consumption rate.\n\nFreediving mode tracks depth, dive time, surface interval, and water temperature with a high-refresh sensor that updates twice per second \u2014 critical when every meter of depth matters. Apnea tables and customizable alerts help freedivers train safely.\n\nAbove the surface, the Dive Computer Pro transforms into a capable outdoor GPS watch with trail navigation, ABC sensors, and full smart notifications. The 1.4-inch AMOLED display delivers vibrant colors and exceptional readability both underwater and on land.",
    specs: "Display: 1.4\" AMOLED | Dive: 100m Deco Planning | Sensors: Depth, Compass, Temp, HR | Battery: 7 days (Dive 40h) | Water: 10ATM",
    inStock: true,
    isNew: true,
    isFeatured: false
  },

  // ── DRESS (12) ───────────────────────────────────────────
  {
    id: 41,
    name: "Gentlemen's Reserve",
    brand: "Castellane",
    category: "Dress",
    price: 899,
    originalPrice: 1099,
    rating: 4.7,
    reviews: 178,
    images: [
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600"
    ],
    description: "The epitome of boardroom elegance. The Gentlemen's Reserve features a slim 7mm profile that slides effortlessly under a French cuff, disappearing beneath your shirt until the moment you need it.\n\nThe silver guilloch\u00e9 dial is engine-turned by hand, creating a sunburst pattern of fine, interlocking lines that shimmer with every movement of the wrist. Blued steel Breguet hands \u2014 the signature style invented by Abraham-Louis Breguet in the 18th century \u2014 add historical gravitas.\n\nThe Swiss automatic movement is regulated to chronometer standards, ensuring that this dress watch keeps time as precisely as it keeps appearances. The sapphire caseback reveals the decorated movement to those who care to look.\n\nA black alligator strap with hand-stitched edges and a polished steel deployant clasp completes the executive ensemble. The Gentlemen\u2019s Reserve is the watch you wear when the stakes are highest.",
    specs: "Case: 38mm Steel | Movement: Swiss Automatic | Crystal: Sapphire | Water Resistance: 30m | Strap: Black Alligator",
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 42,
    name: "Petite Rose",
    brand: "Maison Élaire",
    category: "Dress",
    price: 649,
    originalPrice: null,
    rating: 4.8,
    reviews: 234,
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"
    ],
    description: "Delicate 28mm rose gold case designed for the feminine wrist, the Petite Rose is a timeless gift that speaks volumes without saying a word. Mother-of-pearl dial with diamond hour markers creates a piece of wearable art.\n\nEach of the 12 hour markers is a genuine diamond, individually set by hand into rose gold settings. The mother-of-pearl dial shimmers with an organic iridescence that shifts between soft pinks, blues, and greens depending on the light.\n\nThe rose gold PVD coating is applied through a process that bonds the gold layer to the steel at a molecular level, providing superior durability and a warm luster that won\u2019t fade or tarnish over time.\n\nThe rose gold mesh bracelet drapes elegantly on the wrist like fine jewelry. An integrated magnetic clasp makes it infinitely adjustable without tools \u2014 simply slide to the perfect position. This is the watch that elevates every outfit from everyday to extraordinary.",
    specs: "Case: 28mm Rose Gold PVD | Movement: Swiss Quartz | Crystal: Sapphire | Water Resistance: 30m | Bracelet: Rose Gold Mesh",
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 43,
    name: "Tuxedo Moonphase",
    brand: "Castellane",
    category: "Dress",
    price: 1299,
    originalPrice: 1499,
    rating: 4.9,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600"
    ],
    description: "Black-tie worthy moonphase dress watch that commands attention at the most formal occasions. The onyx-black dial provides a dramatic backdrop for applied gold indices that catch the light with every gesture, creating an interplay of shadow and brilliance.\n\nThe beautifully rendered moon phase complication at 6 o\u2019clock displays a hand-painted lacquer moon against a field of stars, accurate to within one day every 122 years. It\u2019s a romantic complication that connects you to the celestial rhythms above.\n\nThe exhibition caseback reveals the decorated automatic movement, featuring C\u00f4tes de Gen\u00e8ve stripes, blued screws, and a gold rotor engraved with the Castellane crest. Watching the movement work is an experience in itself.\n\nPaired with a patent black leather strap and a signed deployant clasp, the Noir Moonphase is the definitive dress watch for gentlemen who appreciate the intersection of haute horlogerie and evening sophistication.",
    specs: "Case: 40mm Steel | Movement: Automatic Moonphase | Crystal: Sapphire | Water Resistance: 30m | Strap: Patent Black Leather",
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 44,
    name: "Slim Elegance",
    brand: "Vostel",
    category: "Dress",
    price: 499,
    originalPrice: null,
    rating: 4.5,
    reviews: 213,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600"
    ],
    description: "Record-thin at just 5.8mm, the Slim Elegance redefines what a dress watch can be. The eggshell white dial with printed Roman numerals channels timeless sophistication in a package thinner than most coins stacked together.\n\nThe ultra-thin Japanese quartz movement was developed specifically for this case, shaving every possible fraction of a millimeter from the caliber without compromising accuracy. The result is a watch that slides under any shirt cuff without a hint of a bulge.\n\nThe sapphire crystal sits nearly flush with the polished steel bezel, creating a sleek, pebble-smooth profile that feels as refined as it looks. A burgundy Cordovan leather strap adds a subtle pop of color that distinguishes the wearer as someone who pays attention to details.\n\nThis is the dress watch for minimalists who believe that true luxury is found not in excess, but in the disciplined pursuit of less. You\u2019ll forget you\u2019re wearing it \u2014 until someone compliments it.",
    specs: "Case: 38mm Steel | Movement: Ultra-Thin Quartz | Crystal: Sapphire | Water Resistance: 30m | Strap: Burgundy Cordovan",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 45,
    name: "Art Deco Revival",
    brand: "Maison Élaire",
    category: "Dress",
    price: 799,
    originalPrice: 949,
    rating: 4.6,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"
    ],
    description: "Rectangular case inspired by 1920s Art Deco architecture, the Art Deco Revival channels the glamour and geometric precision of the Jazz Age. Stepped dial surfaces with geometric patterns evoke the facades of Manhattan\u2019s most iconic skyscrapers.\n\nCurved lugs follow the natural contour of the wrist, ensuring that despite the angular case, the watch sits with ergonomic comfort and stays centered throughout the day. The 27\u00d742mm proportions are historically faithful to the era\u2019s design language.\n\nThe navy blue leather strap is hand-selected and paired to complement the stepped silver dial, creating a harmonious composition of classic colors. A signed tang buckle in polished steel secures the strap with Art Deco flair.\n\nFor collectors and style enthusiasts who look to the past for tomorrow\u2019s inspiration, the Art Deco Revival is a wearable tribute to the golden age of design. It pairs beautifully with both contemporary and vintage-inspired wardrobes.",
    specs: "Case: 27×42mm Steel | Movement: Quartz | Crystal: Sapphire | Water Resistance: 30m | Strap: Navy Blue Leather",
    inStock: true,
    isNew: true,
    isFeatured: false
  },
  {
    id: 46,
    name: "Ambassador Gold",
    brand: "Castellane",
    category: "Dress",
    price: 1599,
    originalPrice: null,
    rating: 4.8,
    reviews: 45,
    images: [
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600"
    ],
    description: "Full 18K yellow gold micro-rotor automatic, the Ambassador Gold is crafted for those who command the room. The champagne sunray dial radiates warmth and prestige, with applied gold hour markers that cast tiny shadows as they catch the light.\n\nThe micro-rotor movement is a triumph of compact engineering \u2014 by integrating the winding rotor into the movement plate rather than suspending it on top, the caliber achieves a slimmer profile while maintaining a generous 72-hour power reserve displayed at 12 o\u2019clock.\n\nEvery surface of the 39mm case is finished to jewelry-grade standards: hand-polished flat surfaces, satin-brushed flanks, and chamfered lugs that create a play of light unique to solid gold craftsmanship.\n\nThe tan ostrich strap is exotic yet understated, a fitting companion to the gold case. Each strap is cut from a single quill pattern for visual consistency. The Ambassador Gold isn\u2019t merely a timepiece \u2014 it\u2019s a declaration of arrival.",
    specs: "Case: 39mm 18K Yellow Gold | Movement: Micro-Rotor Automatic | Crystal: Sapphire | Water Resistance: 30m | Strap: Tan Ostrich",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 47,
    name: "Orchid Ladies",
    brand: "Vostel",
    category: "Dress",
    price: 579,
    originalPrice: 699,
    rating: 4.4,
    reviews: 289,
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600"
    ],
    description: "Floral-patterned mother-of-pearl dial with a halo of 36 set crystals, the Orchid Ladies watch is feminine luxury distilled into 30 millimeters of wearable art. Each dial is unique \u2014 hand-selected mother-of-pearl ensures no two watches share exactly the same play of iridescent color.\n\nThe 36 crystals are individually set into a polished steel and rose gold bezel, creating a sparkling frame that elevates the watch from accessory to jewellery. Under natural light, the crystals scatter prismatic flashes that draw admiring glances.\n\nThe two-tone satin-finished bracelet features a butterfly deployment clasp that opens and closes with a satisfying precision click. Micro-adjustment links allow fine-tuning the fit without visiting a jeweler.\n\nDesigned for the woman who refuses to choose between elegance and everyday practicality, the Orchid Ladies pairs seamlessly with boardroom attire, weekend brunches, and evening celebrations. 30-meter water resistance means you don\u2019t need to remove it for handwashing or light rain.",
    specs: "Case: 30mm Steel & Rose Gold | Movement: Quartz | Crystal: Sapphire | Water Resistance: 30m | Bracelet: Two-Tone Satin",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 48,
    name: "Midnight Gala",
    brand: "Maison Élaire",
    category: "Dress",
    price: 949,
    originalPrice: null,
    rating: 4.7,
    reviews: 98,
    images: [
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600"
    ],
    description: "Deep midnight blue aventurine dial with stellated hour markers, the Midnight Gala captures the beauty of a clear night sky on your wrist. The aventurine glass is flecked with natural copper inclusions that sparkle like distant stars.\n\nStellated hour markers \u2014 six-pointed stars in polished gold \u2014 mark each hour, creating a dial that is both legible and mesmerizingly beautiful. Dauphine hands in matching gold sweep across this celestial landscape with smooth automatic precision.\n\nThe exhibition caseback reveals a decorated automatic movement with C\u00f4tes de Gen\u00e8ve stripes, perlage on the base plate, and anglage on every bridge. The oscillating weight is skeletonized and plated in midnight blue to echo the dial\u2019s theme.\n\nPaired with a midnight blue alligator strap that seamlessly extends the dial\u2019s color story, the Midnight Gala is the watch equivalent of a tailored tuxedo \u2014 impeccably crafted, effortlessly elegant, and appropriate for every occasion that calls for your very best.",
    specs: "Case: 40mm Steel | Movement: Automatic | Crystal: Sapphire | Water Resistance: 30m | Strap: Midnight Blue Alligator",
    inStock: true,
    isNew: false,
    isFeatured: true
  },
  {
    id: 49,
    name: "Satin Square",
    brand: "Vostel",
    category: "Dress",
    price: 429,
    originalPrice: 529,
    rating: 4.3,
    reviews: 201,
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600"
    ],
    description: "Square case with rounded corners \u2014 a modern take on the Cartier-inspired design that has defined dress watch elegance for over a century. The Satin Square reinterprets this iconic silhouette with contemporary materials and finishing techniques.\n\nSatin-brushed steel surfaces create a sophisticated matte sheen that resists fingerprints and everyday wear marks, while polished chamfers along the case edges add definition and a frame of brightness. The cabochon crown is a nod to classical jewelry-watch traditions.\n\nThe Roman numeral dial features a railway minute track and blued steel sword hands, all arranged with the careful visual balance that makes square watches so compelling. The slightly curved crystal follows the case\u2019s gentle radius.\n\nThe black satin leather strap is designed specifically for the 35mm square case, tapering elegantly to a signed pin buckle. Whether worn with a crisp linen shirt or an evening blazer, the Satin Square brings architectural sophistication to every outfit.",
    specs: "Case: 35mm Square Steel | Movement: Quartz | Crystal: Sapphire | Water Resistance: 30m | Strap: Black Satin Leather",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 50,
    name: "Platinum Jubilee",
    brand: "Castellane",
    category: "Dress",
    price: 2199,
    originalPrice: 2499,
    rating: 4.9,
    reviews: 34,
    images: [
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600"
    ],
    description: "Commemorative edition in 950 platinum, the Platinum Jubilee celebrates Castellane\u2019s heritage with a cloisonn\u00e9 enamel dial depicting the brand\u2019s coat of arms. Limited to 250 pieces worldwide, each individually numbered on the caseback.\n\nThe cloisonn\u00e9 enamel technique involves forming thin gold wire partitions on the dial surface, then filling each cell with powdered glass enamel and firing in a kiln at over 800\u00b0C. Multiple firings build up layers of depth and color that will remain vivid for centuries.\n\nThe 950 platinum case is the densest and most precious of all watch metals, with a weight and cool touch on the skin that no other material can replicate. The hand-stitched black leather strap is lined with hypoallergenic calfskin for all-day comfort.\n\nAs a true collector\u2019s piece, the Platinum Jubilee ships in a handcrafted walnut presentation box with a certificate of authenticity signed by the master watchmaker. For those fortunate enough to acquire one, this watch will appreciate in value as a tangible work of art.",
    specs: "Case: 39mm Platinum | Movement: Manual | Crystal: Sapphire | Water Resistance: 30m | Strap: Hand-Stitched Black Leather",
    inStock: false,
    isNew: true,
    isFeatured: true
  },
  {
    id: 51,
    name: "Crystal Soirée",
    brand: "Maison Élaire",
    category: "Dress",
    price: 749,
    originalPrice: null,
    rating: 4.6,
    reviews: 167,
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600"
    ],
    description: "Double-wrap satin strap with a pav\u00e9-set crystal bezel surrounding a sunray silver dial, the Crystal Soir\u00e9e is designed for cocktail events and formal galas where jewelry and timepiece become one.\n\nThe double-wrap strap circles the wrist twice, transforming a traditional watch into a statement bracelet. The satin fabric is reinforced with an internal flexible steel core that maintains its shape while draping beautifully around the wrist.\n\nThe 26mm case is deliberately petite, keeping the focus on the sparkling crystal bezel and the luminous sunray silver dial beneath. Diamond-cut hands catch the light from every angle, ensuring legibility even in candlelit settings.\n\nLight and comfortable enough for an entire evening of dancing, dining, and celebrating, the Crystal Soir\u00e9e weighs just 28 grams \u2014 lighter than most bracelets. It\u2019s the ultimate accessory for women who want their watch to be the conversation starter.",
    specs: "Case: 26mm Steel | Movement: Quartz | Crystal: Sapphire | Water Resistance: 30m | Strap: Double-Wrap Satin",
    inStock: true,
    isNew: false,
    isFeatured: false
  },
  {
    id: 52,
    name: "Grand Regulator",
    brand: "Aurevine",
    category: "Dress",
    price: 1899,
    originalPrice: 2199,
    rating: 4.8,
    reviews: 56,
    images: [
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600"
    ],
    description: "Regulator-style dial with separate sub-dials for hours, minutes, and seconds \u2014 a layout originally developed for precision observatory clocks. The central minute hand dominates the dial, ensuring that the most frequently consulted unit of time is the easiest to read.\n\nThe grand feu enamel dial is created through a centuries-old process of applying powdered glass enamel to a copper base and firing repeatedly in a kiln. The result is a luminous, porcelain-like surface with a depth and warmth that painted dials simply cannot achieve.\n\nThe manual-wind regulator movement is based on a historical caliber, reimagined with modern materials and tolerances. Winding the crown each morning creates a daily ritual that connects you to the mechanical heartbeat of your timepiece.\n\nHoused in a 42mm rose gold case with a Bordeaux crocodile strap, the Grand Regulator is for the collector who values horological tradition and appreciates the art of reading time as it was done in the great observatories of Europe.",
    specs: "Case: 42mm Rose Gold | Movement: Manual Regulator | Crystal: Sapphire | Water Resistance: 30m | Strap: Bordeaux Crocodile",
    inStock: true,
    isNew: true,
    isFeatured: false
  }
];

// ── Helper Functions ──────────────────────────────────────
function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

function getFeaturedProducts() {
  return products.filter(p => p.isFeatured);
}

function getNewProducts() {
  return products.filter(p => p.isNew);
}

function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

function getProductsByBrand(brand) {
  return products.filter(p => p.brand === brand);
}

function getAllBrands() {
  return [...new Set(products.map(p => p.brand))].sort();
}

function getAllCategories() {
  return [...new Set(products.map(p => p.category))].sort();
}

function searchProducts(query) {
  const q = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
}
