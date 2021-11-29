import './App.css';

const Data = [
  {
    title: "FREE",
    price: "0",
    users: "✔️ Single User",
    storage: "✔️ 5GB Storage",
    Public: "✔️ Unlimited Public Projects",
    access: "✔️ Community Access",
    Private: "❌ Unlimited Private Projects",
    Support: "❌ Dedicated Phone Support",
    Subdmain: "❌ Free Subdomain",
    Monthly: "❌ Monthly Status Reports",
  },
  {
    title: "PLUS",
    price: "9",
    users: "✔️ 5 User",
    storage: "✔️ 50GB Storage",
    Public: "✔️ Unlimited Public Projects",
    access: "✔️ Community Access",
    Private: "✔️ Unlimited Private Projects",
    Support: "✔️ Dedicated Phone Support",
    Subdmain: "✔️ Free Subdomain",
    Monthly: "❌ Monthly Status Reports",
  },
  {
    title: "PRO",
    price: "49",
    users: "✔️ 5 User",
    storage: "✔️ 150GB Storage",
    Public: "✔️ Unlimited Public Projects",
    access: "✔️ Community Access",
    Private: "✔️ Unlimited Private Projects",
    Support: "✔️ Dedicated Phone Support",
    Subdmain: "✔️ Unlimited Free Subdomain",
    Monthly: "✔️ Monthly Status Reports",
  },
];

function App() {
  return (
    <div className="App">
      {Data.map((ele, i) => (
        <Card
          key={i}
          title={ele.title}
          price={ele.price}
          users={ele.users}
          storage={ele.storage}
          Public={ele.Public}
          access={ele.access}
          Private={ele.Private}
          Support={ele.Support}
          Subdmain={ele.Subdmain}
          Monthly={ele.Monthly}
        />
      ))}
    </div>
  );
  function Card({title,price,users,storage,Public,access,Private,Support,Subdmain,Monthly}) {
    return (
      <div className="container">
        <h4 className="h">{title}</h4>
        <h1>
          ${price} <span>/month</span>{" "}
        </h1>
        <hr></hr>
        <div className="offers">
          <h3>{users}</h3>
          <h3>{storage}</h3>
          <h3>{Public}</h3>
          <h3>{access}</h3>
          <h3>{Private}</h3>
          <h3>{Support}</h3>
          <h3>{Subdmain}</h3>
          <h3>{Monthly}</h3>
        </div>
        <button>BUTTON</button>
      </div>
    );
  }
}


export default App;
