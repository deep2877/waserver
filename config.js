var config = {
	debug: false,
	database: {
	    connectionLimit: 500,
	    host: "45.113.122.95",
	    user: "growtyll_waapp",
	    password: "9FHvn3Nr7VnaP",
	    database: "growtyll_waapp",
	    charset : "utf8mb4",
	    debug: false,
	    waitForConnections: true,
	    multipleStatements: true
	},
	cors: {
		origin: '*',
 		optionsSuccessStatus: 200
	}
}

module.exports = config; 