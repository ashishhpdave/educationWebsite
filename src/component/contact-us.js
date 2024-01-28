
function ConatctUS(){
    return(
        <>
              <form className="form">
    
    <div className="flex">
        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>first name</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>last name</span>
        </label>
        
    </div>  
            
    <div className="flex">
        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>Class</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>Phone</span>
        </label>
        
    </div>  

    <div className="flex">
        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>Email</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>Address</span>
        </label>
        
    </div>  
    
    <button className="fancy" href="#">
      <span className="top-key"></span>
      <span className="text">submit</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </button>
</form>
        </>
    )
}

export default ConatctUS