import http from './api.js';

export const getAll = (limit, paginaAtual) => {
    return http.get(`/api/grupo?sort=id,desc&size=${limit}&page=${paginaAtual}`);
};

export const getAllSelect = () => {
    return http.get(`/api/grupo?sort=id,desc`);
};

export const getGroupById = (id) => {
    return http.get(`/api/grupo/${id}`)
}

export const getTopGroup = () => {
    return http.get("/api/grupo/top");
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

export const registerLeader = (idGrupo, idLider) => {
    return http.post(`/api/grupo/${idGrupo}/lider/${idLider}`);
};

export const registerMember = (idGrupo, idMembro) => {
    return http.post(`/api/grupo/${idGrupo}/membro/${idMembro}`);
};

export const registerCity = (idGrupo, idCidade) => {
    return http.post(`/api/grupo/${idGrupo}/cidade/${idCidade}`);
};

export const updateVotacao = (id) => {
    return http.put(`/api/grupo/votar/${id}`);
};

export const removeLeader = (idGrupo, idLider) => {
    return http.delete(`/api/grupo/${idGrupo}/lider/${idLider}`);
};

export const removeMember = (idGrupo, idMembro) => {
    return http.delete(`/api/grupo/${idGrupo}/membro/${idMembro}`);
};

export const removeCity = (idGrupo, idCidade) => {
    return http.delete(`/api/grupo/${idGrupo}/cidade/${idCidade}`);
};
  
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll
}