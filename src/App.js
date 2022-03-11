import logo from './logo.svg';
import './App.css';
import List from './components/List/List'
import { useState } from 'react';
import NewListItem from "./components/NewListItem/NewListItem";
const INITIAL_DUMMY_LISTS=[{id:1, title:'Title1',description:'Description1',hours:40},{id:2, title:'Title2',description:'Description2',hours:60},{id:3, title:'Title3',description:'Description 3',hours:120}]
  
function App() {

  const [listItems, setListItems] = useState(INITIAL_DUMMY_LISTS);
 // console.log(INITIAL_DUMMY_LISTS)
  const saveNewListData = (newListData) => {
    const newListDataWrite = {...newListData};
    newListDataWrite.id = listItems.length+1;
    console.log("New ",newListDataWrite);
    setListItems([...listItems,newListDataWrite]);
  };

  return (
    
   <div>
     <List list={listItems}></List>
    {
      console.log(listItems,'List Items - App')
    }
     <NewListItem onSaveListData={ saveNewListData}></NewListItem>
   </div>
  );
}

export default App;
