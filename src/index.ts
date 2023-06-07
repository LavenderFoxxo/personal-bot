// @ts-nocheck
import { config } from "dotenv";
import { SapphireClient } from "@sapphire/framework";
import { GatewayIntentBits } from "discord.js";
import "@sapphire/plugin-api/register";
import { CronJob } from "cron";
import { sendTipofDay } from "./lib/DailyTip";

config();

const client = new SapphireClient({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.Guilds,
  ],
  api: {
    automaticallyConnect: true,
    origin: "*",
    prefix: "",
    listenOptions: {
      port: process.env.PORT,
    },
  },
});

const cronJob = new CronJob("0 0 */1 * *", () => sendTipofDay(client));

(async () => {
  try {
    await client.login();
    cronJob.start();
  } catch (err) {
    client.logger.fatal(err);
    process.exit(1);
  }
})();
