import http from './api.js';

export const getAll = (limit, paginaAtual) => {
    return http.get(`/api/playervideo?sort=id,desc&size=${limit}&page=${paginaAtual}`);
};

export const getAllSelect = () => {
    return http.get(`/api/playervideo?sort=id,desc`);
};

export const getEventoById = (id) => {
    return http.get(`/api/playervideo/${id}`)
}

export const searchByTitle = (limit, paginaAtual, titulo) => {
    return http.get(`/api/playervideo/search/${titulo}?size=${limit}&page=${paginaAtual}`);
};

export const registerEvento = data => {
    return http.post("/api/playervideo", data);
};

export const updateEvento = (id, data) => {
    return http.put(`/api/playervideo/${id}`, data);
};

export const removeEvento = id => {
    return http.delete(`/api/playervideo/${id}`);
};
  

    