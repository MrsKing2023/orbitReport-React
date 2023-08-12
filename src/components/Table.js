const Table = ({ sat }) => {
  return (
  <table>
   <thead>
     <tr>
        <th>{data.Name}, {data.TypeofSatellite}, {data.LaunchDate}, {data.Status}</th>
         </tr> set key equal to the id, there are 10 keys to access, maybe 0-10 index?
         </thead>
         <tbody>
         <tr>
           <td>{data.id}, {data.name}, {data.type},{data.launchDate},{data.orbitType} , {data.operational} </td>
         </tr>
         </tbody>
       </table>
   );
 };

 export default Table;