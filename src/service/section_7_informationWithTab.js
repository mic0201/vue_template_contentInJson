const axios = require('axios')

export function getInformationWithTab() {
  let url = `json/section_7_information-with-tab.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
