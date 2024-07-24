
export default function Input({typeOfInvestment, name, setUserInput}){
    let property = name.split('-');
    if(property.length > 1) property[1] = property[1][0].toUpperCase() + property[1].substring(1);
    property = property.join('')
    return(
        <div>
            <label htmlFor={name}>{name}</label>
            <input min={0} type="number" id={name} value={typeOfInvestment} onChange={(e) => {
                const val = e.target.value;
                setUserInput((pre) => ({...pre, [property] : +val}));
            }}/>
        </div>
    );
}