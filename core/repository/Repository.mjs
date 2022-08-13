import postgres from '../db/postgres.mjs';

class Repository {
  constructor() {
    this.db = postgres;
  }
}

export default Repository;
