const a = new Promise((resolve) => {
    console.log('A')
    resolve('B')
})
setTimeout(() => {
    console.log("C")
}, 0)

a.then(b => console.log(b))

const d = () => console.log('D')

d()