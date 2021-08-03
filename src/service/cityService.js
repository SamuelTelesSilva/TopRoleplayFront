import http from './api.js';

export const getAll = (limit, paginaAtual) => {
    return http.get(`/api/cidade?sort=id,desc&size=${limit}&page=${paginaAtual}`);
};

export const getAllSelect = () => {
    return http.get(`/api/cidade`);
};

export const searchByName = (limit, paginaAtual, name) => {
    return http.get(`/api/cidade/search/${name}?size=${limit}&page=${paginaAtual}`);
};

export const registerCity = data => {
    return http.post("/api/cidade", data);
};

export const updateStreamer = (id, data) => {
    return http.put(`/api/streamer/${id}`, data);
};

export const remove = id => {
    return http.delete(`/api/streamer/${id}`);
};
  