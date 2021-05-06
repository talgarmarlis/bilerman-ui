// eslint-disable-next-line import/no-extraneous-dependencies
const Deploy = require('ftp-deploy');

const ftpDeploy = new Deploy();

const config = {
  host : "45.9.190.155",
  user : "root",
  password : "H2C-2pZ-Rbe-pPQ",
  port: 22,
  localRoot: "/Users/talguulu/Personal/Projects/bilerman-ui/build",
  remoteRoot: "/var/www/html",
  include: ['*'],
  deleteRemote: true,
  sftp: true
}
ftpDeploy.deploy(config, function(err, res) {
  if (err) console.log(err)
  else console.log('finished:', res);
});
ftpDeploy.on("uploading", function(data) {
  // data.totalFilesCount;
  // data.transferredFileCount;
  data.filename;
});
ftpDeploy.on("uploaded", function(data) {
  console.log(data);
});
ftpDeploy.on("log", function(data) {
  console.log(data);
});
ftpDeploy.on("upload-error", function(data) {
  console.log(data.err);
});
