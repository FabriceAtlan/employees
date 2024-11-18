import { useEffect, useState } from 'react';

import './App.css'
import Card from './components/Card/Card'

interface Employee {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    medium: string;
  }
}

function App() {
	const [emp, setEmp] = useState<Employee[]>([]);

	useEffect(() => {
		fetch('http://localhost:3310/api/employees')
		.then((response) => response.json())
		.then((data) => setEmp(data.result));
	},[]);
  
  console.info(emp);
  return (
    <>
      <main className="main-container">
        <h1>Hello all !</h1>
        {
          emp.map((e) => {
            return(
                <Card key={emp.indexOf(e)} employe={e}/>
            )
          })
        }
      </main>
    </>
  )
}

export default App
