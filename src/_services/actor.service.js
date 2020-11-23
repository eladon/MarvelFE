import axios from 'axios';
const url = 'https://immense-hamlet-61107.herokuapp.com/actors';

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
