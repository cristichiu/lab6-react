import { letters } from "./constants/letters";
import { words } from "./constants/words"
import { useState } from "react";

import { Keyboard } from "./components/Keyboard";
import { Word } from "./components/Word";
import { Hangman } from "./components/Hangman";

function App() {
    const [version, setVersion] = useState(0)
    const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)].split("").map(w => { return { letter: w, state: 1 } }))
    const [stage, setStage] = useState(0)
    const [playState, setPlayState] = useState('playing')
    const [showWord, setShowWord] = useState(false)

    function reset() {
        setVersion(prev => prev+1)
        setWord(words[Math.floor(Math.random() * words.length)].split("").map(w => { return { letter: w, state: 1 } }))
        setStage(0)
        setPlayState('playing')
    }

    function letterClick(letter) {
        if(word.some(s => s.letter === letter)) {
            const newWord = [...word]
            newWord.map(w => {
                if(w.letter === letter) w.state = 2
                return w
            })
            if(!newWord.some(w => w.state == 1)) {
                newWord.map(w => {
                    w.state = 4
                    return w
                })
                setPlayState("won")
            }
            setWord(newWord)
        } else {
            setStage(prev => prev+1)
            if(stage >= 6) {
                const newWord = [...word]
                newWord.map(w => {
                    if(w.state == 1) w.state = 3
                    return w
                })
                setWord(newWord)
                setPlayState("lost")
            }
        }
    }

    return <>
    <div className="flex flex-col items-center gap-10 m-10">
        { playState === 'lost' && <h1 className="text-3xl text-red-600">You lost</h1> }
        { playState === 'won' && <h1 className="text-3xl text-green-600">You won</h1> }
        <Hangman stage={stage}/>
        <Word word={word} />
        { playState === 'playing' && <>
            <Keyboard letterClick={letterClick} letters={letters} version={version} />
            <button className="py-0.5 px-5 border cursor-pointer" onClick={() => setShowWord(!showWord)}> { showWord ? `Hide: ${word.map(w => w.letter).join("")}` : "show word" } </button>
        </>
        }
        { playState !== 'playing' && <button className="text-1xl bg-slate-600 py-1 px-5 text-zinc-100 rounded-md cursor-pointer" onClick={reset}>Try again</button> }
    </div>
    </>;
}

export default App;
