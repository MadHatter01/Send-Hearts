const emojis = [ '❤️'];

const Emojis = ({sendReaction})=>{
    return (
       <div className="emojis">

        {emojis.map((emoji)=>(
            <button key={emoji} onClick={()=> sendReaction(emoji)}>{emoji}</button>
        ))}
       </div>
    )
}

export default Emojis;