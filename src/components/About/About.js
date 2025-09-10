import './About.css'
import React from 'react';

function About () {

    return(
        <div className='About'>
            <h2>About Simon</h2>
            <div className='aboutcontent'>
                <p id='abouttext'>Simon discovered his passion for drawing and painting at an early age. As a child and teenager, he would spend hours observing, sketching, and exploring colors. Over time, this passion was set aside, eclipsed by other priorities in life.
        <br/>
In his early thirties, he felt the need to reconnect with artistic creation. He started again with drawing, rediscovering the joy of lines, shapes, and shadows. Gradually, this revival led him to painting, which has since become central to his practice.
<br/>
Today, Simon mainly creates plein air paintings inspired by the landscapes around him, as well as still lifes. Flowers hold a special place in his work, offering an endless field of experimentation between fragility, light, and the intensity of colors.
<br/>
Now 38, married and living in Hamburg, Simon continues his artistic journey with sincerity and curiosity. Each canvas is for him a way to share his perspective on the world and to invite others to pause and contemplate.</p>
                <img id='aboutimg' src='https://media.licdn.com/dms/image/v2/D4E35AQHA7FkDSSiq9w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1736840884916?e=1757678400&v=beta&t=lt0zldf_X8ygqstG0w82vqzQZqPiuF65zbz3HYVEZCY' width='200'></img>
            </div>
        </div>
    )
}

export default About;