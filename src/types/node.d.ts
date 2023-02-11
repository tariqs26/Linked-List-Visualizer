type SLNode = {
  id: string;
  value: string;
  next: SLNode | null;
};

type SLHead = SLNode | null;

type SLSetHead = React.Dispatch<React.SetStateAction<SLHead>>;
