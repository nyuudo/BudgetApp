//Define types fo props
type CheckBoxProps = {
  label: string;
  fee: number;
  checkboxSelectedId: (id: number, checked: boolean) => void;
  id: number;
};

const Checkbox = ({ label, fee, checkboxSelectedId, id }: CheckBoxProps) => {
  return (
    <form>
      <input
        type="checkbox"
        onChange={(e) => checkboxSelectedId(id, e.target.checked)}
        //onChange={(e) => console.log(e.target.checked)}
      />
      <label>
        {label} ({fee}€)
      </label>
    </form>
  );
};
export default Checkbox;
