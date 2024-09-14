const emojis = [ '❤️'];

const Emojis = ()=>{
    return (
       <div className="emojis">

        {emojis.map((emoji)=>(
            <button>{emoji}</button>
        ))}
       </div>
    )
}

export default Emojis;