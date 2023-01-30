import { ContainerStyle } from './style'


export default function ContainerDetails({children}){
  return(
    <ContainerStyle>
      {children}
    </ContainerStyle>
  )
}