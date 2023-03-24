export default function projects({ image, title, description, deployed, github, large }) {
  return (
    <div className={large ? "mb-4 col-xl-8": "mb-4 col-md-6 col-xl-4"}>
      <div className="card h-100">

        <div className="p-4" style={{backgroundPosition: "center top", backgroundImage: `backhround-color:green;, url(${process.env.PUBLIC_URL}/images/${image})`, backgroundSize:"cover"}}>
          
          {/* image for the card */}
          <img src={process.env.PUBLIC_URL + "/images/" + image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body d-flex flex-column justify-content-around">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <span className="small">{description}</span>
          </p>
          <div>
            <a href={deployed} className="btn btn-outline-danger mr-2" target="_blank" rel="noreferrer" style={{position:"static" }}>Deployed site</a>
            <a href={github} className="btn btn-outline-danger ml-2" target="_blank" rel="noreferrer" style={{position:"static" }}>Github repo</a>
          </div>
        </div>
      </div>
    </div>
  );

}