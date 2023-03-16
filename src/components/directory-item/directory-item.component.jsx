import { useNavigate} from 'react-router-dom'
import {Body, BackgroundImage, DirectoryItemCointainer} from './directory-item.styles.jsx'

const DirectoryItem = ({category}) => {
  const {imageUrl, title, route} = category
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemCointainer onClick={onNavigateHandler}>
    <BackgroundImage imageUrl={imageUrl}/>
    <Body>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </Body>
  </DirectoryItemCointainer>
  )
}

export default DirectoryItem