import ListItem from '../ListItem/ListItem'
import './List.css'
import FilterButton from '../FilterButton/FilterButton'
import {useState} from 'react'
const List=(props)=>{
    
    const [enteredFilter, setFilter] = useState('');
    const [itemList, setItemList] = useState(props.list);
    console.log('Entered list prop list', props.list)
    console.log('Entered List itemList', itemList)
    if(itemList.length<props.list.length && enteredFilter==='')
    {
        setItemList(props.list)
    }
    const filterContent = (filterValue) => {
        console.log("New ",filterValue);
        //console.log(props.list,'props ')
        setItemList(props.list)
       // console.log(itemList,"items")
        setFilter(filterValue);
        setItemList((prevItemList)=>{
            return prevItemList.filter((mappedItem)=>{
            
             if(mappedItem.hours>=0 && mappedItem.hours<=50 && filterValue==='0-50')
            {

                return true;
            }
            else if(mappedItem.hours>50 && mappedItem.hours<=100 && filterValue==='51-100')
            {
                //console.log(mappedItem)
                return true;
            }
            else if(mappedItem.hours>100 && filterValue==='>100')
            {
                //console.log(mappedItem)
                return true;
            }
            else if(filterValue==='nofilter')
            {
                //console.log(mappedItem)
                setFilter('')
                return true;
            }
            return false;
        })}
        );
        console.log(itemList,'after filtering')
      };
      
    return(
        
        <div className='list-container'>
            
            <FilterButton onFilterClicked={filterContent}/>
            
            {
                
                 
                 itemList.map((item)=>{
                    
                    return(
                     
                    <ListItem key={item.id} title={item.title} description={item.description} hours={item.hours} filter={enteredFilter}> </ListItem>
                );
                })
                
            }
     
        </div>
    );
}
export default List;