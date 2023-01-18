import api from "./apiConfig.js";

export const getBreweries = async() => {
    try{
        const response = await api.get("/breweries");
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getBrewery = async(id) => {
    try {
        const response = await api.get(`/breweries/${id}`)
        return response.data;
    } catch (error) {
        throw error;
}   
};

export const createBrewery = async(breweryData) => {
    try{
        const response = await api.post("/breweries",breweryData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateBrewery = async(id, breweryData) => {
    try{
        const response = await api.put(`/breweries${id}`,breweryData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteBrewery = async(id) => {
    try{
        const response = await api.delete(`/breweries${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};