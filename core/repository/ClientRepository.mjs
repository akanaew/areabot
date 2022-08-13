import Repository from './Repository.mjs';

class ClientRepository extends Repository {
	async getClient(telegram_id) {
		const result = await this.db.query(`SELECT * FROM clients WHERE telegram_id = ${telegram_id} LIMIT 1`);
		return result.rows[0];
	}
}

export default ClientRepository;
