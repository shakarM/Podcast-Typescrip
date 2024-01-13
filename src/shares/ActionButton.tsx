import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./type"


type Props = {
    setSelectedPage: (value: SelectedPage) => void
    children: React.ReactNode
}

 export const ActionButton = ({ type, className, onClick, SelectedPage, children }: Props) => {
  const defaultClassName = "rounded-md bg-gold-40 text-black-20 outline-none p-2 hover:bg-black-20 transition duration-500 hover:text-white";

  return (
    <AnchorLink
    type={type}
    className={`${defaultClassName} ${className}`}
    onClick={onClick}
   
  >
    {children}
  </AnchorLink>)
}

