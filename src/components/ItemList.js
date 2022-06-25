import React from "react";



export const ItemList = function() {

    const [thingsElements, setThingsElements] = React.useState([<p>Thing 1</p>, <p>Thing 2</p>]);

    const addItem = function() {
        // remember, even though .push() DOES modify the original array, it RETURNS the length of the new array, so it'll just return "3", and if you press the button, "3" will be displayed

        // this won't work
        // setThingsElements(thingsElements => thingsElements.push(<p>Thing {thingsElements.length + 1}</p>))

        // this is how you do it in React
        setThingsElements(thingsElements => [...thingsElements, <p>Thing {thingsElements.length + 1}</p>]);

    }



    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}