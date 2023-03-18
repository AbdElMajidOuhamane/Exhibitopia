import { useContext, useMemo, useReducer } from 'react';
import { useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Layout from './components/Layout';
import { Context } from './context';
import Firestore from './handlers/firestore';


const { readDocs }=Firestore

function App() {
  
  const {state}=useContext(Context)


  const counts=useMemo(()=>{
    return `you have ${state.items.length} image${state.items.length>1 ? 's':''}`
  },[state.items])

  useEffect(() => {
    readDocs().then(console.log)
  }, [])


  return (
 
    <Layout>

      <h1 className='text-center'>Gallory</h1>
      {counts}
      <div className='row'>
        {state.items.map((item,index)=> <Card key={index} {...item}/>)}
      </div>
     
    </Layout>
  
  );
}

export default App;
