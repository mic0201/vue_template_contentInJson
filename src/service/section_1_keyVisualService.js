const axios = require('axios')

export function getKeyVisual() {
  let url = `json/section_1_key-visual.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
