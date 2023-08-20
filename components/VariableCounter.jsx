import { decrement, increment } from "@/redux/counter/actionCreators";
import { dyDecrement, dyIncrement } from '@/redux/dynamicCounter/dynamicActionCreator'
import { connect } from "react-redux";


function VariableCounter({ count, increment, decrement }) {


    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}


// connect to store its higher order components
const mapStateToProps = (state, ownProps) => {

    return {
        count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: ownProps.dynamic ? (value) => dispatch(dyIncrement(5)) : () => dispatch(increment()),

        decrement: ownProps.dynamic ? (value) => dispatch(dyDecrement(2)) : () => dispatch(decrement())
    }
}
// A higher order components take a components as a a parameter and return a new components

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
