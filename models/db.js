const settings = require('../settings');
const mongo = require('mongodb');

const Db = mongo.Db;
const Connection = mongo.Connection;
const Server = mongo.Server;

module.exports = new Db(settings.db,new Server(settings.host,settings.port),{safe: true})

