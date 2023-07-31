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
        return veggie;
    }
}

const getIceCream = async () => {
    try {
        const response = await apiClient.get('/ice-cream')

        return response.data
    } catch (error) {
        console.error("Error de conexión:", error.message);
        return sushi;
    }
}

const getDrinks = async () => {
    try {
        const response = await apiClient.get('/drinks')

        return response.data
    } catch (error) {
        console.error("Error de conexión:", error.message);
        return laPerlita;
    }
}


const veggie = [
    {
        id: 5729,
        price: 6608,
        name: '2 Pokes a Elección',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5isJ8vuvXgvTMDXQXkhZF94iVcXkxjfYmdg&usqp=CAU',
        dsc: '2 pokes a elección'
    },
    {
        id: 9851,
        price: 2500,
        name: 'Crazy Nachos',
        img: 'https://images-gmi-pmc.edge-generalmills.com/4f5b624d-c9d0-4a75-acfe-fadbe40a7d1e.jpg',
        dsc: 'Nachos caseros sin gluten + porotos negros + choclo tostado + cilantro + guacamole.'
    },
    {
        id: 2674,
        price: 4200,
        name: 'Armá Tu Tabla',
        img: 'https://www.kathysvegankitchen.com/wp-content/uploads/2020/10/vegan-poke-bowl-.jpg',
        dsc: 'Elegí tus 12 rolls'
    },
    {
        id: 8197,
        price: 3120,
        name: 'Avocado Poke',
        img: 'https://eatwithclarity.com/wp-content/uploads/2022/01/vegan-tofu-poke-bowl-500x500.jpg',
        dsc: 'Base de arroz shari + zanahoria glaseada + palta + hilos de batata crispy + sésamo negro + verdeo + adicional de salsa teriyaki.'
    },
    {
        id: 4932,
        price: 3240,
        name: 'Crunchy Poke',
        img: 'https://thegourmetbonvivant.com/wp-content/uploads/2023/01/poke-bowl-ft.jpg',
        dsc: 'Base de arroz shari, vegadelfia, tartar de hongos con morrón ahumado y verdeo, palta, salsa de zanahoria y jengibre, tierra de nachos, salsa teriyaki.'
    },
    {
        id: 1745,
        price: 3320,
        name: 'Fideos Huancaína',
        img: 'https://twokooksinthekitchen.com/wp-content/uploads/2020/06/vegetable-pasta-wine-sauce.jpg',
        dsc: 'Fideos de arroz, salteado con hongos horneados y salsa huancaína.'
    },
    {
        id: 8263,
        price: 3320,
        name: 'V Thai',
        img: 'https://www.jessicagavin.com/wp-content/uploads/2016/07/crunchy-thai-salad-with-peanut-sauce-dressing-eating-with-chopsticks-1200.jpg',
        dsc: 'Fideos de arroz salteados en hongos, cebolla, morrón, brócoli, salsa de tamarindo, maní, cilantro.'
    },
    {
        id: 3156,
        price: 2952,
        name: 'Ensalada Caesar',
        img: 'https://www.recipetineats.com/wp-content/uploads/2016/05/Caesar-Salad_7-SQ.jpg',
        dsc: 'Lechuga, kale, croutons de tofu, garbanzos crispy, raw-mesan cheese, cherry confitados, palta y aderezo caesar.'
    },
    {
        id: 7329,
        price: 2952,
        name: 'Ensalada de Quinoa',
        img: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2019-11-recipe-mediterranean-quinoa-salad%2F2019-10-21_Kitchn89095_Mediteranean-Quinoa-Salad',
        dsc: 'Quinoa roja + kale + boniato asado + zanahorias glaseadas + cebolla encurtida + queso de cajú + castañas de cajú tostadas + vinagreta de limón.'
    }
];

