const axios = require('axios')

export function getArticleWithList_3() {
  let url = `json/section_3_article-with-list.json`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
