const Display = ({ clase, displayedIn, displayedOut }) =>
    <div id={ clase } >
        <div id="display" className="D-output">{ displayedOut }</div><br/>
        <div id="display" className="D-input">{ displayedIn }</div>
    </div>

export default Display;