const Display = ({ clase, displayedIn, displayedOut }) =>
    <div id={ clase } >
        <text id="display" className="D-output">{ displayedOut }</text><br/>
        <text id="display" className="D-input">{ displayedIn }</text>
    </div>

export default Display;