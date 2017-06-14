/**
 * Created by linfeiyang on 6/14/17.
 */
var FormData = require('form-data');
var fs = require('fs');

var fetch = require('node-fetch');

exports.upload = function(filename, callback) {
    var form = new FormData();
    form.append('image', fs.createReadStream(filename));
    fetch('http://minio.fastqiu.com/upload', {method: 'POST', body: form}).then(function(res) {
        return res.json();
    }).then(function(json) {
        var orgUrl = json.data.url;
        fetch('http://api.t.sina.com.cn/short_url/shorten.json?source=3271760578&url_long=' + orgUrl).
            then(function(res) {return res.json()}).then(function(json) {
                callback(null, json[0].url_short);
        }).catch(function(err){callback(err)});
    }).catch(function(err) {
        callback(err);
    });
};


