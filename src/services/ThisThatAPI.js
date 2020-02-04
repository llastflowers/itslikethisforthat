export const getThisThat = () => {
  return fetch('https://cors-anywhere.herokuapp.com/http://itsthisforthat.com/api.php?json')
    .then(res => res.json());
};
