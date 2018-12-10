export const command = "date +'%a, %b %d|%H:%M'"

export const refreshFrequency = 5000

export const render = ({ date, time }) => (
  <div class='screen'>
    <div class='right'>
      <i class="fal fa-calendar-alt"></i>
      { ` ${date} ` }
      <i class="fal fa-clock"></i>
      { ` ${time} ` }
    </div>
  </div>
);

export const updateState = (event, previousState) => {
  const parts = (event.output || '?|?').split('|');

  return { date: parts[0], time: parts[1] };
}
