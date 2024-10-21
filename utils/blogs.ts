import fs from 'fs'
import path from 'path'

const blogsDirectory = path.join(process.cwd(), 'public', 'blogs')

export type BlogPost = {
  slug: string
  title: string
  image?: string
  content?: string
}

export function getAllBlogSlugs(): { params: { slug: string } }[] {
  const fileNames = fs.readdirSync(blogsDirectory)
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.txt$/, ''),
    },
  }))
}

export function getAllBlogs(): BlogPost[] {
  const fileNames = fs.readdirSync(blogsDirectory)
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.txt$/, '')
    const fullPath = path.join(blogsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Parse the file content based on the template
    const [rawTitle, rawImage, ...contentLines] = fileContents.split('\n')

    const title = rawTitle?.replace('Title: ', '').trim()
    const image = rawImage?.replace('Image: ', '').trim()
    const content = contentLines.join('\n').trim()

    return {
      slug,
      title,
      image,
      content,
    }
  })
}
