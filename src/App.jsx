import react from 'react';
import Greet from './Greet';
import MyHeading from './MyHeading';
import MyPara from './MyPara';
import {sum,sub,mul,div} from './Calculator';
function App() {
    return(
        // <>
        // <MyHeading></MyHeading>
        // <MyPara></MyPara>
        // <Greet></Greet>
        // </>
        <>
            <ol>
                <li>Sum= {sum(6,2)}</li>
                <li>Diff= {sub(6,2)}</li>
                <li>Mul= {mul(6,2)}</li>
                <li>Div= {div(6,2)}</li>
            </ol>
        </>
    )
}

export default App;