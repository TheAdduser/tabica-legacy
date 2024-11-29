import { db } from '~/server/db';

export async function getUserData(userId: number) {
  const user = await db.user.findUnique({
    where: { usr_id: userId },
  });
  return user;
}