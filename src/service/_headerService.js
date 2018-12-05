const axios = require('axios')

export function getHeader() {
  let url = `json/header.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
