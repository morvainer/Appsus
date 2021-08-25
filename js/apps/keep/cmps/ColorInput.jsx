export function ColorInput({ handleChange }) {
  const colors = ['#FFAEBC', '#A0E7E5', '#B4F8C8', '#FBE7C6'];
  return (
    <section className='color-input'>
      <section className='input-container'>
        {colors.map((color) => (
          <article
            key={color}
            onClick={() => handleChange(color)}
            className='input-pick'
          ></article>
        ))}
      </section>
    </section>
  );
}
