// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
	// const [count, setCount] = useState(0)

return (
<>
{/* container global */}
<div className="flex content-center justify-center flex-col min-h-screen bg-gradient-to-bl from-fuchsia-100 via-violet-200 via-20% to-pink-300 text-black  min-w-60">
{/* <!-- //header --> */}
<div className="hero ">
	<div className="hero-content text-center z-5">
		<div className="relative max-w-md mix-blend-darken   ">
			<h1 className="bg-gradient-to-br from-indigo-600 from-0% via-fuchsia-400 via-15% to-blue-900 inline-block text-transparent bg-clip-text text-7xl font-bold bg-transparent z-40 bg-svg-wheels bg-no-repeat bg-cover bg-center bg-fixed min-h-100 animate-fade-right animate-once animate-duration-500 animate-ease-in-out shadow-sm drop-shadow-2xl p-4 ">	Laure Seng
			</h1>
			<p className="py-6 animate-rotate-x animate-infinite animate-ease-in-out text-2xl">Développeuse web </p>
			{/* <p className="animation-translateX-slow absolute min-w-full py-6 bg-roues text-white bg-red-700 border-4 border-white-900 border-dashed" > !! Site en construction !!</p> */}
		</div>
	</div>
</div>
{/* <!-- //Carousel --> */}
{/* //TODO mettre des props pour factoriser */}
{/* Faire le css sur la card 1 puis copier une fois ok */}
<div className="h-96 min-w-full carousel carousel-vertical rounded-box my-0 max-w-3xl mx-auto">
	{/* card1 */}
	<div className="carousel-item bg-fuschia-100  mx-auto h-96  ">
		<div className="relative min-w-96 h-96  " >
			<img src="src/images/avatars/internet.png" className=" mx-auto my-auto absolute h-96  p-0 z-10 border-4  border-pink-100 object-contain	"/>
			<div className="chat chat-start absolute left-72 top-12 overflow-visible z-30 min-w-full">
				<div className="chat-bubble chat-bubble-primary min-w-[10dvw] max-w-[30dvw]  ">
					<p className="text-center py-1 ">Bonjour ! Je suis Laure !</p>  
					<p className="text-center py-1"> A votre service !</p>
				</div>
			</div>
			<div className="chat chat-start absolute right-36 top-2 overflow-visible z-30 min-w-full">
				<div className="think-bubble  min-w-[10dvw] max-w-[30dvw] absolute  ">
					{/* //TODO copier le style de la chat bubble ds index.css */}
					<div className="think-bubble-baby-1 relative "></div>
					<div className="think-bubble-baby-2"></div>

					<div className="think-bubble-baby-3"></div>

					<p className="text-center py-1 ">Hum toi t'es pas Laure !</p>  
					<p className="text-center py-1"> T'es Internet...</p>
				</div>
			</div>
		</div>
	</div>
	{/* card 2*/}
	<div className="carousel-item bg-fuschia-100  mx-auto h-96  ">
			<div className="relative min-w-96 h-96  " >
				<img src="src/images/avatars/laptop.png" className=" mx-auto my-auto absolute h-96  p-0 z-10 border-4  border-pink-100 object-contain	"/>
				<div className="chat chat-start absolute left-72 top-12 overflow-visible z-30 min-w-full">
				<div className="chat-bubble chat-bubble-primary min-w-full  ">J'aime les ordinateurs, je ne sais pas si c'est réciproque...</div>
			</div>
			</div>
	</div>
	{/* card 3*/}
	<div className="carousel-item bg-fuschia-100  mx-auto h-96  ">
			<div className="relative min-w-96 h-96  " >
				<img src="src/images/avatars/studying.png" className=" mx-auto my-auto absolute h-96  p-0 z-10 border-4  border-pink-100 object-contain	"/>
				<div className="chat chat-start absolute left-72 top-12 overflow-visible z-30 min-w-full">
				<div className="chat-bubble chat-bubble-primary min-w-full  ">Je suis quelqu'un de sérieux et de travailleur.</div>
			</div>
			</div>
	</div>
	{/* card 4*/}
	<div className="carousel-item bg-fuschia-100  mx-auto h-96  ">
			<div className="relative min-w-96 h-96  " >
				<img src="src/images/avatars/trampoline.png" className=" mx-auto my-auto absolute h-96  p-0 z-10 border-4  border-pink-100 object-contain	"/>
				<div className="chat chat-start absolute left-72 top-12 overflow-visible z-30 min-w-full">
				<div className="chat-bubble chat-bubble-primary min-w-full  ">Mais il parait que je saute comme une puce ?!</div>
			</div>
			</div>
	</div>
	{/* card 4*/}
	<div className="carousel-item bg-fuschia-100  mx-auto h-96  ">
			<div className="relative min-w-96 h-96  " >
				<img src="src/images/avatars/velo.png" className=" mx-auto my-auto absolute h-96  p-0 z-10 border-4  border-pink-100 object-contain	"/>
				<div className="chat chat-start absolute left-72 top-12 overflow-visible z-30 min-w-full">
				<div className="chat-bubble chat-bubble-primary min-w-full  ">J'adore mon vélo et le réparer.</div>
			</div>
			</div>
	</div>
			{/* <div className="carousel-item bg-fuschia-100  mx-auto h-96  ">
					<div className="relative min-w-96 h-96  " >
						<img src="src/images/avatars/serenade.png" className=" mx-auto my-auto absolute h-96  p-0 z-10 border-4  border-pink-100 object-contain	"/>
						<div className="chat chat-start absolute left-72 top-12 overflow-visible z-30 min-w-full">
						<div className="chat-bubble chat-bubble-primary min-w-full  ">Je peux vous chanter des chansons pour adoucir les moeurs, c'est mon côté sensible...</div>
					</div>
					</div>
			</div>
			<div className="carousel-item bg-fuschia-100  mx-auto h-96  ">
					<div className="relative min-w-96 h-96  " >
						<img src="src/images/avatars/perseverance.png" className=" mx-auto my-auto absolute h-96  p-0 z-10 border-4  border-pink-100 object-contain	"/>
						<div className="chat chat-start absolute left-72 top-12 overflow-visible z-30 min-w-full">
						<div className="chat-bubble chat-bubble-primary min-w-full  ">Je suis un peu une acharnée, j'aime pas me laisser faire.</div>
					</div>
					</div>
			</div>
			<div className="carousel-item bg-fuschia-100  mx-auto h-96  ">
					<div className="relative min-w-96 h-96  " >
						<img src="src/images/avatars/pasteque.png" className=" mx-auto my-auto absolute h-96  p-0 z-10 border-4  border-pink-100 object-contain	"/>
						<div className="chat chat-start absolute left-72 top-12 overflow-visible z-30 min-w-full">
						<div className="chat-bubble chat-bubble-primary min-w-full  "> Le gras, c'est la vie ! </div>
					</div>
					</div>
			</div> */}
</div>
{/* <!-- Fin du Carousel --> */}

		<button className="text-lg btn btn-primary animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in-out w-36 mx-auto my-5 pb-2 ">Contact me !</button>

		<div className="mockup-code max-w-64 self-center my-5 min-h-32">
			<pre data-prefix="$"><code>npm i laure-seng-bundle</code></pre>
			<pre data-prefix=">" className="text-warning"><code>installing good vibes...</code></pre>
			<pre data-prefix=">" className="text-success"><code>Great !</code></pre>
		</div>

{/* sm md lg xl 2xl */}
{/* Wrapper des cards */}
		<div className="flex content-center 
		lg:flex-row sm:flex-col  
		justify-center items-center m-6 " 
		id="projects-wrapper">
			<article className="card w-96 bg-base-100 shadow-xl mx-5 sm:my-5">
				<figure>
					<a href="https://lorlor31.github.io/Memento/">
						<img src="src/images/projets/memento.png" alt="photo_du_projet_memento"/>
					</a>
					
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						<a href="https://lorlor31.github.io/Memento/">Memento</a>
						<div className="badge badge-success text-neutral-content">NEW</div>
					</h2>
					<p>Tous les trucs dont je dois me rappeler 🤯</p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline bg-primary">HTML</div>
						<div className="badge badge-outline  bg-secondary">CSS</div>
						<div className="badge badge-outline  bg-accent">JS</div>
					</div>
				</div>
			</article>

			<article className="card w-96 bg-base-100 shadow-xl">
				<figure>
					<a href="https://lorlor31.github.io/Advent-Calendar/">
						<img src="src/images/projets/advent_calendar.png" alt="photo_du_projet_calendrier_avent"/>
					</a>
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						<a href="https://lorlor31.github.io/Advent-Calendar/">Advent Calendar</a>
						<div className="badge badge-success text-neutral-content">OLD</div>
					</h2>
					<p>Apprennez et riez autour de Noël</p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline bg-primary">HTML</div>
						<div className="badge badge-outline  bg-secondary">CSS</div>
						<div className="badge badge-outline  bg-accent">JS</div>
					</div>
				</div>
			</article>
		</div>
{/* Fin du Wrapper des cards */}

		</div>


	
</>
)
}

export default App
