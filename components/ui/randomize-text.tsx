import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export const RandomizedText = ({ data }: { data: { text: string }[] }) => {
  const [randomSubheading, setRandomSubheading] = useState('')

  useEffect(() => {
    // Pick a random subheading from the array
    const randomIndex = Math.floor(Math.random() * data.length)
    setRandomSubheading(data[randomIndex].text)
  }, [data])

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="250"
      className="flex justify-center gap-3 font-oswald text-[2rem] font-bold md:text-[2.75rem] lg:gap-4 lg:text-[3.5rem] xl:text-[4rem]"
    >
      {randomSubheading?.split(' ')?.map((el, index) => {
        const last = randomSubheading?.split(' ').length - 1

        return (
          <div key={index} className="flex items-center justify-between gap-3">
            <h2 className="text-[1.5rem] md:text-4xl lg:text-5xl">{el}</h2>
            {last !== index && <ArrowRight />}
          </div>
        )
      })}
    </div>
  )
}
