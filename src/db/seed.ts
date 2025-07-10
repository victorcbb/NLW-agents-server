import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'

await reset(db, schema)

await seed(db, schema).refine((faker) => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: faker.companyName(),
        description: faker.loremIpsum(),
      },
    },
    questions: {
      count: 20,
      columns: {
        question: faker.loremIpsum(),
      },
    },
  }
})

await sql.end()

process.stdout.write('Database seeded.')
