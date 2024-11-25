export interface Root {
  BRAND: Brand
  LINKS: Links[]
  LOGOS: Logos[]
  FAQs: Faqs
  SERVICES: Services
  PRICING: Pricing
  BLOGS: Blogs
  ABOUT: About
  CONTACT: Contact
}

export interface Brand {
  name: string
  heading: Heading
  subheading: Subheading[]
  description: string
  logo: string
  more: More
}

export interface Links {
  title: string
  href: string
}

export interface Logos {
  name: string
  href: string
  image: string
}

export interface Faqs {
  heading: Heading
  subheading: string
  items: Item[]
}

export interface Heading {
  text: string
  highlights: {
    text: string
    underline: {
      color: string
    }
  }[]
}

export interface Highlight {
  text: string
  underline?: Underline
  textColor?: string
}

export interface Underline {
  color: string
}

export interface Subheading {
  text: string
}

export interface Item {
  question: string
  answer: string
}

export interface Services {
  heading: Heading
  subheading: string
  more: More
  landingPageDisplay: number
  items: ServiceItem[]
}

export interface ServiceItem {
  id: string
  name: string
  type: string
  description: string
  image: string
  details?: Detail[]
  features?: Feature
  modules?: Module[]
}

export interface Detail {
  heading: string
  subheading: string
}

export interface Feature {
  heading: string
  items: FeatureItem[]
}

export interface FeatureItem {
  image: string
  title: string
  sub: string[]
}

export interface Module {
  heading: string
  sub: Sub[]
}

export interface Sub {
  title: string
  image: string
  items: SubItem[]
}

export interface SubItem {
  name: string
  users: string[]
}

export interface Pricing {
  heading: Heading
  subheading: string
  plans: Plan[]
}

export interface Plan {
  name: string
  description: string
  price: Price
  cta: Cta
  perks: Perk[]
  styles: Styles
}

export interface Price {
  text: string
  desc: string
  highlights: Highlight[]
}

export interface More {
  title: string
  heading: Heading
  subheading: string
  exp: string
}

export interface Cta {
  text: string
  link: string
}

export interface Perk {
  Deployment?: string
  Storage?: string
  Support?: string
  Updates?: string
  Customizations?: string
}

export interface Styles {
  'background-color': string
  color: string
}

export interface Blogs {
  heading: Heading
  subheading: string
  itemsPerPage: number
}

export interface About {
  heading: Heading
  subheading: string
}

export interface Contact {
  fb: string
  linkedIn: string
  phone: string
  email: string
}
