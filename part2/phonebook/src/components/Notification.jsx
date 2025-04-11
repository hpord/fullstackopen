const Notification = ({ notifConfiguration }) => {
    if (notifConfiguration === null) {
      return null
    }
  
    return (
      <div style={notifConfiguration.style}>
        {notifConfiguration.message}
      </div>
    )
  }

export default Notification