import http from './api.js';

export const getAll = (limit, paginaAtual) => {
    return http.get(`/api/streamer?size=${limit}&page=${paginaAtual}`);
};

export const searchByName = (limit, paginaAtual, name) => {
    return http.get(`/api/streamer/search/${name}?size=${limit}&page=${paginaAtual}`);
};

export const registerStreamer = data => {
    return http.post("/api/streamer", data);
};

export const updateStreamer = (id, data) => {
    return http.put(`/api/streamer/${id}`, data);
};

export const remove = id => {
    return http.delete(`/contatos/${id}`);
};
  