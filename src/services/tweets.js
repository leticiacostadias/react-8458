export function criaTweet({ token, conteudo }) {
  return fetch(`https://api-twitelum.herokuapp.com/tweets?X-AUTH-TOKEN=${token}`, {
    method: 'POST',
    body: JSON.stringify({ conteudo })
  }).then(response => response.json());
}

export function listaTweets(token) {
  return fetch(`https://api-twitelum.herokuapp.com/tweets?X-AUTH-TOKEN=${token}`)
    .then(response => response.json());
    // .then(data => {
    //   console.log(data);

    //   return data;
    // });
}

export function curtirTweet({ token, tweetId }) {
  return fetch(`https://api-twitelum.herokuapp.com/tweets/${tweetId}/like?X-AUTH-TOKEN=${token}`, {
    method: 'POST'
  }).then(response => response.json());
  // }).then(response => { return response.json(); });
}
