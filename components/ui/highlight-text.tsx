import { cn } from '@/lib/utils'

export type HighlightTextProps = {
  className?: string
  text: string
  textColor?: string
  underline?: {
    color: string
  }
}

export const HighlightText = ({
  className,
  text,
  textColor = '#6daad9',
  underline,
}: HighlightTextProps) => {
  return (
    <span className={cn(`relative inline-block`)} style={{ color: textColor }}>
      {text}{' '}
      {underline && (
        <svg
          className={cn('absolute -bottom-5 left-0 w-full', className)}
          width="260"
          height="31"
          viewBox="0 0 260 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M196 30C215.167 21.8333 203 5.59999 1 5.99999V1L259.5 5.99999L196 30Z"
            fill={underline.color}
            stroke={underline.color}
          />
        </svg>
      )}
    </span>
  )
}
