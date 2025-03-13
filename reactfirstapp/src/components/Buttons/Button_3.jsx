import './Button_3.css'

function Button_3({name, color}) {
    return<div style={{marginTop:20}}>
        <button className="mybtns" style={{backgroundColor:color}}> {name} </button>
    </div>
}

export default Button_3;