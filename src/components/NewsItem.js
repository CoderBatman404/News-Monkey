import React from 'react'

const NewsItem = (props) => {
  
    let { Title, description, imageurl, newsUrl, author, date, source } = props

    return (
      <>
        <div>
          <div className="card" style={{ width: "20rem" }}>
            
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger " style={{ left: '90%', zIndex: '1' }}>{source}</span>
            
            <img src={imageurl || !'https://removed.com' ? imageurl : 'https://i.pinimg.com/originals/4e/a9/81/4ea98108e0dd10a1dc417a24e32232e2.png'} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{Title}</h5>
              <p className="card-text">{description}...</p>
              <p className='card-text'> <small className='text-muted'>By {author ? author : 'Unknown'} on {new Date(date).toUTCString()}</small> </p>
              <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>      </div>
      </>
    )
  
}

export default NewsItem
