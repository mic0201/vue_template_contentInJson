const axios = require('axios')

export function getArticleWithAction_9() {
  let url = `json/section_9_article-with-action.json`

  let getArticleWithAction = new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })

  return Promise.all([
    getArticleWithAction,
    getIcon1(),
    getIcon2(),
    getBtnIcon()
  ]).then(response => {
    return response
  }).catch(error => {
    console.log(error)
  })

}

function getIcon1() {
  let url = `img/section_9_article-with-action/square.svg`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}

function getIcon2() {
  let url = `img/section_9_article-with-action/users.svg`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}

function getBtnIcon() {
  let url = `img/section_9_article-with-action/users.svg`
  return new Promise(resolve => {
    axios.get(url)
      .then(response => resolve(response))
      .catch(error => resolve(error))
  })
}
