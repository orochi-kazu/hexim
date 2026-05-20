import { deLocalizeUrl } from '$lib/paraglide/runtime'

/** @type {import('@sveltejs/kit').Reroute} */ export const reroute = (request) =>
  deLocalizeUrl(request.url).pathname
