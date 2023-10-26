// Import the pg (node-postgres) library
import pg from "pg";

// Retrieve the database connection string from environment variables
//const connectionString = process.env.DATABASE_URL;
const connectionString =
  "postgres://tryfeacd:Gdnu52n15U5d-zkIo7bl_IVCTqAYNe51@tyke.db.elephantsql.com/tryfeacd";

// Check if the connection string is not defined, and if so, throw an error
if (!connectionString) {
  throw new Error(
    "No DB_CONNECTION_STRING defined. Did you load in your env variables?"
  );
}

// Export a new instance of pg.Pool, which will be used to interact with the PostgreSQL database
export const pool = new pg.Pool({
  // Pass the connection string to the pool, so it knows how to connect to your database
  connectionString,
});
