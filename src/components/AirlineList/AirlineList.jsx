import { useSelector } from 'react-redux';

function AirlineList() {
    const airlines = useSelector(store => store.airlines)

    return (
    <>
        <table>
          <thead>
            <tr>
                <th>List of Airlines</th>
            </tr>
          </thead>
          <tbody>
           
              {airlines.map((line, index) => (<tr key={index}>{line}</tr>))}
            
          </tbody>

        </table>
    </>
    )
}

export default AirlineList