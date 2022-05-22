const {TwitterApi} = require("twitter-api-v2");

var client = new TwitterApi({
    appKey:"Y9PLCb9mKzymjhbDDut4B3WXh",
    appSecret: "vcM14eh3dSCfl5ndb3GpzTMWeHN9I6Z9qh0RgjmFyZ9H8pIJOs",
    accessToken: "1528431358011400193-ByBfccXmrwzKAN9JvvHXwffqRZ4rVy",
    accessSecret: "rBccjhN6PHRC52WAWOjcx0kKZXjkgE51yDgRSrZlm5O4e"
});

const rwClient = client.readWrite;

module.exports = rwClient;