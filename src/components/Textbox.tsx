export default function Textbox({ side }: { side: string }) {
  return (
    <div className={`textbox ${side}`}>
      <textarea
        className="textarea"
        autoCorrect="off"
        minLength={10}
        maxLength={2000}
        placeholder="your argument"
        required
      ></textarea>
    </div>
  );
}
