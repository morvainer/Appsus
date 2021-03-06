export function ColorInput({ handleChange }) {
  const colors = ['#FFAEBC', '#A0E7E5', '#B4F8C8', '#FBE7C6'];
  return (
    <section className='colors-container'>
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => handleChange(color)}
          className='input-pick'
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </section>
  );
}
