const axios = require('axios')

export function getCooperationIcon() {
  let url = `json/section_8_cooperation.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
