interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // Other props...
}

export function Button({ onClick, ...rest }: ButtonProps) {
  return <button onClick={onClick} {...rest} />;
}
