import Pic from "../resources/profilePicture.png"
// import Image from 'react-bootstrap/../../src/resources/profilePicture.png'

import {Image} from "react-bootstrap"



const Profile = () =>{
    return(
        <body>

        <head>
            <link rel="stylesheet" href=""/>
        </head>

            <h1>
                Profile Component
            </h1>

            <img src={Pic} alt="" className='img-fluid rounded thumbnail' style={{width: "300px"}}/>
            
            
            <img
      src={Pic}
        className='img-fluid rounded'
      alt='...'
    />

        </body>
    )

}

export default Profile