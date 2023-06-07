import { Command, ChatInputCommand } from "@sapphire/framework";
import { spoitfyApi } from "../lib/SpotifyClient";

export class LoginCommand extends Command {
  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: "login",
      description: "Login to Spotify! (Do this after a restart)",
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
        var scopes = ['user-read-playback-state', 'user-modify-playback-state']
        await interaction.reply({ content: `You can login to Spotify with this link: ${spoitfyApi.createAuthorizeURL(scopes, "alexander")}`, ephemeral: true })
  }
}
