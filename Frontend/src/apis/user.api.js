import api from "../utils/axios"

export const getCurrentUser = async () => {
    try {
        const response = await api.get("/api/me")
       
        return response.data 

    } catch (error) {
        
        return null 
    }
}