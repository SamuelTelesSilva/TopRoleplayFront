import http from './api.js';

export const getAll = (limit, paginaAtual) => {
    return http.get(`/api/evento?sort=id,desc&size=${limit}&page=${paginaAtual}`);
};

export const getAllSelect = () => {
    return http.get(`/api/evento?sort=id,desc`);
};

export const getEventoById = (id) => {
    return http.get(`/api/evento/${id}`)
}

export const searchByTitle = (limit, paginaAtual, titulo) => {
    return http.get(`/api/evento/search/${titulo}?size=${limit}&page=${paginaAtual}`);
};

export const registerEvento = data => {
    return http.post("/api/evento", data);
};

export const updateEvento = (id, data) => {
    return http.put(`/api/evento/${id}`, data);
};

export const removeEvento = id => {
    return http.delete(`/api/evento/${id}`);
};
  

    