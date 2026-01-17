export type Language = 'es' | 'en' | 'fr' | 'de' | 'it';

export interface StopContent {
  title: string;
  legacy: string;
  secret: string;
  voice: string;
}

export interface Stop {
  id: number;
  image: string;
  content: Record<Language, StopContent>;
}

export const STOPS: Stop[] = [
  {
    id: 1,
    image: "/plaza_catalunya_artistic_1768605789622.png",
    content: {
      es: {
        title: "PLAZA CATALUNYA",
        legacy: "Epicentro de Barcelona, inaugurada en 1927 para la Exposición Internacional. Con sus 50.000 m², es el nexo vital entre el núcleo medieval y el moderno Eixample, diseñada por el arquitecto Francesc Nebot.",
        secret: "Bajo tus pies existe una red de refugios antiaéreos de la Guerra Civil que conectaban puntos estratégicos; el subsuelo es un laberinto de historia invisible.",
        voice: "Siente el pulso de la ciudad aquí. Es la puerta de entrada a dos milenios de evolución urbana."
      },
      en: {
        title: "CATALONIA SQUARE",
        legacy: "The epicenter of Barcelona, inaugurated in 1927 for the International Exposition. Spanning 50,000 m², it's the vital link between the medieval core and the modern Eixample.",
        secret: "Beneath your feet lies a network of Civil War air-raid shelters; the subsoil is a labyrinth of invisible history.",
        voice: "Feel the pulse of the city here. It's the gateway to two millennia of urban evolution."
      },
      fr: {
        title: "PLACE DE CATALOGNE",
        legacy: "L'épicentre de Barcelone, inauguré en 1927. Avec ses 50 000 m², c'est le lien vital entre le cœur médiéval et le moderne Eixample.",
        secret: "Sous vos pieds se trouve un réseau d'abris anti-aériens de la guerre civile.",
        voice: "Sentez le pouls de la ville ici. C'est la porte d'entrée de deux millénaires d'histoire."
      },
      de: {
        title: "PLAÇA DE CATALUNYA",
        legacy: "Das Epizentrum von Barcelona, eingeweiht 1927. Mit 50.000 m² ist es das Bindeglied zwischen dem mittelalterlichen Kern und dem modernen Eixample.",
        secret: "Unter Ihren Füßen befindet sich ein Netzwerk von Luftschutzkellern aus dem Bürgerkrieg.",
        voice: "Spüren Sie hier den Puls der Stadt. Es ist das Tor zu zwei Jahrtausenden Geschichte."
      },
      it: {
        title: "PIAZZA CATALOGNA",
        legacy: "L'epicentro di Barcellona, inaugurato nel 1927. Con i suoi 50.000 m², è il legame vitale tra il nucleo medievale e il moderno Eixample.",
        secret: "Sotto i tuoi piedi si trova una rete di rifugi antiaerei della guerra civile.",
        voice: "Senti qui il battito della città. È la porta d'accesso a due millenni di storia."
      }
    }
  },
  {
    id: 2,
    image: "/las_ramblas_street_artistic_1768607335303.png",
    content: {
      es: {
        title: "LAS RAMBLAS",
        legacy: "Antiguo torrente de agua transformado en 1835 en el paseo más famoso del mundo. Se divide en cinco tramos desde Canaletas hasta Santa Mónica, cada uno con su propia identidad.",
        secret: "El mosaico 'Pla de l'Os' de Joan Miró (1976) no es solo decoración; fue diseñado para ser pisado sin miedo, integrando el arte en el caminar cotidiano.",
        voice: "Camina sobre el arte de Miró. El aroma de las flores te cuenta la historia de una ciudad que se abrió al mar."
      },
      en: {
        title: "THE RAMBLAS",
        legacy: "An old water stream transformed in 1835 into the world's most famous promenade. It's divided into five sections, each with its own history.",
        secret: "Joan Miró's 'Pla de l'Os' mosaic (1976) isn't just decoration; it was designed to be walked on, integrating art into everyday life.",
        voice: "Walk on Miró's art. The scent of flowers tells the story of a city that opened up to the sea."
      },
      fr: {
        title: "LES RAMBLAS",
        legacy: "Ancien cours d'eau transformé en 1835 en la promenade la plus célèbre du monde.",
        secret: "La mosaïque de Joan Miró au sol a été conçue pour être foulée par les passants.",
        voice: "Marchez sur l'art. Le parfum des fleurs raconte l'histoire d'une ville ouverte sur le monde."
      },
      de: {
        title: "DIE RAMBLAS",
        legacy: "Ein alter Wasserstrom, der 1835 in die berühmteste Promenade der Welt verwandelt wurde.",
        secret: "Joan Mirós Mosaik 'Pla de l'Os' wurde entworfen, um darauf zu gehen und Kunst in den Alltag zu integrieren.",
        voice: "Gehen Sie auf Kunst. Der Duft der Blumen erzählt die Geschichte einer weltoffenen Stadt."
      },
      it: {
        title: "LE RAMBLAS",
        legacy: "Un antico torrente trasformato nel 1835 nella passeggiata più famosa del mondo.",
        secret: "Il mosaico di Joan Miró a terra è stato progettato per essere calpestato dai passanti.",
        voice: "Cammina sull'arte. Il profumo dei fiori racconta la storia di una città che si è aperta al mondo."
      }
    }
  },
  {
    id: 3,
    image: "/gothic_quarter_artistic_1768605760941.png",
    content: {
      es: {
        title: "BARRIO GÓTICO",
        legacy: "Núcleo romano de Barcino fundado en el siglo I a.C. Sus murallas del siglo IV aún custodian la Catedral de la Santa Cruz y Santa Eulalia, joya gótica iniciada en 1298.",
        secret: "El puente de la calle del Obispo, aunque parece medieval, fue construido en 1928 por Joan Rubió i Bellver. Oculta una calavera con una daga legendaria.",
        voice: "Toca las piedras romanas. Estás en el epicentro exacto donde nació Barcelona hace 2.000 años."
      },
      en: {
        title: "GOTHIC QUARTER",
        legacy: "Roman core of Barcino founded in the 1st century BC. Its 4th-century walls still guard the Cathedral, a Gothic jewel started in 1298.",
        secret: "The Bishop's Bridge, though it looks medieval, was built in 1928. It hides a mysterious skull with a legendary dagger.",
        voice: "Touch Roman stones. You are at the exact epicenter where Barcelona was born 2,000 years ago."
      },
      fr: {
        title: "QUARTIER GOTHIQUE",
        legacy: "Cœur romain de Barcino fondé au Ier siècle av. J.-C. Ses remparts du IVe siècle protègent la cathédrale commencée en 1298.",
        secret: "Le pont de la rue de l'Évêque date en réalité de 1928.",
        voice: "Touchez l'histoire. Vous êtes là où Barcelone est née il y a plus de 2 000 ans."
      },
      de: {
        title: "GOTISCHES VIERTEL",
        legacy: "Römischer Kern von Barcino, gegründet im 1. Jahrhundert v. Chr. Die Mauern aus dem 4. Jahrhundert hüten die Kathedrale (1298).",
        secret: "Die Seufzerbrücke in der Carrer del Bisbe wurde erst 1928 erbaut.",
        voice: "Berühren Sie die Geschichte. Hier wurde Barcelona vor über 2.000 Jahren geboren."
      },
      it: {
        title: "QUARTIERE GOTICO",
        legacy: "Nucleo romano di Barcino fondato nel I secolo a.C. Le sue mura del IV secolo custodiscono la Cattedrale iniziata nel 1298.",
        secret: "Il ponte di via del Vescovo è stato effettivamente costruito nel 1928.",
        voice: "Tocca la storia. Ti trovi nel luogo dove Barcellona è nata più di 2.000 anni fa."
      }
    }
  },
  {
    id: 4,
    image: "/passeig_gracia_luxury_artistic_1768607348646.png",
    content: {
      es: {
        title: "PASSEIG DE GRÀCIA",
        legacy: "Inaugurado como carretera en 1827 y urbanizado a partir de 1860. Es el mayor museo al aire libre del Modernismo, donde la burguesía exhibía su poder a principios del XX.",
        secret: "Los famosos bancos-farola fueron diseñados por Pere Falqués en 1906. El pavimento de la calle es el 'hexagonal de Gaudí', diseñado originalmente para la Casa Batlló.",
        voice: "Camina sobre el diseño de Gaudí. Cada fachada aquí es un grito de libertad creativa."
      },
      en: {
        title: "GRACIA AVENUE",
        legacy: "Inaugurated in 1827 and urbanized from 1860. It's the greatest open-air museum of Modernism, where the bourgeoisie showcased their power.",
        secret: "The famous lamppost-benches were designed by Pere Falqués in 1906. The street tiles are Gaudí's unique hexagonal design.",
        voice: "Walk on Gaudí's design. Every facade here is a shout of creative freedom."
      },
      fr: {
        title: "PASSEIG DE GRÀCIA",
        legacy: "Le plus grand musée en plein air du Modernisme, urbanisé à partir de 1860.",
        secret: "Les lampadaires-bancs ont été dessinés par Pere Falqués en 1906.",
        voice: "Regardez les dalles de Gaudí sous vos pieds et l'opulence au-dessus."
      },
      de: {
        title: "PASSEIG DE GRÀCIA",
        legacy: "Das größte Freiluftmuseum des Modernismus, urbanisiert ab 1860.",
        secret: "Die berühmten Laternenbänke wurden 1906 von Pere Falqués entworfen.",
        voice: "Blicken Sie auf Gaudís Kacheln am Boden und auf die Pracht der Fassaden."
      },
      it: {
        title: "PASSEIG DE GRÀCIA",
        legacy: "Il più grande museo all'aperto del Modernismo, urbanizzato a partire dal 1860.",
        secret: "I famosi lampioni-panchina furono progettati da Pere Falqués nel 1906.",
        voice: "Guarda in basso i panots di Gaudí e in alto l'opulenza delle facciate."
      }
    }
  },
  {
    id: 5,
    image: "/casa_batllo_artistic_1768605747450.png",
    content: {
      es: {
        title: "CASA BATLLÓ",
        legacy: "Remodelación integral de un edificio existente realizada por Gaudí entre 1904 y 1906. Es una oda al naturalismo, prescindiendo totalmente de líneas rectas.",
        secret: "La fachada es un mar en calma hecho de fragmentos de cerámica (trencadís) y vidrio. El tejado, el 'lomo del dragón', simboliza la victoria de Sant Jordi.",
        voice: "Observa cómo la fachada respira con la luz del día. Es un sueño orgánico hecho realidad."
      },
      en: {
        title: "CASA BATLLÓ",
        legacy: "A full remodeling of an existing building by Gaudí between 1904 and 1906. It's an ode to naturalism, completely avoiding straight lines.",
        secret: "The facade is a calm sea made of ceramic fragments (trencadís). The roof, the 'dragon's back', symbolizes Saint George's victory.",
        voice: "Watch how the facade breathes with daylight. It's an organic dream come true."
      },
      fr: {
        title: "CASA BATLLÓ",
        legacy: "Remodelage complet d'un bâtiment existant par Gaudí entre 1904 et 1906.",
        secret: "La façade est une mer calme faite de fragments de céramique (trencadís).",
        voice: "Observez la danse des lumières. C'est un rêve végétal qui respire devant vous."
      },
      de: {
        title: "CASA BATLLÓ",
        legacy: "Vollständige Umgestaltung eines Gebäudes durch Gaudí zwischen 1904 und 1906.",
        secret: "Die Fassade ist ein ruhiges Meer aus bunter Keramik (Trencadís).",
        voice: "Beobachten Sie das Tanz der Lichter. Ein pflanzlicher Traum, der vor Ihnen atmet."
      },
      it: {
        title: "CASA BATLLÓ",
        legacy: "Ristrutturazione integrale di un edificio esistente realizzata da Gaudí tra il 1904 e il 1906.",
        secret: "La facciata è un mare calmo fatto di frammenti di ceramica (trencadís).",
        voice: "Osserva la danza delle luci. È un sogni vegetale che respira davanti a te."
      }
    }
  },
  {
    id: 6,
    image: "/la_pedrera_mil_artistic_1768607365482.png",
    content: {
      es: {
        title: "CASA MILÀ",
        legacy: "Construida por Gaudí entre 1906 y 1912 como una 'montaña tallada'. Su estructura de hierro permitió eliminar los muros de carga, algo revolucionario para su época.",
        secret: "Sus chimeneas antropomórficas inspiraron el casco de los Stormtroopers de Star Wars. George Lucas reconoció su fascinación por la 'azotea de los guerreros'.",
        voice: "Siente la fuerza de la piedra ondulada. Es una escultura habitable que desafía la gravedad."
      },
      en: {
        title: "CASA MILÀ",
        legacy: "Built by Gaudí between 1906 and 1912 as a 'carved mountain'. Its iron structure allowed for the elimination of load-bearing walls, a revolutionary feat.",
        secret: "Its anthropomorphic chimneys inspired the Star Wars Stormtrooper helmets. George Lucas was fascinated by the 'warrior rooftop'.",
        voice: "Feel the strength of the wavy stone. It's a habitable sculpture defying gravity."
      },
      fr: {
        title: "CASA MILÀ",
        legacy: "Construite par Gaudí entre 1906 et 1912 comme une 'montagne sculptée'.",
        secret: "Ses cheminées ont inspiré les casques des Stormtroopers dans Star Wars.",
        voice: "Montez sur le toit des guerriers et ressentez la force du génie de Gaudí."
      },
      de: {
        title: "CASA MILÀ",
        legacy: "Von Gaudí zwischen 1906 und 1912 als 'gemeißelter Berg' erbaut.",
        secret: "Die Schornsteine inspirierten die Helme der Stormtrooper in Star Wars.",
        voice: "Steigen Sie auf das Dach der Krieger und spüren Sie die Kraft von Gaudís Entwurf."
      },
      it: {
        title: "CASA MILÀ",
        legacy: "Costruita da Gaudí tra il 1906 e il 1912 come una 'montagna scolpita'.",
        secret: "I suoi camini hanno ispirato i caschi degli Stormtrooper di Star Wars.",
        voice: "Sali sulla terrazza dei guerrieri e senti la forza del design di Gaudí."
      }
    }
  },
  {
    id: 7,
    image: "/sagrada_familia_artistic_1768605732726.png",
    content: {
      es: {
        title: "SAGRADA FAMILIA",
        legacy: "El monumento más visitado de España. Su construcción comenzó el 19 de marzo de 1882. Gaudí dedicó 43 años a esta basílica que, al finalizarse (est. 2026-2030), será la iglesia más alta del mundo con 172.5m.",
        secret: "El Cuadrado Mágico de la Fachada de la Pasión suma 33 en todas direcciones (la edad de Cristo). Gaudí buscó el 33 para codificar su devoción en matemáticas puras.",
        voice: "Entra en el bosque de piedra. Las columnas no solo sostienen el techo, elevan el espíritu."
      },
      en: {
        title: "SAGRADA FAMILIA",
        legacy: "Spain's most visited monument. Construction began on March 19, 1882. Upon completion (est. 2026-2030), it will be the world's tallest church at 172.5m.",
        secret: "The 'Magic Square' on the Passion Facade always sums to 33 in any direction (the age of Christ). Gaudí used math to encode his devotion.",
        voice: "Enter the stone forest. The columns don't just hold the roof; they elevate the spirit."
      },
      fr: {
        title: "SAGRADA FAMILIA",
        legacy: "Monument le plus visité d'Espagne, commencé en 1882. Elle sera l'église la plus haute du monde (172,5 m).",
        secret: "Le carré magique sur la façade de la Passion totalise toujours 33.",
        voice: "Entrez dans la forêt de colonnes. Ici, la lumière révèle plus qu'elle n'éclaire."
      },
      de: {
        title: "SAGRADA FAMILIA",
        legacy: "Spaniens meistbesuchtes Monument, Baubeginn 1882. Nach Fertigstellung wird sie mit 172,5 m die höchste Kirche der Welt sein.",
        secret: "Das magische Quadrat an der Passionsfassade ergibt immer die Zahl 33.",
        voice: "Betreten Sie den Wald aus Säulen. Das Licht hier erhellt nicht nur, es offenbart."
      },
      it: {
        title: "SAGRADA FAMILIA",
        legacy: "Il monumento più visitato di Spagna, iniziato nel 1882. Sarà la chiesa più alta del mondo (172,5 m).",
        secret: "Il quadrato magico sulla facciata della Passione somma sempre 33.",
        voice: "Entra nel bosco di colonne. Qui la luce non illumina, rivela."
      }
    }
  },
  {
    id: 8,
    image: "/sant_pau_artistic_1768607265534.png",
    content: {
      es: {
        title: "SANT PAU RECINTE",
        legacy: "Obra maestra de Domènech i Montaner construida entre 1902 y 1930. Fue un hospital en funcionamiento hasta 2009 y es el conjunto modernista más grande de Europa, declarado Patrimonio Mundial.",
        secret: "Los pacientes eran trasladados por una red de túneles subterráneos de más de un kilómetro para preservar la higiene y la paz visual de los jardines curativos.",
        voice: "Siente la paz de esta ciudad-jardín. Aquí, la arquitectura se convirtió en medicina."
      },
      en: {
        title: "SANT PAU COMPLEX",
        legacy: "Domènech i Montaner's masterpiece built between 1902 and 1930. It's Europe's largest modernist complex and was a working hospital until 2009.",
        secret: "Patients were moved through a one-kilometer underground tunnel network to maintain the calm and hygiene of the healing gardens.",
        voice: "Feel the peace of this garden-city. Here, architecture became medicine."
      },
      fr: {
        title: "RECINTE DE SANT PAU",
        legacy: "Le plus grand ensemble moderniste d'Europe, construit entre 1902 et 1930.",
        secret: "Il possède un réseau de tunnels souterrains d'un kilomètre pour le transport des patients.",
        voice: "Promenez-vous dans cette oasis. Ici, la beauté a été conçue comme le premier pas vers la guérison."
      },
      de: {
        title: "SANT PAU KOMPLEX",
        legacy: "Modernistisches Meisterwerk, erbaut zwischen 1902 und 1930. Das größte modernistische Ensemble Europas.",
        secret: "Ein ein Kilometer langes unterirdisches Tunnelnetz verband die Pavillons.",
        voice: "Wandern Sie durch diese Oase. Schönheit wurde hier als erster Schritt zur Heilung verstanden."
      },
      it: {
        title: "COMPLESSO DI SANT PAU",
        legacy: "Capolavoro modernista costruito tra il 1902 e il 1930. Il più grande complesso modernista d'Europa.",
        secret: "Possiede una rete di tunnel sotterranei di un chilometro per trasferire i pazienti.",
        voice: "Cammina in questa oasi. Qui la bellezza è stata concepita come il primo passo per la guarigione."
      }
    }
  },
  {
    id: 9,
    image: "/arc_triomf_artistic_1768607236225.png",
    content: {
      es: {
        title: "ARC DE TRIOMF",
        legacy: "Puerta de entrada de la Exposición de 1888, diseñada por Josep Vilaseca. A diferencia de los arcos clásicos, se construyó en ladrillo visto, marcando el auge de la industria catalana.",
        secret: "Sus frisos celebran la industria, la agricultura y las artes. No es un arco de guerra, sino de paz y bienvenida de Barcelona a las naciones del mundo.",
        voice: "Cruza este portal rojo. Simboliza la apertura de una ciudad que decidió derribar sus murallas para siempre."
      },
      en: {
        title: "ARC DE TRIOMF",
        legacy: "Gateway to the 1888 Exposition, designed by Josep Vilaseca. Unlike classic arches, it's made of exposed brick, marking the rise of Catalan industry.",
        secret: "Its friezes celebrate industry, agriculture, and the arts. It's not an arch of war, but of peace and international welcome.",
        voice: "Cross this red portal. It symbolizes the opening of a city that chose to tear down its walls forever."
      },
      fr: {
        title: "ARC DE TRIOMF",
        legacy: "Porte d'entrée de l'Exposition de 1888. Contrairement aux arcs classiques, il est en briques apparentes.",
        secret: "Il ne célèbre pas de victoire militaire, mais la paix et l'accueil du monde.",
        voice: "Franchissez ce portail rouge. C'est le symbole d'une Barcelone sans murailles."
      },
      de: {
        title: "ARC DE TRIOMF",
        legacy: "Tor zur Weltausstellung von 1888. Er wurde aus Sichtziegeln erbaut und markiert den Aufstieg der katalanischen Industrie.",
        secret: "Im Gegensatz zu vielen Arcos de Triunfo feiert er den Frieden und nicht den Krieg.",
        voice: "Durchschreiten Sie dieses rote Portal. Ein Symbol für das Barcelona, das seine Mauern hinter sich ließ."
      },
      it: {
        title: "ARC DE TRIOMF",
        legacy: "Porta d'ingresso dell'Esposizione del 1888. A differenza degli archi classici, è costruito in mattoni a vista.",
        secret: "I suoi fregi celebrano l'industria, l'agricoltura e le arti.",
        voice: "Attraversa questo portale rosso. È il simbolo di una Barcellona che ha lasciato le sue mura."
      }
    }
  },
  {
    id: 10,
    image: "/ciutadella_park_artistic_1768607249153.png",
    content: {
      es: {
        title: "PARC DE LA CIUTADELLA",
        legacy: "Inaugurado en 1872. Este solar fue la ciudadela militar más temida de Europa, construida por Felipe V en 1714 para vigilar a la ciudad y derribada en 1869 para devolver la libertad al pueblo.",
        secret: "La Gran Cascada fue diseñada por Josep Fontserè con la ayuda de un joven aprendiz desconocido entonces: Antoni Gaudí, quien diseñó parte del motor de agua.",
        voice: "Disfruta de la libertad de este pulmón verde. Mira la fuente y busca la huella del joven Gaudí."
      },
      en: {
        title: "CIUTADELLA PARK",
        legacy: "Inaugurated in 1872. This site was Europe's most feared military citadel, built in 1714 to watch the city and torn down in 1869 to return freedom to the people.",
        secret: "The Great Cascade was designed by Josep Fontserè with the help of a then-unknown young apprentice: Antoni Gaudí.",
        voice: "Enjoy the freedom of this green lung. Look at the fountain and find the mark of a young Gaudí."
      },
      fr: {
        title: "PARC DE LA CIUTADELLA",
        legacy: "Inauguré en 1872 sur le site d'une redoutable citadelle militaire démolie pour rendre la liberté au peuple.",
        secret: "Un jeune apprenti nommé Antoni Gaudí a aidé à concevoir la grande cascade.",
        voice: "Ressentez la liberté de ce parc. Cherchez le mammouth parmi les arbres."
      },
      de: {
        title: "CIUTADELLA PARK",
        legacy: "1872 eingeweiht. Hier stand einst die gefürchtete Militärfestung, die 1869 demontiert wurde.",
        secret: "Ein junger Lehrling namens Antoni Gaudí half bei der Gestaltung der großen Kaskade.",
        voice: "Spüren Sie die Freiheit dieses Parks. Suchen Sie das Mammut zwischen den Bäumen."
      },
      it: {
        title: "PARC DE LA CIUTADELLA",
        legacy: "Inaugurato nel 1872 sul sito di una temuta cittadella militare demolita per restituire la libertà al popolo.",
        secret: "Un giovane apprendista di nome Antoni Gaudí aiutò a progettare la grande cascata.",
        voice: "Senti la libertà di questo parco. Cerca il mammut tra gli alberi."
      }
    }
  },
  {
    id: 11,
    image: "/port_vell_artistic_1768605776175.png",
    content: {
      es: {
        title: "PORT VELL",
        legacy: "Puerto histórico de Barcelona revitalizado para las Olimpiadas de 1992. El monumento a Colón, de 60m, corona el final de Las Ramblas desde su inauguración en 1888.",
        secret: "El interior de la columna de Colón aloja el elevador más estrecho y antiguo de la ciudad, ofreciendo una vista panorámica única de 360 grados.",
        voice: "Escucha el crujir de los mástiles. Este puerto es la puerta marítima de Europa desde hace milenios."
      },
      en: {
        title: "OLD PORT",
        legacy: "Barcelona's historic port revitalized for the 1992 Olympics. The 60m Columbus Monument has crowned the end of Las Ramblas since 1888.",
        secret: "Inside the Columbus column is the city's oldest and narrowest elevator, offering a unique 360-degree panoramic view.",
        voice: "Listen to the creaking masts. This port has been Europe's maritime gateway for millennia."
      },
      fr: {
        title: "VIEUX PORT",
        legacy: "Port historique revitalisé pour les JO de 1992. Le monument à Colomb date de 1888.",
        secret: "La colonne de Colomb abrite l'ascenseur le plus étroit et le plus ancien de la ville.",
        voice: "Respirez le grand large. Ce port est le pont entre Barcelone et le monde."
      },
      de: {
        title: "ALTER HAFEN",
        legacy: "Historischer Hafen, revitalisiert für die Olympiade 1992. Das Kolumbus-Monument (1888) ist 60 m hoch.",
        secret: "Im Inneren der Kolumbus-Säule befindet sich der älteste und schmalste Aufzug der Stadt.",
        voice: "Atmen Sie die Seeluft. Dieser Hafen ist die jahrtausendealte Brücke zwischen Barcelona und der Welt."
      },
      it: {
        title: "PORTO VECCHIO",
        legacy: "Porto storico di Barcellona rivitalizzato per le Olimpiadi del 1992. Il monumento a Colombo risale al 1888.",
        secret: "All'interno della colonna di Colombo si trova l'ascensore più stretto e antico della città.",
        voice: "Respira la salsedine. Questo porto è il ponte millenario tra Barcellona e il mondo."
      }
    }
  },
  {
    id: 12,
    image: "/barceloneta_beach_artistic_1768607278183.png",
    content: {
      es: {
        title: "PLAYA BARCELONETA",
        legacy: "Barrio marinero proyectado en 1753 para realojar a las familias desplazadas por la construcción de la Ciutadella. Sus arenas son hoy el corazón social del verano.",
        secret: "El hotel W (2009), con su forma de vela, se ha convertido en el faro moderno, pero las 'chiringuitos' mantienen el alma de los antiguos pescadores.",
        voice: "Siente el sol del Mediterráneo. Aquí nace la brisa que refresca toda la ciudad."
      },
      en: {
        title: "BARCELONETA BEACH",
        legacy: "Seafaring neighborhood planned in 1753 for families displaced by the Ciutadella's construction. Its sands are the city's social heart.",
        secret: "The sail-shaped W Hotel (2009) is the modern lighthouse, but the narrow streets still hide the ghosts of old fishermen.",
        voice: "Feel the Mediterranean sun. Here is born the breeze that cools the entire city."
      },
      fr: {
        title: "PLAGE DE LA BARCELONETA",
        legacy: "Quartier de pêcheurs projeté en 1753. Ses sables sont aujourd'hui le cœur social de l'été.",
        secret: "L'hôtel W en forme de voile est devenu un nouveau symbole de la ville.",
        voice: "Écoutez les vagues. Ces sables ont vu des pirates et des marins."
      },
      de: {
        title: "STRAND VON BARCELONETA",
        legacy: "Seefahrerviertel, 1753 für vertriebene Familien geplant. Heute das soziale Herz des Sommers.",
        secret: "Das segelförmige W-Hotel (2009) ist das moderne Wahrzeichen am Ende des Strandes.",
        voice: "Hören Sie die Wellen. Dieser Sand hat Piraten und Seeleute gesehen."
      },
      it: {
        title: "SPIAGGIA BARCELONETA",
        legacy: "Quartiere marinaio progettato nel 1753. Le sue sabbie sono oggi il cuore sociale dell'estate.",
        secret: "L'hotel W a forma di vela è diventato il nuovo faro moderno della città.",
        voice: "Ascolta le onde. Queste sabbie hanno visto pirati e marinai."
      }
    }
  },
  {
    id: 13,
    image: "/puerto_olimpico_unique_artistic_1768607994495.png",
    content: {
      es: {
        title: "PUERTO OLÍMPICO",
        legacy: "Creado para los JJ.OO. de 1992, transformó una zona industrial degradada en un puerto con más de 740 amarres. Es el legado más tangible del cambio urbanístico de Barcelona.",
        secret: "El Pez Dorado de Frank Gehry (1992) mide 56 metros de largo. Fue la primera escultura diseñada íntegramente por ordenador usando software de aviación.",
        voice: "Mira cómo la luz brilla en las escamas del gran pez. Es el símbolo del salto al siglo XXI."
      },
      en: {
        title: "OLYMPIC PORT",
        legacy: "Created for the 1992 Olympics, it transformed a degraded industrial zone into a harbor with over 740 moorings. It's the most tangible legacy of the games.",
        secret: "Frank Gehry's Golden Fish (1992) is 56 meters long. It was the first sculpture designed entirely via computer using aviation software.",
        voice: "Watch how light shines on the great fish's scales. It's the symbol of the leap into the 21st century."
      },
      fr: {
        title: "PORT OLYMPIQUE",
        legacy: "Créé pour les JO de 1992, il a transformé une zone industrielle en un port de 740 places.",
        secret: "Le Poisson d'Or de Gehry mesure 56 mètres de long.",
        voice: "Regardez l'éclat du poisson de métal. C'est le symbole du saut technologique de la ville."
      },
      de: {
        title: "OLYMPIAHAFEN",
        legacy: "Erstellt für die Olympischen Spiele 1992, verwandelte er ein Industriegebiet in einen Hafen mit 740 Liegeplätzen.",
        secret: "Der Goldene Fisch von Gehry ist 56 Meter lang und wurde mit Flugzeugsoftware entworfen.",
        voice: "Sehen Sie das Blinken des Metallfischs. Ein Symbol für den technologischen Sprung der Stadt."
      },
      it: {
        title: "PORTO OLIMPICO",
        legacy: "Creato per le Olimpiadi del 1992, ha trasformato una zona industriale in un porto con 740 ormeggi.",
        secret: "Il Pesce d'Oro di Gehry è lungo 56 metri.",
        voice: "Guarda il luccichio del pesce di metallo. Simboleggia il salto tecnologico della città."
      }
    }
  },
  {
    id: 14,
    image: "/jardines_miramar_unique_artistic_1768608012244.png",
    content: {
      es: {
        title: "JARDINES DE MIRAMAR",
        legacy: "Diseñados por Forestier para la Exposición de 1929. Elevados a 60m sobre el nivel del mar, ofrecen una vista de 270 grados de todo el litoral barcelonés.",
        secret: "Desde este punto exacto, los antiguos vigías daban señales de humo al castillo de Montjuïc al ver barcos sospechosos en el horizonte mediterráneo.",
        voice: "Detente y respira el mar desde las alturas. Barcelona entera se rinde a tus pies."
      },
      en: {
        title: "MIRAMAR GARDENS",
        legacy: "Designed by Forestier for the 1929 Exposition. Elevated 60m above sea level, they offer a 270-degree view of the entire coastline.",
        secret: "From this exact spot, ancient lookouts gave smoke signals to Montjuïc Castle upon spotting suspicious ships on the horizon.",
        voice: "Stop and breathe in the sea from above. All of Barcelona lies at your feet."
      },
      fr: {
        title: "JARDINS DE MIRAMAR",
        legacy: "Conçus par Forestier pour l'Exposition de 1929 à 60 m au-dessus de la mer.",
        secret: "D'ici, les anciens guetteurs surveillaient l'arrivée des bateaux.",
        voice: "Laissez votre regard se perdre dans le bleu. Barcelone se comprend mieux d'ici."
      },
      de: {
        title: "MIRAMAR GÄRTEN",
        legacy: "Entworfen von Forestier für die Weltausstellung 1929, 60 m über dem Meeresspiegel gelegen.",
        secret: "Von hier aus gaben historische Wachtposten Rauchsignale an die Burg Montjuïc.",
        voice: "Lassen Sie Ihren Blick ins Blaue schweifen. Barcelona versteht man am besten von den Höhen des Montjuïc."
      },
      it: {
        title: "GIARDINI DI MIRAMAR",
        legacy: "Progettati da Forestier per l'Esposizione del 1929, situati a 60 metri sul livello del mare.",
        secret: "Da qui storiche vedette segnalavano l'arrivo di navi sospette.",
        voice: "Lascia che il tuo sguardo si perda nel blu. Barcellona si capisce meglio dalle alture del Montjuïc."
      }
    }
  },
  {
    id: 15,
    image: "/anillo_olimpico_artistic_1768607320919.png",
    content: {
      es: {
        title: "ANILLO OLÍMPICO",
        legacy: "Corazón de los juegos de 1992. La Torre de Comunicaciones de Calatrava, de 136 metros, simboliza una antorcha empuñada por un atleta.",
        secret: "La torre de Calatrava es en realidad un enorme reloj de sol. Su sombra proyectada sobre la plaza nos da la hora exacta de Barcelona.",
        voice: "Siente el eco de la gloria olímpica. Este anillo fue el motor de la nueva Barcelona."
      },
      en: {
        title: "OLYMPIC RING",
        legacy: "Heart of the 1992 Games. Calatrava's 136-meter Communication Tower symbolizes a torch held by an athlete.",
        secret: "The Calatrava tower is actually a massive sundial. Its shadow on the square tells Barcelona's exact time.",
        voice: "Feel the echo of Olympic glory. This ring was the engine of the new Barcelona."
      },
      fr: {
        title: "ANNEAU OLYMPIQUE",
        legacy: "Cœur des jeux de 1992. La tour Calatrava de 136 mètres symbolise une torche olympique.",
        secret: "La tour est en réalité un cadran solaire géant.",
        voice: "Ressentez l'énergie olympique. Ce lieu a changé le destin de Barcelone à jamais."
      },
      de: {
        title: "OLYMPIARING",
        legacy: "Herz der Spiele von 1992. Der 136 m hohe Calatrava-Turm symbolisiert eine olympische Fackel.",
        secret: "Der Turm fungiert als riesige Sonnenuhr auf dem Platz.",
        voice: "Spüren Sie die olympische Energie. Dieser Ort hat das Schicksal Barcelonas für immer verändert."
      },
      it: {
        title: "ANELLO OLIMPICO",
        legacy: "Cuore dei giochi del 1992. La torre di Calatrava da 136 metri simboleggia una torcia olimpica.",
        secret: "La torre è in realtà una meridiana gigante.",
        voice: "Senti l'energia olimpica. Questo luogo ha cambiato il destino di Barcellona per sempre."
      }
    }
  },
  {
    id: 16,
    image: "/estadio_olimpico_facade_artistic_1768608026803.png",
    content: {
      es: {
        title: "ESTADIO LLUÍS COMPANYS",
        legacy: "Inaugurado originalmente en 1929 para la Exposición Internacional. Fue reconstruido para 1992 conservando solo su icónica fachada neoclásica.",
        secret: "En julio de 1936 iba a ser sede de la Olimpiada Popular contra los juegos de Berlín de Hitler, pero la Guerra Civil estalló justo el día antes.",
        voice: "Mira la piedra monumental de 1929. Es el guardián de los sueños olímpicos de la ciudad."
      },
      en: {
        title: "LLUÍS COMPANYS STADIUM",
        legacy: "Originally opened in 1929 for the International Exposition. It was rebuilt for 1992, preserving only its iconic neoclassical facade.",
        secret: "In July 1936, it was to host the People's Olympiad against Hitler's Berlin games, but the Civil War broke out one day before.",
        voice: "Look at the monumental 1929 stone. It is the guardian of the city's Olympic dreams."
      },
      fr: {
        title: "STADE LLUÍS COMPANYS",
        legacy: "Inauguré en 1929. Reconstruit pour 1992 en ne gardant que sa façade néoclassique.",
        secret: "Il devait accueillir l'Olympiade populaire en 1936.",
        voice: "Regardez la pierre monumentale. Les échos des grands athlètes résonnent ici."
      },
      de: {
        title: "STADION LLUÍS COMPANYS",
        legacy: "Eingeweiht 1929. Für 1992 rekonstruiert, wobei die neoklassizistische Fassade erhalten blieb.",
        secret: "Hier sollte 1936 die Volksolympiade stattfinden.",
        voice: "Betrachten Sie den monumentalen Stein. Wir bewahren hier die Echos großer Athleten."
      },
      it: {
        title: "STADIO LLUÍS COMPANYS",
        legacy: "Inaugurato nel 1929. Ricostruito per il 1992 conservando solo la facciata neoclassica.",
        secret: "Doveva ospitare l'Olimpiade Popolare nel 1936.",
        voice: "Guarda la pietra monumentale. Custodiamo qui gli echi dei grandi atleti della storia."
      }
    }
  },
  {
    id: 17,
    image: "/mnac_entrance_unique_artistic_1768608040634.png",
    content: {
      es: {
        title: "MNAC (PALACIO NACIONAL)",
        legacy: "El Palau Nacional fue el edificio estrella de la Exposición de 1929. Desde 1934 custodia la colección de pintura románica sobre muro más importante y antigua del mundo.",
        secret: "Los frescos del siglo XII fueron arrancados de los Pirineos y trasladados aquí en los años 20 para evitar que fueran robados por coleccionistas extranjeros.",
        voice: "Mira hacia la montaña. Estás ante el templo que guarda la verdadera alma de Cataluña."
      },
      en: {
        title: "NATIONAL ART MUSEUM",
        legacy: "The Palau Nacional was the star of the 1929 Exposition. Since 1934, it has guarded the world's most important collection of Romanesque wall paintings.",
        secret: "The 12th-century frescoes were peeled off Pyrenean church walls in the 1920s to prevent them from being stolen by collectors.",
        voice: "Look toward the mountain. You are before the temple that guards Catalonia's true soul."
      },
      fr: {
        title: "MNAC (PALAIS NATIONAL)",
        legacy: "Vaisseau amiral de l'Exposition de 1929. Abrite l'art roman le plus important au monde.",
        secret: "Les fresques du XIIe siècle ont été sauvées des églises des Pyrénées.",
        voice: "Contemplez le palais qui veille sur Barcelone."
      },
      de: {
        title: "MNAC (NATIONALPALAST)",
        legacy: "Hauptgebäude der Weltausstellung 1929. Beherbergt die bedeutendste Sammlung romanischer Kunst weltweit.",
        secret: "Die Fresken wurden in den 1920er Jahren aus den Pyrenäen gerettet.",
        voice: "Betrachten Sie den Palast, der über Barcelona wacht."
      },
      it: {
        title: "MNAC (PALAZZO NAZIONALE)",
        legacy: "Edificio principale dell'Esposizione del 1929. Custodisce l'arte romanica più importante al mondo.",
        secret: "Gli affreschi del XII secolo furono salvati dalle chiese dei Pirenei.",
        voice: "Contempla il palazzo che veglia su Barcellona."
      }
    }
  },
  {
    id: 18,
    image: "/plaza_espana_artistic_1768607294361.png",
    content: {
      es: {
        title: "PLAZA ESPAÑA",
        legacy: "Diseñada por Puig i Cadafalch e inaugurada en 1929. Sus Torres Venecianas, de 47 metros, fueron inspiradas por el campanile de San Marcos de Venecia.",
        secret: "La fuente central, diseñada por Jujol (colaborador de Gaudí), representa a los tres mares que rodean la Península Ibérica: el Mediterráneo, el Atlántico y el Cantábrico.",
        voice: "Contempla la entrada triunfal a Montjuïc. Aquí se unen el agua, la historia y la montaña."
      },
      en: {
        title: "SPAIN SQUARE",
        legacy: "Designed by Puig i Cadafalch for the 1929 Exposition. Its 47-meter Venetian Towers were inspired by St. Mark's Campanile in Venice.",
        secret: "The central fountain, designed by Jujol (Gaudí's assistant), represents the three seas surrounding the Iberian Peninsula.",
        voice: "Behold the grand entry to Montjuïc. Here water, history, and the mountain unite."
      },
      fr: {
        title: "PLACE D'ESPAGNE",
        legacy: "Inaugurée en 1929. Les tours vénitiennes font 47 mètres de haut.",
        secret: "La fontaine centrale représente les trois mers de la péninsule Ibérique.",
        voice: "Regardez les deux tours. Ce sont les sentinelles de l'exposition universelle."
      },
      de: {
        title: "PLAÇA D'ESPANYA",
        legacy: "Eingeweiht 1929. Die Venezianischen Türme sind 47 m hoch.",
        secret: "Der Brunnen stellt die drei Meere der Iberischen Halbinsel dar.",
        voice: "Beachten Sie die beiden Türme. Sie sind die Wächter der Weltausstellung."
      },
      it: {
        title: "PIAZZA SPAGNA",
        legacy: "Inaugurata nel 1929. Le Torri Veneziane sono alte 47 metri.",
        secret: "La fontana centrale rappresenta i tre mari della penisola iberica.",
        voice: "Guarda le due torri. Sono i guardiani dell'ingresso all'esposizione universale."
      }
    }
  },
  {
    id: 19,
    image: "/fuente_magica_artistic_1768607307399.png",
    content: {
      es: {
        title: "FUENTE MÁGICA",
        legacy: "Obra de Carles Buïgas para la Exposición de 1929. En su momento fue tachada de imposible debido a la complejidad de sincronizar más de 3.000 chorros de agua con luz.",
        secret: "En 1929, la fuente no tenía electrónica; 20 operarios movían palancas manualmente desde una sala de máquinas oculta bajo el pavimento para crear la magia.",
        voice: "Disfruta de la danza final del agua. Es el símbolo de una Barcelona que siempre hace posible lo imposible."
      },
      en: {
        title: "MAGIC FOUNTAIN",
        legacy: "Carles Buïgas's masterpiece for the 1929 Exposition. It was once called impossible due to the synchronization of 3,000 water jets.",
        secret: "In 1929, there were no computers; 20 operators manually synchronized the magic from a secret underground machine room.",
        voice: "Enjoy the final dance of the water. It's the symbol of a Barcelona that always makes the impossible possible."
      },
      fr: {
        title: "FONTAINE MAGIQUE",
        legacy: "Chef-d'œuvre de 1929. On la croyait impossible à construire à l'époque.",
        secret: "Vingt ouvriers contrôlaient tout manuellement depuis le sous-sol.",
        voice: "Profitez de la danse de l'eau. C'est le final parfait de notre voyage."
      },
      de: {
        title: "MAGISCHER BRUNNEN",
        legacy: "Meisterwerk von 1929, damals als technisch 'unmöglich' bezeichnet.",
        secret: "Anfangs steuerten 20 Arbeiter die Wasserspiele manuell unter dem Platz.",
        voice: "Genießen Sie den Wassertanz. Das perfekte Finale unserer Reise."
      },
      it: {
        title: "FONTANA MAGICA",
        legacy: "Capolavoro del 1929, considerato allora una sfida tecnica impossibile.",
        secret: "In origine, venti operai muovevano le leve manualmente dal sottosuolo.",
        voice: "Goditi la danza dell'acqua. È il finale perfetto per il nostro viaggio."
      }
    }
  }
];
