import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function EpisodesCard({ data }) {
	return (
		<Card
			sx={{
				m: 1.5,
				width: 300,
				boxShadow: '0 5px 15px 0px rgba(0, 255, 255, 0.747)',
				backgroundColor: 'rgb(33, 177, 182)',
				borderRadius: '20px'
			}}>
			<CardContent className="episCard">
				<Typography className="episText" variant="h5" component="div">
					{data.name}
				</Typography>
				<Typography
					className="episText"
					sx={{ mb: 1.5 }}
					color="text.secondary">
					{data.episode}
					<br />
					Air date: {data.air_date}
				</Typography>
			</CardContent>
		</Card>
	);
}
