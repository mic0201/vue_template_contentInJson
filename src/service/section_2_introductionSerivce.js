const axios = require('axios')

export function getIntroduction_2() {
  let url = `json/section_2_introduction.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
