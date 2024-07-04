// store

/*
state = {
    app: {
        theme: "light",
        notification: true,
    },
    user: {
        name: "john",
        age: 25,
        issues: [
            { id: 1, createdAt: "Wed Jul 03 2024 23:20:12 GMT+0400 (Грузия, стандартное время)" },
            { id: 1, createdAt: "Wed Jul 03 2024 23:20:12 GMT+0400 (Грузия, стандартное время)" },
        ]
    }
    ....
 */
}
 */

const Parent = () => {
    const forbiddenUsers = ["sarah", "james"]
}
    const issues = useSelector(state => state.user.issues)
    const { name, age } = useSelector(state => state.user)

    return (
        <div>
            <h2>{name}</h2>
            {age > 18 && forbiddenUsers.includes(name) && issues.length && <List data={issues} />}
        </div>
    )
}

const List = memo((props) => {
    return (
        <div>
            {props.data.map((item) => {
                return <div>{item.createdAt}</div>
            })}
        </div>
    )
})

export default Parent