const sushi = [
 
    {
        
        price: 6558,
        name: '2 Sushi Salad a Elección',
        img: 'https://greenkitchenstories.com/wp-content/uploads/2010/05/Sushi_salad_2.jpg',
        dsc: 'Elegí tus sushi salad favoritas.',
        id: 659507859193148
      },
 
    {
         
        price:5685,
        name: 'Clasica X 20 + Cerveza',
    img: 'https://properfoodie.com/wp-content/uploads/2020/07/featured-sushi-2b-feature-sushi-2b-1.jpg',
    dsc: '5 Niguiri salmon + 5 rain + 5 citric + 5 tamago + cerveza patagonia 410ml.',
    id: 313491897179293
  },
    {
        
        price: 3685,
        name: 'Kaze X 12 + Mizu X 15 + Gaseosa 1,5Lt',
        img: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/sushi-sashimi-1296x728-header.jpg?w=1155&h=1528',
        dsc: '5 Spring + 5 california + 2 niguiris salmon y 5 sake + 5 skin + 5 california + gaseosa 1,5l.',
        id: 949652796393924},
    {
        price: 3685,
        name: 'Tabla Kanuomi X 15 y 1 Sushi Salad',
        img: 'https://cdn-fegfh.nitrocdn.com/bJwdeZsObtsROHbGJsKNNvJfYjZSwUGF/assets/images/optimized/rev-4b45196/www.kobeteppanyaki.com.au/wp-content/uploads/2020/08/Traditional-Japanese-Sushi-vs.-Western-Sushi-1.jpg',
        dsc: 'Tabla kanu x 15 con 1 sushi salad a elección.',
        id: 815140420542150
      },
    {
        
        price: 6378,
        name: 'Full Salmón X 40 + Gaseosa 1,5 Lt.',
        img: 'https://statics-cuidateplus.marca.com/cms/styles/ratio_43/azblob/sushi.jpg.webp?itok=zQFYWKDM',
        dsc: '5 Croc + 5 ocean + 5 bs as + 5 tamago + 10 bs as hot + 5 niguiris + 5 geishas + gaseosa 1,5l.',
        id: 986761673901131
      },
    {
        
        price: 9213,
        name: 'Shrimp & Salmón X 15 + Tabla Omakase X15',
        img: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/07/Salmon-Sushi-Salad-square-FS.jpg',
        dsc: 'Tabla shrimp & salmón x 15 + tabla omakase x 15.',
        id: 556782679036090
      },
   
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


const postre = [
    {
        id: 9679976,
      price: 2400,
      name: '2 Bagels con Jamón y Queso + Café + Jugo',
      img: 'https://images.rappi.com.ar/products/1cb40169-1674-4c4d-b3d4-385fb091c3fb-1648561131464.png?e=webp&d=125x125&q=40',
      dsc: '2 Mini bagels con jamón y queso, café a elección y jugo de naranja exprimido.'
    },
    {  id: 3234545,
      price: 6847,
      name: 'Bandeja Matera',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Bandeja con mix de bocaditos dulces, ideales para la hora del mate.'
    },
    {  id: 35436345,
      price: 1847,
      name: 'Bandeja de Postre',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Bandeja con mix de bocaditos dulces, especialmente con dulce de leche y chocolate.'
    },
    {  id: 3453456564545,
      price: 8538,
      name: 'Desayuno Completo',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Brownie, alfajor, vaso térmico, porcion de budin, chipacitos, porción de torta, infusiones en sobrecito, jugo, tarjeta para dedicatoria.'
    },
    {  id: 34534345623464567455,
      price: 2050,
      name: 'Chocotorta',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Torta chocotorta por porción.'
    },
    {  id: 765674444,
      price: 1060,
      name: 'Cuadrado Havannete',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Cuadrado de dulce de leche, chocolate.'
    },
    {  id: 4567445,
      price: 2747,
      name: 'Budin de Limon y Amapolas (mediano)',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Budin super humedo de limon y amapolas, cubierto con glase. 500grs.'     
    },
    {  id: 34586785679345,
      price: 2747,
      name: 'Budin de Frutos Rojos y Choco B Mediano',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Budin super humedo, con frutos rojos y chocolate blanco. 500grs.'        
    },
    {  id: 36575685345,
      price: 1400,
      name: 'Mix de Alfajorcitos (6)',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: '6 Mix de alfajorcitos.'
    },
    {  id: 567567885,
      price: 790,
      name: 'American Cookies',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Galleta de vainilla.'
    },
    {  id: 657858995345,
      price: 300,
      name: 'Chipacitos (6)',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: '6 panes de queso a base de fécula de mandioca.'
    },
    {  id: 5645768685,
      price: 500,
      name: 'Medialuna con Jamón & Queso',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Medialuna de manteca, rellena con jamón y queso.'
    },
    {  id:675685345,
      price: 2400,
      name: 'Medialunas de Manteca (docena)',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Docena de medialunas de manteca, con almibar. Calentitas.'
    }
  ]

const elSaborACasa = [
    {
      price: 3286.25,
      name: '11 Medialunas + 1 Gratis',
      img: 'https://images.rappi.com.ar/products/25b242ef-ddb1-4db4-bac8-40f1d3c3b485-1667501589974.png?e=webp&d=125x125&q=40',
      dsc: '12 medialunas a elección.',
      id: 72832152414979
    },
    {
      price: 2873.75,
      name: '3 Medialunas Rellenas',
      img: 'https://images.rappi.com.ar/products/c72db20a-b8bc-471d-aec9-4509f82061ac-1667501482143.png?e=webp&d=125x125&q=40',
      dsc: '3 medialunas rellenas a elección.',
      id: 932506339922026
    },
    {
      price: 1399.13,
      name: 'Chipa X 10',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: '10 chipás de queso.',
      id: 311527932000286
    },
    {
      price: 436.63,
      name: 'Dona Rosa Rellena',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Dona rellena de dulce de leche bañada en chocolate rosa y granas.',      
      id: 969332378995297
    },
    {
      price: 436.63,
      name: 'Dona Glaseada',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Dona con glaseado de azúcar.',
      id: 401880123200780
    },
    {
      price: 436.63,
      name: 'Dona Rellena Bañada de Chocolate',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Dona rellena de dulce de leche bañada en chocolate negro.',
      id: 420463318653698
    },
    {
      price: 998.75,
      name: 'Medialuna con Jamón y Queso',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Medialuna con jamón y queso.',
      id: 736535512753956
    }
  ]

  const elArmenio = [
    {
      price: 3600,
      name: '2 Shawarma de Ternera',
      img: 'https://images.rappi.com.ar/products/2111576152-1633445481717_hq.jpeg?e=webp&d=125x125&q=40',
      dsc: 'Carne de ternera en trozos con salsa típica (taratour) acompañada de lechuga, cebolla y tomate envuelta en pan lavash.',
      id: 21257035342197
    },
    {
      price: 470,
      name: 'Fatay',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Empanada oriental de carne cerrada en triangulo.',
      id: 384961920263790
    },
    {
      price: 695,
      name: 'Lehmeyún de Carne',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Empanada oriental abierta de carne.',
      id: 341939233455626
    },
    {
      price: 1890,
      name: 'Pilav con Pollo a la Crema 1/2 Porción.',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Arroz con fideos cabello de ángel tostados, acompañados de pollo con salsa de crema y cebolla.',
      id: 75381535239386
    },
    {
      price: 1300,
      name: 'Falafel X 6',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: '6 albóndigas de garbanzos y trigo con salsa típica.',
      id: 82780041710640
    },
    {
      price: 1881,
      name: 'Shawarma de Ternera',
      img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dsc: 'Carne de ternera en trozos con salsa típica ("taratour") acompañada de lechuga, cebolla y tomate envuelta en pan lavash.',
      id: 872055393298298
    }
  ]

  const laPerlita = [
    {
      price: 3900,
      name: 'Suprema a la Maryland',
      img: 'https://www.saveur.com/uploads/2021/06/04/Suprema-Maryland-El-Gobo-Buenos-Aires-Kevin-Vaughn-Saveur.jpg?auto=webp',
      dsc: 'Suprema de pollo con papas paille, crema de choclos, banana, manzana, jamón.',
      id: 592399248967115
    },
    {
      price: 3400,
      name: 'Milanesa de Ternera Napolitana con Papas',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM928IMq8zkQc_8kRgQtFEiASSdOW1qLIjbpAShovUYWfSGdzbfe9wTYNPLJmkEzK4EuM&usqp=CAU', 
      dsc: 'Milanesa gratinada con muzzarella, salsa de tomate, jamón y papas fritas.',
      id: 294935138658273
    },
    {
      price: 7800,
      name: 'Pacu de Criadero Rosamonte',
      img: 'https://www.cocina-brasilena.com/base/stock/Recipe/218-image/218-image_web.jpg',
      dsc: 'Pacu de 500g a la parrilla con verduras grilladas.',
      id: 210793246430067
    },
    {
      price: 4900,
      name: 'Matambrito de Cerdo',
      img: 'https://assets.unileversolutions.com/recipes-v2/210000.jpg',
      dsc: 'Matambrito de cerdo a la crema de verdeo con papas noisette.',
      id: 763025133470300
    },
    {
      price: 10900,
      name: 'Entraña Emperador para 2',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fgN0WFG7ScJZ9LbgozKlg7h2bUIh-UYceYzzF1X2kMKH34UUBLdyyI5m3rxODhPAk-w&usqp=CAU',   
      dsc: 'Entraña a la parrilla con papas fritas y ensalada mixta salsa criolla chimi para dos personas.(1kg).',
      id: 902864106700631
    }
  ]

const generateRandomId = () => {
    return Math.floor(Math.random() * 10000000);
};

 

export { getFood, getDrinks, getIceCream };
