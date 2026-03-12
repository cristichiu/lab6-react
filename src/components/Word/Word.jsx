import { Letter } from "../Letter"
export function Word({ word }) {
    return <>
        <div className="flex gap-2">
        {
            word.map((w, i) => {
                return <Letter key={w + i} state={w.state} letter={w.letter} />
            })
        }
        </div>
    </>
}