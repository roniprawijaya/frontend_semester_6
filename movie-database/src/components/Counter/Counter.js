// Import useState dari React (desctructing).
import { useEffect, useState } from "react";

function Counter() {
  /**
   * Membuat state menggunakan useState dan set nilai awal 0
   * useState mengembalikan 2 nilai:
   * - Berisi current value: result.
   * - Berisi fungsi untuk mengupdate result: setResult.
   * Melakukan destructing array dari hasil useState
   */
  // const [result, setResult] = useState(0);
  const [angka, setAngka] = useState(0);

  function updateDOM() {
    console.log("Lifecycle: Component dimount");

    document.title = `Hasil: ${angka}`;
  }

  // useEffect( 
  //   function() {
  //   console.log("Lifecycle: Component dimount");

  //   document.title = `Hasil: ${angka}`;
  // }, [angka])
  useEffect(updateDOM, [angka])

  console.log("LifeCycle Component dirender");
  // function handleClick() {
  //   setResult(result + 1);
  // }
  function addAngka() {
    // angka = angka + 1;  
    setAngka(angka + 1);
    console.log(angka);
  }

  return (
    <div>
      {/* <p>Result: {result} </p>
      <button onClick={handleClick}>Add</button> */}
      <p> Hasil : {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;
