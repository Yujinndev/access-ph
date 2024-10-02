import { cn } from '@/lib/utils'

const HighlightText = ({
  text,
  hexColor = '#E2E2B6',
  className,
}: {
  text: string
  className?: string
  hexColor?: string
}) => {
  return (
    <span className="relative inline-block text-brand">
      {text}
      <svg
        className={cn(
          'absolute -bottom-5 left-0 w-full md:-bottom-4 lg:-bottom-3',
          className
        )}
        width="260"
        height="31"
        viewBox="0 0 260 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M196 30C215.167 21.8333 203 5.59999 1 5.99999V1L259.5 5.99999L196 30Z"
          fill={hexColor}
          stroke={hexColor}
        />
      </svg>
    </span>
  )
}

export default HighlightText
