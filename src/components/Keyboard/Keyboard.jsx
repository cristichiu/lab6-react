import { Key } from "../Key"
export function Keyboard({ letters, version, letterClick }) {
    return <>
    <div className="flex flex-wrap gap-3 justify-center max-w-xl">
        {letters.map(l => {
            return <Key letterClick={letterClick} key={`${l + version}`} letter={l} />
        })}
    </div>
    </>
}