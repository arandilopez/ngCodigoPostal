# ngCodigoPostal

Servicio de angular para obtener informacion sobre: colonias, municipio y estado de un codigo postal. **Sólo aplica para la República Mexicana**

## Instalación

**Bower**
```
bower install --save ngcodigopostal
```

**NPM**
```
npm install --save ngcodigopostal
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
    $scope.estado = response.estado;
    $scope.municipio = response.municipio;
  });

}]);
```
## ¿Cómo funciona?
Simplemente hace una peticion con el dato del codigo postal a un servicio web publico soportado por [789.mx](http://789.mx) a http://sepomex.789.mx

## Licencia

Ver el archivo [Licencia](LICENSE.md)
