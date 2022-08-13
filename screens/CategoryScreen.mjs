import {Markup, Scenes} from "telegraf";
import CategoryService from "../core/service/CategoryService.mjs";

const CategoryScreen = new Scenes.BaseScene('CategoryScreen');
const categoryService = new CategoryService();

CategoryScreen.enter(async (ctx) => {
    const categories = await categoryService.getCategories();
    let message = ``;
    const buttons = [];
    let tempButtons = [];

    categories.map((item, index) => {
        message += `⚪ <b>${item.name}:</b> ${item.description}\n\n`;

        if (index % 2) {
            tempButtons.push(Markup.button.callback('⚪ ' + item.name, `${index.id}`))
            buttons.push(tempButtons);
            tempButtons = [];
        } else {
            tempButtons.push(Markup.button.callback('⚪ ' + item.name, `${index.id}`))
        }
    });

    await ctx.replyWithHTML(message, Markup.inlineKeyboard(buttons));
});

// 🟢

export default CategoryScreen;