import { useState } from "react"
export function Key({ letter, letterClick }) {
    const [isDisable, setIsDisabled] = useState(false)
    function onClick() {
        if(isDisable) return
        setIsDisabled(true)
        letterClick(letter)
    }
    return <>
    <button onClick={onClick} className={`w-10 cursor-pointer h-15 text-3xl border border-slate-500/10 ${isDisable && 'bg-slate-500/30 text-zinc-400 cursor-not-allowed'}`} disabled={isDisable}>{letter}</button>
    </>
}