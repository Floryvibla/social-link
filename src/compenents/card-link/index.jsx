function CardLink({ socialName, link }) {
    return (
        <a href={link} target='_blank'>
            <div className='card-link'>
                <h5>{socialName}</h5>
            </div>
        </a>
    )
}

export default CardLink