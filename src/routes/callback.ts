import { methods, Route, type ApiRequest, type ApiResponse } from '@sapphire/plugin-api';
import { spoitfyApi } from '../lib/SpotifyClient';

export class UserRoute extends Route {
  public constructor(context: Route.Context, options: Route.Options) {
    super(context, {
      ...options,
      route: 'callback'
    });
  }

  public [methods.GET](_req: ApiRequest, _res: ApiResponse) {
    if (_req.query.state !== "alexander") {
      return _res.json({ message: "Invalid state" });
    }
    
    const code = Array.isArray(_req.query.code) ? _req.query.code[0] : _req.query.code;
    spoitfyApi
      .authorizationCodeGrant(code)
      .then((data) => {
        const access_token = data.body['access_token'];
        const refresh_token = data.body['refresh_token'];
        const expires_in = data.body['expires_in'];

        spoitfyApi.setAccessToken(access_token);
        spoitfyApi.setRefreshToken(refresh_token);

        setInterval(async () => {
          const data = await spoitfyApi.refreshAccessToken();
          const access_token = data.body['access_token'];

          spoitfyApi.setAccessToken(access_token);
        }, (expires_in / 2) * 1000);

        return _res.json({ message: "OK" })
      })
  }
}