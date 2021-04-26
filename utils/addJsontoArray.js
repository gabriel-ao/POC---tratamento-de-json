exports.addJsonToArray = function (jsonToArray) {
  let conversor = [jsonToArray].map(function (obj) {
    return Object.keys(obj).map(function (chave) {
      return {
        key: chave,
        value: obj[chave],
      };
    });
  });

  let newEntry = { entry: conversor[0] };

  return newEntry;
};
