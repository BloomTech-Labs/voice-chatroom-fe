import React from 'react'
import thread from '../assets/thread.jpg'
import mentor from '../assets/mentorpair.png'

import '../../sass/homepage.scss'

const Homepage = () => {

    return (
        <section className="home">

            <div className="hometop">
                <h3>Welcome to Wyzer Mentoring</h3>
                <h3 className="what">
                    What is Mentoring?   
                </h3>
                <img className="thread" src={thread} alt="" />
            </div>

            <div className="midhome">
                
            </div>
    
            <div>
               <div className="box">
                    <p>Sed dolor ex, sodales ornare sem id, tempus faucibus sapien. 
                    Aenean dapibus justo metus, at rutrum purus dignissim in. Donec neque dolor, laoreet eget diam id, ultricies blandit lectus. 
                    Etiam et facilisis massa. Ut sem dolor, accumsan non ipsum et, vestibulum viverra quam. Etiam euismod dolor vitae sagittis elementum. Nulla dapibus bibendum odio, sit amet faucibus ante mattis imperdiet.
                    </p>
                    <p>Sed dolor ex, sodales ornare sem id, tempus faucibus sapien. 
                    Aenean dapibus justo metus, at rutrum purus dignissim in. Donec neque dolor, laoreet eget diam id, ultricies blandit lectus. 
                    Etiam et facilisis massa. Ut sem dolor, accumsan non ipsum et, vestibulum viverra quam. Etiam euismod dolor vitae sagittis elementum. Nulla dapibus bibendum odio, sit amet faucibus ante mattis imperdiet.
                    </p>
                    <p>Sed dolor ex, sodales ornare sem id, tempus faucibus sapien. 
                    Aenean dapibus justo metus, at rutrum purus dignissim in. Donec neque dolor, laoreet eget diam id, ultricies blandit lectus. 
                    Etiam et facilisis massa. Ut sem dolor, accumsan non ipsum et, vestibulum viverra quam. Etiam euismod dolor vitae sagittis elementum. Nulla dapibus bibendum odio, sit amet faucibus ante mattis imperdiet.
                    </p>
                </div>
            </div>

            <h3 className="midhome">Why Wyzer?</h3>
            <div className="box">
                <p>Sed dolor ex, sodales ornare sem id, tempus faucibus sapien. 
                   Aenean dapibus justo metus, at rutrum purus dignissim in. Donec neque dolor, laoreet eget diam id, ultricies blandit lectus. 
                   Etiam et facilisis massa. Ut sem dolor, accumsan non ipsum et, vestibulum viverra quam. Etiam euismod dolor vitae sagittis elementum. Nulla dapibus bibendum odio, sit amet faucibus ante mattis imperdiet.
                </p>
                <img className="mentor" src={mentor} alt=""/>
                <p>Sed dolor ex, sodales ornare sem id, tempus faucibus sapien. 
                   Aenean dapibus justo metus, at rutrum purus dignissim in. Donec neque dolor, laoreet eget diam id, ultricies blandit lectus. 
                   Etiam et facilisis massa. Ut sem dolor, accumsan non ipsum et, vestibulum viverra quam. Etiam euismod dolor vitae sagittis elementum. Nulla dapibus bibendum odio, sit amet faucibus ante mattis imperdiet.
                </p>
            </div>
            <h3 className="midhome">
                Give Us A Try!
            </h3>
        </section>
    )

}

export default Homepage