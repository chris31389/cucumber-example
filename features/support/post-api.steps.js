// features/support/post-api.steps.js
const { Given, When, Then } = require('cucumber')
const assert = require('assert');
const request = require('request');

Given('a post id of {int}', function (input) {
    id = input;
});

When('I get a single post', function (callback) {
    request.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (err, response, body) => {
        if (err) {
            callback(err);
        }
        else {
            apiResponse = response;
            callback();
        }
    })
})

Then('it is successful', function () {
    isSuccess = apiResponse.statusCode >= 200 && apiResponse.statusCode < 300;
    assert.equal(isSuccess, true);
});