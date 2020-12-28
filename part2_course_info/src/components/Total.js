const Total = ({course}) => {


    const sum = course.parts.reduce(
        (a, c) => {
            return a + c.exercises  // the first call a = initial value
        }, 0  // initial value of sum is zero
    )

    return (
        <p><strong>Total of {sum} exercises</strong></p>
    )
}
export default Total