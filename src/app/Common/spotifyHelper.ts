import { IUsuario } from "../Interfaces/IUsuario";

export function SpotifyUserParaUsuario(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario{
  return {
    id: user.id,
    nome: user.display_name,
    imageUrl: user.images.pop().url

  }
}
