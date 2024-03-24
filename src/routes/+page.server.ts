import type { PageServerLoad } from "./$types";

export const load = (async ({ locals, parent }) => {
  const session = locals.session;
  if (!session) {
    const sessionFromParent = await parent();
    return {
      session: sessionFromParent
    }
  }
  return { session }
}) satisfies PageServerLoad;