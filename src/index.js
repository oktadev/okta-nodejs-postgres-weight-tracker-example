"use strict";

const dotenv = require( "dotenv" );
const Hapi = require( "@hapi/hapi" );
const routes = require( "./routes" );
const plugins = require( "./plugins" );


// const createServer = require( "./server" ).createServer;

const createServer = async () => {
	const server =Hapi.server({
	port: process.env.PORT || 8080,
	host: process.env.HOST || "localhost"
 });
 	// server.register(plugins);
 	await plugins.register(server);

	server.route(routes);
	return server;
	// dotenv.config();
	// const config = {
	// 	port: process.env.PORT || 8080,//Elina edit from 3000 to 8080
	// 	host: process.env.HOST || "localhost"
	// };
	// const server = await createServer( config );
	// await server.start();
	// console.log( "Server running on %s", server.info.uri );
};

 const init = async () =>
{
	dotenv.config();
	const server =await createServer();
	await server.start();
	console.log("Server running on %s", server.info.uri );

};



process.on( "unhandledRejection", ( err ) => {
	console.log( err );
	process.exit( 1 );
} );

init();



// "use strict";

// const dotenv = require( "dotenv" );
// const createServer = require( "./server" ).createServer;

// const init = async () => {
// 	dotenv.config();
// 	const config = {
// 		port: process.env.PORT || 8080,//My edit from 3000 to 8080
// 		host: process.env.HOST || "localhost"
// 	};
// 	const server = await createServer( config );
// 	await server.start();
// 	console.log( "Server running on %s", server.info.uri );
// };

// process.on( "unhandledRejection", ( err ) => {
// 	console.log( err );
// 	process.exit( 1 );
// } );

// init();
