import { useContext, useMemo } from "react";
import { Context } from "../context";


const Preview =()=>{
   const {state} =useContext(Context)
   const {inputs}=state
    return(
        inputs.path &&
        <div className="rounded p-1 m-5"
        style={{
            width:"30%",
            height:"300px",
            backgroundImage:`url(${inputs.path})`,
            backgroundSize:"cover"
        }}
        >

        </div>
    )
}

const UploadForm = () => {
    const {state,dispatch} =useContext(Context)

   const hanldeChange=(e)=>{ dispatch({type :"setInputs",payload: {value: e}})}
  const handleSubmit=(e)=>{
    e.preventDefault()
    // setItems([inputs.path,...items]) 
    dispatch({type: 'setItem'})
    // setInputs({title:null,file:null,path:null})
    dispatch({type:"collapse",payload:{bool:false}})

  }

    const isDisabled=useMemo(()=>{
        return !!Object.values(state.inputs).some(input=> !input)
    },[state.inputs])
  return (
    state.isCollapsed && <>
      <p className="display-6 text-center mb-3">Upload Stock Image</p>
      <div className="mb-5 d-flex align-items-center justify-content-center">
        <Preview />
        <form className="mb-2" style={{ textAlign: "left" }} onSubmit={handleSubmit} >
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="title"
              aria-describedby="text"
              onChange={hanldeChange}
            />
          </div>
          <div className="mb-3">
            <input type="file" className="form-control" name="file" onChange={hanldeChange}/>
          </div>
          <button
            type="submit"
            className="btn btn-success float-end"
            disabled={isDisabled}
          >
            Save changes
          </button>
        </form>
      </div>
    </>
  );
};
export default UploadForm