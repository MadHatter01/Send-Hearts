const emojis = [ '❤️', '✨', '🐧', '👀'];

const Emojis = ({sendReaction})=>{
    return (
       <div className="emojis">

        {emojis.map((emoji)=>(
            <button  className='emoji-btn' key={emoji} onClick={()=> sendReaction(emoji)}>{emoji}</button>
        ))}
       </div>
    )
}

export default Emojis;