import React from 'react';
import css from './About.module.css';

const About = () => {
	return (
		<div className={css.container}>
			<div className={css.aboutContainer}>
				<h4 className={css.title}>About</h4>
				<p>
					Guts, renowned as the "Black Swordsman", is a former
					mercenary and branded wanderer who travels the world in a
					constant internal struggle between pursuing his own ends and
					upholding his attachments to those dear to him.
				</p>
			</div>
			<div className={css.interestsContainer}>
				<h4 className={css.title}>Interests</h4>
				<p>
					Ever since he was six years of age, Guts has wielded
					oversized swords, culminating in his incredible strength and
					master swordsmanship. Despite his Herculean stature, Guts is
					notably dexterous and agile in the heat of battle, capable
					of dodging and countering even the most rapid strikes. He is
					a combat pragmatist and versatile improviser, capitalizing
					on any opportunity available to surmount opposition; on
					several occasions, he has used children to bait and distract
					enemies when overwhelmed.
				</p>
			</div>
		</div>
	);
};

export default About;
