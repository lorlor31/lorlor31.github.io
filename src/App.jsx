//MOBILEFIRST : regler les tailles d'abord pour mobile
//puis appliquer les tailles d'écrans selon les cas sm md lg xl 2xl
import React, { useEffect } from 'react';
import Project from './Project';
import CarrouselCard from './CarrouselCard';
import NavBar from './NavBar';

function App() {
	
return (
<>
{/* container global */}
<div className="flex content-center justify-center flex-col 
min-h-screen max-w-screen card 
bg-gradient-to-bl from-fuchsia-100 via-violet-200 via-20% to-pink-300 text-black ">
{/* <!-- //header --> */}
<NavBar/>
<div className="hero">
	<div className="hero-content text-center z-5">
		<div className="relative max-w-md mix-blend-darken   ">
			<h1 className="bg-gradient-to-br from-indigo-600 from-0% via-fuchsia-400 via-15% to-blue-900 inline-block text-transparent bg-clip-text text-7xl font-bold bg-transparent z-40 bg-svg-wheels bg-no-repeat bg-cover bg-center bg-fixed min-h-100 animate-fade-right animate-once animate-duration-500 animate-ease-in-out shadow-sm drop-shadow-2xl p-4 ">	Laure Seng
			</h1>
			<p className="py-6 animate-rotate-x animate-infinite animate-ease-in-out text-2xl">Développeuse web </p>
			{/* <p className="animation-translateX-slow absolute min-w-full py-6 bg-roues text-white bg-red-700 border-4 border-white-900 border-dashed" > !! Site en construction !!</p> */}
		</div>
	</div>
</div>

{/* //TODO mettre des props pour factoriser */}
{/* //TODO voir pour mettre la bulle attachée aux petites quelle propriété css */}

{/* Faire le css sur la card 1 puis copier une fois ok */}
{/* //pb comment fr pour que le wrapper soit plus grand que la bulle  */}

{/* carrousel */}
<div className="h-[50dvh] sm:h-[35dvh] md:h-[45dvh] lg:h-[60dvh] xl:h-[60dvh] 2xl:h-[60dvh] 
carousel carousel-vertical my-0 mx-auto ">	
{/* bg-constr  => pour mettre en bckground l'image */}

	<CarrouselCard card={{
		"img": "src/images/avatars/internet.png",
		"alt": "avatar_internet",
		"mainBubbleText1": "Bonjour ! Je suis Laure !",
		"mainBubbleText2": "A votre service !",
		"thinkBubbleText1": "Hum toi t'es pas Laure !",
		"thinkBubbleText2": "T'es Internet...",
		"thinkBubbleBaby1": "think-bubble-baby-1",
		"thinkBubbleBaby2": "think-bubble-baby-2"       
	}}/>

	<CarrouselCard card={{
		"img": "src/images/avatars/laptop.png",
		"alt": "avatar_laptop",
		"mainBubbleText1": "J'aime les ordinateurs, je ne sais pas si c'est réciproque...",
		"thinkBubbleText1": "Je voudrais pas la vexer...",
		"thinkBubbleText2": "T'es Internet...",
		"thinkBubbleBaby1": "think-bubble-baby-1",
		"thinkBubbleBaby2": "think-bubble-baby-2"       
	}}/>

	<CarrouselCard card={{
		"img": "src/images/avatars/studying.png",
		"alt": "avatar_studying",
		"mainBubbleText1": "Je suis quelqu'un de sérieux et de travailleur.",
		"thinkBubbleText1": "Faut qu'j'me tourne pour pas qu'on voit que j'rigole ...",
		"thinkBubbleText2": "T'es Internet...",
		"thinkBubbleBaby1": "think-bubble-baby-1",
		"thinkBubbleBaby2": "think-bubble-baby-2"       
	}}/>

	<CarrouselCard card={{
		"img": "src/images/avatars/velo.png",
		"alt": "avatar_velo",
		"mainBubbleText1": "J'aime faire du vélo et le réparer.",
		"thinkBubbleText1": "Doucement quand même hein !",
		"thinkBubbleText2": "T'es Internet...",
		"thinkBubbleBaby1": "think-bubble-baby-1",
		"thinkBubbleBaby2": "think-bubble-baby-2"       
	}}/>

	<CarrouselCard card={{
			"img": "src/images/avatars/serenade.png",
			"alt": "avatar_serenade",
			"mainBubbleText1": "Je peux chanter des chansons pour adoucir les moeurs...",
			"thinkBubbleText1": "Nirvana ? ça adoucit les moeurs ??",
			"thinkBubbleText2": "T'es Internet...",
			"thinkBubbleBaby1": "think-bubble-baby-1",
			"thinkBubbleBaby2": "think-bubble-baby-2"       
	}}/>

	<CarrouselCard card={{
			"img": "src/images/avatars/perseverance.png",
			"alt": "avatar_perseverance",
			"mainBubbleText1": "Je suis un peu une acharnée, j'aime pas me laisser faire.",
			"thinkBubbleText1": "Surtout par cet énorme bug !",
			"thinkBubbleText2": "T'es Internet...",
			"thinkBubbleBaby1": "think-bubble-baby-1",
			"thinkBubbleBaby2": "think-bubble-baby-2"       
	}}/>

	<CarrouselCard card={{
			"img": "src/images/avatars/pasteque.png",
			"alt": "avatar_pasteque",
			"mainBubbleText1": "Le gras, c'est la vie ! ",
			"thinkBubbleText1": "Y a le smile aussi",
			"thinkBubbleText2": "T'es Internet...",
			"thinkBubbleBaby1": "think-bubble-baby-1",
			"thinkBubbleBaby2": "think-bubble-baby-2"       
	}}/>

</div>
{/* end of carrousel */}

<a className="mx-auto" href="https://www.linkedin.com/in/laure-seng/">
	<button className="max-w-[80dvw] text-lg btn btn-primary animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in-out w-36 mx-auto my-5 pb-2 ">
		Contact me !
	</button>
</a>

		<div className="mockup-code max-w-[80dvw]  self-center my-5 min-h-32">
			<pre data-prefix="$"><code>npm i laure-seng-bundle</code></pre>
			<pre data-prefix=">" className="text-warning"><code>installing good vibes...</code></pre>
			<pre data-prefix=">" className="text-success"><code>Great !</code></pre>
		</div>

{/* sm md lg xl 2xl */}
{/* Wrapper des cards */}

<div className="flex content-between justify-between p-5 
flex-col mx-auto
sm:flex-col sm:mx-auto 
md:flex-col md:mx-5
lg:flex-row lg:mx-5
xl:flex-row xl:mx-5
2xl:flex-row 2xl:mx-5
"
id="projects-wrapper">
			
		<Project project={{
			"url" : "https://lorlor31.github.io/Memento/",
			"img" : "src/images/projets/memento.png",
			"alt" : "capture_du_projet_memento",
			"title" : "Memento",
			"desc" : "Tous les trucs dont je dois me rappeler 🤯",
			"titleBadges": ["OLD", "WIP"],
			"techBadges": ["HTML", "CSS", "JS"],
		}}/>

		<Project project={{
			"url" : "http://obroderie.lorlor.site",
			"img" : "src/images/projets/obroderie.png",
			"alt" : "photo_du_projet_obroderie",
			"title" : "Obroderie",
			"desc" : "Logiciel type ERP pour une PME de broderie",
			"titleBadges": ["NEW", "WIP"],
			"techBadges": ["Symfony", "React"]	
		}}/>

		<Project project={{
			"url" : "https://lorlor31.github.io/Advent-Calendar/",
			"img" : "src/images/projets/advent_calendar.png",
			"alt" : "photo_du_projet_calendrier_avent",
			"title" : "Advent Calendar",
			"desc" : "Apprennez et riez autour de Noël !",
			"titleBadges": ["OLD"],
			"techBadges": ["HTML", "CSS", "JS"]
		}}/>


	</div>
{/* Fin du Wrapper des cards */}

</div>

</>
)
}

export default App
