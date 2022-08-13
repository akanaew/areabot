import {Markup, Scenes} from "telegraf";
import CategoryService from "../core/service/CategoryService.mjs";
import ClientService from "../core/service/ClientService.mjs";

const CategoryScreen = new Scenes.BaseScene('CategoryScreen');
const categoryService = new CategoryService();
const clientService = new ClientService();

CategoryScreen.enter(async (ctx) => {
    const categories = await categoryService.getCategories();
    let message = ``;
    const buttons = [];
    let tempButtons = [];
    const isClient = clientService.checkClient(ctx.from.id);
    if (isClient) {}
    categories.map((item, index) => {
        message += `⚪ <b>${item.name}:</b> ${item.description}\n\n`;

        if (index % 2) {
            tempButtons.push(Markup.button.callback('⚪ ' + item.name, `${item.id}`))
            buttons.push(tempButtons);
            tempButtons = [];
        } else {
            tempButtons.push(Markup.button.callback('⚪ ' + item.name, `${item.id}`))
        }
    });
    buttons.push([Markup.button.callback('🔙 Назад', 'back')])
    await ctx.replyWithHTML(message, Markup.inlineKeyboard(buttons));
});

CategoryScreen.on('callback_query', async (ctx) => {
    if (ctx.update.callback_query.data === 'back') {
        return 0;
    }
});

// 🟢

export default CategoryScreen;
