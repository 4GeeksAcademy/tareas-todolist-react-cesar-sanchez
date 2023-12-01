import React ,{useState} from "react";//1.importar el hook useState de react

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {

	//2.declaracion de estados
	const [tarea1, setTarea1]=useState("")
	const [add, setAdd]=useState([])

	
//funciones del paso 3
	function handleTarea1(event){
			setTarea1(event.target.value);

		}
		

	
	function handleAdd(event){
		if(event.keyCode === 13){
			const nuevosDatos = [...add, tarea1];
			setAdd(nuevosDatos);
			console.log(add);
			setTarea1= ("");
		}
	}
	function deleteList(event){
		const nuevosDatos =[...add];
		nuevosDatos.splice(index, 1);
		setAdd(nuevosDatos)

	}

	
	
	return (
		<div className="w-50 mx-auto">
			<h1>Todo</h1>
   	 	
      
     	 <input type="text" className="form-control" aria-label="Large" placeholder="input" value={tarea1} onChange={handleTarea1} onKeyDown={handleAdd}/>
	  		<ul>
				{add.map((item, index) => (
         			 <li key={index}>
            		{item}
					<span onClick={() => deleteList(index)}>X</span>
          			</li>
       				 ))}
			</ul>
			
		
	</div>
   
    
    
    



		
	)
				};				

export default Home;
