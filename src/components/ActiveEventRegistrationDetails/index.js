// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeEvent} = props
  const {registrationStatus} = activeEvent
  let apiStatus = ''

  switch (registrationStatus) {
    case 'YET_TO_REGISTER':
      apiStatus = (
        <div className="register-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="register-image"
          />
          <p className="register-desc">
            A live performance brings so much to your relationship with dance.
            Seeing dances live can often make you fall totally in love with this
            beautiful art form
          </p>
          <button type="button" className="register-button">
            Register Here
          </button>
        </div>
      )
      break
    case 'REGISTERED':
      apiStatus = (
        <div className="register-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registered-image"
          />
          <h1 className="registered-desc">
            You have already registered for the event
          </h1>
        </div>
      )
      break
    default:
      apiStatus = (
        <div className="register-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="reg-closed-img"
          />
          <h1 className="reg-para">Registrations Are Closed Now!</h1>
          <p className="reg-desc">
            Stay tuned. We will reopen the registrations soon!
          </p>
        </div>
      )
  }
  return <>{apiStatus}</>
}
export default ActiveEventRegistrationDetails
