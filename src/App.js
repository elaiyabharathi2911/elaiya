import logo from './logo.svg';
import './App.css';
import Elaiya from "./component/Elaiya";
import MemoReact from "./component/MemoReact";
import Operations from "./component/Operations";
import ErrorBoundary from "./component/ErrorBoundry";
import ComponentInput from "./component/ComponentInput";
import ForwardRef from "./component/ForwardRef";
import ProductInformation from "./component/ProductInformation";
import EventBind from "./component/EventBind";
import withCounter from "./component/withCounter";
import ChildLifeCycleComponet from "./component/ChildLifeCycleComponet";
import ClickCounter from "./component/ClickCounter";
import Counter1 from "./HooksComponent/Counter1";
import ComponentF from "./HooksComponent/ComponentF";
import ComponentD from "./HooksComponent/ComponentD";
import ComponentE from "./HooksComponent/ComponentE";
import Counter2 from "./HooksComponent/Counter2";
import Counter3 from "./HooksComponent/Counter3";
import Counter4 from "./HooksComponent/Counter4";
import DataFetching from "./HooksComponent/DataFetching";
import ComponentX from "./HooksComponent/ComponentX";
import ComponentY from "./HooksComponent/ComponentY";
import ComponentZ from "./HooksComponent/ComponentZ";












const bharathi={
  background:"url("+ "https://i.pinimg.com/originals/36/db/77/36db77ba1af872f131214f0ac9dcff7f.jpg" + ")",
}

function App() {
  return (
    <body style={bharathi}>
    <div className="App">
      <h1>ELAIYA BHARATHI</h1>
      {/*<Elaiya/>
      <MemoReact/>
    
      <Operations/>
      <ComponentInput/>
      <ForwardRef/>
      <withCounter/>
      <ChildLifeCycleComponet/>
      <ClickCounter/>
      <Counter1 />
      <ComponentF/>
      <ComponentD/>
      <ComponentE/>
      <Counter2/>
      <Counter3/>
      <Counter4/>
      <DataFetching/>
      <ComponentX/>
      <ComponentY/>
      <ComponentZ/>
      <ErrorBoundry/>
      <ProductInformation/>*/}
      <EventBind/>
  
       
     
    </div>
    </body>
  );
}

export default App;
