import { useState } from 'react';
import { pop, push, pushFront, popFront, reverse, size } from './algorithms';
import { motion } from 'framer-motion';
import LinkedList from './components/LinkedList';
import Styles from './App.module.css';

const initialHead: SLHead = {
  id: '1',
  value: 'Node 1',
  next: {
    id: '2',
    value: 'Node 2',
    next: {
      id: '3',
      value: 'Node 3',
      next: null,
    },
  },
};

function App() {
  const [head, setHead] = useState(initialHead);

  return (
    <>
      <header className={Styles.header}>
        <h1>Linked List</h1>
        <nav className={Styles.nav}>
          <motion.button
            onClick={() => push(head, setHead, `Node ${size(head) + 1}`)}
          >
            Push
          </motion.button>
          <motion.button
            initial={{ y: -50 }}
            animate={{ y: 0, transition: { delay: 0.1 } }}
            onClick={() => pop(head, setHead)}
          >
            Pop
          </motion.button>
          <motion.button
            onClick={() => pushFront(head, setHead, `Node ${size(head) - 1}`)}
          >
            Push Start
          </motion.button>
          <motion.button
            initial={{ y: -50 }}
            animate={{ y: 0, transition: { delay: 0.2 } }}
            onClick={() => popFront(head, setHead)}
          >
            Pop Start
          </motion.button>

          <motion.button
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            onClick={() => setHead(reverse(head))}
          >
            Reverse
          </motion.button>
        </nav>
      </header>
      <main className={Styles.main}>
        <LinkedList head={head} setHead={setHead} />
      </main>
    </>
  );
}

export default App;
