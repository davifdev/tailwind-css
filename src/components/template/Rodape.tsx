export interface RodapeProps {
  className?: string;
}

export function Rodape(props: RodapeProps) {
  return (
    <footer className={`bg-purple-500 ${props.className ?? ""}`}>
      <h2>Footer</h2>
    </footer>
  );
}
