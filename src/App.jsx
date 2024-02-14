function Child() {
  return (
      <div>
        <h1>Child Component</h1>
        <p>Child component content</p>
      </div>
  )
}


function App() {
  return (
      <div>
        <h1>MyBook it Application!</h1>
        <p>Final project for August bootcamp!</p>
        <p>CI/CD Is simple in 2024</p>
        <Child />
      </div>
  )
}

export default App
