var tumblr = require('tumblr.js');
var client = tumblr.createClient({ consumer_key: 'fSxx33v5AGV8SoRJUDi5l8RCIiWob4rFHjwrI29NtNpEmubuQD' });

export default function handler(req, res) {
  // Make the request
  client.blogPosts('wolfisakionwheels.tumblr.com', { limit: 200 }, function (err, data) {
    res.status(200).json(data)
  });

}



