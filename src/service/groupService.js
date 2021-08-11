import http from './api.js';

export const getAll = (limit, paginaAtual) => {
    return http.get(`/api/grupo?sort=id,desc&size=${limit}&page=${paginaAtual}`);
};

export const getAllSelect = () => {
    return http.get(`/api/grupo`);
};

export const searchByName = (limit, paginaAtual, name) => {
    return http.get(`/api/grupo/search/${name}?size=${limit}&page=${paginaAtual}`);
};

export const registerGroup = data => {
    return http.post("/api/grupo", data);
};

export const updateGroup = (id, data) => {
    return http.put(`/api/grupo/${id}`, data);
};

export const remove = id => {
    return http.delete(`/api/grupo/${id}`);
};
  