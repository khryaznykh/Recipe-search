import arrow from './arrow.png';

function RecipesToShow({name, cuisine, image, calories, digest, ingridients}) {
    return (
        <div className="recipe">
            <div className="container" >
                <h2>{name}</h2>
            </div>
            <hr className='line'/>
            <div className="container">
                <p>{cuisine} food</p>
            </div>

            <div className="container">
                <img src={image} alt="Food"/>
            </div>
            
            <div className="container">
                <p>{calories.toFixed()} cal</p>
            </div>
            <div className="container">
                {digest.slice(0, 3).map ((nutrivalue, index) => {
                    
                    return(
                    <div  key={index}>
                        <p>{nutrivalue.label} {nutrivalue.total.toFixed()}  {nutrivalue.unit}  </p>                         
                    </div>)
                    })
                }
            </div>
            <hr className='line'/>
            {ingridients.map ((line, index) => {
                return (
                    <ul className="containerarrow" key={index}>
                        <li><img className="arrow" src={arrow} alt="arrow"/> {line}</li>
                    </ul>
                )
            })}
        </div>    
    )
} 
export default RecipesToShow;