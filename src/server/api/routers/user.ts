import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';

export const userRouter = createTRPCRouter({
  getAccount: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
    });
    return user;
  }),

  updateAccount: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        username: z.string().min(1),
        email: z.string().email(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const updatedUser = await ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: {
          name: input.name,
          username: input.username,
          email: input.email,
        },
      });
      return updatedUser;
    }),
});