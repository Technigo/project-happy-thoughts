import React from "react"

const Navigation = ({ thoughts, previousPage, startIndex, nextPage, endIndex }) => {
//     const [thought, setThought] = useState([])
//     const [page, setPage] = useState(1)
//     const [postPerPage] = useState(20)
    
//     useEffect(() => {
//         fetch(API_URL)
//           .then((res) => res.json())
//           .then((json) => {
//             setThought(json.results)
//           })
//       }, [])
    
//   const endIndex = page * postPerPage
//   const startIndex = endIndex - postPerPage
//   const currentPage = thought.slice(startIndex, endIndex)
  
//   // change page
//   // const paginate = pageNumber => setPage(pageNumber)


//   const nextPage = () => {
//     setPage(page + 1)
//   }
//   const previousPage = () => {
//     setPage(page - 1)
//   }


  return (
    <div className="thought-wrapper">
        <button
          type="button"
          onClick={previousPage} 
          disabled={startIndex <= 0}>Previous Page</button>
          <button
          onClick={nextPage}
          disabled={endIndex > thoughts.length}
          >Next Page</button>
    </div>
  )
}


export default Navigation