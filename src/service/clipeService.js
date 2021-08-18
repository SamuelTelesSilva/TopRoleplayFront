import http from './api.js';

export const getAll = (limit, paginaAtual) => {
    return http.get(`/api/clipe?sort=id,desc&size=${limit}&page=${paginaAtual}`);
};

export const getAllSelect = () => {
    return http.get(`/api/clipe?sort=id,desc`);
};

export const searchByName = (limit, paginaAtual, name) => {
    return http.get(`/api/clipe/search/${name}?size=${limit}&page=${paginaAtual}`);
};

export const registerClipe = data => {
    return http.post("/api/clipe", data);
};

export const updateClipe = (id, data) => {
    return http.put(`/api/clipe/${id}`, data);
};

export const removeClipe = id => {
    return http.delete(`/api/clipe/${id}`);
};
  