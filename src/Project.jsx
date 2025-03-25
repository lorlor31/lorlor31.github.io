import React, { useEffect } from 'react';

function Project({project}) {
  
return (
<>
{/* Badges colors
A côté du titre
            <div className="badge badge-success text-neutral-content">OLD</div>
            <div className="badge badge-accent text-neutral-content">NEW</div>
            <div className="badge badge-warning text-neutral-content">WIP</div>
En bas de la card
            <div className="badge badge-outline bg-secondary">HTML</div>
            <div className="badge badge-outline bg-primary">CSS</div>
            <div className="badge badge-outline bg-warning">JS</div>
            <div className="badge badge-outline  bg-error">Symfony</div>
            <div className="badge badge-outline  bg-info">React</div>
   */}

<article className="card w-[80dvw] bg-base-100 shadow-xl my-5
    mx-auto
    sm:mx-auto
    md:mx-5  
    lg:mx-5 
    xl:mx-5 
    ">				
    <figure className='mx-auto h-5/6 '>
        <a href={project.url} className="h-full">
            <img src={project.img} alt={project.alt} className="h-full w-full object-fill p-0"/>
        </a>
    </figure>
    <div className="card-body bg-purple-50 ">
        <h2 className="card-title">
            <a href={project.url}>{project.title}</a>
            {project.titleBadges.map((badge) => 
                {
                    if (badge === "OLD") {
                        return <div key={badge} className="badge badge-success text-neutral-content">{badge}</div>;
                    } 
                    else if (badge === "NEW") {
                        return <div key={badge} className="badge badge-info text-neutral-content">{badge}</div>;
                    } 
                    else if (badge === "WIP") {
                        return <div key={badge} className="badge badge-warning text-neutral-content">{badge}</div>;
                    } 
                    else {
                        return null; 
                    }
                })
            }
        </h2>
        <p> {project.desc}</p>
        <div className="card-actions justify-end">
        {project.techBadges.map((badge) => 
            {
                if (badge === "HTML") {
                    return <div key={badge} className="badge badge-outline bg-secondary text-secondary-foreground">{badge}</div>;
                } 
                else if (badge === "CSS") {
                    return <div key={badge} className="badge badge-outline bg-primary">{badge}</div>;
                } 
                else if (badge === "JS") {
                    return <div key={badge} className="badge badge-outline bg-warning">{badge}</div>;
                } 
                else if (badge === "Symfony") {
                    return <div key={badge} className="badge badge-outline  bg-error">{badge}</div>;
                } 
                else if (badge === "React") {
                    return <div key={badge} className="badge badge-outline  bg-info">{badge}</div>;
                } 
                else {
                    return null; 
                }
            })
        }
        </div>
    </div>
</article>

</>   
)  
}

export default Project ;
