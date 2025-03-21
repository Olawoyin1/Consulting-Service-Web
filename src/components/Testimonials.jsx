import React from 'react'

const Testimonials = () => {
  return (
    <div>
        <div className="comp-header d-flex align-items-center justify-content-center flex-column text-center">
            <h4>Testimonials and Feedback</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quibusdam id a accusamus molestiae nam voluptatibus doloremque optio cum assumenda?</p>
        </div>

        <div className="testimonials grid1 py-5">
            <div className="testimonial-card">
                <div className="test-header d-flex align-items-center gap-2">
                    <img src="../../Images/t-10.jpg" className='test-user' alt="" />
                    <div className="details d-flex flex-column">
                        <h5>Olawoyin Gbolahan</h5>
                        <p>somthing here</p>
                    </div>
                </div>
                <div className="test-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consectetur quia illo quo nulla consequuntur tempore blanditiis dignissimos nam modi veritatis voluptate dolorum, sapiente amet quaerat quisquam laboriosam repudiandae quam.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials