import Vue from 'vue'

const posts = async () => {
  let v = new Vue();

  return new Promise((res) => {
    v.$prismic.client.query(
    v.$prismic.Predicates.at('document.type', 'basic_advertorial'))
      .then(data => {
        res(data);
      }).catch(error => {
        console.log('Error occured in routes file', error)
    })
  });
}

const pages = async () => {
  let v = new Vue();

  return new Promise((res) => {
    v.$prismic.client.query(
    v.$prismic.Predicates.at('document.type', 'pages'))
      .then(data => {
        res(data);
      }).catch(error => {
        console.log('Error occured in routes file', error)
    })
  });
}

export { posts, pages };