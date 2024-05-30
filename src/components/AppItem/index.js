// Write your code here
import './index.css'

let Items = props => {
  let {cardObjeact} = props
  let {imageUrl, appName} = cardObjeact
  return (
    <li className="minCard">
      <img src={imageUrl} className="itemImg" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default Items
