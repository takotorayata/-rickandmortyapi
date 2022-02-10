import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import BasicModal from "../modal/BasicModal";

export default function CharactersCard({ data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      sx={{
        m: 1.5,
        width: 300,
        boxShadow: "0 5px 15px 0px rgba(0, 255, 255, 0.747)",
        backgroundColor: "rgb(33, 177, 182)",
        borderRadius: "20px"
      }}
    >
      <CardContent>
        <CardMedia
          className="images"
          component="img"
          // height="194"
          image={data.image}
          alt={data.name + "image"}
        />
        <Typography className="cardsInfo" variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography className="cardsInfo" sx={{ mb: 1.5 }}>
          Gender: {data.gender}
        </Typography>
        <Typography className="cardsInfo" variant="body2">
          Species: {data.species}
          <br />
          Status: {data.status}
          <br />
          Location: {data.location.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="cardsInfo1" size="small" onClick={handleOpen}>
          Details
        </Button>
      </CardActions>
      <BasicModal data={data} open={open} onClose={handleClose} />
    </Card>
  );
}
