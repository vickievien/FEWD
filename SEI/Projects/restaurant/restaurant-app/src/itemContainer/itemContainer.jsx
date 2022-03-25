import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import NewItemComponent from './newItemComponent/newItemComponent';

function ItemContainer() {
    const[items, setItems] = useState([{'_id': '1', "productName": 'banas', "quantity": 2}]);
    const[newItemServerError, setNewItemServerError] = useState()

    const createNewItem = async(newItem) => {
        console.log(newItem);
        setItems([newItem, ...items])
        // SEND REQUEST TO BAND END
        const apiResposse = await fetch("http://localhost:3001/items",
        method: "POST",
        BODY: JSON.stringify(newItem),
        headers: {
            "Content-Type": "application/json"
        }
        ) 
        // PARSE RESPONSE FROM BACKEND
        const parsedResponse = await apiResposse.json()
        // IF RESPONSE IS SUCCESS:
        if(parsedResponse.success) {
            // ADD NEW ITEM TO STATE!
            setItems([newItem, ...items])
        }else {
            setNewItemServerError(parsedResponse.data)
        }
            // ELSE:
                // SHOW ERROR MESSAGE, DON'T CHANGE IT BACK TO SHOW
                // TODO: FIGURE THIS OUT
    }

    const deleteItem = async(itemIdtodelete) => {
        console.log('deleting itemId')
        // const newItems=[];
        // for (let i=0; i< items.length; i++) {
        //     if(items[i]._id !== itemIdtodelete) {
        //         newItem.push(items[i])
        //     }
        // }
        const newItems = items.filter((item)=> {
            return item._id !== itemIdtodelete
        })
        setItems(newItems)
    }


  return (
    <div>
        <h2>Items here!</h2>
        <NewItemComponent createNewItem={createNewItem}/>
        {items.map((item)=> {
            return 
            <SingleItemComponent key={item._id}  item={item}/>
        })}

    </div>
  );
}

export default ItemContainer;
