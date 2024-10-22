import http from './api.js';

export const getAll = (limit, paginaAtual) => {
    return http.get(`/api/post?sort=id,desc&size=${limit}&page=${paginaAtual}`);
};

export const efetuarLogin = data => {
    return http.post("/api/login", data);
};

export const criarUsuario = data => {
    return http.post("/api/usuarios", data);
};

export const updateUser = (id, data) => {
    return http.put(`/api/usuarios/${id}`, data);
};

export const remove = id => {
    return http.delete(`/contatos/${id}`);
};
  