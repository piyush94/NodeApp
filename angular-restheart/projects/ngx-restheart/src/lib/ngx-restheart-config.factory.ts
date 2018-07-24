import * as _ from 'lodash';

export function RhLogicFactory(restangular, restheart, localStorageService) {
  const obj = restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setFullResponse(true);

    let logicBaseUrl = restheart.getLogicBaseUrl();
    // console.log('logicBaseUrl', logicBaseUrl);

    if (!_.isUndefined(logicBaseUrl) && logicBaseUrl !== null) {
      localStorageService.set('rh_logicBaseUrl', logicBaseUrl);
      RestangularConfigurer.setBaseUrl(logicBaseUrl);
    } else if (!_.isUndefined(localStorageService.get('rh_logicBaseUrl'))) {
      logicBaseUrl = localStorageService.get('rh_logicBaseUrl');
      RestangularConfigurer.setBaseUrl(logicBaseUrl);
    } else {
      throw "RhLogic ERROR: logicBaseUrl not found with localStorageService.get('rh_logicBaseUrl')";
    }

    // RestangularConfigurer.setErrorInterceptor(function (response, deferred, responseHandler) {
    //   var f = handleUnauthenticated(response);
    //   var ne = handleNetworkError(response);
    // });

    // function handleUnauthenticated(response) {
    //   if (response.status === 401) {
    //     localStorageService.set('rh_autherror', {
    //       'why': 'not_authenticated',
    //       "path": $location.path(),
    //       "state": $state.current.name,
    //       "params": $stateParams
    //     });
    //     // call configured call back, if any
    //     if (angular.isFunction(restheart.onUnauthenticated)) {
    //       restheart.onUnauthenticated($location, $state);
    //     }
    //   }
    // }

    // function handleNetworkError(response) {
    //   if (response.status === -1) {
    //     localStorageService.set('rh_networkError', {
    //       'why': 'network_error',
    //       "path": $location.path(),
    //       "state": $state.current.name,
    //       "params": $stateParams
    //     });
    //     // call configured call back, if any
    //     if (angular.isFunction(restheart.onNetworkError)) {
    //       restheart.onNetworkError($location, $state);
    //     }
    //   }
    // }
  });
  return obj;
}

export function RestheartConfig(RestangularProvider) {

  RestangularProvider.setRestangularFields({
    id: '_id.$oid' ? '_id.$oid' : '_id',
    etag: '_etag.$oid',
    selfLink: '_links[\'self\'].href'
  });

  RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
    let extractedData = [];
    if (operation === 'getList') {

      if (!_.isUndefined(data._embedded)) {
        if (_.isArray(data._embedded)) {
          // plain json representation format
          extractedData = data._embedded;
        } else {
          // hal representation format
          data._embedded.forEach(([key, value]) => {
            if (key.lastIndexOf('rh:', 0) === 0 && key !== 'rh:warnings') {
              extractedData = _.union(extractedData, value);
            }
          });
        }

        // warnings in hal format
        if (!_.isUndefined(data._embedded['rh:warnings'])) {
          extractedData['_warnings'] = data._embedded['rh:warnings'];
        }

        // warnings in pain json format
        if (!_.isUndefined(data._warnings)) {
          extractedData['_warnings'] = data._warnings;
        }
      }

      for (const propertyName in data) {
        extractedData[propertyName] = data[propertyName];
      }
    } else {
      extractedData = data;
    }

    return extractedData;
  });
  RestangularProvider.setDefaultHeaders({
    'Accept': 'application/hal+json',
    'Content-Type': 'application/json',
    'No-Auth-Challenge': 'true'
  });
}
