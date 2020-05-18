export const apiCall = (link) =>
  fetch('https://cors-anywhere.herokuapp.com/' + link).then(response => response.json())
