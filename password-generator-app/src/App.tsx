import { useState } from 'react'
import CheckBox from './components/CheckBox'
import InputRange from './components/InputRange'
import OutputPassword from './components/OutputPassword'
import PasswordStrength from './components/PasswordStrength'
import './index.css'

function App() {

  const [passwordLength, setPasswordLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState(0);




  function handleGeneratePassword(length: number,
    options: {
      uppercase: boolean;
      lowercase: boolean;
      numbers: boolean;
      symbols: boolean;
    }
  ) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~';

    let charPool = '';
    if (options.uppercase) charPool += uppercase;
    if (options.lowercase) charPool += lowercase;
    if (options.numbers) charPool += numbers;
    if (options.symbols) charPool += symbols;

    const level =
      Number(includeUppercase) +
      Number(includeLowercase) +
      Number(includeNumbers) +
      Number(includeSymbols);

    setStrength(level);

    if (!charPool) return ''; // nada selecionado

    let password = '';
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randIndex];
    }

    return password;
  }



  function handleCheckBoxChange(type: string) {
    switch (type) {
      case 'uppercase':
        setIncludeUppercase(!includeUppercase);
        break;
      case 'lowercase':
        setIncludeLowercase(!includeLowercase);
        break;
      case 'numbers':
        setIncludeNumbers(!includeNumbers);
        break;
      case 'symbols':
        setIncludeSymbols(!includeSymbols);
        break;
      default:
        break;
    }
  }



  return (


    <main className='md:w-[540px] md:h-[700px] flex flex-col items-center'>
      <p className='text-[16px] font-bold text-Grey-600 mt-10 md:text-[22px]'>Password Generator</p>

      <OutputPassword password={password} className='mt-2' />

      <div className='card bg-Grey-800 w-full mt-3 px-3 md:h-[530px] md:px-6'>

        <InputRange className='md:mt-3' onValueChange={setPasswordLength} />

        <div className='list'>
          <CheckBox
            className='mt-4 md:mt-6'
            checked={includeUppercase}
            onChange={() => handleCheckBoxChange('uppercase')}
            label='Include Uppercase Letters'
          />

          <CheckBox
            className='mt-2'
            checked={includeLowercase}
            onChange={() => handleCheckBoxChange('lowercase')}
            label='Include Lowercase Letters'
          />

          <CheckBox
            className='mt-2'
            checked={includeNumbers}
            onChange={() => handleCheckBoxChange('numbers')}
            label='Include Numbers'
          />

          <CheckBox
            className='mt-2'
            checked={includeSymbols}
            onChange={() => handleCheckBoxChange('symbols')}
            label='Include Symbols'
          />

        </div>

        <div className='flex items-center justify-between mt-7 bg-Grey-850 py-2 px-2'>
          <p className='text-[14px] md:text-[18px] font-bold uppercase text-Grey-600'>Strength</p>
          <PasswordStrength strength={strength} />
        </div>

        <button
          aria-label='Generate password'
          onClick={() => {
            const password = handleGeneratePassword(passwordLength, {
              uppercase: includeUppercase,
              lowercase: includeLowercase,
              numbers: includeNumbers,
              symbols: includeSymbols
            });
            setPassword(password)
          }}
          className="lg:hover:bg-Grey-800 lg:hover:border lg:hover:border-Green-400 lg:hover:text-Green-400 py-2 px-4  my-3 w-full bg-Green-400 text-[16px] md:text-[18px] md:mt-6 cursor-pointer font-bold text-Grey-800 uppercase flex items-center justify-center gap-2">
          Generate
          <span>
            <img src="/icon-arrow-right.svg" alt="" />
          </span>
        </button>
      </div>
    </main>



  )
}

export default App
