import Image from 'react-bootstrap/Image'

const AboutMeImg = () =>{
    return(
        <div style={{textAlign:"center"}}>
            
            <Image style={{borderRadius:"38%"}} alt="profilepic" fluid  src={require ("../resources/profile_photo.png")} ></Image>

           

        </div>
    )
}

export default AboutMeImg