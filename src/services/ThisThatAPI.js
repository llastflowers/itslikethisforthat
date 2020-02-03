export const getThisThat = () => {
  return fetch('http://itsthisforthat.com/api.php?json')

    .then(res => res.json());
};
