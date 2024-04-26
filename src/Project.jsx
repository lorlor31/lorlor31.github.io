import React, { useEffect } from 'react';

function Project({project}) {
  
return (
<>
{/* Badges bg colors available = 
primary, html
 secondary, css
  accent, js
  success new, 
  warning WIP en construction,
   error, 
   info old , 
   neutral 
   */}


<article className="card w-[80dvw] bg-base-100 shadow-xl my-5
			sm:mx-auto
			md:mx-5  
			lg:mx-5 
			xl:mx-5 
			">				
				<figure className='mx-auto h-100 '>
					<a href={project.url}>
						<img src={project.img} alt={project.alt}/>
					</a>
				</figure>
				<div className="card-body bg-purple-50 ">
					<h2 className="card-title">
						<a href={project.url}>{project.title}</a>
						<div className="badge badge-success text-neutral-content">NEW</div>
					</h2>
					<p> {project.desc}</p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline bg-primary">HTML</div>
						<div className="badge badge-outline  bg-secondary">CSS</div>
						<div className="badge badge-outline  bg-accent">JS</div>
					</div>
				</div>
			</article>


</>   
)  
}

export default Project ;
