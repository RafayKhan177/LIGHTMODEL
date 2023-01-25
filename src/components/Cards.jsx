import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const CardItem = (props) => {
  return (
    <Card id="card" sx={{ maxWidth: 345 }}>
        <CardActionArea >
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Read More
          </Button>
        </CardActions>
      </Card>
  );
}

export default function Cards() {
  return (
    <div id="cards">
      <CardItem image="https://mdbootstrap.com/img/new/slides/043.jpg" title="Lizard" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" />
      <CardItem image="https://mdbootstrap.com/img/new/slides/043.jpg" title="Lizard" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" />
      <CardItem image="https://mdbootstrap.com/img/new/slides/043.jpg" title="Lizard" text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica" />
    </div>
  );
}


















// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions } from "@mui/material";

// export default function Cards() {
//   return (
//     <div id="cards">
//       <Card id="card" sx={{ maxWidth: 345 }}>
//         <CardActionArea >
//           <CardMedia
//             component="img"
//             height="140"
//             image="https://mdbootstrap.com/img/new/slides/043.jpg"
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Read More
//           </Button>
//         </CardActions>
//       </Card>
//       <Card id="card" sx={{ maxWidth: 345 }}>
//         <CardActionArea >
//           <CardMedia
//             component="img"
//             height="140"
//             image="https://mdbootstrap.com/img/new/slides/043.jpg"
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Read More
//           </Button>
//         </CardActions>
//       </Card>
//       <Card id="card" sx={{ maxWidth: 345 }}>
//         <CardActionArea >
//           <CardMedia
//             component="img"
//             height="140"
//             image="https://mdbootstrap.com/img/new/slides/043.jpg"
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Read More
//           </Button>
//         </CardActions>
//       </Card>
//     </div>
//   );
// }
