/**
 * Created by linfeiyang on 6/14/17.
 */
var upload = require('../index');

upload.upload('./a.png', function(err, result) {
    console.log(err);
    console.log(result);
});