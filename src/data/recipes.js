const recipes = [
    {
        id: 1,
        title: "Spaghetti Carbonara",
        description: "Un classique italien facile à préparer.",
        ingredients: ["Spaghetti", "Lardons", "Oeufs", "Parmesan", "Poivre"],
        steps: [
            "Faire cuire les pâtes.",
            "Faire revenir les lardons.",
            "Mélanger les œufs et le parmesan.",
            "Incorporer le mélange aux pâtes chaudes.",
        ],
        images: "../../images/spaghetti_carbonara.jpg",
    },
    {
        id: 2,
        title: "Crêpes",
        description: "Des crêpes légères et délicieuses.",
        ingredients: ["Farine", "Oeufs", "Lait", "Beurre", "Sucre"],
        steps: [
            "Mélanger tous les ingrédients.",
            "Laisser reposer la pâte.",
            "Cuire les crêpes dans une poêle.",
        ],
        images: "../../images/crepes.jpg",
    },
    {
        id: 3,
        title: "Nouilles sautées au poulet",
        description: "Un plat asiatique savoureux et rapide à préparer.",
        ingredients: [
            "Nouilles",
            "Blanc de poulet",
            "Carottes",
            "Oignons",
            "Sauce soja",
            "Huile de sésame",
            "Ail",
        ],
        steps: [
            "Cuire les nouilles selon les instructions du paquet.",
            "Faire revenir les morceaux de poulet dans une poêle chaude avec un peu d'huile.",
            "Ajouter les légumes émincés (carottes, oignons, ail) et les faire sauter.",
            "Incorporer les nouilles et ajouter la sauce soja et l'huile de sésame.",
            "Bien mélanger et servir chaud.",
        ],
        images: "../../images/nouilles.jpg",
    },
    {
        id: 4,
        title: "Brownies au chocolat",
        description: "Des brownies fondants et riches en chocolat.",
        ingredients: [
            "200g de chocolat noir",
            "150g de beurre",
            "150g de sucre",
            "3 œufs",
            "100g de farine",
            "Une pincée de sel",
        ],
        steps: [
            "Faire fondre le chocolat et le beurre au bain-marie.",
            "Battre les œufs avec le sucre jusqu'à ce que le mélange blanchisse.",
            "Incorporer le mélange chocolat-beurre fondu.",
            "Ajouter la farine et une pincée de sel, puis mélanger.",
            "Verser la pâte dans un moule et cuire au four à 180°C pendant 20-25 minutes.",
        ],
        images: "../../images/brownies.jpg",
    },
    {
        id: 5,
        title: "Salade César",
        description: "Une salade classique avec une vinaigrette maison.",
        ingredients: [
            "Laitue romaine",
            "Croutons",
            "Parmesan râpé",
            "Blanc de poulet (grillé)",
            "2 jaunes d'œufs",
            "2 filets d'anchois",
            "1 gousse d'ail",
            "2 cuillères à soupe de jus de citron",
            "4 cuillères à soupe d'huile d'olive",
            "1 cuillère à café de moutarde de Dijon",
        ],
        steps: [
            "Préparer la vinaigrette en mélangeant les jaunes d'œufs, les anchois, l'ail haché, le jus de citron, l'huile d'olive et la moutarde.",
            "Laver et couper la laitue romaine.",
            "Griller les croutons au four ou à la poêle.",
            "Mélanger la laitue avec la vinaigrette, les croutons, et le parmesan.",
            "Ajouter le poulet grillé tranché sur le dessus.",
        ],
        images: "../../images/salade.jpg",
    },
    {
        id: 6,
        title: "Soupe de légumes",
        description: "Un plat réconfortant et sain, parfait pour l'hiver.",
        ingredients: [
            "3 carottes",
            "2 pommes de terre",
            "1 poireau",
            "1 courgette",
            "1 oignon",
            "1 litre de bouillon de légumes",
            "Huile d'olive",
            "Sel et poivre",
        ],
        steps: [
            "Éplucher et couper tous les légumes en morceaux.",
            "Faire revenir l'oignon dans une casserole avec un peu d'huile d'olive.",
            "Ajouter tous les légumes et faire revenir quelques minutes.",
            "Verser le bouillon de légumes et porter à ébullition.",
            "Laisser mijoter 25-30 minutes, jusqu'à ce que les légumes soient tendres.",
            "Mixer la soupe et assaisonner avec du sel et du poivre.",
        ],
        images: "../../images/soupe.jpg",
    },
    {
        id: 7,
        title: "Poulet au curry",
        description: "Un plat épicé et savoureux aux saveurs indiennes.",
        ingredients: [
            "500g de poulet",
            "1 oignon",
            "2 gousses d'ail",
            "200ml de lait de coco",
            "2 cuillères à soupe de pâte de curry",
            "1 cuillère à soupe d'huile",
            "Riz (en accompagnement)",
        ],
        steps: [
            "Couper le poulet en morceaux.",
            "Faire revenir l'oignon et l'ail émincés dans une poêle avec de l'huile.",
            "Ajouter la pâte de curry et mélanger.",
            "Incorporer les morceaux de poulet et les faire cuire jusqu'à ce qu'ils soient dorés.",
            "Ajouter le lait de coco et laisser mijoter 15 minutes.",
            "Servir chaud avec du riz.",
        ],
        images: "../../images/poulet.jpg",
    },
    {
        id: 8,
        title: "Quiche lorraine",
        description: "Une tarte salée traditionnelle française.",
        ingredients: [
            "1 pâte brisée",
            "200g de lardons",
            "3 œufs",
            "200ml de crème fraîche",
            "100ml de lait",
            "50g de gruyère râpé",
            "Sel et poivre",
        ],
        steps: [
            "Préchauffer le four à 180°C.",
            "Étaler la pâte brisée dans un moule à tarte.",
            "Faire revenir les lardons dans une poêle.",
            "Battre les œufs avec la crème fraîche et le lait. Ajouter le gruyère râpé, le sel et le poivre.",
            "Répartir les lardons sur la pâte, puis verser le mélange par-dessus.",
            "Cuire au four pendant 30-35 minutes, jusqu'à ce que la quiche soit dorée.",
        ],
        images: "../../images/quiche.jpg",
    },
    {
        id: 9,
        title: "Tiramisu",
        description: "Un dessert italien crémeux et délicieux.",
        ingredients: [
            "250g de mascarpone",
            "3 œufs",
            "100g de sucre",
            "20 biscuits à la cuillère",
            "200ml de café",
            "Cacao en poudre",
        ],
        steps: [
            "Séparer les blancs des jaunes d'œufs.",
            "Battre les jaunes avec le sucre jusqu'à ce que le mélange blanchisse.",
            "Ajouter le mascarpone et bien mélanger.",
            "Monter les blancs en neige et les incorporer délicatement au mélange.",
            "Tremper les biscuits dans le café et les disposer dans un plat.",
            "Alterner une couche de biscuits et une couche de crème, puis saupoudrer de cacao.",
            "Réfrigérer au moins 4 heures avant de servir.",
        ],
        images: "../../images/tiramisu.jpg",
    },
    {
        id: 10,
        title: "Pancakes américains",
        description: "De délicieux pancakes moelleux pour le petit-déjeuner.",
        ingredients: [
            "250g de farine",
            "2 cuillères à soupe de sucre",
            "1 cuillère à soupe de levure chimique",
            "2 œufs",
            "300ml de lait",
            "50g de beurre fondu",
            "Une pincée de sel",
        ],
        steps: [
            "Dans un bol, mélanger la farine, le sucre, la levure et le sel.",
            "Dans un autre bol, fouetter les œufs avec le lait et le beurre fondu.",
            "Incorporer le mélange liquide aux ingrédients secs pour obtenir une pâte homogène.",
            "Faire chauffer une poêle et verser une petite louche de pâte.",
            "Cuire chaque pancake jusqu'à ce que des bulles se forment, puis retourner.",
            "Servir avec du sirop d'érable, des fruits ou du beurre.",
        ],
        images: "../../images/pancakes.jpg",
    }
];
export default recipes;