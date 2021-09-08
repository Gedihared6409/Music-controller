import {useEffect} from 'react';

const Navbar = () => {
    console.log('ali')
    useEffect(() => {
        fetch('http://127.0.0.1:8000/')
        
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data)
            
          })
      }, [])
    return (  
        <>
        <h1>this is navbar</h1>
        </>
    );
}
 
export default Navbar;