import React from 'react'
import image from "../pages/images/image.jpg"


const About = () => {
  return (
    <div className='pt-[8vh] bg-gradient-to-l from-blue-400 to-blue-200 h-[100vh]'>
        <div className="flex justify-between m-auto px-10 py-17 max-w-[90%]">
            <div className="w-[40%] h-130">
                <h1 className='text-center text-blue-500 font-bold text-4xl'>About Us</h1>
            <p className='text-white font-semibold text-center py-4'>We are a software development team, that creates websites that suites every use cases, in fact everything that exists voluptatem quidem, officia nisi sint iste temporibus velit impedit repellendus debitis accusantium beatae dolore est, odio tenetur quaerat fuga omnis quas eligendi adipisci optio vel. Quia modi est quo veritatis molestias necessitatibus voluptate voluptas nesciunt quae aliquid quibusdam tempore natus omnis, sint facere impedit sapiente doloremque minus? Eius voluptates quaerat facere et dicta, distinctio aperiam nemo reprehenderit blanditiis perspiciatis voluptatem vel, placeat hic, ipsam mollitia fuga? Voluptates atque nemo earum praesentium sint natus cumque et reprehenderit commodi, tempora vel sapiente saepe laboriosam iusto blanditiis culpa iure. Repellendus architecto vero amet sapiente ipsum eligendi, nostrum consequatur velit inventore sit laudantium! Dolorem quos maiores accusamus rem quia provident ipsa et voluptatum cumque aspernatur. Aspernatur, culpa, magnam atque autem at quia beatae id, unde eligendi perferendis odio impedit dolor officia ad velit necessitatibus assumenda sunt iste optio? Excepturi perspiciatis voluptatum quis officiis inventore.</p>
            </div>
            <div className="w-[40%]">
                <img src={image} alt="" className='h-[100%] w-110'/>
            </div>
        </div>
    
        <footer>
            <div className="text-center p-4 bg-blue-600 text-white">
                &copy; 2025 Web Development. All rights reserved.
            </div>
        </footer>
    </div>
  )
}

export default About;