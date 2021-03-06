(function () {
  'use strict';

  angular
    .module('ngCodigoPostal', [])
    .constant('cpApi','http://sepomex.789.mx/')
    .factory('codigoPostal', codigoPostal);

  codigoPostal.$inject = ['$http', 'cpApi', '$q'];

  /**
   * Factory codigoPostal
   * @param  $http
   * @param  cpApi
   * @param  $q
   * @constructor
   */
  function codigoPostal($http, cpApi, $q) {
    var service = {
      get: get
    };

    return service;

    /**
     * Get response from sepomex.789.mx webservice about
     * zipcode
     * @name get
     * @param  {string} codigo_postal
     * @returns {Promise}
     */
    function get(codigo_postal) {
      var regexCP = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
      return $q(function (resolve, reject) {
        if (regexCP.test(codigo_postal)) {
          $http.get(cpApi + codigo_postal).then(function (response) {
            resolve(response.data);
          }, function (response) {
            reject(response.data);
          });
        } else {
          reject(new Error('Código postal no válido'));
        }
      });
    }
  }
})();
