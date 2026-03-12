export function Letter({ letter, state }) {
    return <>
    <div className={`
        text-3xl w-10 h-10 flex justify-center items-center
        ${state == 1 && 'border-b-3 border-b-slate-800'}
        ${state == 2 && 'text-slate-700'}
        ${state == 3 && 'text-red-700'}
        ${state == 4 && 'text-green-700'}
    `}>{state > 1 && letter}</div>
    </>
}