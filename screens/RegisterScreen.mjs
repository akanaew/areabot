import {Markup, Scenes} from "telegraf";

const RegisterScreen = new Scenes.BaseScene('RegisterScreen');

RegisterScreen.enter(async (ctx) => {
    await ctx.replyWithHTML(`Для начала тебе необходимо выбрать категории в которых ты хочешь получать свыежие заказы 24/7`,
        Markup.inlineKeyboard([
            Markup.button.callback('Выбрать категорию', 'change_category')
        ]));
});

RegisterScreen.on('callback_query', async (ctx) => {
    await ctx.scene.enter('CategoryScreen');
});

export default RegisterScreen;