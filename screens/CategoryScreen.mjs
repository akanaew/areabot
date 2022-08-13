import {Scenes} from "telegraf";
import CategoryService from "../core/service/CategoryService.mjs";

const CategoryScreen = new Scenes.BaseScene('CategoryScreen');
const categoryService = new CategoryService();

CategoryScreen.enter(async (ctx) => {
    const categories = await categoryService.getCategories();
    const buttons = [];
    let tempButtons = [];

    categories.map()
});

export default CategoryScreen;