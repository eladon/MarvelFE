import axios from 'axios';
const url = 'http://localhost:4000/actors';

export const actorService = {
  getActorsData,
};

function getActorsData(actor) {
  const body = {
    actorsName: actor,
  };
  return axios
    .post(url, body)
    .then(data => data.data)
    .catch(err => err);
}
