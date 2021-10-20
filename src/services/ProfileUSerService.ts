import prismaClient from "../prisma"

class ProfileUSerService {
   async execute(user_id: string) {
      const user = await prismaClient.user.findFirst({
         where: {
            id: user_id
         },
         include: {
            messages: true
         }
      })

      return user
   }
}

export { ProfileUSerService }