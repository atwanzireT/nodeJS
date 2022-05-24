const { response } = require('express');
var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        hello : String,
    }
`);

var rootvalue = { hello : () => "Hello World !"};
var source = '{hello }';

graphql({schema, source, rootvalue}).then((response) => {
    console.log(response);
})

