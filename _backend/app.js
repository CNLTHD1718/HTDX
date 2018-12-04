const express = require('express'),
    jwt = require('jsonwebtoken'),
    config = require('./fn/config'),
    PORT = process.env.PORT || 1234;



var AuthRepo = require('./repo/authRepos');