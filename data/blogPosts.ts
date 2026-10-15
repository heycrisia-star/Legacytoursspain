export interface BlogPost {
  id: string;
  slug: string;
  stopNumber?: number;
  title: string;
  titleEs: string;
  excerpt: string;
  excerptEs: string;
  category: 'architecture' | 'history' | 'art' | 'culture';
  readTime: number; // in minutes
  coverImage: string;
  publishDate: string;
  featured: boolean;
  author: string;
  seoTitle: string;
  seoTitleEs: string;
  seoDescription: string;
  seoDescriptionEs: string;
  tags: string[];
  content: string; // HTML markup
  contentEs: string; // HTML markup
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'casa-batllo',
    slug: 'casa-batllo-historia-gaudi',
    stopNumber: 1,
    title: 'Casa Batlló: The House Gaudí Saved from Demolition',
    titleEs: 'Casa Batlló: La Casa Que Gaudí Salvó del Derribo',
    excerpt: 'Josep Batlló bought this building in 1903 intending to tear it down. Gaudí proposed an astonishing alternative: transform what was already there.',
    excerptEs: 'Josep Batlló compró este inmueble con la intención de derribarlo por completo. Gaudí le convenció para transformarlo mediante una reforma que cambió Barcelona.',
    category: 'architecture',
    readTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1583779457306-046ab1ec2796?auto=format&fit=crop&w=1400&q=80',
    featured: true,
    author: 'Cristian Gutiérrez · Legacy Tours',
    publishDate: '2026-10-06',
    tags: ['Gaudí', 'Modernisme', 'Passeig de Gràcia', 'UNESCO'],
    seoTitle: 'Casa Batlló Barcelona: History, Secrets & Gaudí Architecture',
    seoTitleEs: 'Casa Batlló Barcelona: Historia real, secretos y arquitectura de Gaudí',
    seoDescription: 'Discover the authentic story of Casa Batlló on Passeig de Gràcia. Why Gaudí transformed an existing building and the genius behind its light patio.',
    seoDescriptionEs: 'Descubre la verdadera historia de la Casa Batlló en Passeig de Gràcia. Por qué Gaudí no la derribó y el secreto detrás de su patio de luces.',
    content: `
      <p class="lead text-lg font-light text-neutral-700 mb-6">When textile tycoon Josep Batlló purchased number 43 Passeig de Gràcia in 1903, his plan was straightforward: demolish the conventional 1877 residential building and construct a brand-new palace. Antoni Gaudí told him no.</p>
      
      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">Transforming Instead of Demolishing</h2>
      <p class="mb-4">The house that stands today is not a completely new building from the foundations up, but an extraordinary surgical transformation of an earlier work by architect Emili Sala Cortés—who had ironically been one of Gaudí's professors at the Barcelona School of Architecture.</p>
      <p class="mb-4">Between 1904 and 1906, Gaudí added a fifth floor, completely redesigned the noble floor and the roofline, expanded the central light patio, and draped the facade in polychrome ceramic mosaic and undulating stone.</p>

      <div class="my-8 p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80">
        <h3 class="font-display font-bold text-amber-900 uppercase text-sm tracking-wider mb-2">Did You Know? The Optical Illusion of Light</h3>
        <p class="text-sm text-amber-950 font-light leading-relaxed">In the central light well, the blue ceramic tiles get darker as you look up toward the sky, while the windows get larger as you descend to the lower floors. This was not a whimsical decoration: it ensures that natural daylight distributes evenly to every single room.</p>
      </div>

      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">The Legend of Saint George</h2>
      <p class="mb-4">Popular tradition reads the roofline as the arched back of the dragon slain by Sant Jordi (Saint George), Catalonia's patron saint. The four-armed ceramic cross symbolizes the hilt of the sword plunged into the beast's back, while the bone-shaped balconies resemble the dragon's victims.</p>
      <p class="mb-4">While Gaudí left no written manuscript confirming this exact allegory, it remains one of Barcelona's most beloved urban narratives.</p>

      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">How to Experience It</h2>
      <p class="mb-4">Casa Batlló is Stop #1 on our <strong>Complete Barcelona 3-Hour Tour</strong>. Seeing its iridescent facade from the comfort of our vintage electric car as you cruise slowly along Passeig de Gràcia gives you an open-air perspective that walking in the crowded sidewalk simply cannot match.</p>
    `,
    contentEs: `
      <p class="lead text-lg font-light text-neutral-700 mb-6">Cuando el empresario textil Josep Batlló adquirió el número 43 del Passeig de Gràcia en 1903, su idea inicial era rotunda: demoler el edificio decimonónico de 1877 y levantar una mansión desde cero. Gaudí le dijo que no.</p>
      
      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">Transformar en lugar de derribar</h2>
      <p class="mb-4">La casa que admiramos hoy no es un edificio nuevo desde los cimientos, sino una genial reforma sobre la obra de Emili Sala Cortés, quien curiosamente había sido profesor del propio Gaudí en la Escuela de Arquitectura de Barcelona.</p>
      <p class="mb-4">Entre 1904 y 1906, Gaudí añadió una planta adicional, redistribuyó por completo la planta noble, amplió el patio de luces y dotó a la fachada de una piel ondulante de piedra, forja y fragmentos de cerámica vidriada.</p>

      <div class="my-8 p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80">
        <h3 class="font-display font-bold text-amber-900 uppercase text-sm tracking-wider mb-2">¿Sabías que...? El secreto de la luz</h3>
        <p class="text-sm text-amber-950 font-light leading-relaxed">En el patio de luces interior, los azulejos azules se oscurecen conforme asciendes hacia la claraboya, mientras que las ventanas aumentan de tamaño hacia abajo. No es un capricho decorativo: es un cálculo físico para repartir la luz solar de manera completamente homogénea en todas las plantas.</p>
      </div>

      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">La leyenda de Sant Jordi</h2>
      <p class="mb-4">La lectura popular más extendida identifica el tejado ondulado con el lomo escamoso del dragón derrotado por Sant Jordi. La cruz bulbosa de cuatro brazos representa la empuñadura de la espada clavada en su espina dorsal, y los balcones de hierro fundido evocan las máscaras y huesos de sus víctimas.</p>
      <p class="mb-4">Gaudí nunca dejó escrita esta interpretación al pie de la letra, pero la fuerza simbólica del relato forma ya parte inseparable del alma de Barcelona.</p>

      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">Cómo vivir la experiencia</h2>
      <p class="mb-4">La Casa Batlló es la parada número 1 de nuestro <strong>Complete Barcelona 3-Hour Tour</strong>. Contemplar su fachada iridiscente desde la tranquilidad de nuestro coche eléctrico vintage, al aire libre y sin aglomeraciones, te permite apreciarla como la concibió la burguesía de 1906.</p>
    `
  },
  {
    id: 'sagrada-familia',
    slug: 'sagrada-familia-guia-completa-2026',
    stopNumber: 14,
    title: 'Sagrada Família: The 140-Year Journey and the Tower of Jesus',
    titleEs: 'Sagrada Família: 140 Años de Historia y la Culminación de la Torre de Jesús',
    excerpt: 'In 2026, marking the centenary of Antoni Gaudí’s death, the cross on the Tower of Jesus Christ was placed at 172.5 meters. Here is what you need to know.',
    excerptEs: 'En 2026, año del centenario de la muerte de Gaudí, la cruz de la torre de Jesucristo alcanzó los 172,5 metros. Esto es lo que debes conocer antes de visitarla.',
    category: 'architecture',
    readTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=1400&q=80',
    featured: true,
    author: 'Cristian Gutiérrez · Legacy Tours',
    publishDate: '2026-10-08',
    tags: ['Sagrada Família', 'Gaudí', 'UNESCO', 'Barcelona 2026'],
    seoTitle: 'Sagrada Família 2026: History, Height & Gaudí Centenary Guide',
    seoTitleEs: 'Sagrada Família 2026: Altura real, historia y centenario de Gaudí',
    seoDescription: 'Everything about Sagrada Família in 2026. The 172.5m cross, the UNESCO Nativity facade, and how Gaudí lived inside his unfinished masterpiece.',
    seoDescriptionEs: 'Guía documentada de la Sagrada Família en 2026: la cruz a 172,5 m, las partes reconocidas por la UNESCO y la historia de Gaudí viviendo en su taller.',
    content: `
      <p class="lead text-lg font-light text-neutral-700 mb-6">Few monuments in human history carry a story as poetic and resilient as the Basílica de la Sagrada Família. Begun in 1882 under diocesan architect Francisco de Paula del Villar, it was taken over by a 31-year-old Antoni Gaudí in late 1883, who completely reimagined it into an architectural hymn to nature and faith.</p>
      
      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">The Architect Who Slept in His Workshop</h2>
      <p class="mb-4">In the final months of his life, from November 1925 until his tragic death in June 1926, Gaudí withdrew completely from public life. He moved his bed directly into his on-site workshop inside the temple. He knew he would never witness its completion, famously noting: <em>"My client is in no hurry."</em></p>
      <p class="mb-4">When Gaudí died after being struck by a tram on Gran Via, only one single bell tower—dedicated to Saint Barnabas on the Nativity facade—was finished.</p>

      <div class="my-8 p-6 rounded-2xl bg-stone-100 border border-stone-200">
        <h3 class="font-display font-bold text-neutral-900 uppercase text-sm tracking-wider mb-2">Key Milestones of 2026</h3>
        <ul class="text-sm text-neutral-700 space-y-2 font-light">
          <li><strong>February 20, 2026:</strong> The upper arm of the central cross was hoisted onto the Tower of Jesus Christ, bringing the basilica's exterior peak to exactly 172.5 meters.</li>
          <li><strong>Intentional Height:</strong> Gaudí deliberately kept the peak just below Montjuïc hill (173 meters), asserting that man's work should never surpass God's natural creation.</li>
          <li><strong>UNESCO Scope:</strong> Only the Nativity Facade and the Crypt are inscribed on the UNESCO World Heritage list (2005), not the contemporary construction.</li>
        </ul>
      </div>

      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">Contrasting Styles: Nativity vs. Passion</h2>
      <p class="mb-4">One of the most striking lessons of the basilica is the evolution between its facades. While the Nativity Facade bursts with organic, overflowing life carved under Gaudí's supervision, the western Passion Facade—sculpted decades later by Josep Maria Subirachs—is angular, harsh, and bone-dry, intentionally capturing the agony and drama of the crucifixion.</p>
    `,
    contentEs: `
      <p class="lead text-lg font-light text-neutral-700 mb-6">Pocos monumentos en la historia de la humanidad guardan una narrativa tan conmovedora como la Basílica de la Sagrada Família. Comenzada en 1882 por Francisco de Paula del Villar bajo un estilo neogótico, fue asumida a finales de 1883 por un joven Antoni Gaudí de apenas 31 años, quien replanteó por completo el proyecto.</p>
      
      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">El arquitecto que dormía en su taller</h2>
      <p class="mb-4">Durante los últimos meses de su vida, desde noviembre de 1925 hasta su fallecimiento en junio de 1926, Gaudí se recluyó por completo en las obras del templo. Instaló su cama directamente en el obrador del templo. Sabía que no vería la obra acabada, recordando con humildad: <em>«Mi cliente no tiene prisa»</em>.</p>
      <p class="mb-4">Cuando murió tras ser atropellado por un tranvía en la Gran Vía, únicamente vio terminado un campanario de la fachada del Nacimiento: el dedicado a San Bernabé en 1925.</p>

      <div class="my-8 p-6 rounded-2xl bg-stone-100 border border-stone-200">
        <h3 class="font-display font-bold text-neutral-900 uppercase text-sm tracking-wider mb-2">Hitos Clave del Año 2026</h3>
        <ul class="text-sm text-neutral-700 space-y-2 font-light">
          <li><strong>20 de febrero de 2026:</strong> Se colocó el brazo superior de la cruz de Jesucristo, alcanzando los 172,5 metros de altura exterior.</li>
          <li><strong>Altura calculada:</strong> Gaudí diseñó el templo para quedarse a propósito un metro por debajo de la montaña de Montjuïc (173 m), defendiendo que la obra del hombre no debía superar a la naturaleza.</li>
          <li><strong>Reconocimiento UNESCO:</strong> Solo la Fachada del Nacimiento y la Cripta forman parte del catálogo de Patrimonio de la Humanidad (inscritas en 2005).</li>
        </ul>
      </div>

      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">El diálogo entre el Nacimiento y la Pasión</h2>
      <p class="mb-4">Frente al desbordante naturalismo de la fachada del Nacimiento, la fachada de la Pasión —esculpida décadas después por Josep Maria Subirachs— utiliza líneas angulosas, duras y dramáticas. Esta diferencia estilística no es una contradicción, sino testimonio vivo de una basílica construida por sucesivas generaciones a través de los siglos.</p>
    `
  },
  {
    id: 'montjuic',
    slug: 'montjuic-barcelona-historia-vistas',
    stopNumber: 7,
    title: 'Montjuïc: The Mountain of Secrets, Olympics and Panoramic Views',
    titleEs: 'Montjuïc: La Montaña de los Secretos, las Olimpiadas y las Mejores Vistas',
    excerpt: 'Montjuïc is Barcelona’s green crown. From its medieval name to the 1929 World Expo and the 1936 Popular Olympics that never took place.',
    excerptEs: 'Montjuïc es la atalaya verde de Barcelona. Desde su nombre medieval hasta la Exposición de 1929 y la Olimpiada Popular de 1936 que la Guerra Civil impidió.',
    category: 'history',
    readTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1561632669-7f55f7975606?auto=format&fit=crop&w=1400&q=80',
    featured: true,
    author: 'Cristian Gutiérrez · Legacy Tours',
    publishDate: '2026-10-10',
    tags: ['Montjuïc', 'Miramar', 'MNAC', 'Juegos Olímpicos', 'Vistas'],
    seoTitle: 'Montjuïc Mountain Barcelona: Complete History, Viewpoints & Guide',
    seoTitleEs: 'Montaña de Montjuïc Barcelona: Miradores, historia y guía local',
    seoDescription: 'Explore Montjuïc in Barcelona: Miramar gardens, MNAC, the Olympic Ring and the secret stories of Barcelona’s historic mountain.',
    seoDescriptionEs: 'Guía esencial de Montjuïc: Jardines de Miramar, MNAC, la Anella Olímpica y las anécdotas históricas explicadas por guías locales.',
    content: `
      <p class="lead text-lg font-light text-neutral-700 mb-6">Rising 173 meters above the Mediterranean coastline, Montjuïc is far more than a scenic hill: it is Barcelona's historical mirror, where fortress defenses, world exhibitions, and athletic triumphs have been written layer upon layer.</p>
      
      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">A Mountain Written in Layers</h2>
      <p class="mb-4">Its name originates in medieval times: <em>Mont dels Jueus</em> (Mount of the Jews), referring to the ancient Jewish cemetery once situated on its slopes. For centuries, the fortress atop the summit controlled the port and the city with cannon fire.</p>
      <p class="mb-4">The mountain transformed completely for the 1929 International Exposition. Broad avenues, the Palau Nacional (now housing the MNAC museum), the Magic Fountain, and the Greek Theatre were constructed, converting a rugged military bastion into a park for culture and recreation.</p>

      <div class="my-8 p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200">
        <h3 class="font-display font-bold text-emerald-950 uppercase text-sm tracking-wider mb-2">The 1936 Popular Olympics That Never Happened</h3>
        <p class="text-sm text-emerald-900 font-light leading-relaxed">Long before the triumphant 1992 Games, Barcelona prepared an anti-fascist Popular Olympiad for July 1936 as a direct moral protest against Hitler’s Berlin Olympic Games. Thousands of international athletes had already arrived when the Spanish Civil War erupted on the very day of the planned opening ceremony, halting the event immediately.</p>
      </div>

      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">The Olympic Renaissance of 1992</h2>
      <p class="mb-4">The 1992 Olympic Ring brought together world architecture: the Estadi Olímpic (originally built in 1929 and renovated for '92), Arata Isozaki's Palau Sant Jordi with its aerodynamic roof, and Santiago Calatrava's sculpted white telecommunications tower resembling an athlete carrying the Olympic torch.</p>

      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">The Miramar Viewpoint</h2>
      <p class="mb-4">From the Jardins de Miramar, the whole maritime facade of Barcelona unfolds beneath you. Climbing up in our vintage electric car—quietly, with no engine rumble and the cool Mediterranean sea breeze—is universally praised by our guests as the single most unforgettable moment of the 2-hour and 3-hour tours.</p>
    `,
    contentEs: `
      <p class="lead text-lg font-light text-neutral-700 mb-6">Elevándose 173 metros sobre la línea del mar Mediterráneo, Montjuïc es mucho más que un parque con buenas vistas: es el espejo histórico de Barcelona, donde fortificaciones militares, exposiciones universales y gestas olímpicas han ido superponiendo sus huellas.</p>
      
      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">Una montaña explicada por capas</h2>
      <p class="mb-4">Su topónimo procede de la Edad Media: <em>Mont dels Jueus</em> (Monte de los Judíos), en alusión al histórico cementerio hebreo emplazado en sus laderas. Durante siglos, el castillo en la cumbre vigiló militarmente la ciudad y el puerto.</p>
      <p class="mb-4">En 1929, la Exposición Internacional transformó la montaña para siempre: se trazaron avenidas majestuosas, se construyó el Palau Nacional (sede actual del MNAC) y la Font Màgica, abriendo la montaña a la cultura, los jardines y el ocio ciudadano.</p>

      <div class="my-8 p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200">
        <h3 class="font-display font-bold text-emerald-950 uppercase text-sm tracking-wider mb-2">La Olimpiada Popular de 1936 que no llegó a celebrarse</h3>
        <p class="text-sm text-emerald-900 font-light leading-relaxed">Mucho antes de 1992, Barcelona organizó para julio de 1936 la Olimpiada Popular como respuesta cívica y deportiva frente a los Juegos Olímpicos del régimen nazi en Berlín. Miles de deportistas internacionales estaban ya en la ciudad cuando el estallido de la Guerra Civil el 18 de julio obligó a suspender la inauguración.</p>
      </div>

      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">La revolución olímpica de 1992</h2>
      <p class="mb-4">La Anella Olímpica reunió a grandes maestros de la arquitectura contemporánea: el Estadio Olímpico Lluís Companys remodelado, el vanguardista Palau Sant Jordi de Arata Isozaki y la esbelta torre de comunicaciones blanca de Santiago Calatrava, que evoca a un atleta con la antorcha olímpica y funciona además como reloj de sol.</p>

      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">El mirador de Miramar</h2>
      <p class="mb-4">Desde los Jardines de Miramar, el puerto histórico y el skyline de la ciudad se divisan con total nitidez. Subir hasta aquí en nuestro coche eléctrico vintage, en silencio, sin ruidos mecánicos y con la brisa marina, es sin duda una de las paradas favoritas de nuestros viajeros.</p>
    `
  },
  {
    id: 'la-pedrera',
    slug: 'la-pedrera-casa-mila-gaudi-historia',
    stopNumber: 17,
    title: 'La Pedrera (Casa Milà): The Stone Quarry That Provoked a Bourgeois Scandal',
    titleEs: 'La Pedrera (Casa Milà): La Cantera Que Escandalizó a la Burguesía',
    excerpt: 'Built between 1906 and 1912 for Pere Milà and Roser Segimon, La Pedrera eliminated load-bearing walls and sparked satire throughout Barcelona.',
    excerptEs: 'Construida entre 1906 y 1912 para Pere Milà y Roser Segimon, Casa Milà prescindió de muros de carga convencionales y desató la sátira en toda la ciudad.',
    category: 'architecture',
    readTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=80',
    featured: false,
    author: 'Cristian Gutiérrez · Legacy Tours',
    publishDate: '2026-10-11',
    tags: ['La Pedrera', 'Casa Milà', 'Gaudí', 'UNESCO'],
    seoTitle: 'La Pedrera Casa Milà Barcelona: History, Architecture & Curiosities',
    seoTitleEs: 'La Pedrera Casa Milà Barcelona: Historia, arquitectura de Gaudí y secretos',
    seoDescription: 'Discover the real story of Gaudí’s Casa Milà (La Pedrera): why the owner Roser Segimon demolished Gaudí’s plaster ceilings and its structural revolution.',
    seoDescriptionEs: 'La historia real de La Pedrera de Gaudí: por qué la propietaria Roser Segimon mandó derribar techos de Gaudí y su revolucionaria estructura sin muros de carga.',
    content: `
      <p class="lead text-lg font-light text-neutral-700 mb-6">When developer Pere Milà and his wealthy heiress wife Roser Segimon hired Antoni Gaudí to build their residence on the corner of Passeig de Gràcia and Carrer de Provença, they expected an imposing home. What they received was so shocking that contemporary cartoonists compared it to a zeppelin garage or a wasp nest.</p>
      
      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">Structural Revolution: Free Plan</h2>
      <p class="mb-4">Gaudí eliminated traditional interior load-bearing walls. Instead, the building relies on a skeleton of stone columns, steel girders, and brick catenary arches in the attic. This meant that room partitions could be moved freely without risking structural integrity.</p>
      <p class="mb-4">The undulating self-supporting limestone facade is hung onto the internal steel beams like a curtain, giving the stone its marine, wave-like organic movement.</p>

      <div class="my-8 p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
        <h3 class="font-display font-bold text-amber-950 uppercase text-sm tracking-wider mb-2">Documented History: The Owner Who Removed Gaudí's Ceilings</h3>
        <p class="text-sm text-amber-900 font-light leading-relaxed">Roser Segimon was never enamored with Gaudí's undulating organic interiors. In 1927, one year after Gaudí's death, she ordered the demolition of over 500 square meters of undulating plaster ceilings to install conventional neo-Louis XVI French mouldings. The official invoice and renovation permits survive in the archives today.</p>
      </div>

      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">The Rooftop of Warriors</h2>
      <p class="mb-4">Gaudí turned utilitarian elements—chimneys, ventilation pipes, and staircase exits—into monumental stone sculptures. Many resemble medieval knights wearing crested helmets.</p>
    `,
    contentEs: `
      <p class="lead text-lg font-light text-neutral-700 mb-6">Cuando el empresario Pere Milà y su acaudalada esposa Roser Segimon encomendaron a Antoni Gaudí su residencia en la esquina del Passeig de Gràcia con Provença, esperaban una casa de prestigio. La respuesta de Gaudí fue tan vanguardista que las revistas satíricas de la época la apodaron «La Pedrera» (la cantera).</p>
      
      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">Revolución estructural: planta libre</h2>
      <p class="mb-4">Gaudí suprimió los muros de carga convencionales. La estructura descansa en pilares de piedra y hierro y un desván de 270 arcos catenarios de ladrillo. De este modo, la tabiquería interior puede modificarse a capricho sin comprometer la resistencia del edificio.</p>
      <p class="mb-4">La fachada de piedra caliza ondulante está suspendida de la estructura interna, asemejándose al oleaje marino o a acantilados esculpidos por el viento.</p>

      <div class="my-8 p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
        <h3 class="font-display font-bold text-amber-950 uppercase text-sm tracking-wider mb-2">Hecho documentado: La dueña que mandó picar los techos</h3>
        <p class="text-sm text-amber-900 font-light leading-relaxed">Roser Segimon nunca compartió el entusiasmo por las líneas curvas de Gaudí. En 1927, al año de fallecer el arquitecto, encargó demoler más de 500 metros cuadrados de cielos rasos y molduras curvas para instalar decoración francesa clásica estilo Luis XVI. El presupuesto y la licencia de obra se conservan hoy en los archivos históricos de la casa.</p>
      </div>

      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">La azotea de los guerreros</h2>
      <p class="mb-4">Gaudí elevó elementos meramente funcionales —salidas de escalera, chimeneas y respiraderos— a la categoría de esculturas monumentales. Sus formas recuerdan a caballeros medievales con yelmo, vigilando en silencio el skyline del Eixample barcelonés.</p>
    `
  },
  {
    id: 'arc-de-triomf',
    slug: 'arc-de-triomf-barcelona-historia',
    stopNumber: 12,
    title: 'Arc de Triomf: The Monument That Welcomed the World Instead of Wars',
    titleEs: 'Arc de Triomf: El Arco de Triunfo Que Celebró la Paz y el Mundo',
    excerpt: 'Unlike Roman and Parisian triumphal arches built to celebrate military victories, Barcelona’s arch was built in 1888 for a peaceful Universal Exposition.',
    excerptEs: 'A diferencia de los arcos clásicos que conmemoran victorias bélicas, el de Barcelona fue construido en 1888 como puerta civil de la Exposición Universal.',
    category: 'history',
    readTime: 4,
    coverImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1400&q=80',
    featured: false,
    author: 'Cristian Gutiérrez · Legacy Tours',
    publishDate: '2026-10-12',
    tags: ['Arc de Triomf', 'Exposición 1888', 'Passeig Lluís Companys'],
    seoTitle: 'Arc de Triomf Barcelona: Real History, Architecture & Expo 1888',
    seoTitleEs: 'Arc de Triomf Barcelona: Historia real, arquitectura y Exposición 1888',
    seoDescription: 'Why does Barcelona have an Arc de Triomf? Discover its red brick Neo-Mudéjar style and the civic meaning behind its famous reliefs.',
    seoDescriptionEs: '¿Por qué Barcelona tiene un Arco de Triunfo? Conoce su ladrillo visto neomudéjar y el mensaje civil de acogida a los pueblos del mundo.',
    content: `
      <p class="lead text-lg font-light text-neutral-700 mb-6">Designed by architect Josep Vilaseca i Casanovas, the Arc de Triomf was inaugurated in 1888 as the ceremonial gateway to Barcelona’s Universal Exposition. It marks the grand entrance leading down Passeig de Lluís Companys to the Parc de la Ciutadella.</p>
      
      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">A Civil Arch of Red Brick</h2>
      <p class="mb-4">While classical triumphal arches in Rome or Paris are carved from cold limestone to celebrate battlefield conquests, Barcelona chose exposed red brick and Neo-Mudéjar polychrome ceramics. It is a monument of civic welcoming, culture, and industry.</p>

      <div class="my-8 p-6 rounded-2xl bg-neutral-100 border border-neutral-200">
        <h3 class="font-display font-bold text-neutral-950 uppercase text-sm tracking-wider mb-2">The Story in the Frienzes</h3>
        <p class="text-sm text-neutral-700 font-light leading-relaxed">The northern frieze by sculptor Josep Reynés depicts Barcelona as a seated woman personifying the city, welcoming all participating nations with open arms. The southern relief by Josep Llimona illustrates the distribution of awards to inventors, artists, and craftsmen.</p>
      </div>

      <p class="mb-4">Today, the arch stands at the threshold between the 19th-century Eixample grid and the greenery of Ciutadella Park, offering one of the most photographed and picturesque boulevards in Catalonia.</p>
    `,
    contentEs: `
      <p class="lead text-lg font-light text-neutral-700 mb-6">Diseñado por el arquitecto Josep Vilaseca i Casanovas, el Arc de Triomf fue inaugurado en 1888 como pórtico de entrada a la Exposición Universal de Barcelona, abriendo el majestuoso paseo que conduce al Parc de la Ciutadella.</p>
      
      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">Un monumento civil en ladrillo visto</h2>
      <p class="mb-4">A diferencia de los arcos de Roma o París levantados con fría sillería de piedra para ensalzar conquistas militares, Barcelona apostó por el ladrillo visto y cerámicas de estética neomudéjar e historicista. Es una obra concebida para la hospitalidad cívica, el progreso técnico y el arte.</p>

      <div class="my-8 p-6 rounded-2xl bg-neutral-100 border border-neutral-200">
        <h3 class="font-display font-bold text-neutral-950 uppercase text-sm tracking-wider mb-2">El mensaje de los frisos</h3>
        <p class="text-sm text-neutral-700 font-light leading-relaxed">El friso del escultor Josep Reynés en el lado de Sant Joan personifica a Barcelona como una figura femenina que acoge con afecto a las naciones del mundo. En la fachada opuesta, Josep Llimona esculpió el acto civil del reparto de medallas y recompensas a artesanos e inventores.</p>
      </div>

      <p class="mb-4">Cruzar bajo su arcada en nuestro coche eléctrico vintage es uno de los pasos más fotogénicos y emblemáticos de nuestros tres tours por la ciudad.</p>
    `
  },
  {
    id: 'parc-de-la-ciutadella',
    slug: 'parc-de-la-ciutadella-historia-gaudi',
    stopNumber: 11,
    title: 'Parc de la Ciutadella: From Military Citadel to Gaudí’s Waterfall',
    titleEs: 'Parc de la Ciutadella: De Fortaleza Militar a la Cascada del Joven Gaudí',
    excerpt: 'Built over the rubble of the Bourbon fortress of 1714, this park was transformed for the 1888 World Expo and gave young Gaudí his first monumental commission.',
    excerptEs: 'Levantado sobre la fortaleza borbónica de 1714, el parque fue rediseñado para la Exposición de 1888 y albergó uno de los primeros encargos del joven Gaudí.',
    category: 'culture',
    readTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=80',
    featured: false,
    author: 'Cristian Gutiérrez · Legacy Tours',
    publishDate: '2026-10-13',
    tags: ['Ciutadella', 'Gaudí', 'Cascada Monumental', 'Historia Barcelona'],
    seoTitle: 'Parc de la Ciutadella Barcelona: History, Mammoth & Gaudí Waterfall',
    seoTitleEs: 'Parc de la Ciutadella Barcelona: Historia real, mamut y cascada de Gaudí',
    seoDescription: 'The true story of Parc de la Ciutadella: its transformation from 1714 fortress to public park, the Cascada Monumental, and the lonely stone mammoth.',
    seoDescriptionEs: 'Historia del Parc de la Ciutadella: de ciudadela militar a parque de la Expo 1888, la cascada con el joven Gaudí y la escultura del mamut.',
    content: `
      <p class="lead text-lg font-light text-neutral-700 mb-6">Ciutadella Park is Barcelona’s beloved central sanctuary, but its tranquil lakes and palm trees conceal centuries of turbulent political history.</p>
      
      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">From Repressive Fortress to People’s Park</h2>
      <p class="mb-4">Following the Siege of Barcelona in 1714, King Philip V ordered the construction of a star-shaped citadel to oversee and subdue the rebellious city, demolishing a whole neighborhood of the Ribera district. In 1869, the despised walls were finally brought down, and urbanist Josep Fontserè transformed the plot into a public garden under the motto <em>"The gardens belong to the town."</em></p>

      <div class="my-8 p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
        <h3 class="font-display font-bold text-amber-950 uppercase text-sm tracking-wider mb-2">Young Gaudí’s Water Calculations</h3>
        <p class="text-sm text-amber-900 font-light leading-relaxed">The majestic Cascada Monumental waterfall was designed by master Fontserè between 1875 and 1888. Working under him as an ambitious student and draftsman was a young Antoni Gaudí, who calculated the hydraulic pressure and water tank mechanics that bring the fountain to life.</p>
      </div>

      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">The Solitary Mammoth of 1907</h2>
      <p class="mb-4">Strolling through the shaded paths, visitors encounter a life-size stone mammoth erected in 1907. It was intended as the first of an educational series of prehistoric animals across the park; the project ran out of funds, leaving this majestic beast forever in solitary glory.</p>
    `,
    contentEs: `
      <p class="lead text-lg font-light text-neutral-700 mb-6">El Parque de la Ciutadella es el gran pulmón verde del centro de Barcelona, pero sus plácidos estanques esconden siglos de memoria histórica de la ciudad.</p>
      
      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">De fortaleza militar a jardín ciudadano</h2>
      <p class="mb-4">Tras la caída de Barcelona en 1714, Felipe V ordenó erigir una colosal ciudadela militar para vigilar y controlar la ciudad, derribando gran parte de las viviendas de la Ribera. En 1869 se procedió al ansiado derribo de la fortaleza y Josep Fontserè diseñó un parque público bajo el lema <em>«Los jardines son del pueblo»</em>.</p>

      <div class="my-8 p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
        <h3 class="font-display font-bold text-amber-950 uppercase text-sm tracking-wider mb-2">El joven Gaudí y la Cascada Monumental</h3>
        <p class="text-sm text-amber-900 font-light leading-relaxed">La majestuosa Cascada Monumental fue proyectada por Fontserè. Entre sus jóvenes ayudantes y delineantes figuraba un prometedor Antoni Gaudí, quien intervino en los cálculos del depósito hidráulico superior que alimenta el torrente de agua.</p>
      </div>

      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">El mamut solitario de 1907</h2>
      <p class="mb-4">Entre la frondosa vegetación destaca la escultura a tamaño natural de un mamut pétreo, realizada en 1907. Iba a ser la primera pieza de un ambicioso parque temático con animales prehistóricos extintos que nunca llegó a completarse, dejando al mamut como entrañable icono de la ciudad.</p>
    `
  },
  {
    id: 'hospital-de-sant-pau',
    slug: 'hospital-de-sant-pau-modernismo',
    stopNumber: 15,
    title: 'Hospital de Sant Pau: A Parisian Will and the Palace of Healing',
    titleEs: 'Hospital de Sant Pau: Un Testamento en París y el Palacio de la Salud',
    excerpt: 'Designed by Lluís Domènech i Montaner and inscribed on the UNESCO list in 1997, Sant Pau turned medical architecture into a garden city of mosaics and light.',
    excerptEs: 'Diseñado por Domènech i Montaner e inscrito en la UNESCO en 1997, Sant Pau convirtió la asistencia médica en una ciudad jardín de mosaicos y luz.',
    category: 'architecture',
    readTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1579282240050-352db0a14c21?auto=format&fit=crop&w=1400&q=80',
    featured: false,
    author: 'Cristian Gutiérrez · Legacy Tours',
    publishDate: '2026-10-14',
    tags: ['Sant Pau', 'Domènech i Montaner', 'UNESCO', 'Modernisme'],
    seoTitle: 'Hospital de Sant Pau Barcelona: History, Architecture & UNESCO Guide',
    seoTitleEs: 'Hospital de Sant Pau Barcelona: Historia, arquitectura de Domènech y UNESCO',
    seoDescription: 'The fascinating story of Recinte Modernista de Sant Pau: Pau Gil’s Parisian bequest, underground tunnels, and Domènech i Montaner’s genius.',
    seoDescriptionEs: 'Conoce la historia del Hospital de Sant Pau: el legado de Pau Gil, los pabellones modernistas y los túneles subterráneos que unían este complejo de la UNESCO.',
    content: `
      <p class="lead text-lg font-light text-neutral-700 mb-6">While Antoni Gaudí was building private residences for the industrial bourgeoisie, architect Lluís Domènech i Montaner applied the full decorative richness of Catalan Modernisme to public health and collective healing.</p>
      
      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">A Legacy from Paris</h2>
      <p class="mb-4">In 1896, Catalan banker Pau Gil passed away in Paris, leaving half of his estate to fund a revolutionary new hospital in Barcelona that would combine cutting-edge hygiene with the highest artistic beauty. The stone friezes on the main administration pavilion recount this philanthropic story in pictorial detail.</p>

      <div class="my-8 p-6 rounded-2xl bg-sky-50/70 border border-sky-200">
        <h3 class="font-display font-bold text-sky-950 uppercase text-sm tracking-wider mb-2">The Underground City of Tunnels</h3>
        <p class="text-sm text-sky-900 font-light leading-relaxed">Beneath the garden pavilions lies a kilometer-long network of subterranean galleries and tunnels. Doctors, nurses, and stretchers could move silently between operating rooms and wards without ever exposing patients to outdoor dust or weather.</p>
      </div>

      <p class="mb-4">Today, the Recinte Modernista de Sant Pau is the largest Art Nouveau architectural complex on Earth, declared a UNESCO World Heritage site in 1997.</p>
    `,
    contentEs: `
      <p class="lead text-lg font-light text-neutral-700 mb-6">Mientras Gaudí concebía palacios privados para la alta burguesía, el arquitecto Lluís Domènech i Montaner puso toda la exuberancia del modernismo al servicio de la medicina social y el alivio colectivo.</p>
      
      <h2 class="text-2xl font-display font-bold uppercase tracking-wide text-neutral-900 mt-8 mb-4">Un legado desde París</h2>
      <p class="mb-4">En 1896, el banquero Pau Gil falleció en París disponiendo en su testamento la creación de un nuevo hospital en Barcelona que aunara la higiene científica con la máxima belleza artística. El friso de piedra del pabellón principal narra paso a paso esta historia filantrópica.</p>

      <div class="my-8 p-6 rounded-2xl bg-sky-50/70 border border-sky-200">
        <h3 class="font-display font-bold text-sky-950 uppercase text-sm tracking-wider mb-2">La red de túneles subterráneos</h3>
        <p class="text-sm text-sky-900 font-light leading-relaxed">Bajo los jardines y pabellones de ladrillo y cerámica discurre una red subterránea de galerías y túneles de más de un kilómetro. Médicos, personal y camillas se trasladaban con total rapidez y resguardo higiénico entre las distintas unidades hospitalarias.</p>
      </div>

      <p class="mb-4">Declarado Patrimonio de la Humanidad por la UNESCO en 1997, el Recinte Modernista de Sant Pau es hoy el conjunto arquitectónico modernista más extenso del planeta.</p>
    `
  }
];
