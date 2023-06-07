import { Command, ChatInputCommand } from "@sapphire/framework";
import { spoitfyApi } from "../lib/SpotifyClient";
import { EmbedBuilder } from "discord.js";

export class PauseCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: "unpause",
      description: "Unpause Alexander's Spotify!",
    });
  }

  public override registerApplicationCommands(
    registry: ChatInputCommand.Registry
  ) {
    registry.registerChatInputCommand((builder) =>
      builder.setName(this.name).setDescription(this.description)
    );
  }

  public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
    if (interaction.user.id == "988801425196867644") return interaction.reply({ content: "You can't unpause your own music dummy!", ephemeral: true })
    const user = this.container.client.users.cache.get("988801425196867644");
    await spoitfyApi
      .play()
      .then(() => {
        user?.send({
          embeds: [
            new EmbedBuilder()
              .setDescription(
                "Someone has unpaused your music! Enjoy your music once again!"
              )
              .setColor("Purple"),
          ],
        });

        return interaction.reply({ content: `I've successfully unpasued Alexander's music, he's probably confused af rn`, ephemeral: true })
      })
      .catch(() => {
        return interaction.reply({
          content: "He's not listening to music right now dummy",
          ephemeral: true,
        });
      });
  }
}
