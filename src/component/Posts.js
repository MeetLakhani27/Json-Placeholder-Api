import { useEffect , useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';



export default function Posts() {
  
  const [Posts ,setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {

        setPosts(response.data);
      })
      .catch(function (error) {
        setPosts(error);
      })
  })
  
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Title</th>
          </tr>
          {
            Posts.map((ele)=>{
              return(
                <tr>
                  <td>{ele.id}</td>
                  <td>{ele.title}</td>
                  <td>{ele.body}</td>
                </tr>
              )
            })
          }
        </thead>
      </Table>
    </>
  )
}
