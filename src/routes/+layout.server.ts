import type { LayoutServerLoad } from "./$types";
import userSession from '$lib/server/session-management';

export const load = (({ locals }) => {
  const session = userSession;
  locals.session = session;
  return { session };
}) satisfies LayoutServerLoad;