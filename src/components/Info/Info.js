import React from 'react';
import guts from '../../img/guts-berserk.jpg';
import css from './Info.module.css';

const Info = () => {
	return (
		<div>
			<img
				className={css.gutsImg}
				src={guts}
				alt="The character guts from Berserk"
			/>
			<h1 className={css.cardName}>Guts</h1>
			<h3 className={css.profession}>Swordsman</h3>
			<a
				className={css.moreInfo}
				href="https://berserk.fandom.com/wiki/Guts"
			>
				More Info
			</a>
			<div className={css.btnContainer}>
				<button className={[css.emailBtn, css.btn].join(' ')}>
					Email
				</button>
				<a
					className={[css.linkedInBtn, css.btn].join(' ')}
					href="https://uk.linkedin.com/"
				>
					LinkedIn
				</a>
			</div>
		</div>
	);
};

export default Info;
