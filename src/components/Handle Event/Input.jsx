export default function Input() {
  return (
    <>
      <input
        name="name"
        onChange={(event) => console.log(event.target.value)}
      />
    </>
  );
}
