// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <>
      <li className="project-item-container project-item-details-container">
        <img className="project-item-image" src={imageUrl} alt={appName} />
        <p className="project-item-title">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
