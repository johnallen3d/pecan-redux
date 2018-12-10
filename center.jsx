export const command = "bash ./pecan-redux/scripts/chunkwm"

export const refreshFrequency = 1000

export const render = ({ app, layout }) => {
  return (
    <div className='screen'>
      <div className='holder'>
        <div className='center'>
          { app }
          { ` | ${layout}` }
        </div>
      </div>
    </div>
  )
}

export const updateState = (event, previousState) => {
  return JSON.parse(event.output);
}
