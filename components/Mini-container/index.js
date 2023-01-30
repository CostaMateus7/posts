import { MiniContainerStyle } from "./style";

export default function MiniContainer({children}){
  return(
    <MiniContainerStyle>
      {children}
    </MiniContainerStyle>
  )
}