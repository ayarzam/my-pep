'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "works", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2020-07-18T05:40:56.056Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
        fn: "createTable",
        params: [
            "works",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "project_title": {
                    "type": Sequelize.STRING,
                    "field": "project_title",
                    "allowNull": false
                },
                "role": {
                    "type": Sequelize.ARRAY(Sequelize.STRING),
                    "field": "role",
                    "allowNull": false
                },
                "team": {
                    "type": Sequelize.STRING,
                    "field": "team"
                },
                "description": {
                    "type": Sequelize.STRING,
                    "field": "description",
                    "allowNull": false
                },
                "frontend_technologies": {
                    "type": Sequelize.ARRAY(Sequelize.STRING),
                    "field": "frontend_technologies",
                    "allowNull": true
                },
                "backend_technologies": {
                    "type": Sequelize.ARRAY(Sequelize.STRING),
                    "field": "backend_technologies",
                    "allowNull": true
                },
                "testing_suite": {
                    "type": Sequelize.ARRAY(Sequelize.STRING),
                    "field": "testing_suite",
                    "allowNull": true
                },
                "img": {
                    "type": Sequelize.STRING,
                    "field": "img",
                    "allowNull": false
                },
                "github": {
                    "type": Sequelize.STRING,
                    "field": "github",
                    "allowNull": false
                },
                "deployed": {
                    "type": Sequelize.STRING,
                    "field": "deployed"
                },
                "duration": {
                    "type": Sequelize.STRING,
                    "field": "duration",
                    "allowNull": false
                },
                "long_description": {
                    "type": Sequelize.STRING(1234),
                    "field": "long_description",
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {
                "transaction": transaction
            }
        ]
    }];
};
var rollbackCommands = function(transaction) {
    return [{
        fn: "dropTable",
        params: ["works", {
            transaction: transaction
        }]
    }];
};

module.exports = {
    pos: 0,
    useTransaction: true,
    execute: function(queryInterface, Sequelize, _commands)
    {
        var index = this.pos;
        function run(transaction) {
            const commands = _commands(transaction);
            return new Promise(function(resolve, reject) {
                function next() {
                    if (index < commands.length)
                    {
                        let command = commands[index];
                        console.log("[#"+index+"] execute: " + command.fn);
                        index++;
                        queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                    }
                    else
                        resolve();
                }
                next();
            });
        }
        if (this.useTransaction) {
            return queryInterface.sequelize.transaction(run);
        } else {
            return run(null);
        }
    },
    up: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, migrationCommands);
    },
    down: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, rollbackCommands);
    },
    info: info
};
