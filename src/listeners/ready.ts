import { Listener } from "@sapphire/framework";

export class ReadyListener extends Listener {
    public constructor(context: Listener.Context, options: Listener.Options) {
        super(context, {
            ...options,
            once: true,
            event: "ready"
        })
    }

    run(client: { user: { username: any; id: any; }; }) {
        const { username, id } = client.user;
        this.container.logger.info(`Successfully logged in as ${username} (${id})`)

        const user = this.container.client.users.cache.get("988801425196867644");
        user?.send({ content: "fyi, the bot restarted, don't forget to login so it has the token stored lol" })
    }
}