
interface PasswordStrengthProps {
    strength: number;
}

export default function PasswordStrength({ strength }: PasswordStrengthProps) {



    const getStrengthLabel = (strength: number) => {
        switch (strength) {
            case 1:
                return { className: 'bg-Red-500', text: 'Too Weak!' };
            case 2:
                return { className: 'bg-Orange-400', text: 'Weak' };
            case 3:
                return { className: 'bg-Yellow-300', text: 'Medium' };
            case 4:
                return { className: 'bg-Green-400', text: 'Strong' };
            default:
                return { className: '', text: '' };
        }
    };
    const { className, text } = getStrengthLabel(strength);

    return (
        <>

            {/* <p className='text-[14px] font-bold uppercase text-Grey-200' >{getStrengthLabel(strength)}</p> */}


            <div className="flex items-center  gap-[6px]">
                <p className='text-[14px] md:text-[18px] font-bold uppercase text-Grey-200 mr-2' >{text}</p>

                {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-2 h-6 border border-white ${i < strength ? className : ''}`}></div>
                ))}
            </div>



        </>
    )
}