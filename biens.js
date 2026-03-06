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
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1200"
        ]
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
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=1200"
        ]
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
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&q=80&w=1200"
        ]
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
            "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200"
        ]
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
            "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200"
        ]
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
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200"
        ]
    }
];
