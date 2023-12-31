import { Button } from "./Button";

export default function Textbox({
  side,
  handleCancel,
}: {
  side: string;
  handleCancel: Function;
}) {
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
      <button className="cancelButton" onClick={(e) => handleCancel(e)}>
        cancel
      </button>
    </div>
  );
}
