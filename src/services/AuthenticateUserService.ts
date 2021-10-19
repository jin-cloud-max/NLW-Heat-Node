import axios from 'axios'

/**
 * Receber o code (string)
 * Recuperar o access token no github
 * Verificar se o usuário existe no DB
 * Se existir = Gera um token
 * Se não existir = Cria um novo user e gera um token
 * Rtornar o token com as infos do usuário logado
 */

class AuthenticateUserService {
   async execute(code: string) {
      const url = "https://github.com/login/oauth/access_token"

      const response = await axios.post(url, null, {
         params: {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code
         },
         headers: {
            "Accept": "application/json"
         }
      })

      return response.data
   }
}

export { AuthenticateUserService }