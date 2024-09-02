export default function Price({oldPrice,newPrice}){
    let oldStyles={
        textDecorationLine:"Line-through",
    };
    let newStyles={
        fontWeight:"bold"
    };
    let styles={
      backgroundColor:"#e0c367",
      height:"30px",
      borderBottomLeftRadius:"14px",
      borderBottomRightRadius:"14px"

    };
  return(
    <div style={styles}>
        <span style={oldStyles}>{oldPrice}</span>
        &nbsp;
        <span style={newStyles}>{newPrice}</span>
    </div>
  )   
}