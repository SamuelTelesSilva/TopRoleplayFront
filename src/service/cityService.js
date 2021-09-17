import http from './api.js';

export const getAll = (limit, paginaAtual) => {
    return http.get(`/api/cidade?sort=id,desc&size=${limit}&page=${paginaAtual}`);
};

export const getAllSelect = () => {
    return http.get(`/api/cidade?sort=id,desc`);
};

export const getAllSelectCity = () => {
    return http.get(`/api/cidade?sort=id,desc`);
};

export const getCityById = (id) => {
    return http.get(`/api/cidade/${id}`)
}

export const searchByName = (limit, paginaAtual, name) => {
    return http.get(`/api/cidade/search/${name}?size=${limit}&page=${paginaAtual}`);
};

export const registerCity = data => {
    return http.post("/api/cidade", data);
};

export const updateCity = (id, data) => {
    return http.put(`/api/cidade/${id}`, data);
};

export const updateVotacao = (id) => {
    return http.put(`/api/cidade/votar/${id}`);
};

export const remove = id => {
    return http.delete(`/api/cidade/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll
}
  