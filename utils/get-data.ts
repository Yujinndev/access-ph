import path from 'path'
import fs from 'fs/promises'
import { Root } from '@/lib/schema'

import { unstable_noStore as noStore } from 'next/cache'

export async function getData(): Promise<Root> {
  noStore()

  const filePath = path.join(process.cwd(), 'data', 'data.json')
  const fileContents = await fs.readFile(filePath, 'utf8')
  return JSON.parse(fileContents)
}
