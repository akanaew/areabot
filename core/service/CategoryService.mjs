import CategoryRepository from "../repository/CategoryRepository.mjs";

class CategoryService {
    constructor() {
        this.categoryRepository = new CategoryRepository();
    }

    async getCategories() {
        return await this.categoryRepository.getCategories();
    }
}

export default CategoryService;