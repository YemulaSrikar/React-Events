// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickImage, activeEvent} = props
  const {name, imageUrl, location} = eventDetails

  const onImageClick = () => {
    onClickImage(eventDetails)
  }

  const borderClass = activeEvent.id === eventDetails.id ? 'active-border' : ''

  return (
    <li className="list-container">
      <button onClick={onImageClick} type="button" className="img-button">
        <img src={imageUrl} alt="event" className={`images ${borderClass}`} />
      </button>
      <p className="image-name">{name}</p>
      <p className="image-location">{location}</p>
    </li>
  )
}
export default EventItem
