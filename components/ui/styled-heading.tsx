import {
  HighlightText,
  HighlightTextProps,
} from '@/components/ui/highlight-text'
import { cn } from '@/lib/utils'
import React from 'react'

export const StyledHeading = ({
  text,
  highlights,
  className,
  animation,
}: {
  text: string
  className?: string
  highlights?: HighlightTextProps[]
  animation?: string
}) => {
  const words = text.split(' ')

  return (
    <h1
      data-aos={animation || 'fade-up'}
      className={cn(
        'm-auto font-oswald font-bold leading-snug sm:text-balance lg:w-full lg:text-wrap',
        className
      )}
    >
      {words.map((word, index) => {
        const highlight = highlights?.find(
          (h) => h.text.toLowerCase() === word.toLowerCase()
        )

        if (highlight) {
          return (
            <React.Fragment key={index}>
              <HighlightText
                text={word}
                textColor={highlight.textColor}
                underline={highlight.underline}
                className={highlight.className}
              />{' '}
            </React.Fragment>
          )
        } else {
          return <span key={index}>{word} </span>
        }
      })}
    </h1>
  )
}
