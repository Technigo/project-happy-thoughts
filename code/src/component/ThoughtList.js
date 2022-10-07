
/* This Component is used to fetch happy thought API with 
1) existing list of thoughts 
2) likes counts
3) get timestamp  */

const ThoughtList = ({ thoughtList, loading }) => {
    //p tag is returned is loading is true 
    if (loading) {
        return <p className="loading">loading in progress...</p>
    }
    
    return ( 
    <>
    
    </> );
}
 
export default ThoughtList;