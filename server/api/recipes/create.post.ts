import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const recipeSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  // ingredients: z.array(z.string()),
  steps: z.array(z.string()),
  author_id: z.string(),
})

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const parseResult = recipeSchema.safeParse(body)

  if (!parseResult.success) {
    throw createError({
      statusCode: 412,
      statusMessage: parseResult.error.message,
    })
  }

  const recipe = await prisma.recipe.create({
    data: parseResult.data,
  })

  return JSON.stringify(recipe, (_, value) =>
    typeof value === 'bigint' ? value.toString() : value)
})
