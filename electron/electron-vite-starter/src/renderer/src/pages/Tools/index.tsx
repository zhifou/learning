function Tools(): JSX.Element {
  return <div className="container">{JSON.stringify(window.electron.process)}</div>
}

export default Tools
