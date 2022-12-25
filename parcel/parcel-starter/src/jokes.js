import axios from 'axios';

export const jokes = {
  getOne: function() {
    return new Promise((resolve, reject) => {
      axios.get('http://api.icndb.com/jokes/random')
        .then(res => {
          resolve(res.data.value.joke);
        })
    })
  }
}