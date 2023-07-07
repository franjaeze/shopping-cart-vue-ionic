import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://free-food-menus-api-production.up.railway.app/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


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
