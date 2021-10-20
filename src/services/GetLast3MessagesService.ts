import prismaClient from "../prisma"

class GetLast3MessagesService {
   async execute() {
      const messages = await prismaClient.message.findMany({
         take: 3,
         orderBy: {
            created_at: "desc"
         },
         include: {
            user: true
         }
      })

      //SELECT * FROM messages LIMIT 3 ORDER BY CREATE_AT ASC

      return messages
   }
}

export { GetLast3MessagesService }