module.exports = function (context, req) {
    var axios = require("axios");
    var eyebleachJsonUrl = "https://www.reddit.com/r/eyebleach.json";
    axios.get(eyebleachJsonUrl).then(function (results) {
        context.log(" >> Puppies acquired");
        context.res = {
            body: results.data.data.children[6].data.url
        }
        return context.done();
    });
}