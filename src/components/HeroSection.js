import hero from '../ass/images/Frame 1000003374.png';

function HeroSection() {
  const heroImageStyle = {
    width: '100%', // Make the image fill the container width
    maxHeight: '250px', // Set a maximum height for the image
    objectFit: 'cover', 
  };

  return (
    <>
      <div className='heroArea'>
        <img src={hero} alt='hero' style={heroImageStyle} />
      </div>
    </>
  );
}

export default HeroSection;
