import http from './api.js';

export const getAll = (limit, paginaAtual) => {
    return http.get(`/api/streamer?size=${limit}&page=${paginaAtual}&sort=id,desc`);
};

export const getAllSelect = () => {
    return http.get(`/api/streamer?sort=id,desc`);
};

export const getTopStreamers = () => {
    return http.get("/api/streamer/top");
};

export const getStreamerById = (id) => {
    return http.get(`/api/streamer/${id}`)
}

export const searchByName = (limit, paginaAtual, name) => {
    return http.get(`/api/streamer/search/${name}?size=${limit}&page=${paginaAtual}`);
};

export const registerStreamer = data => {
    return http.post("/api/streamer", data);
};

export const registerAssociationStreamer = (idCidade, idStreamer) => {
    return http.post(`/api/streamer/cidadeid/${idCidade}/streamerid/${idStreamer}`);
};

export const updateStreamer = (id, data) => {
    return http.put(`/api/streamer/${id}`, data);
};

export const updateVotacao = (id) => {
    return http.put(`/api/streamer/votar/${id}`);
};

export const updateStreamerAssociation = (idNewCity, idCurrentStreamer, idCurrentCity) => {
    return http.put(`/api/streamer/newcity/${idNewCity}/newstreamer/${idCurrentStreamer}/cidade/${idCurrentCity}/streamer/${idCurrentStreamer}`);
};

export const remove = id => {
    return http.delete(`/api/streamer/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll
}
  