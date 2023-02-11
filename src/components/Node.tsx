import { motion } from 'framer-motion';
import styles from './Node.module.css';

type Props = {
  value: string;
  next?: string | null;
  isNull?: boolean;
};

const Node: React.FC<Props> = ({ value, next, isNull }) => {
  return (
    <>
      <motion.div
        layout
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
      >
        <p className={styles.node}>{value}</p>
        {!isNull && <p className={styles.next}>next: {next ?? 'Null'}</p>}
      </motion.div>
    </>
  );
};

export default Node;
