import axios from 'axios'


const apiClient = axios.create({
    baseURL: 'https://tiny-blue-vulture-shoe.cyclic.app/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
//https://github.com/igdev116/free-food-menus-api    source api

const getFood = async () => {
    try {
        const response = await apiClient.get('/best-foods')
        console.log(response)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error("Error de conexión:", error.message);
        // datos alternativos
        return alternativeData1;
    }
}

const getIceCream = async () => {
    try {
        const response = await apiClient.get('/ice-cream')

        return response.data
    } catch (error) {
        console.error("Error de conexión:", error.message);
        return alternativeData2;
    }
}

const getDrinks = async () => {
    try {
        const response = await apiClient.get('/drinks')

        return response.data
    } catch (error) {
        console.error("Error de conexión:", error.message);
        return alternativeData3;
    }
}


const alternativeData1 = [
    {
        id: 5729,
        price: 6608,
        name: '2 Pokes a Elección',
        img: 'https://images.rappi.com.ar/products/dfd53e9f-4542-4537-8e98-d024fee4b194-1681478053051.png?e=webp&d=125x125&q=40',
        dsc: '2 pokes a elección'
    },
    {
        id: 9851,
        price: 2500,
        name: 'Crazy Nachos',
        img: 'https://images.rappi.com.ar/products/4d303361-8090-479a-a57e-9fc02bee8159-1664538976698.png?e=webp&d=125x125&q=40',
        dsc: 'Nachos caseros sin gluten + porotos negros + choclo tostado + cilantro + guacamole.'
    },
    {
        id: 2674,
        price: 4200,
        name: 'Armá Tu Tabla',
        img: 'https://images.rappi.com.ar/products/ad6c1bd1-bf34-4bc1-9eb4-94105981e7d7-1664539035779.png?e=webp&d=125x125&q=40',
        dsc: 'Elegí tus 12 rolls'
    },
    {
        id: 8197,
        price: 3120,
        name: 'Avocado Poke',
        img: 'https://images.rappi.com.ar/products/0dc797ff-4f8d-4f58-b6f4-8d88ae04b5bb-1664539524472.png?e=webp&d=125x125&q=40',
        dsc: 'Base de arroz shari + zanahoria glaseada + palta + hilos de batata crispy + sésamo negro + verdeo + adicional de salsa teriyaki.'
    },
    {
        id: 4932,
        price: 3240,
        name: 'Crunchy Poke',
        img: 'https://images.rappi.com.ar/products/31ddc156-4972-4426-abfa-0cce46bc2135-1664539541485.png?e=webp&d=125x125&q=40',
        dsc: 'Base de arroz shari, vegadelfia, tartar de hongos con morrón ahumado y verdeo, palta, salsa de zanahoria y jengibre, tierra de nachos, salsa teriyaki.'
    },
    {
        id: 1745,
        price: 3320,
        name: 'Fideos Huancaína',
        img: 'https://images.rappi.com.ar/products/e13e543c-c754-47ac-9720-695b9827ea57-1664539351505.png?e=webp&d=125x125&q=40',
        dsc: 'Fideos de arroz, salteado con hongos horneados y salsa huancaína.'
    },
    {
        id: 8263,
        price: 3320,
        name: 'V Thai',
        img: 'https://images.rappi.com.ar/products/fd85921f-81c7-42cd-9a27-b294f5497e4a-1664539375795.png?e=webp&d=125x125&q=40',
        dsc: 'Fideos de arroz salteados en hongos, cebolla, morrón, brócoli, salsa de tamarindo, maní, cilantro.'
    },
    {
        id: 3156,
        price: 2952,
        name: 'Ensalada Caesar',
        img: 'https://images.rappi.com.ar/products/b781c605-5e58-4e5b-8f07-6ee51703a3c2-1664539638934.png?e=webp&d=125x125&q=40',
        dsc: 'Lechuga, kale, croutons de tofu, garbanzos crispy, raw-mesan cheese, cherry confitados, palta y aderezo caesar.'
    },
    {
        id: 7329,
        price: 2952,
        name: 'Ensalada de Quinoa',
        img: 'https://images.rappi.com.ar/products/0292b456-cdf7-4e25-a8e5-4ee6c809fa90-1664539850038.png?e=webp&d=125x125&q=40',
        dsc: 'Quinoa roja + kale + boniato asado + zanahorias glaseadas + cebolla encurtida + queso de cajú + castañas de cajú tostadas + vinagreta de limón.'
    }
];

const alternativeData2 = [
    {
        id: 56123413433378,
        price: 6961,
        name: '2 Sushi Salad a Elección',
        img: 'https://images.rappi.com.ar/products/8307eedd-ecfd-4e24-b84f-5ff94bee7045-1667301181891.png?e=webp&d=125x125&q=40',
        dsc: 'Elegí tus sushi salad favoritas.'
    },
    {
        id: 5632423423478,
        price: 1558,
        name: 'Harumakis a Elección X 4.',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Elegí tus harumakis favoritos.'
    },
    {
        id: 123434,
        price: 3685,
        name: 'Salad Clásica',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Base de arroz shari, salmón flambleado palta, sésamo mixto y phila.'
    },
    {
        id: 1234,
        price: 3685,
        name: 'Salad Special',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Base de arroz shari, salmón en cubos, palta, phila, coronado con sésamo mixto.'
    },
    {
        id: 123423,
        price: 4961,
        name: 'Hot X 15 Unidades',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: '5 ny phila hot + 5 maki hot + 5 ebi hot.'
    },
    {
        id: 2341,
        price: 6378,
        name: 'Clásica de Salmón X 20 Unidades',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: '5 niguiri salmon + 5 rain roll + 5 citric + 5 tamago.'
    },
    {
        id: 789000,
        price: 9213,
        name: 'Rainbow X 30 Unidades',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: '5 sem + 5 phila + 5 bs as + 5 citric + 5 niguiri salmon + 3 sashimi + 2 geishas.'
    },
    {
        id: 98978778,
        price: 1890,
        name: 'Philadelphia Roll',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Roll de salmón y phila cubierto en sésamo negro.'
    },
    {
        id: 6789789,
        price: 1890,
        name: 'Rain Roll',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Roll de salmón, palta, Phila cubierto en sésamo mixto'
    },
    {
        id: 578978,
        price: 2079,
        name: 'Tropic Roll',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Salmón y phila cubierto en mango bañado en salsa de maracuyá con crocante de batata.'
    },
    {
        id: 678978,
        price: 2079,
        name: 'Hot Buenos Aires Roll',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Salmón, palta y phila rebozado en panko.'
    },
    {
        id: 56678978,
        price: 2079,
        name: 'Hot Futu Roll',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Langostino furai y phila cubierto en panko y salsa futurama.'
    },

    {
        id: 5678978,
        price: 2763,
        name: 'Sashimi de Salmón X4',
        name: 'Sashimi de Salmón X4',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Sashimi de salmon.'
    },
    {id: 145674328,
        price: 3529,
        name: 'Yakisoba',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Salteado de tallarines y verduras con proteína a elección.'
    },
    {
        id: 145678,
        price: 4783,
        name: 'Ceviche Mixto',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Salmón y pescado blanco en cubos, lechuga, choclo, cebolla morada, camote glaseado, maíz cancha y leche de tigre.'
    }
]


const alternativeData3 = [
    {
        id: 5617478,
        price: 4000,
        name: 'Combo Tapeo Dumplings',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: '3 Porciones de dumplings a elección (18 unidades).'
    },
    {
        id: 567788,
        price: 7500,
        name: 'Recorrido Koi',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: '6 Dumplings, 2 baos, 2 buns gustos a elección.'
    },
    {
        id: 576678,
        price: 3600,
        name: 'Dumpling de Cerdo X 6',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: '6 Dumplings de bondiola marinada, akusai, ajo, jengibre y aceite de sésamo tostado.'
    },
    {
        id: 6569078,
        price: 4100,
        name: 'Dumpling de Provoleta X 6',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: '6 dumplings de provoleta ahumada, pimentón, cebolla caramelizada a la sartén.'
    },
    {
        id: 5576678,
        price: 4100,
        name: 'Dumpling de Hongos Masa Integral X 6',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: '6 Dumplings de portobellos, champignones, shiitake, maní tostado, vegano. con masa integral .'
    },
    {
        id: 56723348,
        price: 4200,
        name: 'Bao de Cordero Braseado X 2',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: '2 baos de cordero braseado 9 horas con lemongrass, mirepoix'
    },
    {
        id: 5675648,
        price: 3200,
        name: 'Bun Bondiola Braseada a la Cerveza X 2',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Buns de bondiola braseada a la cerveza y miel, pickles de pepino y salsa de zanahoria. 2 unidades con chips.'
    },
    {
        id: 567748,
        price: 3200,
        name: 'Bun de Pollo Panko Crispy X 2',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Buns de pollo panko con coleslaw, lima, jalapeño. 2 unidades con chips. .'
    },
    {
        id: 567348,
        price: 3800,
        name: 'Bun de Langostinos Crispy X2',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Buns de langostinos apanados en panko, escamas de coco, pickles de cebolla morada, verdeo, salsa de coco y sriracha. 2 unidades con chips.'
    },
    {
        id: 52366678,
        price: 4300,
        name: 'Promo: Nuevo Ramen Miso + Bebida',
        img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        dsc: 'Caldo de pollo mix de miso- bondiola chashu- zanahoria- choclo-negui- mix de hongos- huevo mollet-aceite de limón y jengibre.'
    },
    {
        id: 56455378,
        price: 3200,
        name: 'Ramen Shio Koji Tonkotsu',
        img: 'https://images.rappi.com.ar/products/f033b887-d7f6-4278-82ea-148101208d29-1683636882982.png?e=webp&d=125x125&q=40',
        dsc: 'Caldo de cerdo - noodles - tare de koji katsobushi - hoja de puerro - verdeo blanco - memma - aceite de ajo negro - panceta ahumada - huevo mollet.'
    },
    {
        id: 345345,
        price: 2300,
        name: 'Ramen Shoyu Ajo',
        img: 'https://images.rappi.com.ar/products/32f9fdd3-adfd-462a-93eb-446df9decac8-1683636508404.png?e=webp&d=125x125&q=40',
        dsc: 'Caldo de pollo- bondiola chashu, base de ajos confitados con soja-negui- choclo asado - huevo mollet y aceite de ajo.'
    }
]

const generateRandomId = () => {
    return Math.floor(Math.random() * 10000000);
};



// Agregamos el atributo "id" y verificamos las imágenes de cada objeto en el primer array
const processedAlternativeData1 = alternativeData1.map((item) => ({
    id: generateRandomId(),
    price: item.price,
    name: item.name,
    img: item.img,
    dsc: item.dsc,
}));

// Agregamos el atributo "id" y verificamos las imágenes de cada objeto en el segundo array
const processedAlternativeData2 = alternativeData2.map((item) => ({
    id: generateRandomId(),
    price: item.price,
    name: item.name,
    img: item.img,
    dsc: item.dsc,
}));

// Agregamos el atributo "id" y verificamos las imágenes de cada objeto en el tercer array
const processedAlternativeData3 = alternativeData3.map((item) => ({
    id: generateRandomId(),
    price: item.price,
    name: item.name,
    img: item.img,
    dsc: item.dsc,
}));

console.log(processedAlternativeData1);
console.log(processedAlternativeData2);
console.log(processedAlternativeData3);

export { getFood, getDrinks, getIceCream };
