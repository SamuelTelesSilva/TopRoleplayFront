import http from './api.js';

export const getAll = (limit, paginaAtual) => {
    return http.get(`/api/streamer?sort=id,desc&size=${limit}&page=${paginaAtual}`);
};

export const registerStreamer = data => {
    return http.post("/api/streamer", data);
};

export const updateUser = (id, data) => {
    return http.put(`/api/usuarios/${id}`, data);
};

export const remove = id => {
    return http.delete(`/contatos/${id}`);
};
  