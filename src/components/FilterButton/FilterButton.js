
import './FilterButton.css'


const FilterButton=(props)=>{
  
    return(
        <div className='filter-button'>
            <button className='dropbtn'>Filter
            </button>
            <div className='filter-options'>
                <button type="button" onClick={()=>{
                    props.onFilterClicked('0-50')
                }}>
                    0-50 hours
                </button>
                <button type="button" onClick={()=>{
                    props.onFilterClicked('51-100')
                }}>
                    51-100 hours
                </button>
                <button type="button" onClick={()=>{
                    props.onFilterClicked('>100')
                }}>
                    More than 100 hours
                </button>
                <button type="button" onClick={()=>{
                    props.onFilterClicked('nofilter')
                }}>
                    No filter
                </button>
            </div>
        </div>
      
 
      
      
    );
}
export default FilterButton;