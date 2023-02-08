import { initialize } from '@bcwdev/auth0provider-client'
import { AppState } from '../AppState'
import { audience, clientId, domain } from '../env'
import { logger } from '../utils/Logger.js'
import { accountService } from './AccountService'
import { api } from './AxiosService'
import { socketService } from './SocketService'

export const AuthService = initialize({
  domain,
  clientId,
  audience,
  useRefreshTokens: true,
  onRedirectCallback: appState => {
    try {
      const url = appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
      location.hash = url
    } catch (e) {
      logger.error('[AuthRedirectError]', e)
    }
  }
})

AuthService.on(AuthService.AUTH_EVENTS.AUTHENTICATED, async() => {
  api.defaults.headers.authorization = AuthService.bearer
  localStorage.setItem('user-token', JSON.stringify(AuthService.bearer))
  api.interceptors.request.use(refreshAuthToken)
  AppState.user = AuthService.user
  await accountService.getAccount()
  socketService.authenticate(AuthService.bearer)
  // NOTE if there is something you want to do once the user is authenticated, place that here
})

async function refreshAuthToken(config) {
  if (!AuthService.isAuthenticated) { return config }
  const expires = AuthService.identity.exp * 1000
  const expired = expires < Date.now()
  const needsRefresh = expires < Date.now() + (1000 * 60 * 60 * 12)
  if (expired) {
    await AuthService.loginWithPopup()
  } else if (needsRefresh) {
    await AuthService.getTokenSilently()
    api.defaults.headers.authorization = AuthService.bearer
    socketService.authenticate(AuthService.bearer)
  }
  return config
}