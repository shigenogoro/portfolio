/* eslint-disable react/prop-types */
import './Card.css'

const Card = ({title, descriptions, imgSrc, imgAlt}) => {   
    return (
        <div className="card-container">
            <div className="card-img-container">
                <img className="card-img" src={imgSrc} alt={imgAlt}/>
            </div>

            <div className="card-intro-container">
                <h3 className="card-title">{title}</h3>
                <ul className='card-list'>
                    {
                        descriptions.map((desc, i) => {
                            return (
                                <li className="card-list-item" key={i}>{desc}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Card;