import ClientRepository from "../repository/ClientRepository.mjs";

class ClientService {
    constructor() {
        this.clientRepository = new ClientRepository();
    }

    async checkClient(telegram_id) {
        const result = await this.clientRepository.getClient(telegram_id);
        return result !== undefined;
    }
}

export default ClientService;