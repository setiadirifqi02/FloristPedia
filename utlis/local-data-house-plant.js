let HousePlants = [
    {
        id: 'plant-01',
        plant_name: 'Aloe Vera',
        category: 'Leaf House Plant',
        image: 'images/plants/aloe-vera.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti quisquam reiciendis incidunt! Animi culpa dolore itaque nam, vel architecto distinctio maiores, natus dolores blanditiis, odio delectus dolorem vero ullamNostrum sapiente cupiditate quia architecto dolor. Vel temporibus, commodi laudantium asperiores at officiis tempora officia fugit ea quaerat molestiae rerum non, magni totam quae illum. Quo inventore odio fug; Lorem; ipsum dolor sit amet, consectetur adipisicing elit.Molestias sint quae in blanditiis eum perspiciatis aliquid quia, magni veritatis iusto cumque porro nam? Doloribus deleniti eius sit explicabo eveniet dolor. Incidunt, nam deleniti sunt nostrum reprehenderit excepturi quam, nulla, fugit necessitatibus minus magni saepe nihil! Beatae consequuntur quibusdam nihil totam quos, laborum eveniet sed minima voluptate! Impedit, expedita at.Sunt optio eos perferendis error dolorum ducimus voluptates recusandae, dolore similique mollitia minus enim animi esse, consequatur itaque reiciendis fugit porro corporis! Eaque harum at, in perspiciatis error esse ullam. Et illo dolorum maxime!',
        isPopular: true,
    },
    {
        id: 'plant-02',
        plant_name: 'Hoya',
        category: 'Leaf House Plant',
        image: 'images/plants/aloe-vera.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti quisquam reiciendis incidunt! Animi culpa dolore itaque nam, vel architecto distinctio maiores, natus dolores blanditiis, odio delectus dolorem vero ullamNostrum sapiente cupiditate quia architecto dolor. Vel temporibus, commodi laudantium asperiores at officiis tempora officia fugit ea quaerat molestiae rerum non, magni totam quae illum. Quo inventore odio fug',
        isPopular: true,
    },
    {
        id: 'plant-03',
        plant_name: 'Elephant Ear',
        category: 'Leaf House Plant',
        image: 'images/plants/aloe-vera.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti quisquam reiciendis incidunt! Animi culpa dolore itaque nam, vel architecto distinctio maiores, natus dolores blanditiis, odio delectus dolorem vero ullamNostrum sapiente cupiditate quia architecto dolor. Vel temporibus, commodi laudantium asperiores at officiis tempora officia fugit ea quaerat molestiae rerum non, magni totam quae illum. Quo inventore odio fug',
        isPopular: true,
    },
    {
        id: 'plant-04',
        plant_name: 'Monstera Deliousa',
        category: 'Leaf House Plant',
        image: 'images/plants/aloe-vera.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti quisquam reiciendis incidunt! Animi culpa dolore itaque nam, vel architecto distinctio maiores, natus dolores blanditiis, odio delectus dolorem vero ullamNostrum sapiente cupiditate quia architecto dolor. Vel temporibus, commodi laudantium asperiores at officiis tempora officia fugit ea quaerat molestiae rerum non, magni totam quae illum. Quo inventore odio fug',
        isPopular: true,
    },
    {
        id: 'plant-05',
        plant_name: 'Snake Plant',
        category: 'Leaf House Plant',
        image: 'images/plants/aloe-vera.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti quisquam reiciendis incidunt! Animi culpa dolore itaque nam, vel architecto distinctio maiores, natus dolores blanditiis, odio delectus dolorem vero ullamNostrum sapiente cupiditate quia architecto dolor. Vel temporibus, commodi laudantium asperiores at officiis tempora officia fugit ea quaerat molestiae rerum non, magni totam quae illum. Quo inventore odio fug',
        isPopular: false,
    },
    {
        id: 'plant-06',
        plant_name: 'Cactus',
        category: 'Leaf House Plant',
        image: 'images/plants/aloe-vera.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti quisquam reiciendis incidunt! Animi culpa dolore itaque nam, vel architecto distinctio maiores, natus dolores blanditiis, odio delectus dolorem vero ullamNostrum sapiente cupiditate quia architecto dolor. Vel temporibus, commodi laudantium asperiores at officiis tempora officia fugit ea quaerat molestiae rerum non, magni totam quae illum. Quo inventore odio fug',
        isPopular: false,
    },
    {
        id: 'plant-07',
        plant_name: 'Red Rose',
        category: 'Flower House Plant',
        image: 'images/plants/aloe-vera.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti quisquam reiciendis incidunt! Animi culpa dolore itaque nam, vel architecto distinctio maiores, natus dolores blanditiis, odio delectus dolorem vero ullamNostrum sapiente cupiditate quia architecto dolor. Vel temporibus, commodi laudantium asperiores at officiis tempora officia fugit ea quaerat molestiae rerum non, magni totam quae illum. Quo inventore odio fug',
        isPopular: false,
    },
    {
        id: 'plant-08',
        plant_name: 'Jasmine',
        category: 'Flower House Plant',
        image: 'images/plants/aloe-vera.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti quisquam reiciendis incidunt! Animi culpa dolore itaque nam, vel architecto distinctio maiores, natus dolores blanditiis, odio delectus dolorem vero ullamNostrum sapiente cupiditate quia architecto dolor. Vel temporibus, commodi laudantium asperiores at officiis tempora officia fugit ea quaerat molestiae rerum non, magni totam quae illum. Quo inventore odio fug',
        isPopular: false,
    }
];

export function getPopularPlants() {
    return HousePlants.filter((event) => event.isPopular);
}

export function getAllPlants() {
    return HousePlants;
}

export function getPlantById(id) {
    return HousePlants.find((event) => event.id === id)
}