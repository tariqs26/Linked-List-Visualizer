import { listToArray } from '../algorithms';
import Node from './Node';
import Styles from './LinkedList.module.css';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  head: SLHead;
  setHead: React.Dispatch<React.SetStateAction<SLHead>>;
};

const LinkedList: React.FC<Props> = ({ head }) => {
  return (
    <>
      <motion.div className={Styles.linkedList}>
        <AnimatePresence mode='popLayout' initial={false}>
          {head &&
            listToArray(head).map((node) => (
              <Node key={node.id} value={node.value} next={node.next} />
            ))}
          <Node key='null' value='Null' isNull/>
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default LinkedList;
