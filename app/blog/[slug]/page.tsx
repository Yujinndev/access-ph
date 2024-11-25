import Image from 'next/image'
import Hero from '@/components/common/hero'
import { getAllBlogs } from '@/utils/blogs'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import BlogPagination from '@/app/blog/blog-pagination'
import { getData } from '@/utils/get-data'

const Blog = async ({ params }: { params: { slug: string } }) => {
  const data = await getData()

  const ITEMS_PER_PAGE = data?.BLOGS?.itemsPerPage
  const currentPage = parseInt(params.slug, 10) || 1
  const allBlogs = getAllBlogs()

  // Sort blogs by date, latest first
  const sortedBlogs = allBlogs.sort((a, b) => {
    return new Date(b.slug).getTime() - new Date(a.slug).getTime()
  })

  const totalPages = Math.ceil(sortedBlogs.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentBlogs = sortedBlogs.slice(startIndex, endIndex)

  return (
    <div className="relative z-20">
      <Hero
        data={data}
        heading={data?.BLOGS?.heading}
        subheading={data?.BLOGS?.subheading}
      />

      <section
        className="relative z-20 mx-auto max-w-screen-xl px-6"
        id="content"
      >
        <div className="flex flex-col justify-between pb-8 pt-20 lg:flex-row">
          <h2 className="text-4xl">BLOGS</h2>
          <BlogPagination currentPage={currentPage} totalPages={totalPages} />
        </div>
        <hr className="mb-4" />

        <div className="space-y-8">
          {currentBlogs.map((blog) => (
            <div key={blog.slug} className="flex w-full flex-col space-y-6">
              <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
                <h2 className="text-brand">{blog.title}</h2>
                <p className="text-brand">
                  {format(new Date(blog.slug), 'PP')}
                </p>
              </div>
              <div className="flex flex-col justify-between gap-6 lg:flex-row">
                {blog.image && (
                  <div className="relative flex h-52 rounded-lg border-2 bg-slate-50 p-1 lg:h-96 lg:w-2/3">
                    <Image
                      src={blog.image}
                      alt={blog.slug}
                      width={800}
                      height={800}
                      className="m-auto aspect-video h-full w-full rounded-sm object-cover"
                    />
                  </div>
                )}
                <p
                  className={cn('text-justify text-lg', {
                    'lg:w-1/3': blog.image,
                  })}
                >
                  {blog.content}
                </p>
              </div>
              <hr className="mb-4" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog
