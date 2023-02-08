export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'https://bcw-sandbox.herokuapp.com/api' : ''
export const useSockets = false
export const domain = ''
export const clientId = ''
export const audience = ''