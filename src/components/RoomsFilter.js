import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  return (
    <section className="filter-container">
      <Title title="search rooms"></Title>
      <form className="filter-room">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            <option value="all">all</option>
            <option value="family">family</option>
            <option value="double">double</option>
            <option value="single">single</option>
            <option value="presidential">presidential</option>
          </select>
        </div>
        {/* end select type */}

        {/* select guest */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
        {/* end select guest */}

        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* size */}
        <div className="form-group">
            <label htmlFor="size">Size</label>
            <div className="size-inputs">
                <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className='size-input'/>
                <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className='size-input'/>
            </div>
        </div>

        {/* extras */}
        <div className="form-group">
            <div className="single-extra">
                <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                <label htmlFor="breakfast">breakfast</label>
            </div>

            <div className="single-extra">
                <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                <label htmlFor="pets">pets</label>
            </div>
        </div>
      </form>

    </section>
  );
}
