import JSXDemo from './JSXDemo';

import ButtonWithLogging from './ButtonWithLogging';

import DataLoader from './DataLoader';
import withTimestamp from './withTimestamp';
import Message from './Message';
import FilteredList from './FilteredList';

const MessageWithTimestamp = withTimestamp(Message);

 function App() {
  const names = ['Ana', 'Bob', 'Charlie', 'David'];
   return (
     <div>
       <h1>TP JSX et Composition</h1>
       <DataLoader
         render={(data) => (
           <ul>
             {data.map((name) => (
               <li key={name}>{name}</li>
             ))}
           </ul>
         )}
       />
       <h1>HOC Timestamp</h1>
       <MessageWithTimestamp text="Bonjour le monde !" />
       <h1>Render Props Filtrage</h1>
             <FilteredList
               items={names}
               render={(filtered) => (
                 <ul>
                   {filtered.map(name => (
                     <li key={name}>{name}</li>
                   ))}
                 </ul>
               )}
             />
     </div>
   );
 }

 export default App;