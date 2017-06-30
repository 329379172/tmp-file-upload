

### 临时文件上传

npm install tmp-file-upload

```
var upload = require('tmp-file-upload');

upload.upload('./a.png', function(err, result) {
    console.log(err);
    console.log(result);
});
```

注:上传的文件非永久保存！！！
