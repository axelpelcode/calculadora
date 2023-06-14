const Display = ({ displayedIn, displayedOut }) =>
    <div id="display" >
        <text className="D-input">{ displayedOut }</text><br/>
        <text className="D-output">{ displayedIn }</text>
    </div>

export default Display;