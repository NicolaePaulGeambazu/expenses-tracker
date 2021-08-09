import { Cards } from "./style/Card.styled";

function Card (props) {
  const classes = 'card' + props.className
return(

<Cards className={classes}>{props.children}</Cards>
) 
}

export default Card;
