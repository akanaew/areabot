import dotenv from 'dotenv';
import {Telegraf, Scenes} from 'telegraf';
import LocalSession from 'telegraf-session-local';
import ClientService from "./core/service/ClientService.mjs";
import RegisterScreen from "./screens/RegisterScreen.mjs";
import CategoryScreen from "./screens/CategoryScreen.mjs";

dotenv.config();

const TOKEN = process.env.BOT_TOKEN || '';

const bot = new Telegraf(TOKEN);
const session = new LocalSession({database: './session.json'});
const stage = new Scenes.Stage([RegisterScreen, CategoryScreen]);
const clientService = new ClientService();

bot.use(session.middleware());
bot.use(stage.middleware());

bot.start(async (ctx) => {
  const isClient = await clientService.checkClient(ctx.from.id);
  if (isClient) {
    return await ctx.reply("Hello");
  }

  return await ctx.scene.enter('RegisterScreen');
});

(async () => {
  await bot.launch();
})();
