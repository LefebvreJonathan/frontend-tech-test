import React from 'react';
import PropTypes from 'prop-types';
import Character from '../../models/character';

const CharacterBanner = ({ character }) => (
	<div className="character-banner">
		<div className="thumbnail">
			<img width="480" height="480" alt={`${character.name}`} src={character.thumbnail} loading="lazy" />
		</div>
		<div className="title">
			<h1>{character.name}</h1>
		</div>
		<div className="block-text">
			<div className="description">
				<span>{character.description}</span>
			</div>

			<div className="stats">
				<span>
					<span className="stat-title">Comics</span>
					{character.comicsCount}
				</span>
				<span>
					<span className="stat-title">Series</span>
					{character.seriesCount}
				</span>
				<span>
					<span className="stat-title">Stories</span>
					{character.storiesCount}
				</span>
			</div>
		</div>
	</div>
);

CharacterBanner.propTypes = {
  character: PropTypes.instanceOf(Character).isRequired,
};

export default CharacterBanner;
