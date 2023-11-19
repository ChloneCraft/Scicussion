export default function AddArgumentButton({
  name,
  addBox,
}: {
  name: string;
  addBox: Function;
}) {
  return (
    <div>
      <button className={name} onClick={() => addBox}>
        Add <br />
        Argument
      </button>
    </div>
  );
}
