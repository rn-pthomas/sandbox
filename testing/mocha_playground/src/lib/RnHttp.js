var
  http           = require("http"),
  servicesClient = require("./ServicesClient.js"),
  cdm            = {},
  cs             = {},
  fs             = {},
  fe             = {},
  ms             = {};

var callApi = function(serviceName, functionName, params) {
  return servicesClient.call(serviceName, functionName, params);
};

var callCdmInternal = function(functionName, params) {
  return servicesClient.call("cdm_internal", functionName, params);
};

cdm.onboardUser = function (client_id, ccid) {
  callCdmInternal("onboard-user", {
    "client_id": client_id,
    "ccid": ccid
  });
  console.log("implement cdm.onboard_user: client_id = " + client_id + ", ccid = " + ccid);
  return "cool beans";
};


module.exports = {
  "cdm": cdm,
  "cs":  cs,
  "fs":  fs,
  "fe":  fe,
  "ms":  ms
};
