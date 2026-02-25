import database from "infra/database.js";

async function status(request, response) {
  // response.status(200).send("Deu certo!");
  // console.log(database);
  // const result = await database.query("SELECT 1 + 1 as sum;");
  // console.log(result.rows);
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnectionsResult = await database.query(
    "SHOW max_connections;",
  );
  const databaseMaxConnectionsValue =
    databaseMaxConnectionsResult.rows[0].max_connections;

  //const databaseName = request.query.databaseName;
  const databaseName = process.env.POSTGRES_DB;
  // console.log(`Banco de dados selecionados: ${databaseName}`);
  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  // const databaseOpenedConnectionsResult = await database.query("SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db' AND state = 'active';");
  // const databaseOpenedConnectionsResult = await database.query("SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db' AND state = '';");
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  //console.log(databaseOpenedConnectionsValue);

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
  });
}

export default status;
