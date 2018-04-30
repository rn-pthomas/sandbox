var
  request = require("sync-request"),
  _ = require("lodash");

var config = {
  "defaultDiscoveryUrlBase": "http://localhost:8500/v1",
  "defaultKvServiceConfigPath": "/kv/relay/internal/services"
};

var clientGet = function (url) {
  var fullUrl = config.defaultDiscoveryUrlBase + url;
  var resp = request("GET", fullUrl);
  return resp;
};

var kvGet = function (serviceId, k) {
  return clientGet(config.defaultKvServiceConfigPath + "/" + serviceId + "/" + k);
};

var listServices = function () {
  var serviceList = clientGet("/agent/services");
  return serviceList;
};

var getService = function (serviceId) {
  var theServices = JSON.parse(listServices().getBody("utf8"));
  var theService = theServices.serviceId;
  return theService;
};

var getServiceConfig = function (serviceId) {
  return kvGet(serviceId, "config?raw");
};

var getServiceRoutes = function (serviceId) {
  return kvGet(serviceId, "routes?raw");
};

var serviceInfo = function (serviceId) {
  var service = getService(serviceId);
  var serviceConfig = getServiceConfig(serviceId);
  var routes = getServiceRoutes(serviceId);
  return {
    "service": service,
    "serviceConfig": serviceConfig,
    "routes": routes
  };
};

var call = function (serviceId, functionName, params) {
  var info = serviceInfo(serviceId);
  console.log("info: " + JSON.stringify(info));
};

module.exports = {
  "call": call
};
