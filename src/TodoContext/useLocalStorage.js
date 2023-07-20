import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
	const [item, setItem] = useState(initialValue);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
    
    
	useEffect( () => {
		setTimeout( () => {
			try {
				const localStorageItem = localStorage.getItem(itemName); 

				let parsedItem;

				if(!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
					setItem(parsedItem);
				}

				setLoading(false);
		} catch(error) {
				setLoading(false);
				setError(true);
			}
		}, 2000);
	},[]);
    
    
	const saveItem = (newItem) => {
		localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
		setItem(newItem);
	}

	return { item, saveItem, loading, error }
}

export { useLocalStorage }


// localStorage.removeItem('TODOS_V1');
// const TodoDefault = [
//   { text: 'Cortar la cebolla', completed: false},
//   { text: 'Terminar el curso de React.js', completed: true},
//   { text: 'Llorar con la Llorona', completed: false},
//   { text: 'Dormir para descansar un rato', completed: true},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(TodoDefault));