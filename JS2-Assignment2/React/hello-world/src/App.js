//import logo from './logo.svg';

import './App.css';
import './appStyles.css'
import styles from './appStyles.module.css'

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import More from './components/More';
import Extra from './components/Extra';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Greet name="Thad" heroName="Wolverine" />
      <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" />
      <Welcome name="Component" heroName="Class Component" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" />
      <Hello />
      <More />
      <Extra />
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <Stylesheet primary={true} />
      <Inline />
      <div className='cardClass3'><p>Regular Stylesheet</p><h1 className='error'>Error</h1></div>
      <div className='cardClass3'><p>CSS Modules</p><h1 className={styles.success}>Success</h1></div>
      <Form />
      <LifecycleA />
      <FragmentDemo />
      <Table />
    </div >
  );
}

export default App;
