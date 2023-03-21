
import './App.css';

  const singers = [
    {name: 'Dr.Mahafuz', job: 'singer'},
    {name: 'Eva Rahman', job: 'singer2'},
    {name: 'Augn', job: 'sopno'},
    {name: 'Shovro', job: 'pathor'},
  ]

function App() {
  const nayoks = ['Rubel','Baparaz','kuber','jasim','shalman shah','Riyaz','Razzak'];
  return (
    <div className="App">  
      {
        nayoks.map(nayok => <li>name: {nayok}</li>)
      }

       {/* {
         nayoks.map(nayok => <Person name={nayok}></Person>)
       } */}

       {
        singers.map(singer => <Person name={singer.name}></Person>)
       }
      
        {/* <Person name={nayoks[0]} nayka= 'mousumi'></Person>  
        <Person name= {nayoks[1]} nayka = 'cheka'></Person>  
        <Person name= {nayoks[2]} nayka ='kopila'></Person>             */}
        <h5>New: componet. YaY</h5>
        <p>rock mama React mama</p>
        <Friend movie='shingam' phone='01777'></Friend>
        <Friend movie="kopa" phone='01999'></Friend>
    </div>
  );
}

function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayka}</p>
      {/* <p>{props.name}</p>  */}
  </div>
  )
}
  function Friend(props){
    return (
      <div className='container'>
          <h3>Name: {props.movie}</h3>
          <p>number: {props.phone}</p>
      </div>
    )
  }


export default App;
