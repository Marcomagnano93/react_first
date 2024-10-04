// interface props {
//     items: string[];

// }



function AppContent() {

    let ex = 'caaaa'
    let items = ['']
    items = []
function AddCart(){
    items.push(ex)
}


    return  <div className="app_content bg_lightgray">
            <div className="container">
                
                { items.length === 0 ? <div>
                    <h2 className="darkgreen text-center my-3">Non hai nulla da comprare</h2>
                    <h4 className="darkgreen text-center my-3">Aggiungi qualcosa</h4>
                    <form action="">
                        <label>
                            Name:
                        <input type="text" name="name" />
                        </label>
                        {/* <input type="submit" value="Submit" onClick={AddCart}/> */}
                        <button onClick={AddCart} className="btn btn-primary">Aggiungi</button>
                    </form>
                    </div> : <h2 className="darkgreen text-center my-3">La tua lista della spesa</h2>
                }
                <ul>
                    { items.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        </div>
        
    
}

export default AppContent