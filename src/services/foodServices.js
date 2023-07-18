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

        return response.data
    } catch (error) {
        throw new Error("Error de conexion")
    }
}

const getIceCream = async () => {
    try {
        const response = await apiClient.get('/ice-cream')

        return response.data
    } catch (error) {
        throw new Error("Error de conexion")
    }
}

const getDrinks = async () => {
    try {
        const response = await apiClient.get('/drinks')

        return response.data
    } catch (error) {
        throw new Error("Error de conexion")
    }
}
export { getFood, getDrinks,getIceCream };
