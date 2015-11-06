# ngCodigoPostal

Servicio de angular para obtener informacion sobre: colonias, municipio y estado de un codigo postal. **Sólo aplica para la República Mexicana**

## Instalación

**Bower**
```
bower install --save ngcodigopostal
```

**Instalación**
```
<script src="/path/to/codigopostal.js"></script>
```

## Uso

1. Añadir la dependencia al nuestra aplicación

```javascript

var app = angular.module('app', ['ngCodigoPostal']);

```

2. Usar el Servicio de codigoPostal en nuestro controlador

```javascript
app.controller(['$scope', 'codigoPostal', function ($scope, codigoPostal) {

  codigoPostal.get('97000').then(function (response) {
    $scope.colonias = response.asentamientos;
    $scope.estado = response.estados[0];
    $scope.municipio = response.municipios[0];
  });

}]);
```
> Asentamientos son colonias.

## ¿Cómo funciona?
Simplemente hace una peticion con el dato del codigo postal a un servicio web publico soportado por (#ThanksTo) [789.mx](http://789.mx) en http://sepomex.789.mx

### Respuesta de ejemplo:

```json
{
  "cp": "97000",
  "asentamientos": [
    "La Quinta",
    "Los Cocos",
    "Privada Garcia Gineres C - 29",
    "Jardines de San Sebastian",
    "Privada Del Maestro",
    "Merida Centro"
  ],
  "estados": [
    "Yucatán"
  ],
  "municipios": [
    "Mérida"
  ]
}
```

## Licencia

MIT
