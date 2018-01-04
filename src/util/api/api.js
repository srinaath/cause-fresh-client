export function api(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then((response) => {
      // TODO: Error handling!
      if (response.status === 200) {
        resolve(response.data);
      }
    })

    // THROW 500 ERROR
    .catch((err) => {
      reject('error');
    });
  });
}
