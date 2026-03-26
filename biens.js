const BIENS = [
    {
        id: 1,
        titre: "Maison 9 pièces à Plougrescant",
        type: "Maison",
        ville: "PLOUGRESCANT",
        cp: "22820",
        prix: "724 000",
        pieces: 9,
        chambres: 5,
        sdb: 3,
        surface: "173",
        garage: "3 places",
        annee: "2015",
        dpe: "C",
        tags: ["Jardin", "Piscine", "Dépendance"],
        description: [
            "PLOUGRESCANT // EXCLUSIVITÉ // Magnifique propriété de prestige nichée dans un écrin de verdure, offrant une vue imprenable sur la mer. Cette demeure d'exception de 173 m² vous séduira par ses volumes généreux et ses prestations haut de gamme.",
            "Au rez-de-chaussée, vous découvrirez une entrée majestueuse, un vaste salon-séjour de 55 m² ouvert sur une terrasse panoramique, une cuisine entièrement équipée de qualité professionnelle, une suite parentale avec dressing et salle de bain privative.",
            "À l'étage, quatre chambres lumineuses, deux salles de bains et un bureau vous offrent tout le confort nécessaire pour votre famille.",
            "L'extérieur est le véritable atout de cette propriété : piscine chauffée, terrain paysager de 2 500 m², dépendance pouvant servir de garage ou d'atelier. Plusieurs terrasses aménagées vous permettent de profiter des couchers de soleil sur la Manche."
        ],
        caracteristiques: [
            "Piscine chauffée", "Terrasse panoramique", "Cuisine professionnelle",
            "Suite parentale", "Dépendance", "Terrain 2 500 m²",
            "Chauffage au sol", "Alarme sécurité", "Double vitrage",
            "Portail automatique"
        ],
        photos: [
            "img/maisons/maison1/photo_2de1d8e8d9bef5196edf633b33f445d2-2.jpg",
            "img/maisons/maison1/photo_6c7fd17ea4a4b9ef3e2ce3c9e8b0ac2a.jpg",
            "img/maisons/maison1/photo_ddfad47206b9d78e7879a272a9f47edc.jpg",
            "img/maisons/maison1/photo_dff44e7f8241753423984ce93d39f980.jpg"
        ],
        contrat: "Vente"
    },
    {
        id: 2,
        titre: "Maison 5 pièces à Minihy-Tréguier",
        type: "Maison",
        ville: "MINIHY-TRÉGUIER",
        cp: "22220",
        prix: "295 000",
        pieces: 5,
        chambres: 3,
        sdb: 3,
        surface: "110",
        garage: "1 place",
        annee: "1980",
        dpe: "D",
        tags: ["Jardin", "Garage"],
        description: [
            "MINIHY-TRÉGUIER // COUP DE CŒUR & EXCLUSIF // Charmante longère bretonne entièrement rénovée avec goût, alliant le cachet de l'architecture traditionnelle aux conforts modernes.",
            "Cette maison de 110 m² dispose au rez-de-chaussée d'une grande entrée, d'un salon-séjour avec cheminée en pierre, d'une cuisine ouverte récemment rénovée, et d'une chambre avec salle d'eau.",
            "L'étage accueille deux chambres supplémentaires, une salle de bain et un dressing.",
            "À l'extérieur, un beau jardin arboré de 800 m² vous offre calme et tranquillité. Un garage complète ce bien d'exception."
        ],
        caracteristiques: [
            "Rénovation récente", "Cheminée en pierre", "Cuisine ouverte",
            "Jardin arboré", "Garage", "Dressing",
            "Double vitrage", "Chauffage central", "Parquet ancien",
            "Cave voûtée"
        ],
        photos: [
            "img/maisons/maison2/photo_31cca8039802e5e17485fa0e1a006263.jpg",
            "img/maisons/maison2/photo_37689098d60d47034727180ed701b178-2.jpg",
            "img/maisons/maison2/photo_4b0fc3a26bc5629385cf569153aed006.jpg",
            "img/maisons/maison2/photo_5e30192793b1bcba7380eaf579bdd6ff.jpg"
        ],
        contrat: "Vente"
    },
    {
        id: 3,
        titre: "Maison 5 pièces à Plougrescant",
        type: "Maison",
        ville: "PLOUGRESCANT",
        cp: "22820",
        prix: "195 000",
        pieces: 5,
        chambres: 3,
        sdb: 4,
        surface: "74",
        garage: "1 place",
        annee: "1975",
        dpe: "E",
        tags: ["Jardin", "Garage"],
        description: [
            "PLOUGRESCANT // COUP DE CŒUR & EXCLUSIF // Belle maison traditionnelle bretonne pleine de charme, située dans un village typique à quelques minutes de la côte et de ses sentiers de randonnée.",
            "D'une superficie de 74 m², cette maison se compose au rez-de-chaussée d'un salon-séjour lumineux donnant sur le jardin, d'une cuisine équipée et d'une salle de bain.",
            "Au premier étage, deux chambres et une salle d'eau. Le comble aménagé offre une troisième chambre spacieuse.",
            "Un jardin clos et un garage complètent cet ensemble idéal pour une résidence principale ou secondaire à deux pas des plus beaux sites naturels des Côtes-d'Armor."
        ],
        caracteristiques: [
            "Jardin clos", "Garage", "Vue dégagée",
            "Combles aménagés", "Cuisine équipée", "Radiateurs électriques",
            "Proche mer (5 km)", "Village calme", "Volets bois",
            "Chaudière fuel"
        ],
        photos: [
            "img/maisons/maison3/photo_1830382cb887cef01180a209d5c4eee3.jpg",
            "img/maisons/maison3/photo_3ca41dbcca9fca43690dde2db493bfb0.jpg",
            "img/maisons/maison3/photo_d3fb3e1b4b3981da05a8029053a628d3.jpg",
            "img/maisons/maison3/photo_d4cadc5c596984710132f8e28acdb2d2.jpg"
        ],
        contrat: "Vente"
    },
    {
        id: 4,
        titre: "Maison 4 pièces à Plouguiel",
        type: "Villa",
        ville: "PLOUGUIEL",
        cp: "22220",
        prix: "168 000",
        pieces: 4,
        chambres: 2,
        sdb: 1,
        surface: "61",
        garage: "2 places",
        annee: "2020",
        dpe: "B",
        tags: ["Cave"],
        description: [
            "PLOUGUIEL // EN EXCLUSIVITÉ // Je vous invite à venir découvrir cette charmante maison en pierre de 55 m² (61 m² en surface utile). Idéale pour une première acquisition ou une résidence secondaire.",
            "Au rez-de-chaussée, cette maison se compose d'une entrée, d'une cuisine aménagée, d'un salon-séjour, une salle d'eau avec WC.",
            "A l'étage, un palier dessert 2 chambres.",
            "A l'extérieur, vous disposez également d'un petit jardin, d'une place de stationnement, d'un petit abris, ainsi qu'une petite crêche attenante à la maison. Vous serez séduits par le charme de cette charmante demoiselle en pierre."
        ],
        caracteristiques: [
            "Cuisine équipée", "Jardin privatif", "Cave",
            "Garage 2 places", "Double vitrage", "Chauffage central",
            "Alarme sécurité", "Portail automatique", "Terrasse",
            "Buanderie"
        ],
        photos: [
            "img/maisons/maison4/photo_03dcb7e99f60870bb7a66d76852a1c1b-2.jpg",
            "img/maisons/maison4/photo_38fa6973511dc5e34bbc5d15bd609e60.jpg",
            "img/maisons/maison4/photo_3c9542967ea0bdfecfa9a92f9440d03b.jpg",
            "img/maisons/maison4/photo_4346ab0e411cc553d5868d1eca8fcca8.jpg"
        ],
        contrat: "Vente"
    },
    {
        id: 5,
        titre: "Appartement 4 pièces à Paimpol",
        type: "Appartement",
        ville: "PAIMPOL",
        cp: "22500",
        prix: "175 000",
        pieces: 4,
        chambres: 3,
        sdb: 1,
        surface: "85",
        garage: "Non",
        annee: "1990",
        dpe: "C",
        tags: ["Jardin", "Quatre-saisons", "Garage"],
        description: [
            "PAIMPOL // Appartement de caractère au cœur du centre-ville historique de Paimpol, à deux pas du port et des commerces. Ce bien atypique de 85 m² vous séduira par sa luminosité et sa localisation privilegiée.",
            "Situé au deuxième étage d'une résidence de standing, il se compose d'un bel espace de vie avec cuisine ouverte, d'une véranda ensoleillée, de trois chambres dont une suite parentale et d'une salle de bain.",
            "Un jardin privatif de 120 m² en rez-de-chaussée complète ce bien rare sur le marché paimpolais.",
            "Proche de toutes commodités : marché, restaurants, port de plaisance, école primaire à 200 m."
        ],
        caracteristiques: [
            "Véranda quatre-saisons", "Jardin privatif", "Suite parentale",
            "Cuisine ouverte", "Balcon", "Proche port",
            "Cave", "Ascenseur", "Interphone vidéo",
            "Double vitrage"
        ],
        photos: [
            "img/maisons/maison5/photo_2c2c731294d95fe8665e07608a021875-2.jpg",
            "img/maisons/maison5/photo_7f2867acc0a5d963ca81e548ec047725.png",
            "img/maisons/maison5/photo_90ebc5aea27ec2c1d593cdb68bdfff1a.jpg",
            "img/maisons/maison5/photo_d373c4ef49a444dcbab42c0e8a6429dd.jpg"
        ],
        contrat: "Vente"
    },
    {
        id: 6,
        titre: "Maison 6 pièces à Trédarzec",
        type: "Maison",
        ville: "TRÉDARZEC",
        cp: "22220",
        prix: "230 000",
        pieces: 6,
        chambres: 3,
        sdb: 1,
        surface: "120",
        garage: "1 place",
        annee: "1968",
        dpe: "D",
        tags: ["Jardin", "Garage"],
        description: [
            "TRÉDARZEC // Belle maison familiale lumineuse de 120 m² dans ce village paisible du Trégor, idéalement situé entre Tréguier et Lannion. Vous apprécierez la qualité de vie de ce secteur prisé.",
            "Au rez-de-chaussée, le salon-séjour de 40 m² avec sa cheminée ouvre sur une terrasse et le jardin. La cuisine semi-ouverte est entièrement équipée. Un bureau et un WC indépendant complètent ce niveau.",
            "À l'étage, trois belles chambres, une salle de bain et un dressing spacieux.",
            "À l'extérieur, un jardin arboré et clôturé d'environ 600 m², une terrasse exposée sud et un garage complètent parfaitement ce bien familial. Accès rapide aux écoles, commerces et axes routiers."
        ],
        caracteristiques: [
            "Grand séjour 40 m²", "Cheminée", "Terrasse exposée sud",
            "Jardin 600 m²", "Garage", "Bureau",
            "Dressing", "Cuisine équipée", "Chauffage au bois",
            "Proche toutes commodités"
        ],
        photos: [
            "img/maisons/maison6/photo_1614474944b50f5c4da42aee2da1da49.jpg",
            "img/maisons/maison6/photo_1dcd6f8eb42d20987b60da6981e96da7.jpg",
            "img/maisons/maison6/photo_bec4c8224c73d3b324bcb959c1548da9.jpg",
            "img/maisons/maison6/photo_ec39f5bd54f7bae67381521285872b75.jpg"
        ],
        contrat: "Vente"
    },
    {
        id: 7,
        titre: "Maison 6 pièces à Plougrescant",
        type: "Maison",
        ville: "PLOUGRESCANT",
        cp: "22820",
        prix: "950",
        pieces: 6,
        chambres: 3,
        sdb: 2,
        surface: "115",
        garage: "1 place",
        annee: "2010",
        dpe: "C",
        tags: ["Jardin", "Calme"],
        contrat: "Location",
        description: [
            "PLOUGRESCANT // Maison familiale de 115 m² située au calme d'une impasse.",
            "Elle offre une belle pièce de vie lumineuse, une cuisine aménagée et équipée, et trois chambres à l'étage.",
            "Jardin clos de 500 m²."
        ],
        caracteristiques: ["Jardin clos", "Cuisine équipée", "Garage", "Chauffage électrique"],
        photos: ["img/maisons/maison1/photo_2de1d8e8d9bef5196edf633b33f445d2-2.jpg"]
    },
    {
        id: 8,
        titre: "Appartement T3 à Lannion",
        type: "Appartement",
        ville: "LANNION",
        cp: "22300",
        prix: "680",
        pieces: 3,
        chambres: 2,
        sdb: 1,
        surface: "65",
        garage: "Place de parking",
        annee: "2018",
        dpe: "A",
        tags: ["Centre-ville", "Ascenseur"],
        contrat: "Location",
        description: [
            "LANNION CENTRE // Bel appartement T3 récent de 65 m² avec balcon.",
            "Situé au 2ème étage avec ascenseur, il comprend un séjour avec cuisine ouverte, deux chambres et une salle d'eau.",
            "Place de parking sécurisée."
        ],
        caracteristiques: ["Balcon", "Ascenseur", "Parking sécurisé", "RT 2012"],
        photos: ["img/maisons/maison2/photo_31cca8039802e5e17485fa0e1a006263.jpg"]
    },
    {
        id: 9,
        titre: "Maison de bourg à Tréguier",
        type: "Maison",
        ville: "TRÉGUIER",
        cp: "22220",
        prix: "820",
        pieces: 4,
        chambres: 2,
        sdb: 1,
        surface: "80",
        garage: "Non",
        annee: "1900",
        dpe: "E",
        tags: ["Charme", "Proche commerces"],
        contrat: "Location",
        description: [
            "TRÉGUIER // Charmante maison de bourg rénovée de 80 m².",
            "Cœur de ville historique, proche de toutes commodités. Salon avec cheminée décorative, cuisine séparée, deux chambres spacieuses."
        ],
        caracteristiques: ["Rénové", "Cheminée", "Centre historique", "Double vitrage"],
        photos: ["img/maisons/maison3/photo_1830382cb887cef01180a209d5c4eee3.jpg"]
    }
];
