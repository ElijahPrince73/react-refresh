const ProfileCard = ({ title, handle, image, description }) => {
  
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Title is {title}</p>
            <p className="subtitle is-6">Handle {handle}</p>
          </div>

        </div>
        <div className="content">
          {description}
        </div>
    </div>
  </div>
  )
}

export default ProfileCard