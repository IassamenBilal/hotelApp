import React, { Component } from "react";
import {RoomContext} from '../Context'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
  constructor (props) {
    super(props)
   this.state={
      slug:this.props.match.params.id,
    }
  }
  static contextType= RoomContext

  render() {
    const {getRoom} = this.context
    const room= getRoom(this.state.slug)
    if(!room){
      return (<div className="error">
        <h3>no such room could be found</h3>
        <Link to='/rooms' className='btn-primary'>back to rooms</Link>
      </div>)

    }
    const {name,description,capacity,size,price,pets,images} = room
    return <><StyledHero img={images[0]}>
      <Banner title={`${name} room` }>
        <Link to='/rooms' className='btn-primary'>back to rooms</Link>
      </Banner>
    </StyledHero>
    <section className='single-room'>
        <div className="single-room-images">
          {
            images.map((item,index)=>{
             return <img key={index} src={item}/>
            })
          }
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
           <p>{description}</p>

          </article>
          <article className='info'>
            <h3>info</h3>
            <h6>price:${price}</h6>
            <h6>size:{size}</h6>
            <h6>max capacity:{capacity>1? capacity+ ' people' :capacity +' person' }</h6>
            <h6>{pets? "pets allowed":"no pets"}</h6>
          </article>
        </div>
    </section>
    </>
  }
}
