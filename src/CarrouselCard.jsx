import React, { useEffect } from 'react';

function CarrouselCard({card}) {
  
return (
<>
{/* TODO tester de mettre des marges bottom custom pour chaque card en mettant des props */}
{/* TODO essayer de grandir le container du carrousel pour que l'image et la bulle puisse tenir dedant et que je puisse mettre la bulle plus haut
pn qd c e petit ecran , la hauteur est trop grande... */}

{/*paddings responsive ms peut etre pas utilies car pt-1 pb-1 sm:pt-20 md:pt-20 lg:pt-20 xl:pt-20 2xl:pt-20  */}
<div className="
h-[50dvh] sm:h-[60dvh] md:h-[60dvh] lg:h-[60dvh] xl:h-[60dvh] 2xl:h-[60dvh] 
carousel-item bg-fuschia-500 mx-auto min-w-[80dvw] max-w-full overflow-visible">
    <div className="relative mx-auto w-[50dvw] overflow-visible h-[50dvh] sm:h-[60dvh] md:h-[60dvh] lg:h-[60dvh] xl:h-[60dvh] 2xl:h-[60dvh] 
" >
        <img src={card.img} alt={card.alt}  
        className="w-auto mt-10 mb-5 mx-auto relative p-0 z-0 border-4 
            border-pink-100 rounded-xl max-h-[50dvh] "/>
        {/* Bulle de droite, cachée pour petit écran */}
        <div className=" 
        hidden
        sm:block md:block lg:block xl:block 2xl:block
        mx-auto chat chat-start absolute left-[70%] bottom-[60%] z-6 min-w-full">
            <div className="chat-bubble chat-bubble-primary w-[20dvw] z-40 text-gray-300 overflow-visible ">
                <p className="text-center py-1 ">{card.mainBubbleText1}</p>  
                <p className="text-center py-1"> {card.mainBubbleText2}</p>
            </div>
        </div>
        {/* Affichage du contenu de la bulle, sous l'image, pour petit écran */}
        <div className="absolute text-center bottom-0 z-index-50 p-2 max-h-20 min-w-full rounded-xl    
        sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden bg-[#4A00FF]">
            <p className="text-center py-1 text-white ">{card.mainBubbleText1}</p>  
            <p className="text-center py-1  text-white "> {card.mainBubbleText2}</p>
        </div>

        {/* Bulle de pensée à gauche */}
        {/* <div className="max-w-[80dvw] chat chat-start absolute right-36 top-2 overflow-visible z-30 min-w-full">
            <div className="think-bubble  min-w-[10dvw] max-w-[20dvw] absolute  ">
                <div className="think-bubble-baby-1 relative "></div>
                <div className="think-bubble-baby-2"></div>
                <p className="text-center py-1 ">Hum toi t'es pas Laure !</p>  
                <p className="text-center py-1"> T'es Internet...</p>
            </div>
        </div> */}
    </div>
</div>
    </>
)}

export default CarrouselCard ;

// {
//     "img": "src/images/avatars/internet.png",
//     "mainBubbleText1": "Bonjour ! Je suis Laure !",
//     "mainBubbleText2": "A votre service !",
//     "thinkBubbleText1": "Hum toi t'es pas Laure !",
//     "thinkBubbleText2": "T'es Internet...",
//     "thinkBubbleBaby1": "think-bubble-baby-1",
//     "thinkBubbleBaby2": "think-bubble-baby-2"

// }