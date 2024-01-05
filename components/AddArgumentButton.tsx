export default function AddArgumentButton({
  name,
  addBox,
}: {
  name: string;
  addBox: Function;
}) {
  return (
    <div>
      <button className={name} onClick={(e) => addBox(e, name)}>
        Add <br />
        Argument
      </button>
    </div>
  );
}
