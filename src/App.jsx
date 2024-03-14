// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
	// const [count, setCount] = useState(0)

return (
<>
	<div className="flex content-center justify-center flex-col min-h-screen bg-gradient-to-bl from-fuchsia-100 via-violet-200 via-20% to-pink-300 text-black  min-w-60">
		<div className="hero ">
			<div className="hero-content text-center z-5">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold bg-transparent z-40 bg-svg-wheels bg-no-repeat bg-cover bg-center bg-fixed min-h-100 animate-fade-right animate-once animate-duration-500 animate-ease-in-out">	Laure Seng
					</h1>
					<p className="py-6 animate-rotate-x animate-infinite animate-ease-in-out">Développeuse web </p>
					<p className="py-6 bg-roues" > !! Site en construction !!</p>
				</div>
			</div>
		</div>
		{/* <!-- //Carousel --> */}

		<div className="h-96 carousel carousel-vertical rounded-box my-0 max-w-3xl mx-auto  border-4 border-black">
			<div className="carousel-item h-full bg-fuschia-100  mx-auto">
					<div className="relative min-w-64" >
						<img src="src/images/avatars/internet.png" className=" mx-auto absolute my-0 p-0 z-10 border-4  border-pink-100"/>
					<div className="chat chat-start absolute left-48 top-12 min-w-full z-30">
						<div className="chat-bubble chat-bubble-primary min-w-full">Bonjour ! Je suis Laure ! A votre service !</div>
					</div>
					</div>
			</div>
			<div className="carousel-item h-full bg-fuschia-100  mx-auto">
					<div className="relative min-w-64" >
						<img src="src/images/avatars/laptop.png" className=" mx-auto absolute z-10 border-4  border-pink-100"/>
					<div className="chat chat-start absolute left-48 top-12 min-w-full z-30">
						<div className="chat-bubble chat-bubble-primary min-w-full">Bonjour ! Je suis Laure ! A votre service !</div>
					</div>
					</div>
			</div>






			<div className="carousel-item h-full">
				<img src="src/images/avatars/laptop.png" />
			</div>
			<div className="carousel-item h-full">
				<img src="src/images/avatars/perseverance.png" />
			</div>
			<div className="carousel-item h-full">
				<img src="src/images/avatars/studying.png" />
			</div>
			<div className="carousel-item h-full">
				<img src="src/images/avatars/serenade.png" />
			</div>
			<div className="carousel-item h-full">
				<img src="src/images/avatars/pasteque.png" />
			</div>
			<div className="carousel-item h-full">
				<img src="src/images/avatars/velo.png" />
			</div>
		</div>

		<button className="btn btn-primary animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in-out w-12 mx-auto">Contact me !</button>

		<div className="mockup-code max-w-64 self-center my-5 min-h-32">
			<pre data-prefix="$"><code>npm i laure-seng-bundle</code></pre>
			<pre data-prefix=">" className="text-warning"><code>installing good vibes...</code></pre>
			<pre data-prefix=">" className="text-success"><code>Great !</code></pre>
		</div>



		<div className="flex content-center flex-row justify-around m-6 " id="projects-wrapper">
			<article className="card w-96 bg-base-100 shadow-xl">
				<figure><img src="https://picsum.photos/200/300" alt="Shoes" href="https://lorlor31.github.io/Memento/" /></figure>
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
				<figure><img src="https://picsum.photos/200/300" alt="Shoes" href="https://lorlor31.github.io/Advent-Calendar/" /></figure>
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



	</div>
</>
)
}

export default App
