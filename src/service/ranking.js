import http from './api.js';

export const getAllRanking = () => {
    return http.get("/api/ranking");
};

export const getRankingById = (id) => {
    return http.get(`/api/ranking/${id}`)
}

export const registerRanking = data => {
    return http.post("/api/ranking", data);
};

export const updateRanking = (id, data) => {
    return http.put(`/api/ranking/${id}`, data);
};

export const removeRanking = id => {
    return http.delete(`/api/ranking/${id}`);
};
  

    