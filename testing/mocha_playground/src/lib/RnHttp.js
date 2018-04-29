var
  cdm = {},
  cs  = {},
  fs  = {},
  fe  = {},
  ms  = {};

cdm.onboard_user = function (client_id, ccid) {
  console.log("implement cdm.onboard_user: client_id = " + client_id + ", ccid = " + ccid);
  return "cool beans";
}


module.exports = {
  "cdm": cdm,
  "cs":  cs,
  "fs":  fs,
  "fe":  fe,
  "ms":  ms
};
