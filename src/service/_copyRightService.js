const axios = require('axios')

export function getCopyRight() {
  let url = `json/copy-right.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
