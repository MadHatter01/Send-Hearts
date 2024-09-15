const ReactionCounter = ({ reactions }) => {
    return (
        <div className="reactions">
       
            {Object.keys(reactions).map((emoji) => {
                return (<div key={emoji}>
                    <span>{emoji}</span> {reactions[emoji]} reactions
                </div>)
            })}
        </div>
    )
}

export default ReactionCounter;