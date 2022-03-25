import {useState} from 'react';

const NewItemComponent = (props) => {
    const [showing, setShowing] = useState(false);
    const[newItem, setNewItem] = useState({
        productName: "",
        quanity: 0
    })

    const[validState, setValidState] = useState({valid:true, message:""})
    const toggleShowing = () => {
        setShowing(!showing)
    }
    const handleInputChange = (e) => {
        console.log(e.target.value);
        setNewItem({
            ...newItem,
            [e.target.name]: e.target.value
        })
    }
    return (

        <>
        {showing ?
        <div id="new-item-form">
        <button onClick={toggleShowing}>Close</button>
        <form onSubmit={(e)=>{
            e.preventDefault()
            if(newItem.productName.length <2) {
                setValidState({
                    valid: false,
                    message: "name needs to be longer"
                })
            }
            props.createNewItem(newItem)}}>
            Product Name: < input type="text" name="productName" onChange={handleInputChange} value={newItem.productName} required/>
            qUANTITY: <input type="num" name="quantity" onChange={handleInputChange}  value={newItem.quantity} required/>
        <button type="submit">Add Item</button>
        </form>
        </div>
        : <button onClick={toggleShowing}>Create new item</button> }        
        </>
    )
}

export default NewItemComponent;