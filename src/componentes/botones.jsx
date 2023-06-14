
function Boton({ buttonId, buttonText, click }){ 
    return(
        <button id={ buttonId } 
                onClick={ () => click( buttonText ) } >
                { buttonText }
        </button>
)};

export default Boton; 