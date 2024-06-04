import './App.css'
import CardLink from "./compenents/card-link"

function App() {

  return (
    <div className='container'>
      <div className='card-container'>
        <img src='https://media.licdn.com/dms/image/C4D03AQHQ1thn29vJkw/profile-displayphoto-shrink_200_200/0/1660099221341?e=2147483647&v=beta&t=YXpE7IeJi5poLLC4rkB0PtxS4depqS1ixX1-HrTvB0I' />
        <div>
          <h1 className='title-name'>Flory Tshiteya</h1>
          <p className='text-city'>São Paullo-Sp, Brasil</p>
        </div>
        <p className='text-bio'>"Engenheiro de sistemas e amo conhecer pessoas novas"</p>
        <div className='cards-link'>
          <CardLink link="https://www.instagram.com/florymignon/" socialName={"Instagram"} />
          <CardLink link="https://github.com/Floryvibla" socialName={"Github"} />
        </div>
      </div>
    </div>
  )
}

export default App
