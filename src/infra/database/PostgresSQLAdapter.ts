import Connection from "./Connection";
import pgp from "pg-promise";

export default class PostgresSQLAdapter implements Connection {
    connection: any;

    constructor() {
        this.connection = pgp()("postgres://root:root@localhost:5432/postgres");
    }

    query(statements: string, params: any): Promise<any> {
        return this.connection.query(statements, params);
    }
    
    one(statements: string, params: any): Promise<any> {
       return this.connection.one(statements, params);
    }

    close(): Promise<void> {
       return this.connection.$pool.end();
    }
}