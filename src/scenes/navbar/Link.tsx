import { SelectedPage } from "@/shares/type"
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
    const lowerCase = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return (
    <AnchorLink
    className={`${lowerCase === selectedPage ? "text-gold-45" : "text-stone-600"}
    transition duration-500 hover:text-gold-45  
    `}
    onClick={()=> setSelectedPage(lowerCase)}
    href={`#${lowerCase}`}
    >{page}</AnchorLink>
  )
}

export default Link