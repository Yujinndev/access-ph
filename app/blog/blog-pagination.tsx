import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const BlogPagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) => {
  const createPageURL = (pageNumber: number) => {
    return `/blog/${pageNumber}#content`
  }

  return (
    <div className="w-max">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={createPageURL(Math.max(currentPage - 1, 1))}
              className={
                currentPage === 1 ? 'pointer-events-none opacity-50' : ''
              }
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index} className="rounded-none">
              <PaginationLink
                href={createPageURL(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href={createPageURL(Math.min(currentPage + 1, totalPages))}
              className={
                currentPage === totalPages
                  ? 'pointer-events-none opacity-50'
                  : ''
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default BlogPagination
