
let s3Client = new AWS.S3({
  endpoint: 'http://127.0.0.1:9000',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
  accessKeyId: '93ZPAX4LPYK1E8PEB3Z1',
  secretAccessKey: 'BkvLejlOI+wEAlEO+Z51fOlzIjD8rkSex1L+slb+'
});

button = document.getElementById('submitBtn')
file = document.getElementById('fileBtn')
console.log(file.name)
console.log(file)

button.addEventListener('click', function (event) {
  s3Client.putObject({
    Bucket: 'images',
    Key: file.files[0].name,
    Body: file.files[0],
    ContentLength: file.files[0].size,
    ContentType: file.files[0].type
  }, function (err, data) {
    console.log(err, data);
  });
});
