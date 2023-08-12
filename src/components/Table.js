const Table = ({ sat }) => {
  return (
  <table>
   <thead>
     <tr>
        <th>Name</th>
        <th>Type of Satellite</th>
        <th>Launch Date</th>
        <th>Status</th>
         </tr> 
         </thead>
         <tbody>
         <tr>
           <td> {data.operational ? "Active" : "Inactive"} </td>
         </tr>
         </tbody>
       </table>
   );
 };

 export default Table;