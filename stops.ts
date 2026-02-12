export type Language = 'es' | 'en' | 'fr' | 'de' | 'it' | 'pt' | 'ru' | 'zh' | 'ja' | 'ca';

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
      },
      pt: {
        title: "PRAÇA DA CATALUNHA",
        legacy: "O epicentro de Barcelona, inaugurado em 1927. Com 50.000 m², é a ligação vital entre o núcleo medieval e o moderno Eixample.",
        secret: "Sob seus pés existe uma rede de abrigos antiaéreos da Guerra Civil.",
        voice: "Sinta o pulso da cidade aqui. É a porta de entrada para dois milênios de evolução urbana."
      },
      ru: {
        title: "ПЛОЩАДЬ КАТАЛОНИИ",
        legacy: "Эпицентр Барселоны, открытый в 1927 году. Площадью 50 000 м², это жизненно важная связь между средневековым центром и современным районом Эшампле.",
        secret: "Под вашими ногами находится сеть бомбоубежищ времен Гражданской войны.",
        voice: "Почувствуйте пульс города здесь. Это ворота в двухтысячелетнюю историю."
      },
      zh: {
        title: "加泰罗尼亚广场",
        legacy: "巴塞罗那的中心，于1927年落成。占地50,000平方米，是中世纪核心与现代扩建区（Eixample）之间的重要纽带。",
        secret: "在你的脚下，有一个内战时期的防空洞网络。",
        voice: "在这里感受城市的脉搏。这是通往两千年城市进化的门户。"
      },
      ja: {
        title: "カタルーニャ広場",
        legacy: "バルセロナのエピセンターで、1927年に落成しました。50,000㎡の広さを誇り、中世の核と近代的なアシャンプラを結ぶ重要な拠点です。",
        secret: "足元には市民戦争時代の防空壕ネットワークが広がっています。",
        voice: "ここで街の鼓動を感じてください。2000年にわたる都市進化への入り口です。"
      },
      ca: {
        title: "PLAÇA DE CATALUNYA",
        legacy: "Epicentre de Barcelona, inaugurada el 1927. Amb 50.000 m², és el nexe vital entre el nucli medieval i el modern Eixample.",
        secret: "Sota els teus peus existeix una xarxa de refugis antiaeris de la Guerra Civil.",
        voice: "Sent el pols de la ciutat aquí. És la porta d'entrada a dos mil·lennis d'evolució urbana."
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
        voice: "Camina sull'arte. Il profumo dei fiori racconta la storia di una città che si è aperta al mondo."
      },
      pt: {
        title: "AS RAMBLAS",
        legacy: "Um antigo riacho transformado em 1835 na avenida mais famosa do mundo.",
        secret: "O mosaico 'Pla de l'Os' de Joan Miró (1976) foi projetado para ser pisado, integrando a arte na vida cotidiana.",
        voice: "Caminhe sobre a arte de Miró. O perfume das flores conta a história de uma cidade que se abriu ao mar."
      },
      ru: {
        title: "ЛА РАМБЛА",
        legacy: "Старый водный поток, превращенный в 1835 году в самый известный в мире променад.",
        secret: "Мозаика Жоана Миро 'Pla de l'Os' (1976) была создана для того, чтобы по ней ходили, интегрируя искусство в повседневную жизнь.",
        voice: "Пройдитесь по искусству Миро. Аромат цветов рассказывает историю города, открывшегося морю."
      },
      zh: {
        title: "兰布拉大道",
        legacy: "1835年由一条旧水道改造而成的世界上最著名的漫步大道。",
        secret: "胡安·米罗的“Pla de l'Os”马赛克（1976年）并非仅仅是装饰，它被设计成可以踩踏，将艺术融入日常生活。",
        voice: "走在米罗的艺术之上。花香向你诉说着这座向大海敞开怀抱的城市的故事。"
      },
      ja: {
        title: "ランブラス通り",
        legacy: "1835年に古い水路から世界で最も有名な並木道へと生まれ変わりました。",
        secret: "ジョアン・ミロのモザイク『Pla de l'Os』（1976年）は、単なる装飾ではなく、踏まれることを前提に設計され、芸術を日常に融合させています。",
        voice: "ミロの芸術の上を歩いてください。花の香りが、海へと開かれた街の物語を語りかけます。"
      },
      ca: {
        title: "LES RAMBLES",
        legacy: "Antic torrent d'aigua transformat el 1835 en el passeig més famós del món.",
        secret: "El mosaic 'Pla de l'Os' de Joan Miró (1976) va ser dissenyat per ser trepitjat, integrant l'art en el caminar quotidià.",
        voice: "Camina sobre l'art de Miró. L'aroma de les flors et explica la història d'una ciutat que es va obrir al mar."
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
      },
      pt: {
        title: "BAIRRO GÓTICO",
        legacy: "Núcleo romano de Barcino fundado no século I a.C. Suas muralhas do século IV ainda guardam a Catedral.",
        secret: "A ponte da rua do Bispo, embora pareça medieval, foi construída em 1928. Esconde uma caveira com uma adaga lendária.",
        voice: "Toque nas pedras romanas. Você está no epicentro exato onde Barcelona nasceu há 2.000 anos."
      },
      ru: {
        title: "ГОТИЧЕСКИЙ КВАРТАЛ",
        legacy: "Римское ядро Барсино, основанное в I веке до н.э. Его стены IV века до сих пор охраняют Кафедральный собор.",
        secret: "Мост на улице Епископа, хотя и выглядит средневековым, был построен в 1928 году.",
        voice: "Прикоснитесь к римским камням. Вы находитесь в самом центре, где 2000 лет назад родилась Барселона."
      },
      zh: {
        title: "哥特区",
        legacy: "公元前1世纪建立的巴塞罗那罗马核心。其4世纪的城墙至今仍守护着始建于1298年的哥特式瑰宝——大教堂。",
        secret: "主教街（Carrer del Bisbe）上的桥虽然看起来像中世纪的，但实际上建于1928年。它隐藏着一个带有传奇匕首的骷髅。",
        voice: "触摸罗马石块。你正处在2000年前巴塞罗那诞生时的确切中心。"
      },
      ja: {
        title: "ゴシック地区",
        legacy: "紀元前1世紀に設立されたバルシーノのローマ時代の核です。4世紀の城壁は、1298年に建設が始まったゴシック様式の珠玉、大聖堂を今も守っています。",
        secret: "ビショップ通りの橋は中世のように見えますが、1928年に建設されました。そこには伝説の短剣が突き刺さった頭蓋骨が隠されています。",
        voice: "ローマ時代の石に触れてください。あなたは2000年前にバルセロナが誕生したまさにその場所にいます。"
      },
      ca: {
        title: "BARRÍ GÒTIC",
        legacy: "Nucli romà de Bàrcino fundat al segle I aC. Les seves muralles del segle IV encara custodien la Catedral.",
        secret: "El pont del carrer del Bisbe, tot i que sembla medieval, va ser construït el 1928. Amaga una calavera amb una daga llegendària.",
        voice: "Toca les pedres romanes. Estàs a l'epicentre exacte on va néixer Barcelona fa 2.000 anys."
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
      },
      pt: {
        title: "PASSEIG DE GRÀCIA",
        legacy: "A avenida mais elegante de Barcelona. Nos anos 1900, tornou-se a vitrine para arquitetos modernistas como Gaudí.",
        secret: "Os ladrilhos de cerâmica com motivos marinhos foram desenhados por Gaudí para a Casa Batlló, mas acabaram pavimentando toda a avenida.",
        voice: "Olhe para o chão. O fundo do mar de Gaudí está sob seus pés na rua mais luxuosa da cidade."
      },
      ru: {
        title: "ПАССЕО ДЕ ГРАСИЯ",
        legacy: "Самый элегантный проспект Барселоны. В 1900-х годах он стал витриной для архитекторов-модернистов, таких как Гауди.",
        secret: "Керамическая плитка с морскими мотивами была разработана Гауди для Дома Бальо, но ею вымостили весь проспект.",
        voice: "Посмотрите под ноги. Морское дно Гауди находится прямо здесь, на самой роскошной улице города."
      },
      zh: {
        title: "格拉西亚大道",
        legacy: "巴塞罗那最优雅的大道，连接旧城区和格拉西亚区。在20世纪初，它成为了高迪、多梅内克·蒙塔内尔和普伊赫·卡达法尔克等现代主义建筑师的展示窗口。",
        secret: "带有海洋图案的陶瓷铺路石是高迪为巴特罗之家设计的，但最终被用于铺设整条大道。",
        voice: "低头看看地面。在这座城市最豪华的街道上，高迪的海底世界就在你的脚下。"
      },
      ja: {
        title: "グラシア通り",
        legacy: "バルセロナで最もエレガントな街路で、旧市街とグラシア地区を結んでいます。1900年代にはガウディ、ドメネク・イ・蒙塔内ール、プッチ・イ・カダファルクといったモダニズム建築家たちの展示場となりました。",
        secret: "海のモチーフが描かれたセラミックの敷石は、ガウディがカサ・バトリョのために設計したものですが、最終的には通り全体に敷き詰められました。",
        voice: "足元を見てください。ガウディが描いた海底が、街で最も豪華な通りの足元に広がっています。"
      },
      ca: {
        title: "PASSEIG DE GRÀCIA",
        legacy: "L'avinguda més elegant de Barcelona. El 1900 es va convertir en l'aparador per a arquitectes modernistes com Gaudí.",
        secret: "Els panots de ceràmica amb motius marins van ser dissenyats per Gaudí per a Casa Batlló.",
        voice: "Mira a terra. El fons marí de Gaudí està sota els teus peus al carrer més luxós de la ciutat."
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
      },
      pt: {
        title: "CASA BATLLÓ",
        legacy: "Remodelação integral de um edifício existente realizada por Gaudí entre 1904 e 1906.",
        secret: "A fachada é um mar calmo feito de fragmentos de cerâmica (trencadís). O telhado simboliza a vitória de São Jorge.",
        voice: "Observe como a fachada respira com a luz do dia. É um sonho orgânico tornado realidade."
      },
      ru: {
        title: "ДОМ БАЛЬО",
        legacy: "Полная реконструкция существующего здания, выполненная Гауди в 1904–1906 годах. Это ода натурализму.",
        secret: "Фасад — это спокойное море из осколков керамики (тренкадис). Крыша символизирует победу Святого Георгия над драконом.",
        voice: "Посмотрите, как фасад оживает при дневном свете. Это органическая мечта, воплощенная в жизнь."
      },
      zh: {
        title: "巴特罗之家",
        legacy: "高迪在1904年至1906年间对现有建筑进行的全面改造。这是一首对自然主义的颂歌。",
        secret: "立面是由陶瓷碎片（trencadís）组成的平静海洋。屋顶“龙脊”象征着圣乔治的胜利。",
        voice: "观察立面如何随着日光呼吸。这是一个成真的有机梦想。"
      },
      ja: {
        title: "カサ・バトリョ",
        legacy: "1904年から1906年にかけてガウディが行った既存建物の全面改修です。直線的なラインを一切排除した自然主義への賛歌です。",
        secret: "ファサードは陶器の破片（トレンカディス）で作られた穏やかな海です。屋根の「龍の背中」は聖ジョルディの勝利を象徴しています。",
        voice: "ファサードが日の光とともに呼吸する様子を観察してください。それは実現した有機的な夢です。"
      },
      ca: {
        title: "CASA BATLLÓ",
        legacy: "Remodelació integral d'un edifici existent realitzada per Gaudí entre 1904 i 1906.",
        secret: "La façana és un mar en calma fet de fragments de ceràmica (trencadís). La teulada simbolitza la victòria de Sant Jordi.",
        voice: "Observa com la façana respira amb la llum del dia. És un somni orgànic fet realitat."
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
      },
      pt: {
        title: "CASA MILÀ",
        legacy: "Construída por Gaudí entre 1906 e 1912 como uma 'montanha esculpida'.",
        secret: "Suas chaminés inspiraram os capacetes dos Stormtroopers de Star Wars.",
        voice: "Sinta a força da pedra ondulada. É uma escultura habitável que desafia a gravidade."
      },
      ru: {
        title: "КАЗА МИЛА",
        legacy: "Построена Гауди в 1906–1912 годах как 'высеченная гора'. Ее железная структура позволила отказаться от несущих стен.",
        secret: "Ее антропоморфные дымоходы вдохновили дизайн шлемов штурмовиков из 'Звездных войн'.",
        voice: "Почувствуйте силу волнообразного камня. Это жилая скульптура, бросающая вызов гравитации."
      },
      zh: {
        title: "米拉之家",
        legacy: "由高迪于1906年至1912年间建造，被誉为“开凿的山峦”。其铁制结构使其能够摆脱承重墙，在当时是革命性的。",
        secret: "其拟人化的烟囱启发了《星球大战》中风暴兵（Stormtrooper）的头盔设计。",
        voice: "感受波浪形石材的力量。这是一座挑战重力的宜居雕塑。"
      },
      ja: {
        title: "カサ・ミラ",
        legacy: "1906年から1912年にかけてガウディによって「切り出された山」として建設されました。その鉄骨構造により、当時としては革命的だった耐力壁の排除が可能になりました。",
        secret: "その擬人化された煙突は、『スター・ウォーズ』のストームトルーパーのヘルメットのインスピレーションの源となりました。",
        voice: "うねる石の力を感じてください。それは重力に挑む、住むことのできる彫刻です。"
      },
      ca: {
        title: "CASA MILÀ",
        legacy: "Construïda per Gaudí entre 1906 i 1912 com una 'muntanya tallada'.",
        secret: "Les seves xemeneies antropomòrfiques van inspirar el casc dels Stormtroopers de Star Wars.",
        voice: "Sent la força de la pedra ondulada. És una escultura habitable que desafia la gravetat."
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
      },
      ja: {
        title: "サグラダ・ファミリア",
        legacy: "スペインで最も訪問者の多いモニュメントです。1882年に建設が始まりました。完成時には172.5mとなり、世界で最も高い教会となります。",
        secret: "受難のファサードにある「魔法陣」は、どの方向の合計も常に33（キリストの年齢）になります。",
        voice: "石の森へ入ってください。柱はただ屋根を支えるだけでなく、精神を高揚させてくれます。"
      },
      pt: {
        title: "SAGRADA FAMÍLIA",
        legacy: "O monumento mais visitado da Espanha. A construção começou em 1882. Quando concluída, será a igreja mais alta do mundo, com 172,5 m.",
        secret: "O 'Quadrado Mágico' na Fachada da Paixão sempre soma 33 (a idade de Cristo).",
        voice: "Entre na floresta de pedra. As colunas não apenas sustentam o teto; elas elevam o espírito."
      },
      ru: {
        title: "САГРАДА ФАМИЛИЯ",
        legacy: "Самый посещаемый монумент Испании. Строительство началось в 1882 году. По завершении это будет самая высокая церковь в мире (172,5 м).",
        secret: "Магический квадрат на фасаде Страстей всегда дает в сумме 33 (возраст Христа).",
        voice: "Войдите в каменный лес. Колонны не просто держат крышу, они возвышают дух."
      },
      zh: {
        title: "圣家族大教堂",
        legacy: "西班牙访问量最大的纪念碑。始建于1882年。完工后（预计2026-2030年），它将以172.5米的高度成为世界上最高的教堂。",
        secret: "受难立面上的“魔方”在任何方向上的总和总是33（基督的年龄）。",
        voice: "进入石林。受难立面上的柱子不仅仅支撑着屋顶，更升华了灵魂。"
      },
      ca: {
        title: "SAGRADA FAMÍLIA",
        legacy: "El monument més visitat d'Espanya. La seva construcció va començar el 1882. En acabar-se, serà l'església més alta del món amb 172,5 m.",
        secret: "El Quadrat Màgic de la Façana de la Passió suma 33 en totes les direccions (l'edat de Crist).",
        voice: "Entra en el bosc de pedra. Les columnes no només sostenen el sostre, eleven l'esperit."
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
      },
      ja: {
        title: "サン・パウ病院",
        legacy: "ドメネク・イ・モンタネールによる傑作で、1902年から1930年にかけて建設されました。2009年まで実際に病院として機能しており、ヨーロッパ最大のモダニズム建築群です。",
        secret: "衛生と癒しの庭園の静けさを守るため、患者は1キロメートル以上に及ぶ地下トンネル網を通って移動していました。",
        voice: "この田園都市の平穏を感じてください。ここでは、建築が医学となりました。"
      },
      pt: {
        title: "RECINTO DE SANT PAU",
        legacy: "Obra-prima de Domènech i Montaner construída entre 1902 e 1930. Foi um hospital até 2009 e é o maior conjunto modernista da Europa.",
        secret: "Os pacientes eram movidos por uma rede de túneis subterrâneos de mais de um quilômetro para preservar a higiene e a paz.",
        voice: "Sinta a paz desta cidade-jardim. Aqui, a arquitetura se tornou medicina."
      },
      ru: {
        title: "ГОСПИТАЛЬ САН-ПАУ",
        legacy: "Шедевр Доменека-и-Монтанера, построенный в 1902–1930 годах. Это крупнейший модернистский ансамбль в Европе.",
        secret: "Пациентов перемещали по сети подземных туннелей длиной более километра для соблюдения гигиены и спокойствия.",
        voice: "Почувствуйте покой этого города-сада. Здесь архитектура стала лекарством."
      },
      zh: {
        title: "圣十字圣保罗医院",
        legacy: "多梅内克·蒙塔内尔的杰作，建于1902年至1930年间。它曾是一家一直运营到2009年的医院，是欧洲最大的现代主义建筑群。",
        secret: "患者通过一条长达一公里多的地下隧道网络进行转移，以保持疗养花园的卫生和视觉安宁。",
        voice: "感受这座花园城市的宁静。在这里，建筑变成了良药。"
      },
      ca: {
        title: "RECINTE DE SANT PAU",
        legacy: "Obra mestra de Domènech i Montaner construïda entre 1902 i 1930. Va ser un hospital fins a 2009 i és el conjunt modernista més gran d'Europa.",
        secret: "Els pacients eren traslladats per una xarxa de túnels subterranis de més d'un quilòmetre per preservar la higiene i la pau.",
        voice: "Sent la pau d'aquesta ciutat-jardí. Aquí, l'arquitectura es va convertir en medicina."
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
        secret: "Il ne célèbre pas de victoire militaire, but la paix et l'accueil du monde.",
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
      },
      pt: {
        title: "ARCO DO TRIUNFO",
        legacy: "Porta de entrada da Exposição de 1888. Ao contrário dos arcos clássicos, foi construído em tijolo aparente, marcando o auge da indústria catalã.",
        secret: "Seus frisos celebram a indústria, a agricultura e as artes. Não é um arco de guerra, mas de paz e de boas-vindas ao mundo.",
        voice: "Cruze este portal vermelho. Simboliza a abertura de uma cidade que decidiu derrubar suas muralhas para sempre."
      },
      ru: {
        title: "ТРИУМФАЛЬНАЯ АРКА",
        legacy: "Входные ворота выставки 1888 года. В отличие от классических арок, она построена из красного кирпича, что знаменовало расцвет каталонской промышленности.",
        secret: "Фризы арки воспевают промышленность, сельское хозяйство и искусство. Это не военная арка, а символ мира и приветствия наций.",
        voice: "Пройдите через этот красный портал. Он символизирует открытость города, решившего навсегда снести свои крепостные стены."
      },
      zh: {
        title: "凯旋门",
        legacy: "1888年博览会的入口，由朱塞普·维拉塞卡（Josep Vilaseca）设计。与经典拱门不同，它采用红砖建造，标志着加泰罗尼亚工业的兴起。",
        secret: "门上的饰带颂扬工业、农业和艺术。这不是一座战争之门，而是一座和平与巴塞罗那欢迎世界各国的欢迎之门。",
        voice: "穿过这座红色的大门。它象征着一座决定永远拆除城墙的城市的开放。"
      },
      ja: {
        title: "凱旋门（アル・ダ・トリオンフ）",
        legacy: "1888年万国博覧会の入り口として、ジョゼップ・ビラセカによって設計されました。古典的なアーチとは異なり、むき出しのレンガで造られており、カタルーニャ産業の隆盛を表しています。",
        secret: "そのフリーズ（帯状装飾）は、産業、農業、芸術を称えています。これは戦争のアーチではなく、平和とバルセロナが世界諸国を歓迎することを象徴しています。",
        voice: "この赤い門をくぐってください。それは、城壁を永遠に取り壊すことを決めた街の開放性を象徴しています。"
      },
      ca: {
        title: "ARC DE TRIOMF",
        legacy: "Porta d'entrada de l'Exposició de 1888. A diferència dels arcs clàssics, es va construir en maó vist.",
        secret: "Els seus frisos celebren la indústria, l'agricultura i les arts.",
        voice: "Creua aquest portal vermell. Simbolitza l'obertura d'una ciutat que va decidir enderrocar les muralles."
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
        voice: "Senti la libertà di questo parco. Cerca il mammouth tra gli alberi."
      },
      pt: {
        title: "PARQUE DA CIUTADELLA",
        legacy: "Inaugurado em 1872. Este local foi a cidadela militar mais temida da Europa, construída por Filipe V em 1714 e demolida em 1869 para devolver a liberdade ao povo.",
        secret: "A Grande Cascata foi desenhada por Josep Fontserè com a ajuda de um jovem aprendiz: Antoni Gaudí.",
        voice: "Desfrute da liberdade deste pulmão verde. Procure a marca do jovem Gaudí."
      },
      ru: {
        title: "ПАРК ЦИТАДЕЛИ",
        legacy: "Открытый в 1872 году. Это место было самой грозной военной цитаделью в Европе, построенной Филиппом V в 1714 году и снесенной в 1869 году, чтобы вернуть свободу народу.",
        secret: "Большой каскад был спроектирован Жузепом Фонтсере при помощи молодого ученика, тогда еще неизвестного — Антонио Гауди.",
        voice: "Наслаждайтесь свободой в этих зеленых легких города. Найдите след молодого Гауди."
      },
      zh: {
        title: "城堡公园",
        legacy: "1872年落成。这片土地曾是欧洲最令人生畏的军事要塞，由费利佩五世于1714年建造以监视整座城市，并于1869年拆除以将自由还给人民。",
        secret: "大瀑布（Gran Cascada）由朱塞普·丰特塞尔德（Josep Fontserè）在一名称为安东尼·高迪（Antoni Gaudí）的当时还默默无闻的年轻学徒的协助下设计。",
        voice: "在这片绿色之肺感受自由。寻找年轻高迪留下的印记。"
      },
      ja: {
        title: "シウタデリャ公園",
        legacy: "1872年に開園しました。この場所は、1714年にフェリペ5世が街を監視するために建設したヨーロッパで最も恐れられた軍事要塞でしたが、1869年に民衆に自由を取り戻すために取り壊されました。",
        secret: "大噴水は、ジョゼップ・フォントセーレが、当時まだ無名の見習いだった若きアントニ・ガウディの助けを借りて設計しました。",
        voice: "この街の緑の肺で自由を満喫してください。噴水を見て、若きガウディの足跡を探してみてください。"
      },
      ca: {
        title: "PARC DE LA CIUTADELLA",
        legacy: "Inaugurat el 1872. Aquest solar va ser la ciutadella militar més temuda d'Europa, construïda per Felip V el 1714 i enderrocada el 1869.",
        secret: "La Gran Cascada va ser dissenyada per Josep Fontserè amb l'ajuda d'un jove aprenent: Antoni Gaudí.",
        voice: "Gaudeix de la llibertat d'aquest pulmó verd. Mira la font i busca l'empremta del jove Gaudí."
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
        legacy: "Port histórico revitalizado para los JO de 1992. El monumento a Colón data de 1888.",
        secret: "La columna de Colón alberga el ascensor más estrecho y antiguo de la ciudad.",
        voice: "Respira el gran ancho. Este puerto es el puente entre Barcelona y el mundo."
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
      },
      pt: {
        title: "PORT VELL",
        legacy: "Porto histórico de Barcelona revitalizado para as Olimpíadas de 1992. O monumento a Colombo, de 60m, coroa o final das Ramblas desde 1888.",
        secret: "O interior da coluna de Colombo abriga o elevador mais estreito e antigo da cidade, oferecendo uma vista panorâmica única.",
        voice: "Ouça o ranger dos mastros. Este porto é a porta marítima da Europa há milênios."
      },
      ru: {
        title: "ПОРТ ВЕЛЛЬ",
        legacy: "Исторический порт Барселоны, обновленный к Олимпийским играм 1992 года. 60-метровый памятник Колумбу венчает конец бульвара Рамбла с 1888 года.",
        secret: "Внутри колонны Колумба находится самый узкий и старый лифт города, предлагающий уникальный панорамный вид на 360 градусов.",
        voice: "Послушайте скрип мачт. Этот порт был морскими воротами Европы на протяжении тысячелетий."
      },
      zh: {
        title: "旧港",
        legacy: "巴塞罗那的历史港口，为1992年奥运会而重获新生。高60米的哥伦布纪念碑自1888年落成以来一直矗立在兰布拉大道的尽头。",
        secret: "哥伦布圆柱内部设有该市最窄、最古老的电梯，提供独特的360度全景视野。",
        voice: "聆听桅杆的吱吱声。数千年来，这座港口一直是欧洲通往海洋的门户。"
      },
      ja: {
        title: "ベル港",
        legacy: "1992年のオリンピックに向けて再生されたバルセロナの歴史ある港です。高さ60mのコロンブスの記念碑は、1888年の完成以来、ランブラス通りの終着点に君臨しています。",
        secret: "コロンブスの塔の内部には、市内で最も狭く古いエレベーターがあり、ユニークな360度のパノラマビューを楽しむことができます。",
        voice: "マストのきしむ音に耳を傾けてください。この港は数千年前からヨーロッパの海の玄関口でした。"
      },
      ca: {
        title: "PORT VELL",
        legacy: "Port històric de Barcelona revitalitzat per a les Olímpiades de 1992. El monument a Colom corona el final de Les Rambles des de 1888.",
        secret: "L'interior de la columna de Colom allotja l'elevador més estret i antic de la ciutat.",
        voice: "Escolta el cruixir dels màstils. Aquest port és la porta marítima d'Europa des de fa mil·lennis."
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
        secret: "L'hotel W a forma de vela è diventato il nuovo faro moderno della città.",
        voice: "Ascolta le onde. Queste sabbie hanno visto pirati e marinai."
      },
      pt: {
        title: "PRAIA DA BARCELONETA",
        legacy: "Bairro marinheiro projetado em 1753 para realojar famílias deslocadas pela construção da Ciutadella. Suas areias são hoje o coração social do verão.",
        secret: "O hotel W (2009), com sua forma de vela, tornou-se o farol moderno da cidade.",
        voice: "Sinta o sol do Mediterrâneo. Aqui nasce a brisa que refresca toda a cidade."
      },
      ru: {
        title: "ПЛЯЖ БАРСЕЛОНЕТА",
        legacy: "Морской квартал, спроектированный в 1753 году для расселения семей, выселенных из-за строительства Цитадели. Сегодня это социальный центр летнего отдыха.",
        secret: "Отель W (2009) в форме паруса стал современным маяком, но пляжные бары 'чирингитос' хранят дух старых рыбаков.",
        voice: "Почувствуйте средиземноморское солнце. Здесь рождается бриз, который освежает весь город."
      },
      zh: {
        title: "巴塞罗内塔海滩",
        legacy: "1753年规划的海边社区，旨在重新安置因建造城堡要塞而流离失所的家庭。如今，它的沙滩是夏季社交的核心。",
        secret: "帆船形状的W酒店（2009年）已成为现代灯塔，但海边的草棚小吃店（chiringuitos）仍保留着古老渔民的灵魂。",
        voice: "感受地中海的阳光。清凉整座城市的微风便诞生于此。"
      },
      ja: {
        title: "バルセロネータ海岸",
        legacy: "シウタデリャ要塞の建設によって立ち退かされた家族を再定住させるために、1753年に計画された漁師の街です。今日、その砂浜は夏の社交の中心となっています。",
        secret: "帆の形をしたWホテル（2009年）は現代の灯台となりましたが、チリンギート（海の家）はかつての漁師たちの魂を今に伝えています。",
        voice: "地中海の太陽を感じてください。街全体を冷やすそよ風は、ここで生まれます。"
      },
      ca: {
        title: "PLATJA DE LA BARCELONETA",
        legacy: "Barri mariner projectat el 1753 per a reallotjar les famílies desplaçades per la construcció de la Ciutadella.",
        secret: "L'hotel W (2009) s'ha convertit en el far modern de la ciutat.",
        voice: "Sent el sol de la Mediterrània. Aquí neix la brisa que refresca tota la ciutat."
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
      },
      pt: {
        title: "PORTO OLÍMPICO",
        legacy: "Criado para os Jogos Olímpicos de 1992, transformou uma zona industrial degradada num porto com mais de 740 amarrações.",
        secret: "O Peixe Dourado de Frank Gehry (1992) tem 56 metros de comprimento. Foi a primeira escultura desenhada inteiramente por computador usando software de aviação.",
        voice: "Veja como a luz brilha nas escamas do grande peixe. É o símbolo do salto para o século XXI."
      },
      ru: {
        title: "ОЛИМПИЙСКИЙ ПОРТ",
        legacy: "Созданный к Олимпиаде 1992 года, он превратил деградировавшую промышленную зону в порт с более чем 740 причалами.",
        secret: "«Золотая рыба» Фрэнка Гери (1992) имеет длину 56 метров. Это была первая скульптура, полностью спроектированная на компьютере с использованием авиационного ПО.",
        voice: "Посмотрите, как свет играет на чешуе огромной рыбы. Это символ прыжка в XXI век."
      },
      zh: {
        title: "奥林匹克港",
        legacy: "该港口为1992年奥运会而建，将退化的工业区转变为拥有740多个泊位的港口。它是巴塞罗那城市转型最切实的遗产。",
        secret: "弗兰克·盖里（Frank Gehry）设计的金鱼雕塑（1992年）长56米。这是第一件完全使用航空软件进行电脑辅助设计的雕塑。",
        voice: "看光线在大鱼鳞片上闪烁的样子。它是跨入21世纪的象征。"
      },
      ja: {
        title: "ポルト・オリンピック（オリンピック港）",
        legacy: "1992年のオリンピックのために建設され、荒廃した工業地帯を740以上の係留施設を持つ港へと変貌させました。バルセロナの都市変革の最も象徴的な遺産です。",
        secret: "フランク・ゲーリーによる「黄金の魚」（1992年）は全長56メートルです。航空用ソフトウェアを使用し、完全にコンピュータで設計された最初の彫刻でした。",
        voice: "大魚の鱗に光が反射して輝く様子を見てください。21世紀への跳躍の象徴です。"
      },
      ca: {
        title: "PORT OLÍMPIC",
        legacy: "Creat per als Jocs Olímpics del 1992, va transformar una zona industrial degradada en un port amb 740 amarres.",
        secret: "El Peix Daurat de Frank Gehry (1992) fa 56 metres de llarg.",
        voice: "Mira com la llum brilla en les escates del gran peix. És el símbol del salt al segle XXI."
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
      },
      pt: {
        title: "JARDINS DE MIRAMAR",
        legacy: "Projetados por Forestier para a Exposição de 1929. Elevados a 60m sobre o mar, oferecem uma vista de 270 graus de todo o litoral.",
        secret: "Deste ponto, antigos vigias faziam sinais de fumaça para o castelo de Montjuïc ao verem navios suspeitos.",
        voice: "Pare e respire o mar das alturas. Barcelona inteira se rende aos seus pés."
      },
      ru: {
        title: "САДЫ МИРАМАР",
        legacy: "Спроектированы Форестье для выставки 1929 года. Расположенные на высоте 60 м над уровнем моря, они предлагают 270-градусный обзор побережья.",
        secret: "С этого самого места древние дозорные подавали дымовые сигналы в замок Монжуик, завидев подозрительные корабли.",
        voice: "Остановитесь и вдохните морской воздух с высоты. Вся Барселона лежит у ваших ног."
      },
      zh: {
        title: "米拉马尔花园",
        legacy: "由福雷斯蒂尔（Forestier）为1929年博览会设计。花园位于海平面以上60米处，可欣赏整个巴塞罗那海岸线的270度景观。",
        secret: "从这个确切的地点，古代的了望员在看到地中海地平线上的可疑船只时，会向蒙特惠奇城堡发送烟雾信号。",
        voice: "停下来，在高处呼吸海洋的气息。整个巴塞罗那都在你的脚下。"
      },
      ja: {
        title: "ミラマール庭園",
        legacy: "1929年の万国博覧会のためにフォレスティエによって設計されました。海抜60mの高さにあり、バルセロナの全海岸線を270度見渡すことができます。",
        secret: "このまさにその場所から、かつての監視員たちは地中海の地平線に不審な船を見つけると、モンジュイック城に煙信号を送っていました。",
        voice: "立ち止まって、高台から海の空気を吸い込んでください。バルセロナ全体があなたの足元に広がっています。"
      },
      ca: {
        title: "JARDINS DE MIRAMAR",
        legacy: "Dissenyats per Forestier per a l'Exposició de 1929. Elevats a 60m sobre el nivell del mar, ofereixen una vista de 270 graus.",
        secret: "Des d'aquest punt, els antics vigies donaven senyals de fum al castell de Montjuïc.",
        voice: "Atura't i respira el mar des de les altures. Barcelona sencera es rendeix als teus peus."
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
      },
      pt: {
        title: "ANEL OLÍMPICO",
        legacy: "Coração dos jogos de 1992. A Torre de Comunicações de Calatrava, de 136 metros, simboliza uma tocha empunhada por um atleta.",
        secret: "A torre de Calatrava é, na verdade, um enorme relógio de sol. Sua sombra projeta a hora exata de Barcelona.",
        voice: "Sinta o eco da glória olímpica. Este anel foi o motor da nova Barcelona."
      },
      ru: {
        title: "ОЛИМПИЙСКОЕ КОЛЬЦО",
        legacy: "Сердце Игр 1992 года. Коммуникационная башня Калатравы высотой 136 метров символизирует олимпийский факел в руке атлета.",
        secret: "Башня Калатравы на самом деле является огромными солнечными часами. Ее тень, падающая на площадь, показывает точное время.",
        voice: "Почувствуйте эхо олимпийской славы. Это кольцо стало двигателем новой Барселоны."
      },
      zh: {
        title: "奥林匹克环",
        legacy: "1992年奥运会的核心。卡拉特拉瓦（Calatrava）设计的136米高的通信塔象征着运动员手持的火炬。",
        secret: "卡拉特拉瓦塔实际上是一个巨大的日晷。它投射在广场上的影子显示出巴塞罗那的准确时间。",
        voice: "感受奥林匹克荣耀的回响。这个环形区域是新巴塞罗那的引擎。"
      },
      ja: {
        title: "アニェル・オリンピック（オリンピック・リング）",
        legacy: "1992年大会の心臓部です。カラトラバによる136mの通信塔は、アスリートが掲げるトーチを象徴しています。",
        secret: "カラトラバの塔は実は巨大な日時計です。広場に投影されるその影が、バルセロナの正確な時刻を刻んでいます。",
        voice: "オリンピックの栄光の残響を感じてください。このリングは新しいバルセロナの原動力でした。"
      },
      ca: {
        title: "ANELL OLÍMPIC",
        legacy: "Cor dels jocs de 1992. La Torre de Comunicacions de Calatrava, de 136 metres, simbolitza una torxa.",
        secret: "La torre de Calatrava és en realitat un enorme rellotge de sol.",
        voice: "Sent l'eco de la glòria olímpica. Aquest anell va ser el motor de la nova Barcelona."
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
      },
      pt: {
        title: "ESTÁDIO LLUÍS COMPANYS",
        legacy: "Inaugurado originalmente em 1929. Foi reconstruído para 1992, conservando apenas a sua icónica fachada neoclássica.",
        secret: "Em julho de 1936, deveria sediar a Olimpíada Popular contra os jogos de Berlim, mas a Guerra Civil estourou um dia antes.",
        voice: "Olhe para a pedra monumental de 1929. É o guardião dos sonhos olímpicos da cidade."
      },
      ru: {
        title: "СТАДИОН ИМЕНИ ЛЬЮИСА КОМПАНИСА",
        legacy: "Первоначально открыт в 1929 году. Был перестроен к 1992 году с сохранением только его культового неоклассического фасада.",
        secret: "В июле 1936 года здесь должна была пройти Народная Олимпиада в противовес играм в Берлине, но Гражданская война началась за день до этого.",
        voice: "Посмотрите на монументальный камень 1929 года. Это хранитель олимпийских мечтаний города."
      },
      zh: {
        title: "路易斯·孔帕尼斯体育场",
        legacy: "最初于1929年为国际博览会而落成。为了1992年奥运会进行了重建，仅保留了其标志性的新古典主义外立面。",
        secret: "1936年7月，这里原本计划举办旨在反对希特勒柏林奥运会的“人民残奥会”，但内战恰好在开幕前一天爆发。",
        voice: "观察这座1929年的纪念碑式石材。它是这座城市奥林匹克梦想的守护者。"
      },
      ja: {
        title: "エスタディ・リュイス・コンパニス",
        legacy: "もともとは1929年の万国博覧会のために完成しました。1992年のために再建されましたが、象徴的なネオクラシック様式のファサードのみが保存されました。",
        secret: "1936年7月、ヒトラーのベルリン大会に対抗する「人民オリンピック」の会場になる予定でしたが、その前日に内戦が勃発しました。",
        voice: "1929年の記念碑的な石造りを見てください。それは街のオリンピックの夢の守護者です。"
      },
      ca: {
        title: "ESTADI LLUÍS COMPANYS",
        legacy: "Inaugurat l'any 1929. Va ser reconstruït per al 1992 conservant només la façana neoclàssica.",
        secret: "El juliol de 1936 havia de ser seu de l'Olimpíada Popular.",
        voice: "Mira la pedra monumental de 1929. És el guardià dels somnis olímpics de la ciutat."
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
      },
      pt: {
        title: "MNAC (PALÁCIO NACIONAL)",
        legacy: "O Palau Nacional foi o edifício estrela da Exposição de 1929. Desde 1934, guarda a coleção de pintura românica mais importante do mundo.",
        secret: "Os afrescos do século XII foram retirados dos Pirenéus e trazidos para aqui nos anos 20 para evitar roubos.",
        voice: "Olhe para a montanha. Você está diante do templo que guarda a verdadeira alma da Catalunha."
      },
      ru: {
        title: "MNAC (НАЦИОНАЛЬНЫЙ ДВОРЕЦ)",
        legacy: "Национальный дворец был главным зданием выставки 1929 года. С 1934 года здесь хранится самая важная в мире коллекция романской настенной живописи.",
        secret: "Фрески XII века были сняты со стен церквей в Пиренеях и привезены сюда в 20-х годах, чтобы спасти их от кражи иностранными коллекционерами.",
        voice: "Посмотрите в сторону горы. Перед вами храм, хранящий истинную душу Каталонии."
      },
      zh: {
        title: "加泰罗尼亚国家艺术博物馆（国家宫）",
        legacy: "国家宫（Palau Nacional）是1929年博览会的明星建筑。自1934年以来，它一直守护着世界上最重要、最古老的罗马式壁画收藏。",
        secret: "12世纪的壁画于20年代从比利牛斯山脉被剥离下来并运到这里，以防被外国收藏家偷走。",
        voice: "望向大山。你正身处守护着加泰罗尼亚真正灵魂的殿堂前。"
      },
      ja: {
        title: "カタルーニャ美術館（国立宮殿）",
        legacy: "パウ・ナシヨナル（国立宮殿）は1929年万国博覧会の目玉となる建物でした。1934年以来、世界で最も重要かつ最古のロマネスク壁画コレクションを収蔵しています。",
        secret: "12世紀のフレスコ画は、外国人コレクターによる盗難を防ぐため、1920年代にピレネーの教会から剥ぎ取られ、ここに移されました。",
        voice: "山の方を見てください。あなたはカタルーニャの真の魂を守る神殿の前にいます。"
      },
      ca: {
        title: "MNAC (PALAU NACIONAL)",
        legacy: "El Palau Nacional va ser l'edifici estrella de l'Exposició de 1929. Des de 1934 custodia la col·lecció de pintura romànica.",
        secret: "Els frescos del segle XII van ser arrencats dels Pirineus i traslladats aquí.",
        voice: "Mira cap a la muntanya. Estàs davant del temple que guarda la veritable ànima de Catalunya."
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
      },
      pt: {
        title: "PRAÇA DE ESPANHA",
        legacy: "Inaugurada em 1929. Suas Torres Venezianas, de 47 metros, foram inspiradas no campanário de São Marcos, em Veneza.",
        secret: "A fonte central, desenhada por Jujol, representa os três mares que cercam a Península Ibérica: Mediterrâneo, Atlântico e Cantábrico.",
        voice: "Contemple a entrada triunfal para Montjuïc. Aqui se unem a água, a história e a montanha."
      },
      ru: {
        title: "ПЛОЩАДЬ ИСПАНИИ",
        legacy: "Спроектирована Пуч-и-Кадафалком и открыта в 1929 году. 47-метровые Венецианские башни были вдохновлены кампанилой собора Святого Марка в Венеции.",
        secret: "Центральный фонтан, спроектированный Жужолем (соратником Гауди), символизирует три моря, омывающие Иберийский полуостров.",
        voice: "Созерцайте триумфальный вход на Монжуик. Здесь воедино сливаются вода, история и гора."
      },
      zh: {
        title: "西班牙广场",
        legacy: "由普伊赫·卡达法尔克（Puig i Cadafalch）设计并于1929年落成。其47米高的威尼斯塔（Venetian Towers）灵感源自威尼斯的圣马可钟楼。",
        secret: "中央喷泉由高迪的合作伙伴胡若尔（Jujol）设计，代表环绕伊比利亚半岛的三大海洋：地中海、大西洋和坎塔布里亚海。",
        voice: "凝视蒙特惠奇山的凯旋入口。在这里，水、历史和大山融为一体。"
      },
      ja: {
        title: "スペイン広場",
        legacy: "プッチ・イ・カダファルクによって設計され、1929年に落成しました。高さ47mのベネチアの塔は、ベネチアのサン・マルコ寺院の鐘楼からインスピレーションを得たものです。",
        secret: "ジュジョール（ガウディの協力者）が設計した中央の噴水は、イベリア半島を囲む3つの海（地中海、大西洋、カンタブリア海）を象徴しています。",
        voice: "モンジュイックへの凱旋の入り口を眺めてください。ここで水、歴史、山が一体となります。"
      },
      ca: {
        title: "PLAÇA ESPANYA",
        legacy: "Dissenyada per Puig i Cadafalch i inaugurada el 1929. Les seves Torres Venezianes fan 47 metres.",
        secret: "La font central, dissanyada per Jujol, representa els tres mars que envolten la Península Ibèrica.",
        voice: "Contempla l'entrada triomfal a Montjuïc. Aquí s'uneixen l'aigua, la història i la muntanya."
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
      },
      pt: {
        title: "FONTE MÁGICA",
        legacy: "Obra de Carles Buïgas para a Exposição de 1929. Foi considerada impossível devido à complexidade de sincronizar 3.000 jatos de água e luz.",
        secret: "Em 1929, 20 operários moviam alavancas manualmente de uma sala oculta para criar a magia.",
        voice: "Aproveite a dança final da água. É o símbolo de uma Barcelona que sempre torna o impossível possível."
      },
      ru: {
        title: "МАГИЧЕСКИЙ ФОНТАН",
        legacy: "Произведение Карлеса Буигаса для выставки 1929 года. В свое время проект считали невыполнимым из-за сложности синхронизации более 3000 струй воды со светом.",
        secret: "В 1929 году у фонтана не было электроники: 20 рабочих вручную двигали рычаги из скрытого машинного зала под мостовой, создавая магию.",
        voice: "Насладитесь финальным танцем воды. Это символ Барселоны, которая всегда делает невозможное возможным."
      },
      zh: {
        title: "魔力喷泉",
        legacy: "卡莱斯·布伊加斯（Carles Buïgas）为1929年博览会创作的作品。由于同步3000多个水柱与灯光的复杂性，当时被认为是无法实现的。",
        secret: "1929年，喷泉还没有电子系统；20名工人在路面下隐藏的机房里手动拨动杠杆，创造出这种魔力。",
        voice: "欣赏最后的亲水之舞。它是巴塞罗那始终将不可能变为可能的象征。"
      },
      ja: {
        title: "魔法の噴水",
        legacy: "1929年の万国博覧会のためにカルリス・ブイガスが制作した作品です。当時、3,000以上の噴水と光を同期させる複雑さから、建設は不可能だと言われていました。",
        secret: "1929年当時、電子工学は存在せず、20人の作業員が地下の隠れた機械室から手動でレバーを動かして魔法を作り出していました。",
        voice: "最後の水のダンスを楽しんでください。それは、不可能なことを常に可能にするバルセロナの象徴です。"
      },
      ca: {
        title: "FONT MÀGICA",
        legacy: "Obra de Carles Buïgas per a l'Exposició de 1929. Va ser titllada d'impossible.",
        secret: "L'any 1929, 20 operaris movien palanques manualment des d'una sala oculta.",
        voice: "Gaudeix de la dansa final de l'aigua. És el símbol d'una Barcelona que sempre fa possible l'impossible."
      }
    }
  }
];
