import { useState } from 'react';
import { pop, push, pushFront, popFront, reverse, size } from './algorithms';
import LinkedList from './components/LinkedList';
import Styles from './App.module.css';

const initialHead: SLHead = {
  id: '1',
  value: 1,
  next: {
    id: '2',
    value: 2,
    next: {
      id: '3',
      value: 3,
      next: null,
    },
  },
};

export default function App() {
  const [head, setHead] = useState(initialHead);

  return (
    <>
      <header className={Styles.header}>
        <h1>Linked List</h1>
        <nav className={Styles.nav}>
          <button onClick={() => push(head, setHead, size(head) + 1)}>
            Push
          </button>
          <button onClick={() => pop(head, setHead)}>Pop</button>
          <button onClick={() => pushFront(head, setHead, size(head) - 1)}>
            Push Start
          </button>
          <button onClick={() => popFront(head, setHead)}>Pop Start</button>
          <button onClick={() => setHead(reverse(head))}>Reverse</button>
        </nav>
      </header>
      <main className={Styles.main}>
        <LinkedList head={head} />
      </main>
    </>
  );
}
