import React, { useEffect } from 'react';
import fetchAPI from '../../requests/fetcher';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import { Filter } from '../filter/Filter';
import EpisodesCard from '../episodesCard/EpisodesCard';
import CharactersCard from '../charactersCard/CharactersCard';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
	ul: {
		'& .MuiPaginationItem-root': {
			color: ' rgb(0, 255, 255, 0.747)',
			'&:hover': {
				color: 'rgb(0, 60, 255)'
			}
		}
	}
}));

function TabPanel({
	value,
	index,
	dispatch,
	content,
	info,
	error,
	contentType,
	filters,
	API
}) {
	useEffect(() => {
		fetchAPI(contentType, dispatch, API);
	}, [contentType, dispatch, API]);

	const [page, setPage] = React.useState(1);
	const [filterString, setFilterString] = React.useState(``);

	const handleChangePage = (event, newPage = 1, filter = filterString) => {
		fetchAPI(contentType, dispatch, API + `?page=${newPage}` + filter);
		setPage(newPage);
	};
	const classes = useStyles();

	if (!Object.keys(content).length || !Object.keys(info).length) return null;

	return (
		<div hidden={value !== index}>
			<Box>
				<Filter
					filters={filters}
					setFilterString={setFilterString}
					handleChangePage={handleChangePage}
				/>
			</Box>
			<Box
				sx={{
					p: 1,
					pr: 5,
					display: 'flex',
					flexFlow: 'wrap',
					justifyContent: 'end'
				}}>
				{info ? (
					<Box
						sx={{
							ml: 3,
							mr: 3,
							display: 'flex',
							color: 'rgb(0, 255, 255, 0.747)',
							fontFamily: 'Creepster',
							alignItems: 'center'
						}}>
						{info.count + ' ' + contentType}
					</Box>
				) : null}
				<Pagination
					page={!error ? page : 1}
					count={!error ? info.pages : 1}
					onChange={handleChangePage}
					showFirstButton
					showLastButton
					classes={{ ul: classes.ul }}
				/>
			</Box>
			<Box
				sx={{
					p: 3,
					display: 'flex',
					flexFlow: 'wrap',
					justifyContent: 'space-around'
				}}>
				{!error ? (
					content.map((res) =>
						contentType === 'characters' ? (
							<CharactersCard key={res.id} data={res} />
						) : (
							<EpisodesCard key={res.id} data={res} />
						)
					)
				) : (
					<Box>There is nothing here</Box>
				)}
			</Box>
			<Box
				sx={{
					p: 5,
					pb: 10,
					display: 'flex',
					justifyContent: 'end'
				}}>
				<Pagination
					classes={{ ul: classes.ul }}
					page={!error ? page : 1}
					count={!error ? info.pages : 1}
					onChange={handleChangePage}
					showFirstButton
					showLastButton
				/>
			</Box>
		</div>
	);
}
export default TabPanel;
