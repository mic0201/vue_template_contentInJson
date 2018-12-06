const axios = require('axios')

export function getArticleWithList_4() {
  let url = `json/section_4_article-with-list.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
