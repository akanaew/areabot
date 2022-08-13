import Repository from "./Repository.mjs";

class CategoryRepository extends Repository {
    async getCategories() {
        const result = await this.db.query(`SELECT * FROM categories`);

        return result.rows;
    }
}

export default CategoryRepository;